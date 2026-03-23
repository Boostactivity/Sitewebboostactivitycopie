/**
 * Système d'internal linking automatique
 * Suggestions de liens internes basées sur le contenu et les mots-clés
 */

export interface InternalLink {
  url: string;
  title: string;
  excerpt: string;
  keywords: string[];
  relevanceScore: number; // 0-100
}

export interface PageContent {
  url: string;
  title: string;
  content: string;
  keywords: string[];
  category?: string;
}

/**
 * Catalogue des pages du site avec leurs mots-clés
 */
export const sitePages: PageContent[] = [
  // Pages principales
  {
    url: '/',
    title: 'Boost Activité - Agence Marketing Digital Premium Paris',
    content: 'Agence de marketing digital à Paris spécialisée en SEO, Google Ads, Social Media',
    keywords: ['marketing digital', 'agence', 'Paris', 'SEO', 'Google Ads'],
    category: 'home',
  },

  // Services
  {
    url: '/services',
    title: 'Nos Services de Marketing Digital',
    content: 'Découvrez nos services : stratégie digitale, SEO, SEA, social media, acquisition client',
    keywords: ['services', 'marketing digital', 'stratégie', 'SEO', 'SEA', 'social media'],
    category: 'services',
  },
  {
    url: '/services/strategie-digitale',
    title: 'Stratégie Digitale Sur-Mesure',
    content: 'Définition de vision claire et objectifs mesurables pour votre croissance',
    keywords: ['stratégie digitale', 'stratégie marketing', 'objectifs', 'ROI'],
    category: 'services',
  },
  {
    url: '/services/seo-sea',
    title: 'SEO & SEA - Référencement Naturel et Payant',
    content: 'Dominez les résultats de recherche avec notre expertise SEO et Google Ads',
    keywords: ['SEO', 'référencement naturel', 'SEA', 'Google Ads', 'référencement payant'],
    category: 'services',
  },
  {
    url: '/services/social-media',
    title: 'Social Media Marketing',
    content: 'Transformez vos réseaux sociaux en machine à leads',
    keywords: ['social media', 'réseaux sociaux', 'Instagram', 'LinkedIn', 'Facebook'],
    category: 'services',
  },
  {
    url: '/services/acquisition-client',
    title: 'Acquisition Client & Lead Generation',
    content: 'Génération de leads qualifiés et conversion optimisée',
    keywords: ['acquisition client', 'leads', 'conversion', 'funnel'],
    category: 'services',
  },

  // Solutions
  {
    url: '/solutions',
    title: 'Solutions Par Secteur',
    content: 'Solutions adaptées pour startups, PME, e-commerce et SaaS',
    keywords: ['solutions', 'secteur', 'startup', 'PME', 'e-commerce', 'SaaS'],
    category: 'solutions',
  },
  {
    url: '/solutions/startup',
    title: 'Marketing Digital pour Startups',
    content: 'Lancez votre croissance avec une stratégie agile et data-driven',
    keywords: ['startup', 'croissance', 'scaling', 'PMF'],
    category: 'solutions',
  },
  {
    url: '/solutions/pme',
    title: 'Marketing Digital pour PME',
    content: 'Boostez votre visibilité et générez plus de clients',
    keywords: ['PME', 'TPE', 'petite entreprise', 'visibilité'],
    category: 'solutions',
  },
  {
    url: '/solutions/ecommerce',
    title: 'Marketing Digital E-commerce',
    content: 'Augmentez vos ventes en ligne avec notre expertise e-commerce',
    keywords: ['e-commerce', 'boutique en ligne', 'ventes', 'Shopify', 'conversion'],
    category: 'solutions',
  },
  {
    url: '/solutions/saas',
    title: 'Marketing Digital SaaS B2B',
    content: 'Growth marketing pour SaaS : acquisition, activation, rétention',
    keywords: ['SaaS', 'B2B', 'growth marketing', 'MRR', 'churn'],
    category: 'solutions',
  },

  // Blog
  {
    url: '/blog',
    title: 'Blog Marketing Digital',
    content: 'Articles, guides et conseils d\'experts en marketing digital',
    keywords: ['blog', 'articles', 'guides', 'conseils', 'tendances'],
    category: 'blog',
  },
  {
    url: '/blog/comment-ameliorer-seo-site-web-2024',
    title: 'Comment Améliorer le SEO de Votre Site Web en 2024',
    content: 'Guide complet des stratégies SEO essentielles en 2024',
    keywords: ['SEO 2024', 'améliorer SEO', 'référencement', 'Core Web Vitals', 'E-E-A-T'],
    category: 'blog',
  },
  {
    url: '/blog/strategie-reseaux-sociaux-pme',
    title: 'Stratégie Réseaux Sociaux pour PME 2024',
    content: 'Comment créer une stratégie social media efficace pour les PME',
    keywords: ['réseaux sociaux', 'social media', 'PME', 'Instagram', 'LinkedIn'],
    category: 'blog',
  },
  {
    url: '/blog/google-ads-vs-seo-que-choisir',
    title: 'Google Ads vs SEO : Que Choisir ?',
    content: 'Comparaison complète entre référencement payant et naturel',
    keywords: ['Google Ads', 'SEO', 'SEA vs SEO', 'référencement', 'ROI'],
    category: 'blog',
  },

  // Autres pages
  {
    url: '/pricing',
    title: 'Tarifs & Packages Marketing Digital',
    content: 'Découvrez nos tarifs transparents et packages sans engagement',
    keywords: ['tarifs', 'prix', 'packages', 'devis', 'budget'],
    category: 'pricing',
  },
  {
    url: '/faq',
    title: 'FAQ - Questions Fréquentes',
    content: 'Réponses à toutes vos questions sur nos services de marketing digital',
    keywords: ['FAQ', 'questions', 'réponses', 'aide', 'support'],
    category: 'faq',
  },
  {
    url: '/contact',
    title: 'Contactez-Nous',
    content: 'Discutons de votre projet marketing digital',
    keywords: ['contact', 'devis', 'rendez-vous', 'consultation'],
    category: 'contact',
  },
  {
    url: '/about',
    title: 'À Propos de Boost Activité',
    content: 'Notre mission, notre équipe, nos valeurs',
    keywords: ['à propos', 'équipe', 'mission', 'valeurs', 'histoire'],
    category: 'about',
  },
];

