import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 60, x: '15%', y: '10%', delay: 0, duration: 15, color: 'var(--primary)' },
    { type: 'square', size: 40, x: '85%', y: '20%', delay: 2, duration: 18, color: 'var(--accent-purple)' },
    { type: 'circle', size: 30, x: '70%', y: '60%', delay: 4, duration: 20, color: 'var(--success)' },
    { type: 'triangle', size: 50, x: '10%', y: '70%', delay: 1, duration: 17, color: 'var(--energy)' },
    { type: 'square', size: 35, x: '90%', y: '80%', delay: 3, duration: 19, color: 'var(--primary)' },
    { type: 'circle', size: 25, x: '50%', y: '15%', delay: 5, duration: 16, color: 'var(--accent-purple)' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="rounded-full"
              style={{
                width: shape.size,
                height: shape.size,
                background: `linear-gradient(135deg, ${shape.color}, transparent)`,
              }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="rounded-lg"
              style={{
                width: shape.size,
                height: shape.size,
                background: `linear-gradient(135deg, ${shape.color}, transparent)`,
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}`,
                opacity: 0.3,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
