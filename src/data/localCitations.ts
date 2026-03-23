/**
 * Tracker des Citations Locales pour Boost Activité
 * Suivi complet de toutes les présences en ligne locales
 */

export interface LocalCitation {
  id: string;
  platform: string;
  category: 'essential' | 'important' | 'recommended' | 'nice-to-have';
  url?: string;
  status: 'completed' | 'pending' | 'not-started';
  verificationStatus: 'verified' | 'pending-verification' | 'not-verified';
  dateCreated?: string;
  dateVerified?: string;
  username?: string;
  notes?: string;
  priority: number; // 1-10 (10 = le plus important)
  impact: 'high' | 'medium' | 'low';
}

/**
 * NAP (Name, Address, Phone) - Doit être IDENTIQUE partout !
 */
export const NAP_INFO = {
  name: 'Boost Activité',
  address: 'Paris, France', // À compléter avec l'adresse exacte
  phone: '+33 6 60 96 85 16',
  email: 'boostactivityfr@gmail.com',
  website: 'https://boostactivity.fr',
  
  // Informations additionnelles
  description: 'Agence de marketing digital à Paris spécialisée en SEO, Google Ads, Social Media et stratégie digitale pour PME et startups.',
  category: 'Agence de Marketing Digital',
  services: [
    'SEO (Référencement Naturel)',
    'Google Ads (Référencement Payant)',
    'Social Media Marketing',
    'Stratégie Digitale',
    'Acquisition Client',
  ],
  hours: {
    monday: '09:00-18:00',
    tuesday: '09:00-18:00',
    wednesday: '09:00-18:00',
    thursday: '09:00-18:00',
    friday: '09:00-18:00',
    saturday: 'Fermé',
    sunday: 'Fermé',
  },
  logo: 'https://boostactivity.fr/logo.png',
  coverImage: 'https://boostactivity.fr/cover.jpg',
};

/**
 * Liste complète des citations locales
 */
