import { useEffect } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { ariaDialog } from '../utils/accessibility/aria';
import { X } from 'lucide-react';

interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Modal accessible conforme WCAG
 * 
 * Features:
 * - Focus trap
 * - Escape to close
 * - Aria attributes
 * - Return focus on close
 * - Body scroll lock
 * - Screen reader announcements
 */
export function AccessibleModal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
}: AccessibleModalProps) {
  const containerRef = useFocusTrap({
    enabled: isOpen,
    initialFocus: true,
    returnFocus: true,
  });

  // Fermer avec Escape
  useKeyboardNavigation({
    onEscape: onClose,
    enabled: isOpen,
  });

  // Lock body scroll quand modal ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  const titleId = 'modal-title';
  const descriptionId = description ? 'modal-description' : undefined;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={`bg-white rounded-3xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
        {...ariaDialog(title, {
          describedBy: descriptionId,
          modal: true,
        })}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b">
          <div className="flex-1">
            <h2
              id={titleId}
              className="text-2xl font-semibold text-gray-900"
            >
              {title}
            </h2>
            {description && (
              <p
                id={descriptionId}
                className="mt-2 text-sm text-gray-600"
              >
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Fermer la modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
