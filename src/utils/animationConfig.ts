/**
 * Configurations optimisées pour les animations
 * Améliore les performances et la fluidité
 */

// Détecte si on est sur mobile
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Détecte si l'utilisateur préfère reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Configuration viewport optimisée pour whileInView
 * Usage: viewport={getOptimizedViewport()}
 */
export const getOptimizedViewport = (options?: {
  once?: boolean;
  amount?: number;
  margin?: string;
}) => ({
  once: options?.once ?? true, // Par défaut: animation une seule fois
  amount: options?.amount ?? 0.2, // Trigger quand 20% visible (au lieu de 50%)
  margin: options?.margin ?? '0px 0px -80px 0px', // Trigger avant que l'élément soit visible
});

/**
 * Configuration transition optimisée
 * Usage: transition={getOptimizedTransition()}
 */
export const getOptimizedTransition = (options?: {
  duration?: number;
  delay?: number;
  ease?: number[] | string;
}) => {
  const mobile = isMobileDevice();
  
  return {
    duration: options?.duration ?? (mobile ? 0.3 : 0.5), // Plus rapide sur mobile
    delay: mobile ? 0 : (options?.delay ?? 0), // Pas de delay sur mobile
    ease: options?.ease ?? [0.25, 0.1, 0.25, 1], // Courbe cubique optimisée
  };
};

/**
 * Variantes d'animation pré-optimisées
 */
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeInFromLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeInFromRight: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeInFromBottom: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
  slideInFromLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
  },
  slideInFromRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
  },
};

/**
 * Hook pour désactiver les animations si reduced motion
 */
export const useOptimizedAnimation = () => {
  const shouldReduceMotion = prefersReducedMotion();
  
  return {
    shouldAnimate: !shouldReduceMotion,
    viewport: getOptimizedViewport(),
    transition: getOptimizedTransition(),
  };
};

/**
 * Génère les stagger delays optimisés pour listes
 * Usage: transition={getStaggerTransition(index)}
 */
export const getStaggerTransition = (
  index: number,
  baseDelay = 0.05,
  maxDelay = 0.3
) => {
  const mobile = isMobileDevice();
  const delay = mobile ? 0 : Math.min(index * baseDelay, maxDelay);
  
  return getOptimizedTransition({ delay });
};