/**
 * Calculer la pertinence d'une page pour un contenu donné
 */
function calculateRelevance(sourceContent: string, targetPage: PageContent): number {
  let score = 0;
  const sourceContentLower = sourceContent.toLowerCase();

  // Points pour chaque mot-clé trouvé dans le contenu source
  targetPage.keywords.forEach((keyword) => {
    const keywordLower = keyword.toLowerCase();
    const regex = new RegExp(`\\b${keywordLower}\\b`, 'gi');
    const matches = sourceContentLower.match(regex);
    if (matches) {
      score += matches.length * 10; // 10 points par occurrence
    }
  });

  // Bonus si le titre contient des mots-clés
  const titleWords = targetPage.title.toLowerCase().split(' ');
  titleWords.forEach((word) => {
    if (word.length > 4 && sourceContentLower.includes(word)) {
      score += 5;
    }
  });

  return Math.min(score, 100); // Max 100
}

/**
 * Suggérer des liens internes pour une page
 */
export function suggestInternalLinks(
  currentPageUrl: string,
  pageContent: string,
  maxLinks: number = 5
): InternalLink[] {
  // Filtrer la page actuelle
  const otherPages = sitePages.filter((page) => page.url !== currentPageUrl);

  // Calculer la pertinence pour chaque page
  const linksWithScore = otherPages.map((page) => ({
    url: page.url,
    title: page.title,
    excerpt: page.content,
    keywords: page.keywords,
    relevanceScore: calculateRelevance(pageContent, page),
  }));

  // Trier par pertinence et prendre les top N
  return linksWithScore
    .filter((link) => link.relevanceScore > 20) // Minimum 20 de pertinence
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxLinks);
}

/**
 * Trouver les meilleures positions pour insérer des liens dans le contenu
 */
export function suggestLinkPlacements(
  content: string,
  suggestedLinks: InternalLink[]
): { link: InternalLink; position: number; anchorText: string }[] {
  const placements: { link: InternalLink; position: number; anchorText: string }[] = [];

  suggestedLinks.forEach((link) => {
    // Chercher le premier mot-clé pertinent dans le contenu
    for (const keyword of link.keywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      const match = content.match(regex);

      if (match && match.index !== undefined) {
        placements.push({
          link,
          position: match.index,
          anchorText: keyword,
        });
        break; // Une seule insertion par lien
      }
    }
  });

  // Trier par position pour insertion dans l'ordre
  return placements.sort((a, b) => a.position - b.position);
}

