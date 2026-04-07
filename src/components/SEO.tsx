import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: object;
}

export function SEO({
  title = 'Boost Activity - Agence Marketing Digital | Stratégie & SEO',
  description = 'Boost Activity, agence de marketing digital en Île-de-France. SEO, publicité en ligne, social media et stratégie digitale pour PME ambitieuses. Résultats mesurables.',
  keywords = 'agence marketing digital, marketing digital Île-de-France, SEO, publicité en ligne, social media, stratégie digitale, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, agence digitale',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
  canonical,
  noindex = false,
  schema,
}: SEOProps) {
  useEffect(() => {
    // Set HTML lang attribute to French
    document.documentElement.setAttribute('lang', 'fr');
    
    // CRITICAL: Prevent Chrome translation prompt on mobile
    document.documentElement.setAttribute('translate', 'no');
    if (!document.documentElement.classList.contains('notranslate')) {
      document.documentElement.classList.add('notranslate');
    }
    
    // Set document title
    document.title = title;

    // Set meta description
    setMetaTag('name', 'description', description);
    
    // Set keywords
    setMetaTag('name', 'keywords', keywords);

    // Set content language
    setMetaTag('http-equiv', 'content-language', 'fr');
    
    // Disable Google Translate
    setMetaTag('name', 'google', 'notranslate');

    // Set robots
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', canonical || window.location.href);
    setMetaTag('property', 'og:site_name', 'Boost Activity');
    setMetaTag('property', 'og:locale', 'fr_FR');

    // Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // Additional meta tags
    setMetaTag('name', 'author', 'Boost Activity');
    setMetaTag('name', 'language', 'FR');
    setMetaTag('name', 'revisit-after', '7 days');
    setMetaTag('name', 'rating', 'general');

    // Canonical URL
    if (canonical) {
      setCanonicalLink(canonical);
    }

    // Schema.org structured data
    if (schema) {
      setStructuredData(schema);
    }
  }, [title, description, keywords, ogType, ogImage, canonical, noindex, schema]);

  return null;
}

function setMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

function setCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
}

function setStructuredData(schema: object) {
  const scriptId = 'structured-data';
  let script = document.getElementById(scriptId) as HTMLScriptElement;
  
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(schema);
}