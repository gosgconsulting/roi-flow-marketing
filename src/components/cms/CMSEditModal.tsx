
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CMSEditModalProps {
  isOpen: boolean;
  elementId: string;
  elementType: string;
  element: HTMLElement;
  initialContent?: any;
  onSave: (content: any) => Promise<boolean>;
  onClose: () => void;
}

export const CMSEditModal: React.FC<CMSEditModalProps> = ({
  isOpen,
  elementId,
  elementType,
  element,
  initialContent,
  onSave,
  onClose
}) => {
  const [content, setContent] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Initialize content based on element type and current content
      switch (elementType) {
        case 'heading':
        case 'text':
          setContent({
            text: initialContent?.text || element.textContent || ''
          });
          break;
        case 'image':
          const img = element as HTMLImageElement;
          setContent({
            src: initialContent?.src || img.src || '',
            alt: initialContent?.alt || img.alt || ''
          });
          break;
        case 'video':
          const iframe = element as HTMLIFrameElement;
          setContent({
            src: initialContent?.src || iframe.src || ''
          });
          break;
        case 'price':
          setContent({
            amount: initialContent?.amount || element.textContent?.replace(/[^\d.,]/g, '') || '',
            currency: initialContent?.currency || '€',
            text: initialContent?.text || element.textContent || ''
          });
          break;
        default:
          setContent({
            text: initialContent?.text || element.textContent || ''
          });
      }
    }
  }, [isOpen, elementType, element, initialContent]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const success = await onSave(content);
      if (success) {
        onClose();
      }
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderEditor = () => {
    switch (elementType) {
      case 'heading':
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text-content">Text Content</Label>
              <Textarea
                id="text-content"
                value={content.text || ''}
                onChange={(e) => setContent({ ...content, text: e.target.value })}
                placeholder="Enter text content..."
                rows={4}
              />
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="image-src">Image URL</Label>
              <Input
                id="image-src"
                type="url"
                value={content.src || ''}
                onChange={(e) => setContent({ ...content, src: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <Label htmlFor="image-alt">Alt Text</Label>
              <Input
                id="image-alt"
                value={content.alt || ''}
                onChange={(e) => setContent({ ...content, alt: e.target.value })}
                placeholder="Describe the image..."
              />
            </div>
            {content.src && (
              <div>
                <Label>Preview</Label>
                <img src={content.src} alt={content.alt} className="max-w-full h-32 object-cover rounded border" />
              </div>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="video-src">Video URL (YouTube/Vimeo)</Label>
              <Input
                id="video-src"
                type="url"
                value={content.src || ''}
                onChange={(e) => setContent({ ...content, src: e.target.value })}
                placeholder="https://www.youtube.com/embed/..."
              />
            </div>
            {content.src && (
              <div>
                <Label>Preview</Label>
                <iframe 
                  src={content.src} 
                  className="w-full h-32 rounded border"
                  title="Video preview"
                />
              </div>
            )}
          </div>
        );

      case 'price':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price-amount">Amount</Label>
                <Input
                  id="price-amount"
                  value={content.amount || ''}
                  onChange={(e) => setContent({ ...content, amount: e.target.value })}
                  placeholder="3300"
                />
              </div>
              <div>
                <Label htmlFor="price-currency">Currency</Label>
                <select
                  id="price-currency"
                  value={content.currency || '€'}
                  onChange={(e) => setContent({ ...content, currency: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="€">€ Euro</option>
                  <option value="$">$ Dollar</option>
                  <option value="£">£ Pound</option>
                  <option value="¥">¥ Yen</option>
                </select>
              </div>
            </div>
            <div>
              <Label>Preview</Label>
              <div className="p-2 border rounded bg-gray-50">
                {content.amount} {content.currency}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="generic-text">Content</Label>
              <Textarea
                id="generic-text"
                value={content.text || ''}
                onChange={(e) => setContent({ ...content, text: e.target.value })}
                placeholder="Enter content..."
                rows={4}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Edit {elementType} - {elementId}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {renderEditor()}
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CMSEditModal;