/**
 * Insérer automatiquement des liens dans le contenu HTML
 */
export function insertInternalLinks(htmlContent: string, maxLinks: number = 5): string {
  // Cette fonction pourrait être améliorée pour parser le HTML proprement
  // Pour l'instant, un exemple simple
  let modifiedContent = htmlContent;
  const currentUrl = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Suggestions de liens
  const suggestions = suggestInternalLinks(currentUrl, htmlContent, maxLinks);

  // Insérer les liens (simplifiée)
  suggestions.forEach((suggestion) => {
    const keyword = suggestion.keywords[0];
    const regex = new RegExp(`\\b(${keyword})\\b(?![^<]*>|[^<>]*<\\/a>)`, 'i');

    // Remplacer seulement la première occurrence
    modifiedContent = modifiedContent.replace(
      regex,
      `<a href="${suggestion.url}" class="internal-link">${keyword}</a>`
    );
  });

  return modifiedContent;
}

/**
 * Analyse de la structure des liens internes du site
 */
export function analyzeSiteStructure() {
  const analysis = {
    totalPages: sitePages.length,
    pagesByCategory: {} as { [key: string]: number },
    orphanPages: [] as string[], // Pages sans liens entrants
    hubPages: [] as string[], // Pages avec beaucoup de liens
  };

  // Pages par catégorie
  sitePages.forEach((page) => {
    const cat = page.category || 'uncategorized';
    analysis.pagesByCategory[cat] = (analysis.pagesByCategory[cat] || 0) + 1;
  });

  return analysis;
}

/**
 * Recommandations pour améliorer l'internal linking
 */
export function getInternalLinkingRecommendations(): string[] {
  const recommendations: string[] = [];

  // Analyse basique
  const analysis = analyzeSiteStructure();

  if (analysis.totalPages < 10) {
    recommendations.push('✅ Créer plus de contenu (articles de blog, guides) pour améliorer le maillage interne');
  }

  recommendations.push('✅ Chaque page devrait avoir 3-5 liens internes sortants');
  recommendations.push('✅ Prioriser les liens vers vos pages de conversion (services, contact)');
  recommendations.push('✅ Utiliser des anchor texts variés et naturels');
  recommendations.push('✅ Créer des pages "hub" (piliers) qui linkent vers des pages satellites');
  recommendations.push('✅ Vérifier régulièrement les liens cassés (404)');
  recommendations.push('✅ Mettre à jour les anciens articles avec des liens vers le nouveau contenu');

  return recommendations;
}

/**
 * Générer un sitemap visuel de la structure de liens
 */
export function generateLinkStructureMap() {
  const map: { [key: string]: string[] } = {};

  sitePages.forEach((page) => {
    const links = suggestInternalLinks(page.url, page.content, 10);
    map[page.url] = links.map((l) => l.url);
  });

  return map;
}

/**
 * Helper pour créer un composant React de liens suggérés
 */
export function RelatedLinksSection({ currentUrl, content }: { currentUrl: string; content: string }) {
  const suggestions = suggestInternalLinks(currentUrl, content, 3);

  if (suggestions.length === 0) return null;

  return (
    <div className="related-links">
      <h3>Articles Recommandés</h3>
      <ul>
        {suggestions.map((link) => (
          <li key={link.url}>
            <a href={link.url} title={link.title}>
              {link.title}
            </a>
            <p>{link.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Best Practices Internal Linking :
 *
 * 1. ✅ 3-5 liens internes par page
 * 2. ✅ Anchor text descriptif et varié
 * 3. ✅ Liens contextuels (dans le contenu)
 * 4. ✅ Structure hiérarchique (homepage → hub → pages)
 * 5. ✅ Deep linking (liens vers pages profondes, pas que homepage)
 * 6. ✅ Utiliser le nofollow avec parcimonie (seulement si nécessaire)
 * 7. ✅ Vérifier les liens cassés régulièrement
 * 8. ✅ Éviter trop de liens (>10 = dilution du link juice)
 */