export const localCitations: LocalCitation[] = [
  // ===== ESSENTIELLES (TOP PRIORITÉ) =====
  {
    id: 'google-my-business',
    platform: 'Google My Business',
    category: 'essential',
    url: 'https://business.google.com',
    status: 'completed', // ✅ Fait par l'utilisateur
    verificationStatus: 'verified',
    priority: 10,
    impact: 'high',
    notes: '🎉 CRÉÉ ! Le plus important pour le SEO local. Demander des avis clients régulièrement.',
  },

  {
    id: 'bing-places',
    platform: 'Bing Places for Business',
    category: 'essential',
    url: 'https://www.bingplaces.com',
    status: 'pending', // Probablement celui que tu as oublié
    verificationStatus: 'not-verified',
    priority: 9,
    impact: 'high',
    notes: '⚠️ À VÉRIFIER - 2ème moteur de recherche. Synchronisé avec Yahoo et DuckDuckGo.',
  },

  {
    id: 'apple-maps',
    platform: 'Apple Maps',
    category: 'essential',
    url: 'https://mapsconnect.apple.com',
    status: 'completed', // ✅ Fait par l'utilisateur
    verificationStatus: 'pending-verification',
    priority: 8,
    impact: 'high',
    notes: '🎉 CRÉÉ ! Utilisé par millions d\'utilisateurs iPhone. Attendre validation Apple.',
  },

  {
    id: 'pages-jaunes',
    platform: 'Pages Jaunes (PagesJaunes.fr)',
    category: 'essential',
    url: 'https://www.pagesjaunes.fr',
    status: 'completed', // ✅ Fait par l'utilisateur
    verificationStatus: 'verified',
    priority: 8,
    impact: 'high',
    notes: '🎉 CRÉÉ ! Principal annuaire français. Très important pour SEO local France.',
  },

  // ===== IMPORTANTES =====
  {
    id: 'yelp-france',
    platform: 'Yelp France',
    category: 'important',
    url: 'https://biz.yelp.fr',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 7,
    impact: 'medium',
    notes: 'Annuaire avec avis. Bon pour la réputation et SEO.',
  },

  {
    id: 'facebook-business',
    platform: 'Facebook Business Page',
    category: 'important',
    url: 'https://www.facebook.com/business',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 7,
    impact: 'medium',
    notes: 'Important pour social signals et avis clients. Gratuit.',
  },

  {
    id: 'linkedin-company',
    platform: 'LinkedIn Company Page',
    category: 'important',
    url: 'https://www.linkedin.com/company',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 7,
    impact: 'medium',
    notes: 'Essentiel pour B2B. Crédibilité professionnelle.',
  },

  {
    id: 'mappy',
    platform: 'Mappy',
    category: 'important',
    url: 'https://fr.mappy.com',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 6,
    impact: 'medium',
    notes: 'Service de cartographie français très utilisé.',
  },

  {
    id: 'here-maps',
    platform: 'HERE Maps',
    category: 'important',
    url: 'https://wego.here.com',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 6,
    impact: 'medium',
    notes: 'Utilisé par de nombreux GPS et services.',
  },

  // ===== RECOMMANDÉES =====
  {
    id: 'waze',
    platform: 'Waze',
    category: 'recommended',
    url: 'https://www.waze.com/business',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 5,
    impact: 'medium',
    notes: 'App GPS populaire (propriété Google).',
  },

  {
    id: 'foursquare',
    platform: 'Foursquare',
    category: 'recommended',
    url: 'https://foursquare.com/business',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 5,
    impact: 'low',
    notes: 'Données utilisées par Apple, Uber, Twitter.',
  },

  {
    id: 'tripadvisor',
    platform: 'TripAdvisor (si applicable)',
    category: 'recommended',
    url: 'https://www.tripadvisor.fr',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 4,
    impact: 'low',
    notes: 'Surtout pour business physiques avec visites. Peut être skip si pas applicable.',
  },

  {
    id: 'crunchbase',
    platform: 'Crunchbase',
    category: 'recommended',
    url: 'https://www.crunchbase.com',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 5,
    impact: 'medium',
    notes: 'Excellent pour startups/tech. Crédibilité business.',
  },

  // ===== ANNUAIRES SPÉCIALISÉS MARKETING =====
  {
    id: 'clutch',
    platform: 'Clutch.co',
    category: 'recommended',
    url: 'https://clutch.co',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 8,
    impact: 'high',
    notes: '⭐ TRÈS IMPORTANT pour agences. Avis vérifiés, classements, leads B2B.',
  },

  {
    id: 'goodfirms',
    platform: 'GoodFirms',
    category: 'recommended',
    url: 'https://www.goodfirms.co',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 6,
    impact: 'medium',
    notes: 'Annuaire d\'agences digitales avec reviews.',
  },

  {
    id: 'sortlist',
    platform: 'Sortlist',
    category: 'recommended',
    url: 'https://www.sortlist.fr',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 7,
    impact: 'medium',
    notes: 'Marketplace d\'agences en France. Génération de leads.',
  },

  {
    id: 'upcity',
    platform: 'UpCity',
    category: 'recommended',
    url: 'https://upcity.com',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 6,
    impact: 'medium',
    notes: 'Annuaire d\'agences marketing avec leads.',
  },

  // ===== ANNUAIRES FRANÇAIS =====
  {
    id: 'petit-web',
    platform: 'Petit Web',
    category: 'recommended',
    url: 'https://www.petiteweb.fr',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 4,
    impact: 'low',
    notes: 'Annuaire français SEO-friendly.',
  },

  {
    id: 'gralon',
    platform: 'Gralon',
    category: 'recommended',
    url: 'https://www.gralon.net',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 4,
    impact: 'low',
    notes: 'Annuaire professionnel français.',
  },

  {
    id: 'societe-com',
    platform: 'Société.com',
    category: 'important',
    url: 'https://www.societe.com',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 5,
    impact: 'medium',
    notes: 'Base de données entreprises françaises. Crédibilité.',
  },

  {
    id: 'verif-com',
    platform: 'Verif.com',
    category: 'recommended',
    url: 'https://www.verif.com',
    status: 'not-started',
    verificationStatus: 'not-verified',
    priority: 4,
    impact: 'low',
    notes: 'Informations entreprises françaises.',
  },
];

/**
 * Statistiques des citations
 */
export function getCitationStats() {
  const total = localCitations.length;
  const completed = localCitations.filter((c) => c.status === 'completed').length;
  const pending = localCitations.filter((c) => c.status === 'pending').length;
  const notStarted = localCitations.filter((c) => c.status === 'not-started').length;

  const verified = localCitations.filter((c) => c.verificationStatus === 'verified').length;
  const pendingVerification = localCitations.filter(
    (c) => c.verificationStatus === 'pending-verification'
  ).length;

  const essential = localCitations.filter((c) => c.category === 'essential').length;
  const essentialCompleted = localCitations.filter(
    (c) => c.category === 'essential' && c.status === 'completed'
  ).length;

  return {
    total,
    completed,
    pending,
    notStarted,
    verified,
    pendingVerification,
    essential,
    essentialCompleted,
    completionRate: Math.round((completed / total) * 100),
    essentialCompletionRate: Math.round((essentialCompleted / essential) * 100),
  };
}

/**
 * Obtenir les citations par catégorie
 */
export function getCitationsByCategory(category: LocalCitation['category']) {
  return localCitations.filter((c) => c.category === category);
}

/**
 * Obtenir les citations par statut
 */
export function getCitationsByStatus(status: LocalCitation['status']) {
  return localCitations.filter((c) => c.status === status);
}

/**
 * Obtenir les prochaines actions prioritaires
 */
