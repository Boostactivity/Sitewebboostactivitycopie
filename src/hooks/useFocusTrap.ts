import { useEffect, useRef } from 'react';

/**
 * Hook pour piéger le focus dans un élément (modals, dropdowns)
 * WCAG 2.1.2 - No Keyboard Trap (mais intentionnel pour modals)
 */
interface UseFocusTrapOptions {
  enabled?: boolean;
  initialFocus?: boolean;
  returnFocus?: boolean;
}

export function useFocusTrap(options: UseFocusTrapOptions = {}) {
  const { enabled = true, initialFocus = true, returnFocus = true } = options;
  const containerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;

    // Sauvegarder l'élément actif avant d'entrer dans le trap
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Trouver tous les éléments focusables
    const getFocusableElements = () => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      return Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter(
        (el) =>
          !el.hasAttribute('disabled') &&
          !el.getAttribute('aria-hidden') &&
          el.offsetParent !== null // Element is visible
      );
    };

    // Focus initial sur le premier élément
    if (initialFocus) {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        setTimeout(() => {
          focusableElements[0].focus();
        }, 0);
      }
    }

    // Gérer le piégeage du focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + Tab sur le premier élément → aller au dernier
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // Tab sur le dernier élément → aller au premier
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      container.removeEventListener('keydown', handleKeyDown);

      // Retourner le focus à l'élément précédent
      if (returnFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [enabled, initialFocus, returnFocus]);

  return containerRef;
}
