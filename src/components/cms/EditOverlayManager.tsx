
import React, { useState, useEffect } from 'react';
import { Edit } from 'lucide-react';

interface EditOverlayManagerProps {
  isAdmin: boolean;
  detectedElements: Map<string, { element: HTMLElement; type: string }>;
  onEditElement: (elementId: string, elementType: string, element: HTMLElement) => void;
}

export const EditOverlayManager: React.FC<EditOverlayManagerProps> = ({
  isAdmin,
  detectedElements,
  onEditElement
}) => {
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin) return;

    const handleMouseEnter = (elementId: string) => {
      setHoveredElementId(elementId);
    };

    const handleMouseLeave = () => {
      setHoveredElementId(null);
    };

    // Add hover listeners to detected elements
    detectedElements.forEach(({ element }, elementId) => {
      const onMouseEnter = () => handleMouseEnter(elementId);
      const onMouseLeave = () => handleMouseLeave();
      
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
      
      // Store cleanup functions
      (element as any)._cmsCleanup = () => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      };
    });

    return () => {
      // Cleanup all listeners
      detectedElements.forEach(({ element }) => {
        if ((element as any)._cmsCleanup) {
          (element as any)._cmsCleanup();
          delete (element as any)._cmsCleanup;
        }
      });
    };
  }, [isAdmin, detectedElements]);

  useEffect(() => {
    if (!isAdmin) return;

    // Add CSS styles for hover effects
    const style = document.createElement('style');
    style.id = 'cms-hover-styles';
    style.textContent = `
      [data-cms-type]:hover {
        outline: 2px dashed #3498db !important;
        outline-offset: 2px !important;
        position: relative !important;
      }
      
      .cms-edit-button {
        position: absolute !important;
        top: -10px !important;
        right: -10px !important;
        background: #3498db !important;
        color: white !important;
        border: none !important;
        padding: 4px 8px !important;
        border-radius: 4px !important;
        font-size: 12px !important;
        cursor: pointer !important;
        z-index: 10000 !important;
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
        box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3) !important;
      }
      
      .cms-edit-button:hover {
        background: #2980b9 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('cms-hover-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isAdmin]);

  useEffect(() => {
    if (!isAdmin) return;

    // Remove existing edit buttons
    document.querySelectorAll('.cms-edit-button').forEach(btn => btn.remove());

    if (hoveredElementId) {
      const elementData = detectedElements.get(hoveredElementId);
      if (elementData) {
        const { element, type } = elementData;
        
        // Create edit button
        const editButton = document.createElement('button');
        editButton.className = 'cms-edit-button';
        editButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> Edit ${type}`;
        
        editButton.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          onEditElement(hoveredElementId, type, element);
        };

        // Position the button
        const rect = element.getBoundingClientRect();
        editButton.style.position = 'fixed';
        editButton.style.top = `${rect.top + window.scrollY - 10}px`;
        editButton.style.left = `${rect.right + window.scrollX - 10}px`;
        
        document.body.appendChild(editButton);
      }
    }
  }, [hoveredElementId, detectedElements, isAdmin, onEditElement]);

  return null;
};

export default EditOverlayManager;
