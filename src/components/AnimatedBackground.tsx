import { motion } from 'motion/react';

interface AnimatedBackgroundProps {
  variant?: 'light' | 'dark' | 'gradient';
}

export function AnimatedBackground({ variant = 'light' }: AnimatedBackgroundProps) {
  const blobs = [
    { size: 400, x: '10%', y: '20%', delay: 0, duration: 20 },
    { size: 300, x: '80%', y: '70%', delay: 2, duration: 25 },
    { size: 350, x: '60%', y: '30%', delay: 4, duration: 22 },
    { size: 250, x: '30%', y: '80%', delay: 1, duration: 23 },
  ];

  const getGradient = (index: number) => {
    if (variant === 'dark') {
      const gradients = [
        'radial-gradient(circle, rgba(88, 80, 236, 0.15) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)',
      ];
      return gradients[index % gradients.length];
    }
    
    const gradients = [
      'radial-gradient(circle, rgba(88, 80, 236, 0.08) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(251, 146, 60, 0.05) 0%, transparent 70%)',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: getGradient(index),
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
