// Mesure et reporting des Core Web Vitals
// LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)

export interface WebVitalMetric {
  name: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

type WebVitalCallback = (metric: WebVitalMetric) => void;

// Seuils pour les Core Web Vitals (valeurs Google officielles)
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

function getRating(name: keyof typeof THRESHOLDS, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Observer pour le LCP (Largest Contentful Paint)
export function observeLCP(callback: WebVitalCallback) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
        renderTime?: number;
        loadTime?: number;
      };

      if (lastEntry) {
        const value = lastEntry.renderTime || lastEntry.loadTime || 0;
        callback({
          name: 'LCP',
          value,
          rating: getRating('LCP', value),
          delta: value,
          id: `lcp-${Date.now()}`,
        });
      }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    console.error('Error observing LCP:', error);
  }
}

// Observer pour le FID (First Input Delay)
export function observeFID(callback: WebVitalCallback) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        const fidEntry = entry as PerformanceEntry & { processingStart?: number };
        const value = fidEntry.processingStart
          ? fidEntry.processingStart - entry.startTime
          : 0;

        callback({
          name: 'FID',
          value,
          rating: getRating('FID', value),
          delta: value,
          id: `fid-${Date.now()}`,
        });
      });
    });

    observer.observe({ type: 'first-input', buffered: true });
  } catch (error) {
    console.error('Error observing FID:', error);
  }
}

// Observer pour le CLS (Cumulative Layout Shift)
export function observeCLS(callback: WebVitalCallback) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };

        // Ignorer les shifts causés par une interaction utilisateur récente
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
          clsEntries.push(entry);

          callback({
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue),
            delta: layoutShiftEntry.value || 0,
            id: `cls-${Date.now()}`,
          });
        }
      });
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    // Report final au unload
    const reportFinalCLS = () => {
      callback({
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        delta: 0,
        id: `cls-final-${Date.now()}`,
      });
    };

    window.addEventListener('pagehide', reportFinalCLS, { once: true });
  } catch (error) {
    console.error('Error observing CLS:', error);
  }
}

// Observer pour le FCP (First Contentful Paint)
export function observeFCP(callback: WebVitalCallback) {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          callback({
            name: 'FCP',
            value: entry.startTime,
            rating: getRating('FCP', entry.startTime),
            delta: entry.startTime,
            id: `fcp-${Date.now()}`,
          });
        }
      });
    });

    observer.observe({ type: 'paint', buffered: true });
  } catch (error) {
    console.error('Error observing FCP:', error);
  }
}

// Observer pour le TTFB (Time to First Byte)
export function observeTTFB(callback: WebVitalCallback) {
  if (typeof window === 'undefined') return;

  try {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationTiming) {
      const ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
      
      callback({
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        delta: ttfb,
        id: `ttfb-${Date.now()}`,
      });
    }
  } catch (error) {
    console.error('Error observing TTFB:', error);
  }
}

// Setup complet pour observer tous les Core Web Vitals
export function observeWebVitals(callback: WebVitalCallback) {
  observeLCP(callback);
  observeFID(callback);
  observeCLS(callback);
  observeFCP(callback);
  observeTTFB(callback);
}

// Helper pour envoyer les métriques à Google Analytics
export function reportWebVitalsToGA(metric: WebVitalMetric) {
  if (typeof window === 'undefined') return;

  // Vérifier si gtag est disponible
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_rating: metric.rating,
      non_interaction: true,
    });
  }
}

// Helper pour logger les métriques en console (dev only)
export function logWebVitals(metric: WebVitalMetric) {
  const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
  const value = metric.name === 'CLS' ? metric.value.toFixed(3) : Math.round(metric.value);
  
  console.log(`${emoji} ${metric.name}: ${value} (${metric.rating})`);
}

// Setup pour un reporting complet
export function setupWebVitalsReporting(options?: {
  enableGA?: boolean;
  enableConsole?: boolean;
}) {
  const { enableGA = true, enableConsole = false } = options || {};

  observeWebVitals((metric) => {
    if (enableConsole) {
      logWebVitals(metric);
    }
    if (enableGA) {
      reportWebVitalsToGA(metric);
    }
  });
}
