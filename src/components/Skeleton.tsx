import { CSSProperties } from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Composant Skeleton pour le loading state
 * Évite le CLS (Cumulative Layout Shift) en réservant l'espace
 * 
 * Usage:
 * <Skeleton width={200} height={20} variant="text" />
 * <Skeleton width={100} height={100} variant="circular" />
 */
export function Skeleton({
  width = '100%',
  height = 20,
  variant = 'rectangular',
  className = '',
  animation = 'pulse',
}: SkeletonProps) {
  const style: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    backgroundColor: '#e5e7eb',
    display: 'block',
  };

  // Variant styles
  if (variant === 'text') {
    style.borderRadius = '4px';
    style.marginBottom = '0.5rem';
  } else if (variant === 'circular') {
    style.borderRadius = '50%';
  } else if (variant === 'rounded') {
    style.borderRadius = '8px';
  }

  // Animation
  let animationClass = '';
  if (animation === 'pulse') {
    animationClass = 'animate-pulse';
  } else if (animation === 'wave') {
    animationClass = 'skeleton';
  }

  return <div className={`${animationClass} ${className}`} style={style} />;
}

/**
 * Skeleton pour une carte de contenu
 */
export function CardSkeleton() {
  return (
    <div className="border rounded-3xl p-8 space-y-4">
      <Skeleton variant="rounded" height={200} />
      <Skeleton variant="text" width="80%" height={24} />
      <Skeleton variant="text" width="60%" height={20} />
      <div className="space-y-2">
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="70%" height={16} />
      </div>
      <div className="flex gap-2">
        <Skeleton variant="rounded" width={80} height={32} />
        <Skeleton variant="rounded" width={80} height={32} />
      </div>
    </div>
  );
}

/**
 * Skeleton pour un article/blog post
 */
export function ArticleSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton variant="rounded" height={400} />
      <div className="space-y-4">
        <Skeleton variant="text" width="90%" height={32} />
        <div className="flex gap-4">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="30%" height={16} />
            <Skeleton variant="text" width="40%" height={14} />
          </div>
        </div>
        <div className="space-y-3 mt-6">
          <Skeleton variant="text" width="100%" height={18} />
          <Skeleton variant="text" width="100%" height={18} />
          <Skeleton variant="text" width="100%" height={18} />
          <Skeleton variant="text" width="85%" height={18} />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton pour une grille de cartes
 */
export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Skeleton pour une liste
 */
export function ListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 border-b pb-4">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="40%" height={16} />
          </div>
        </div>
      ))}
    </div>
  );
}
