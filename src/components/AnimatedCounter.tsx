import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({ value, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-50px', // Trigger plus tôt
    amount: 0.5 // Plus sensible
  });

  useEffect(() => {
    if (!isInView) return;

    // Durée réduite sur mobile pour meilleure perception
    const isMobile = window.innerWidth < 768;
    const effectiveDuration = isMobile ? duration * 0.6 : duration;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / effectiveDuration, 1);
      
      // Easing function optimisée (plus rapide)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutCubic * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}