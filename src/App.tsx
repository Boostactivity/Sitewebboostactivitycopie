import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';
import { CookieConsent } from './components/CookieConsent';
import { SkipLinks } from './components/SkipLink';
import { useWebVitals } from './hooks/useWebVitals';
import { setupCommonPreconnects, prefetchCriticalPages } from './utils/performance/resourceHints';

// Lazy load pages pour améliorer les performances
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const SolutionDetailPage = lazy(() => import('./pages/SolutionDetailPage').then(m => ({ default: m.SolutionDetailPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage').then(m => ({ default: m.CaseStudyDetailPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Loader minimal et élégant
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        <p className="text-[14px] text-gray-600">Chargement...</p>
      </div>
    </div>
  );
}

export default function App() {
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false);

  // Mesurer les Core Web Vitals et les envoyer à GA4
  useWebVitals({
    enabled: true,
    reportToGA: analyticsLoaded, // Reporter seulement si analytics est chargé
    logToConsole: false, // En dev: true pour debug
  });

  // Setup des preconnects pour améliorer la performance réseau
  useEffect(() => {
    setupCommonPreconnects();
    prefetchCriticalPages();
  }, []);

  // Function to load analytics scripts
  const loadAnalytics = () => {
    if (analyticsLoaded) return;

    // Google Tag Manager - Head Script
    if (!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55XJ4NFW');`;
      document.head.insertBefore(gtmScript, document.head.firstChild);
    }

    // Google Analytics 4 (GA4) - gtag.js
    if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      // Load gtag.js script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PXZG69X6R7';
      document.head.appendChild(gtagScript);

      // Initialize gtag
      const gtagConfigScript = document.createElement('script');
      gtagConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PXZG69X6R7');
      `;
      document.head.appendChild(gtagConfigScript);
    }

    // Google Tag Manager - Body Noscript
    if (!document.querySelector('noscript[data-gtm]')) {
      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.setAttribute('data-gtm', 'true');
      gtmNoscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55XJ4NFW" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
      document.body.insertBefore(gtmNoscript, document.body.firstChild);
    }

    setAnalyticsLoaded(true);
  };

  // Définir la langue française dès le chargement - TRÈS IMPORTANT pour Chrome
  useEffect(() => {
    // Set lang attribute
    document.documentElement.setAttribute('lang', 'fr');
    
    // CRITICAL: Add translate="no" to prevent Chrome translation prompt
    document.documentElement.setAttribute('translate', 'no');
    document.documentElement.className = 'notranslate';
    
    // Add content-language meta tag
    const metaLang = document.createElement('meta');
    metaLang.httpEquiv = 'content-language';
    metaLang.content = 'fr';
    if (!document.querySelector('meta[http-equiv="content-language"]')) {
      document.head.appendChild(metaLang);
    }
    
    // Add language meta tag (EXPLICIT for Chrome)
    const metaLanguage = document.createElement('meta');
    metaLanguage.name = 'language';
    metaLanguage.content = 'French';
    if (!document.querySelector('meta[name="language"]')) {
      document.head.appendChild(metaLanguage);
    }

    // Add more explicit language meta tag
    const metaLanguageCode = document.createElement('meta');
    metaLanguageCode.name = 'content-language';
    metaLanguageCode.content = 'fr';
    if (!document.querySelector('meta[name="content-language"]')) {
      document.head.appendChild(metaLanguageCode);
    }
    
    // Add Google translate meta tag to disable translation
    const metaNoTranslate = document.createElement('meta');
    metaNoTranslate.name = 'google';
    metaNoTranslate.content = 'notranslate';
    if (!document.querySelector('meta[name="google"]')) {
      document.head.appendChild(metaNoTranslate);
    }

    // Check if user has already consented to analytics
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      const consent = JSON.parse(cookieConsent);
      if (consent.analytics === true) {
        loadAnalytics();
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    loadAnalytics();
  };

  const handleDeclineCookies = () => {
    // User declined - don't load analytics
    setAnalyticsLoaded(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div lang="fr" className="min-h-screen bg-white">
        <Header />
        <SkipLinks />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster />
        <CookieConsent onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />
      </div>
    </Router>
  );
}