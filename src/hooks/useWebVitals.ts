import { useEffect } from 'react';
import { observeWebVitals, WebVitalMetric, reportWebVitalsToGA, logWebVitals } from '../utils/performance/webVitals';

interface UseWebVitalsOptions {
  enabled?: boolean;
  reportToGA?: boolean;
  logToConsole?: boolean;
  onMetric?: (metric: WebVitalMetric) => void;
}

/**
 * Hook pour mesurer et reporter les Core Web Vitals
 * 
 * Usage:
 * ```tsx
 * useWebVitals({
 *   enabled: true,
 *   reportToGA: true,
 *   logToConsole: process.env.NODE_ENV === 'development',
 * });
 * ```
 */
export function useWebVitals(options: UseWebVitalsOptions = {}) {
  const {
    enabled = true,
    reportToGA = true,
    logToConsole = false,
    onMetric,
  } = options;

  useEffect(() => {
    if (!enabled) return;

    observeWebVitals((metric) => {
      // Custom callback si fourni
      if (onMetric) {
        onMetric(metric);
      }

      // Log en console si activé
      if (logToConsole) {
        logWebVitals(metric);
      }

      // Report à Google Analytics si activé
      if (reportToGA) {
        reportWebVitalsToGA(metric);
      }
    });
  }, [enabled, reportToGA, logToConsole, onMetric]);
}