export function getNextActions(limit: number = 5) {
  return localCitations
    .filter((c) => c.status !== 'completed')
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

/**
 * Vérifier la cohérence NAP
 */
export function verifyNAPConsistency(citations: LocalCitation[]) {
  const warnings: string[] = [];

  citations.forEach((citation) => {
    if (citation.status === 'completed' && !citation.notes?.includes('NAP vérifié')) {
      warnings.push(
        `⚠️ ${citation.platform}: Vérifier que le NAP est identique (${NAP_INFO.name}, ${NAP_INFO.address}, ${NAP_INFO.phone})`
      );
    }
  });

  return warnings;
}

/**
 * Checklist pour chaque citation
 */
export const CITATION_CHECKLIST = {
  creation: [
    '✅ Utiliser exactement le même NAP (Name, Address, Phone) partout',
    '✅ Utiliser la même description (ou similaire)',
    '✅ Ajouter le logo Boost Activité',
    '✅ Ajouter des images (bureau, équipe, projets)',
    '✅ Définir les heures d\'ouverture',
    '✅ Ajouter toutes les catégories pertinentes',
    '✅ Lien vers le site web (https://boostactivity.fr)',
    '✅ Ajouter tous les services',
  ],

  verification: [
    '✅ Vérifier l\'adresse email ou téléphone',
    '✅ Recevoir le code de vérification',
    '✅ Confirmer la propriété',
  ],

  optimization: [
    '✅ Publier des posts/updates régulièrement (GMB)',
    '✅ Répondre aux avis (positifs ET négatifs)',
    '✅ Ajouter des photos régulièrement',
    '✅ Mettre à jour les infos si changement',
    '✅ Utiliser les fonctionnalités spéciales (Q&A sur GMB)',
  ],

  monitoring: [
    '✅ Vérifier les avis chaque semaine',
    '✅ Analyser les stats (vues, clics) mensuellement',
    '✅ Auditer le NAP tous les 3 mois',
    '✅ Mettre à jour les photos tous les 6 mois',
  ],
};

/**
 * Conseils par plateforme
 */
export const PLATFORM_TIPS = {
  'google-my-business': [
    '💡 Publier 2-3 posts par semaine (actualités, offres, articles blog)',
    '💡 Demander des avis clients après chaque projet',
    '💡 Répondre à TOUS les avis dans les 24h',
    '💡 Ajouter 5+ photos par mois',
    '💡 Utiliser Google Q&A pour anticiper les questions',
    '💡 Activer la messagerie pour recevoir des leads',
  ],

  'bing-places': [
    '💡 Synchroniser avec Bing/Yahoo/DuckDuckGo',
    '💡 Importer depuis Google My Business si possible',
    '💡 Activer les avis',
  ],

  'pages-jaunes': [
    '💡 Version payante offre plus de visibilité',
    '💡 Ajouter vidéo de présentation',
    '💡 Mettre en avant les offres spéciales',
  ],

  clutch: [
    '💡 Demander des reviews vérifiés à vos meilleurs clients',
    '💡 Min 5 reviews pour apparaître dans les classements',
    '💡 Reviews vérifiées = crédibilité maximale',
    '💡 Leads B2B de qualité',
  ],
};

/**
 * Template d'email pour demander des avis
 */
export const REVIEW_REQUEST_TEMPLATE = `
Bonjour [Nom du Client],

J'espère que tout va bien !

Nous sommes ravis d'avoir travaillé avec vous sur [Nom du Projet] et nous espérons 
que les résultats sont à la hauteur de vos attentes.

Votre avis est très important pour nous et aiderait grandement d'autres entreprises 
à nous découvrir.

Pourriez-vous prendre 2 minutes pour laisser un avis sur Google ?

👉 [Lien Google Review]

Si vous avez la moindre question ou suggestion, n'hésitez pas à me contacter.

Merci encore pour votre confiance !

Cordialement,
[Votre Nom]
Boost Activité
boostactivityfr@gmail.com
+33 6 60 96 85 16
`;

/**
 * Impact estimé par citation
 */
export function estimateCitationImpact() {
  const highImpact = localCitations.filter((c) => c.impact === 'high');
  const mediumImpact = localCitations.filter((c) => c.impact === 'medium');
  const lowImpact = localCitations.filter((c) => c.impact === 'low');

  return {
    highImpact: {
      count: highImpact.length,
      platforms: highImpact.map((c) => c.platform),
      estimatedTraffic: '200-500 visiteurs/mois',
      estimatedLeads: '10-30 leads/mois',
    },
    mediumImpact: {
      count: mediumImpact.length,
      platforms: mediumImpact.map((c) => c.platform),
      estimatedTraffic: '50-150 visiteurs/mois',
      estimatedLeads: '5-15 leads/mois',
    },
    lowImpact: {
      count: lowImpact.length,
      platforms: lowImpact.map((c) => c.platform),
      estimatedTraffic: '10-50 visiteurs/mois',
      estimatedLeads: '1-5 leads/mois',
    },
    total: {
      estimatedTraffic: '260-700 visiteurs/mois',
      estimatedLeads: '16-50 leads/mois',
      estimatedRevenue: '5,000€-15,000€/mois (si conversion 5% à 3000€/client)',
    },
  };
}
