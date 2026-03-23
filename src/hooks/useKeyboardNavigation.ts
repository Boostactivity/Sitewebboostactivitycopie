import { useEffect } from 'react';

/**
 * Hook pour gérer la navigation clavier
 * Supporte : Arrow keys, Home, End, PageUp, PageDown, Escape
 */

interface KeyboardNavigationOptions {
  onEscape?: () => void;
  onEnter?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onHome?: () => void;
  onEnd?: () => void;
  onPageUp?: () => void;
  onPageDown?: () => void;
  enabled?: boolean;
}

export function useKeyboardNavigation(options: KeyboardNavigationOptions) {
  const {
    onEscape,
    onEnter,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onHome,
    onEnd,
    onPageUp,
    onPageDown,
    enabled = true,
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          if (onEscape) {
            e.preventDefault();
            onEscape();
          }
          break;

        case 'Enter':
          if (onEnter) {
            e.preventDefault();
            onEnter();
          }
          break;

        case 'ArrowUp':
          if (onArrowUp) {
            e.preventDefault();
            onArrowUp();
          }
          break;

        case 'ArrowDown':
          if (onArrowDown) {
            e.preventDefault();
            onArrowDown();
          }
          break;

        case 'ArrowLeft':
          if (onArrowLeft) {
            e.preventDefault();
            onArrowLeft();
          }
          break;

        case 'ArrowRight':
          if (onArrowRight) {
            e.preventDefault();
            onArrowRight();
          }
          break;

        case 'Home':
          if (onHome) {
            e.preventDefault();
            onHome();
          }
          break;

        case 'End':
          if (onEnd) {
            e.preventDefault();
            onEnd();
          }
          break;

        case 'PageUp':
          if (onPageUp) {
            e.preventDefault();
            onPageUp();
          }
          break;

        case 'PageDown':
          if (onPageDown) {
            e.preventDefault();
            onPageDown();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    onEscape,
    onEnter,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onHome,
    onEnd,
    onPageUp,
    onPageDown,
    enabled,
  ]);
}

/**
 * Hook pour la navigation dans une liste avec les flèches
 */
interface UseListNavigationOptions {
  itemCount: number;
  onSelect?: (index: number) => void;
  loop?: boolean; // Retour au début/fin en boucle
  orientation?: 'vertical' | 'horizontal';
}

export function useListNavigation(options: UseListNavigationOptions) {
  const { itemCount, onSelect, loop = true, orientation = 'vertical' } = options;

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    let nextIndex = currentIndex + 1;

    if (nextIndex >= itemCount) {
      nextIndex = loop ? 0 : itemCount - 1;
    }

    focusItem(nextIndex);
    if (onSelect) onSelect(nextIndex);
  };

  const handlePrevious = () => {
    const currentIndex = getCurrentIndex();
    let prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      prevIndex = loop ? itemCount - 1 : 0;
    }

    focusItem(prevIndex);
    if (onSelect) onSelect(prevIndex);
  };

  const handleFirst = () => {
    focusItem(0);
    if (onSelect) onSelect(0);
  };

  const handleLast = () => {
    const lastIndex = itemCount - 1;
    focusItem(lastIndex);
    if (onSelect) onSelect(lastIndex);
  };

  const getCurrentIndex = (): number => {
    const activeElement = document.activeElement as HTMLElement;
    const index = activeElement.getAttribute('data-index');
    return index ? parseInt(index, 10) : 0;
  };

  const focusItem = (index: number) => {
    const item = document.querySelector(`[data-index="${index}"]`) as HTMLElement;
    if (item) {
      item.focus();
    }
  };

  const navigationOptions: KeyboardNavigationOptions = {
    onHome: handleFirst,
    onEnd: handleLast,
  };

  if (orientation === 'vertical') {
    navigationOptions.onArrowUp = handlePrevious;
    navigationOptions.onArrowDown = handleNext;
  } else {
    navigationOptions.onArrowLeft = handlePrevious;
    navigationOptions.onArrowRight = handleNext;
  }

  useKeyboardNavigation(navigationOptions);

  return {
    handleNext,
    handlePrevious,
    handleFirst,
    handleLast,
  };
}
