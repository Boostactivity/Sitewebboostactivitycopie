import { useEffect, useRef } from 'react';

/**
 * Hook pour annoncer des messages aux screen readers
 * Utilise aria-live regions
 */

type Politeness = 'polite' | 'assertive';

interface AnnouncerOptions {
  politeness?: Politeness;
  timeout?: number; // Temps avant de nettoyer le message
}

export function useAnnouncer(options: AnnouncerOptions = {}) {
  const { politeness = 'polite', timeout = 5000 } = options;
  const announcerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Créer l'annonceur s'il n'existe pas
    if (!announcerRef.current) {
      const announcer = document.createElement('div');
      announcer.setAttribute('role', 'status');
      announcer.setAttribute('aria-live', politeness);
      announcer.setAttribute('aria-atomic', 'true');
      announcer.style.position = 'absolute';
      announcer.style.left = '-10000px';
      announcer.style.width = '1px';
      announcer.style.height = '1px';
      announcer.style.overflow = 'hidden';
      document.body.appendChild(announcer);
      announcerRef.current = announcer;
    }

    return () => {
      if (announcerRef.current) {
        document.body.removeChild(announcerRef.current);
        announcerRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [politeness]);

  const announce = (message: string) => {
    if (!announcerRef.current) return;

    // Nettoyer le timeout précédent
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Annoncer le message
    announcerRef.current.textContent = message;

    // Nettoyer après le timeout
    timeoutRef.current = setTimeout(() => {
      if (announcerRef.current) {
        announcerRef.current.textContent = '';
      }
    }, timeout);
  };

  return { announce };
}

/**
 * Hook simplifié pour des annonces rapides
 */
export function useQuickAnnounce() {
  const { announce } = useAnnouncer({ politeness: 'polite', timeout: 3000 });
  return announce;
}

/**
 * Hook pour des annonces urgentes
 */
export function useAssertiveAnnounce() {
  const { announce } = useAnnouncer({ politeness: 'assertive', timeout: 5000 });
  return announce;
}
