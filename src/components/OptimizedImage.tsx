import { useEffect, useRef, useState } from 'react';
import { getLazyImageLoader } from '../utils/performance/lazyImage';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean; // Si true, charge immédiatement (pour les images above-the-fold)
  aspectRatio?: string; // e.g., "16/9" pour éviter le CLS (Cumulative Layout Shift)
  placeholder?: string;
}

/**
 * Composant Image optimisé pour les Core Web Vitals
 * 
 * Features:
 * - Lazy loading automatique avec IntersectionObserver
 * - Priorité pour les images above-the-fold
 * - Aspect ratio pour éviter le CLS
 * - Fallback gracieux si l'image échoue
 * - Blur-up effect pendant le chargement
 */
export function OptimizedImage({
  src,
  alt,
  priority = false,
  aspectRatio,
  placeholder,
  className = '',
  style,
  ...props
}: OptimizedImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (priority) {
      // Charger immédiatement pour les images critiques
      img.src = src;
    } else {
      // Lazy loading pour les autres images
      img.dataset.src = src;
      const loader = getLazyImageLoader();
      loader.observe(img);

      return () => {
        loader.unobserve(img);
      };
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio && {
      aspectRatio,
    }),
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
    filter: isLoaded ? 'blur(0)' : 'blur(10px)',
    ...style,
  };

  const placeholderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6',
    display: isLoaded ? 'none' : 'block',
  };

  const errorFallback = (
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
      }}
      className={className}
    >
      <svg
        width="88"
        height="88"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
        strokeLinejoin="round"
        opacity=".3"
        fill="none"
        strokeWidth="3.7"
      >
        <rect x="16" y="16" width="56" height="56" rx="6" />
        <path d="m16 58 16-18 32 32" />
        <circle cx="53" cy="35" r="7" />
      </svg>
    </div>
  );

  if (hasError) {
    return errorFallback;
  }

  return (
    <div style={containerStyle} className={className}>
      {/* Placeholder pendant le chargement */}
      <div style={placeholderStyle}>
        {placeholder ? (
          <img
            src={placeholder}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : null}
      </div>

      {/* Image principale */}
      <img
        ref={imgRef}
        src={priority ? src : undefined}
        alt={alt}
        style={imageStyle}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
    </div>
  );
}
