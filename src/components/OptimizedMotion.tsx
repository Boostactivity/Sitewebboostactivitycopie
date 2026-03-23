import { motion, MotionProps } from 'motion/react';
import { ReactNode, useEffect, useState } from 'react';

/**
 * Composant Motion optimisé pour les animations au scroll
 * Réduit les calculs et améliore les performances
 */

interface OptimizedMotionDivProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  delay?: number;
  reduceMotion?: boolean;
}

export function OptimizedMotionDiv({ 
  children, 
  delay = 0,
  reduceMotion = false,
  ...props 
}: OptimizedMotionDivProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Configuration optimisée du viewport
  const optimizedViewport = {
    once: true,
    amount: 0.2, // Trigger quand 20% est visible (au lieu d'attendre 50%)
    margin: "0px 0px -100px 0px", // Trigger un peu avant que l'élément soit visible
  };

  // Durées réduites pour plus de fluidité
  const optimizedTransition = {
    duration: isMobile ? 0.3 : 0.5, // Plus rapide sur mobile
    ease: [0.25, 0.1, 0.25, 1], // Courbe optimisée (easeInOutCubic)
    delay: isMobile ? 0 : delay, // Pas de delay sur mobile
  };

  // Si reduced motion est préféré, pas d'animation
  if (reduceMotion) {
    return <div {...(props as any)}>{children}</div>;
  }

  return (
    <motion.div
      viewport={optimizedViewport}
      transition={optimizedTransition}
      style={{ willChange: 'transform, opacity' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Variantes pré-configurées pour animations communes
 */
export const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeInFromLeftVariants = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeInFromRightVariants = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
};

export const scaleInVariants = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
};
