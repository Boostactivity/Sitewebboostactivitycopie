/**
 * Gestion des balises Hreflang pour le multi-langue
 * Indique à Google les versions alternatives d'une page dans d'autres langues
 */

export interface HreflangTag {
  lang: string; // Code langue ISO (ex: 'fr', 'en', 'es')
  region?: string; // Code région ISO optionnel (ex: 'FR', 'US', 'GB')
  url: string; // URL complète de la page alternative
}

export interface HreflangConfig {
  currentLang: string;
  currentRegion?: string;
  currentUrl: string;
  alternates: HreflangTag[];
}

/**
 * Générer les balises hreflang pour une page
 */
export function generateHreflangTags(config: HreflangConfig): string {
  const tags: string[] = [];

  // Ajouter la page actuelle
  const currentHreflang = config.currentRegion
    ? `${config.currentLang}-${config.currentRegion}`
    : config.currentLang;

  tags.push(
    `<link rel="alternate" hreflang="${currentHreflang}" href="${config.currentUrl}" />`
  );

  // Ajouter les alternatives
  config.alternates.forEach((alternate) => {
    const hreflang = alternate.region
      ? `${alternate.lang}-${alternate.region}`
      : alternate.lang;

    tags.push(`<link rel="alternate" hreflang="${hreflang}" href="${alternate.url}" />`);
  });

  // Ajouter x-default (langue par défaut pour les utilisateurs hors zones définies)
  const defaultUrl = config.alternates.find((a) => a.lang === 'fr')?.url || config.currentUrl;
  tags.push(`<link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`);

  return tags.join('\n    ');
}

/**
 * Configuration pour Boost Activité (FR/EN)
 */
export const boostActivityHreflang = {
  /**
   * Générer hreflang pour une page donnée
   */
  getHreflangForPage(pagePath: string, currentLang: 'fr' | 'en' = 'fr'): HreflangConfig {
    const baseUrl = 'https://boostactivity.fr';

    // URLs françaises et anglaises
    const frUrl = `${baseUrl}${pagePath}`;
    const enUrl = `${baseUrl}/en${pagePath}`;

    if (currentLang === 'fr') {
      return {
        currentLang: 'fr',
        currentRegion: 'FR',
        currentUrl: frUrl,
        alternates: [
          { lang: 'en', url: enUrl },
          { lang: 'en', region: 'US', url: enUrl },
          { lang: 'en', region: 'GB', url: enUrl },
        ],
      };
    } else {
      return {
        currentLang: 'en',
        currentUrl: enUrl,
        alternates: [
          { lang: 'fr', region: 'FR', url: frUrl },
        ],
      };
    }
  },

  /**
   * Pages avec traductions disponibles
   */
  translatedPages: [
    '/',
    '/services',
    '/solutions',
    '/pricing',
    '/about',
    '/contact',
    '/blog',
    '/faq',
  ],

  /**
   * Vérifier si une page a des traductions
   */
  hasTranslations(pagePath: string): boolean {
    return this.translatedPages.includes(pagePath);
  },
};

/**
 * Component React pour injecter les hreflang dans le <head>
 */
export function HreflangTags({
  pagePath,
  currentLang = 'fr',
}: {
  pagePath: string;
  currentLang?: 'fr' | 'en';
}) {
  if (!boostActivityHreflang.hasTranslations(pagePath)) {
    return null;
  }

  const config = boostActivityHreflang.getHreflangForPage(pagePath, currentLang);
  const tagsHtml = generateHreflangTags(config);

  return <div dangerouslySetInnerHTML={{ __html: tagsHtml }} />;
}

/**
 * Exemples d'utilisation
 */

// Exemple 1 : Page d'accueil française
// const homePageFr = boostActivityHreflang.getHreflangForPage('/', 'fr');
// generateHreflangTags(homePageFr);
// Génère :
// <link rel="alternate" hreflang="fr-FR" href="https://boostactivity.fr/" />
// <link rel="alternate" hreflang="en" href="https://boostactivity.fr/en/" />
// <link rel="alternate" hreflang="en-US" href="https://boostactivity.fr/en/" />
// <link rel="alternate" hreflang="en-GB" href="https://boostactivity.fr/en/" />
// <link rel="alternate" hreflang="x-default" href="https://boostactivity.fr/" />

// Exemple 2 : Page services anglaise
// const servicesPageEn = boostActivityHreflang.getHreflangForPage('/services', 'en');
// generateHreflangTags(servicesPageEn);
// Génère :
// <link rel="alternate" hreflang="en" href="https://boostactivity.fr/en/services" />
// <link rel="alternate" hreflang="fr-FR" href="https://boostactivity.fr/services" />
// <link rel="alternate" hreflang="x-default" href="https://boostactivity.fr/services" />

/**
 * Best Practices pour Hreflang :
 *
 * 1. ✅ Utiliser des URLs absolues complètes
 * 2. ✅ Inclure toutes les versions linguistiques (y compris la page actuelle)
 * 3. ✅ Toujours inclure x-default pour les utilisateurs hors zones
 * 4. ✅ Assurer la bidirectionnalité (FR→EN et EN→FR)
 * 5. ✅ Codes ISO corrects (fr-FR, en-US, en-GB, es-ES, etc.)
 * 6. ✅ Cohérence : Si page FR a hreflang vers EN, la page EN doit avoir hreflang vers FR
 * 7. ❌ Éviter les redirections sur les URLs hreflang
 * 8. ❌ Ne pas utiliser pour le contenu traduit automatiquement (qualité requise)
 */

/**
 * Erreurs communes à éviter :
 *
 * ❌ Mauvais : hreflang="french" (pas de code ISO)
 * ✅ Bon : hreflang="fr"
 *
 * ❌ Mauvais : hreflang="en" pour UK et US (trop générique si vous ciblez spécifiquement)
 * ✅ Bon : hreflang="en-GB" et hreflang="en-US"
 *
 * ❌ Mauvais : URL relative href="/en/services"
 * ✅ Bon : URL absolue href="https://boostactivity.fr/en/services"
 *
 * ❌ Mauvais : Oublier x-default
 * ✅ Bon : Toujours inclure x-default pointant vers la langue par défaut
 */

/**
 * Validation Hreflang :
 *
 * Outils pour vérifier :
 * 1. Google Search Console → Enhancement → International Targeting
 * 2. Ahrefs Site Audit → Hreflang tags
 * 3. Screaming Frog → Configuration → Spider → Advanced → Parse Hreflang
 * 4. Hreflang Tags Testing Tool (https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/)
 */
