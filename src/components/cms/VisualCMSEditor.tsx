
import React, { useState, useCallback } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCMSAuth } from '@/hooks/use-cms-auth';
import { useCMSContent } from '@/hooks/use-cms-content';
import ContentDetectionService from './ContentDetectionService';
import EditOverlayManager from './EditOverlayManager';
import CMSEditModal from './CMSEditModal';

interface VisualCMSEditorProps {
  pageId: string;
}

export const VisualCMSEditor: React.FC<VisualCMSEditorProps> = ({ pageId }) => {
  const { isAdmin, isLoading } = useCMSAuth();
  const { saveContent, getContent, loadContent } = useCMSContent(pageId);
  const [isActive, setIsActive] = useState(false);
  const [detectedElements, setDetectedElements] = useState<Map<string, { element: HTMLElement; type: string }>>(new Map());
  const [editingElement, setEditingElement] = useState<{
    id: string;
    type: string;
    element: HTMLElement;
  } | null>(null);

  const handleElementDetected = useCallback((element: HTMLElement, type: string, id: string) => {
    setDetectedElements(prev => {
      const newMap = new Map(prev);
      newMap.set(id, { element, type });
      return newMap;
    });
  }, []);

  const handleEditElement = useCallback((elementId: string, elementType: string, element: HTMLElement) => {
    setEditingElement({ id: elementId, type: elementType, element });
  }, []);

  const handleSaveEdit = useCallback(async (content: any) => {
    if (!editingElement) return false;

    const success = await saveContent(editingElement.id, editingElement.type, content);
    
    if (success) {
      // Update the actual DOM element
      const { element, type } = editingElement;
      
      switch (type) {
        case 'heading':
        case 'text':
          if (typeof content === 'string') {
            element.textContent = content;
          }
          break;
        case 'image':
          if (element instanceof HTMLImageElement && content.src) {
            element.src = content.src;
            if (content.alt) element.alt = content.alt;
          }
          break;
        case 'video':
          if (element instanceof HTMLIFrameElement && content.src) {
            element.src = content.src;
          }
          break;
      }
      
      setEditingElement(null);
      return true;
    }
    
    return false;
  }, [editingElement, saveContent]);

  const handleCloseEdit = useCallback(() => {
    setEditingElement(null);
  }, []);

  React.useEffect(() => {
    if (isAdmin && isActive) {
      loadContent();
    }
  }, [isAdmin, isActive, loadContent]);

  if (isLoading || !isAdmin) {
    return null;
  }

  return (
    <>
      {/* CMS Admin Toggle Button - Bottom Left */}
      <Button
        variant="default"
        size="icon"
        className={`fixed bottom-6 left-6 z-50 rounded-full shadow-lg transition-all duration-200 ${
          isActive 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={() => setIsActive(!isActive)}
        title={isActive ? "Exit CMS Mode" : "Enter CMS Mode"}
      >
        <Settings className={`h-5 w-5 ${isActive ? 'animate-spin' : ''}`} />
      </Button>

      {/* Admin Mode Indicator */}
      {isActive && (
        <div className="fixed top-4 left-4 z-50 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg">
          CMS Mode Active - Page: {pageId}
        </div>
      )}

      {/* Content Detection Service */}
      {isActive && (
        <ContentDetectionService
          isAdmin={isActive}
          onElementDetected={handleElementDetected}
        />
      )}

      {/* Edit Overlay Manager */}
      {isActive && (
        <EditOverlayManager
          isAdmin={isActive}
          detectedElements={detectedElements}
          onEditElement={handleEditElement}
        />
      )}

      {/* Edit Modal */}
      {editingElement && (
        <CMSEditModal
          isOpen={true}
          elementId={editingElement.id}
          elementType={editingElement.type}
          element={editingElement.element}
          initialContent={getContent(editingElement.id)}
          onSave={handleSaveEdit}
          onClose={handleCloseEdit}
        />
      )}
    </>
  );
};

export default VisualCMSEditor;
