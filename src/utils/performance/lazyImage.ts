// Lazy loading optimisé pour les images avec Intersection Observer
// Améliore le LCP (Largest Contentful Paint) des Core Web Vitals

export interface LazyImageOptions {
  rootMargin?: string; // Distance avant le viewport pour commencer le chargement
  threshold?: number; // Pourcentage de visibilité avant de charger
  placeholder?: string; // Image placeholder pendant le chargement
}

const DEFAULT_OPTIONS: LazyImageOptions = {
  rootMargin: '50px', // Commence à charger 50px avant que l'image soit visible
  threshold: 0.01,
  placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==',
};

class LazyImageLoader {
  private observer: IntersectionObserver | null = null;
  private images: Set<HTMLImageElement> = new Set();

  constructor(options: LazyImageOptions = {}) {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const config = { ...DEFAULT_OPTIONS, ...options };

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            this.loadImage(img);
          }
        });
      },
      {
        rootMargin: config.rootMargin,
        threshold: config.threshold,
      }
    );
  }

  observe(img: HTMLImageElement) {
    if (!this.observer) {
      // Fallback si IntersectionObserver n'est pas supporté
      this.loadImage(img);
      return;
    }

    this.images.add(img);
    this.observer.observe(img);
  }

  unobserve(img: HTMLImageElement) {
    if (!this.observer) return;
    
    this.images.delete(img);
    this.observer.unobserve(img);
  }

  private loadImage(img: HTMLImageElement) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    if (!src) return;

    // Précharger l'image
    const tempImage = new Image();
    tempImage.onload = () => {
      img.src = src;
      if (srcset) {
        img.srcset = srcset;
      }
      img.classList.add('lazy-loaded');
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
      
      // Arrêter d'observer cette image
      this.unobserve(img);
    };
    tempImage.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      this.unobserve(img);
    };
    tempImage.src = src;
    if (srcset) {
      tempImage.srcset = srcset;
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.images.clear();
    }
  }
}

// Instance globale singleton
let globalLazyLoader: LazyImageLoader | null = null;

export function getLazyImageLoader(options?: LazyImageOptions): LazyImageLoader {
  if (!globalLazyLoader) {
    globalLazyLoader = new LazyImageLoader(options);
  }
  return globalLazyLoader;
}

// Helper pour ajouter le lazy loading à une image
export function makeLazyImage(img: HTMLImageElement, src: string, options?: LazyImageOptions) {
  // Ajouter un placeholder
  const placeholder = options?.placeholder || DEFAULT_OPTIONS.placeholder;
  img.src = placeholder!;
  
  // Stocker la vraie source dans data-src
  img.dataset.src = src;
  
  // Ajouter une classe pour le styling
  img.classList.add('lazy-image');
  
  // Observer l'image
  const loader = getLazyImageLoader(options);
  loader.observe(img);
}

// Helper pour précharger les images critiques (above the fold)
export function preloadCriticalImage(src: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

// Helper pour précharger plusieurs images
export function preloadImages(urls: string[]) {
  urls.forEach(url => preloadCriticalImage(url));
}
