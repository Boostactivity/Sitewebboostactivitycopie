import { motion } from 'motion/react';

interface PulseBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function PulseBadge({ children, className = '' }: PulseBadgeProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Animated rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 1,
        }}
      />
      {/* Main badge */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
