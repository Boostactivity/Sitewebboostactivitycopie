// Resource Hints pour améliorer les performances de chargement
// Preconnect, DNS-prefetch, Preload pour optimiser le LCP

/**
 * Ajoute un preconnect pour un domaine externe
 * Utile pour les images Unsplash, Google Fonts, APIs externes
 */
export function addPreconnect(url: string, crossorigin?: boolean) {
  if (typeof document === 'undefined') return;

  // Vérifier si déjà ajouté
  const existing = document.querySelector(`link[rel="preconnect"][href="${url}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  if (crossorigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Ajoute un dns-prefetch pour un domaine externe
 * Plus léger que preconnect, juste pour résoudre le DNS
 */
export function addDNSPrefetch(url: string) {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = url;
  document.head.appendChild(link);
}

/**
 * Précharge une ressource critique
 * Utilisé pour les images above-the-fold, fonts critiques, etc.
 */
export function addPreload(url: string, as: 'image' | 'font' | 'style' | 'script', type?: string, crossorigin?: boolean) {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`link[rel="preload"][href="${url}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  if (type) {
    link.type = type;
  }
  if (crossorigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Précharge une page pour la navigation future
 * Utile pour les liens de navigation principaux
 */
export function addPrefetch(url: string) {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`link[rel="prefetch"][href="${url}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
}

/**
 * Setup des preconnects pour les domaines externes communs
 */
export function setupCommonPreconnects() {
  // Unsplash pour les images
  addPreconnect('https://images.unsplash.com', true);
  
  // Google Tag Manager & Analytics
  addPreconnect('https://www.googletagmanager.com');
  addPreconnect('https://www.google-analytics.com');
  
  // Google Fonts (si utilisé)
  addPreconnect('https://fonts.googleapis.com');
  addPreconnect('https://fonts.gstatic.com', true);
}

/**
 * Précharge les pages les plus importantes
 */
export function prefetchCriticalPages() {
  const criticalPages = [
    '/services',
    '/contact',
    '/pricing',
  ];

  // Attendre que la page soit complètement chargée avant de prefetch
  if (document.readyState === 'complete') {
    criticalPages.forEach(page => addPrefetch(page));
  } else {
    window.addEventListener('load', () => {
      criticalPages.forEach(page => addPrefetch(page));
    });
  }
}
