
import { useEffect } from 'react';

interface ContentDetectionServiceProps {
  isAdmin: boolean;
  onElementDetected: (element: HTMLElement, type: string, id: string) => void;
}

export const ContentDetectionService: React.FC<ContentDetectionServiceProps> = ({
  isAdmin,
  onElementDetected
}) => {
  useEffect(() => {
    if (!isAdmin) return;

    const detectElements = () => {
      // Clear existing CMS attributes
      document.querySelectorAll('[data-cms-type]').forEach(el => {
        el.removeAttribute('data-cms-type');
        el.removeAttribute('data-cms-id');
      });

      let elementCounter = 0;

      // Detect headings
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el, index) => {
        const id = `heading-${index}`;
        el.setAttribute('data-cms-type', 'heading');
        el.setAttribute('data-cms-id', id);
        onElementDetected(el as HTMLElement, 'heading', id);
      });

      // Detect text content
      document.querySelectorAll('p, span').forEach((el, index) => {
        if (el.children.length === 0 && el.textContent?.trim()) {
          const id = `text-${index}`;
          el.setAttribute('data-cms-type', 'text');
          el.setAttribute('data-cms-id', id);
          onElementDetected(el as HTMLElement, 'text', id);
        }
      });

      // Detect images
      document.querySelectorAll('img').forEach((el, index) => {
        const id = `image-${index}`;
        el.setAttribute('data-cms-type', 'image');
        el.setAttribute('data-cms-id', id);
        onElementDetected(el as HTMLElement, 'image', id);
      });

      // Detect icons (SVG and icon fonts)
      document.querySelectorAll('svg, i[class*="fa"], i[class*="icon"], .icon').forEach((el, index) => {
        const id = `icon-${index}`;
        el.setAttribute('data-cms-type', 'icon');
        el.setAttribute('data-cms-id', id);
        onElementDetected(el as HTMLElement, 'icon', id);
      });

      // Detect videos
      document.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"]').forEach((el, index) => {
        const id = `video-${index}`;
        el.setAttribute('data-cms-type', 'video');
        el.setAttribute('data-cms-id', id);
        onElementDetected(el as HTMLElement, 'video', id);
      });

      // Detect price elements by content pattern
      document.querySelectorAll('*').forEach((el) => {
        if (el.children.length === 0 && el.textContent) {
          const text = el.textContent.trim();
          if (text.match(/\d+[\s]*[€$£¥]/)) {
            const id = `price-${elementCounter++}`;
            el.setAttribute('data-cms-type', 'price');
            el.setAttribute('data-cms-id', id);
            onElementDetected(el as HTMLElement, 'price', id);
          }
        }
      });

      // Detect content blocks
      document.querySelectorAll('.card, .feature, .service, section, article').forEach((el, index) => {
        if (!el.hasAttribute('data-cms-type')) {
          const id = `content-block-${index}`;
          el.setAttribute('data-cms-type', 'content-block');
          el.setAttribute('data-cms-id', id);
          onElementDetected(el as HTMLElement, 'content-block', id);
        }
      });

      // Detect lists
      document.querySelectorAll('ul, ol, .checklist, .benefits').forEach((el, index) => {
        const id = `list-${index}`;
        el.setAttribute('data-cms-type', 'list');
        el.setAttribute('data-cms-id', id);
        onElementDetected(el as HTMLElement, 'list', id);
      });

      // Detect labels and badges
      document.querySelectorAll('.badge, .label, .tag, .chip').forEach((el, index) => {
        const id = `label-${index}`;
        el.setAttribute('data-cms-type', 'label');
        el.setAttribute('data-cms-id', id);
        onElementDetected(el as HTMLElement, 'label', id);
      });
    };

    // Run detection after DOM is ready
    const timer = setTimeout(detectElements, 100);
    
    return () => clearTimeout(timer);
  }, [isAdmin, onElementDetected]);

  return null;
};

export default ContentDetectionService;
