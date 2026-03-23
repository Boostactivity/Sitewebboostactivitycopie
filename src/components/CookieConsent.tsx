import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Small delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Check if consent is older than 13 months (CNIL recommendation)
      const consent = JSON.parse(cookieConsent);
      if (consent.timestamp) {
        const consentDate = new Date(consent.timestamp);
        const now = new Date();
        const monthsDiff = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
        
        // If older than 13 months, request consent again
        if (monthsDiff > 13) {
          localStorage.removeItem('cookieConsent');
          setTimeout(() => setIsVisible(true), 1000);
        }
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    onAccept();
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    onDecline();
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    if (preferences.analytics) {
      onAccept();
    } else {
      onDecline();
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {/* Notification discrète en bas de page - pas de backdrop */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-[480px] z-[9999]"
      >
        <Card className="bg-white border-gray-200 shadow-2xl overflow-hidden">
          {/* Settings Panel */}
          {showSettings ? (
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[16px] tracking-tight text-black">
                  Préférences des cookies
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-black transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-3">
                  <h4 className="text-[14px] text-black mb-0.5">
                    Cookies nécessaires
                  </h4>
                  <p className="text-[12px] text-gray-600">
                    Indispensables au fonctionnement.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-11 h-6 bg-gray-300 rounded-full flex items-center px-0.5 cursor-not-allowed">
                    <div className="w-5 h-5 bg-white rounded-full shadow-sm translate-x-5" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-3">
                  <h4 className="text-[14px] text-black mb-0.5">
                    Cookies analytiques
                  </h4>
                  <p className="text-[12px] text-gray-600">
                    Google Analytics (GA4, GTM).
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                    preferences.analytics ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                      preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-3">
                  <h4 className="text-[14px] text-black mb-0.5">
                    Cookies marketing
                  </h4>
                  <p className="text-[12px] text-gray-600">
                    Non utilisés actuellement.
                  </p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                    preferences.marketing ? 'bg-black' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                      preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="pt-2 space-y-2">
                <p className="text-[11px] text-gray-500">
                  <a href="/privacy" className="text-black hover:opacity-70 transition-opacity underline">
                    Politique de confidentialité
                  </a>
                </p>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="flex-1 rounded-full py-4 text-[13px] border-gray-300 hover:bg-gray-50"
                  >
                    Retour
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="flex-1 gradient-primary text-white hover:opacity-90 rounded-full py-4 text-[13px] transition-opacity"
                  >
                    Enregistrer
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Main Compact Banner */
            <div className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-4 h-4 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] tracking-tight text-black mb-1">
                    🍪 Cookies
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.{' '}
                    <a href="/privacy" className="text-black hover:opacity-70 transition-opacity underline">
                      En savoir plus
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 gradient-primary text-white hover:opacity-90 rounded-full py-4 text-[13px] transition-opacity"
                >
                  Accepter
                </Button>
                <Button
                  onClick={handleDeclineAll}
                  variant="outline"
                  className="flex-1 rounded-full py-4 text-[13px] border-gray-300 hover:bg-gray-50"
                >
                  Refuser
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="sm:w-auto rounded-full py-4 px-4 text-[13px] text-gray-600 hover:text-black hover:bg-gray-50"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

// Hook to check cookie consent status
export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      const parsed = JSON.parse(consent);
      setHasConsent(parsed.analytics === true);
    } else {
      setHasConsent(null);
    }
  }, []);

  return hasConsent;
}

// Function to reset cookie consent (for testing or user request)
export function resetCookieConsent() {
  localStorage.removeItem('cookieConsent');
  window.location.reload();
}