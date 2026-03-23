/**
 * Système de gestion des backlinks et opportunités de link building
 * Tracking complet pour améliorer l'autorité de domaine
 */

export interface Backlink {
  id: string;
  sourceUrl: string;
  sourceDomain: string;
  targetUrl: string;
  anchorText: string;
  linkType: 'dofollow' | 'nofollow';
  status: 'active' | 'lost' | 'pending';
  domainAuthority: number; // DA score 0-100
  category: BacklinkCategory;
  acquiredDate: string;
  lastChecked: string;
  notes?: string;
}

export type BacklinkCategory =
  | 'guest-post'
  | 'directory'
  | 'partner'
  | 'press'
  | 'social'
  | 'forum'
  | 'resource-page'
  | 'broken-link'
  | 'other';

export interface LinkOpportunity {
  id: string;
  domain: string;
  url: string;
  domainAuthority: number;
  pageAuthority: number;
  type: LinkOpportunityType;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'new' | 'contacted' | 'negotiating' | 'accepted' | 'rejected' | 'completed';
  contactEmail?: string;
  contactName?: string;
  notes?: string;
  estimatedValue: number; // Score 0-100 de la valeur du lien
  discoveredDate: string;
  lastContactDate?: string;
}

export type LinkOpportunityType =
  | 'guest-blogging'
  | 'broken-link'
  | 'resource-page'
  | 'competitor-backlink'
  | 'unlinked-mention'
  | 'testimonial'
  | 'partnership'
  | 'directory-submission'
  | 'infographic-outreach'
  | 'skyscraper';

export interface OutreachTemplate {
  id: string;
  name: string;
  type: LinkOpportunityType;
  subject: string;
  body: string;
  followUpSubject?: string;
  followUpBody?: string;
  variables: string[]; // Variables à remplacer (ex: {name}, {domain})
  successRate: number; // Taux de réponse en %
}

export interface LinkBuildingCampaign {
  id: string;
  name: string;
  type: LinkOpportunityType;
  targetBacklinks: number;
  acquiredBacklinks: number;
  status: 'active' | 'paused' | 'completed';
  startDate: string;
  endDate?: string;
  budget?: number;
  opportunities: string[]; // IDs des opportunités
  results: {
    contacted: number;
    responded: number;
    accepted: number;
    rejected: number;
    completed: number;
  };
}

// ===== DONNÉES INITIALES =====

export const backlinks: Backlink[] = [
  {
    id: '1',
    sourceUrl: 'https://example-blog.com/marketing-digital-france',
    sourceDomain: 'example-blog.com',
    targetUrl: 'https://boostactivity.fr',
    anchorText: 'Boost Activité',
    linkType: 'dofollow',
    status: 'active',
    domainAuthority: 45,
    category: 'guest-post',
    acquiredDate: '2024-10-15',
    lastChecked: '2024-11-25',
    notes: 'Guest post about digital marketing trends',
  },
  {
    id: '2',
    sourceUrl: 'https://annuaire-entreprises.fr/boostactivity',
    sourceDomain: 'annuaire-entreprises.fr',
    targetUrl: 'https://boostactivity.fr',
    anchorText: 'Boost Activité - Agence Marketing Digital',
    linkType: 'dofollow',
    status: 'active',
    domainAuthority: 38,
    category: 'directory',
    acquiredDate: '2024-09-20',
    lastChecked: '2024-11-25',
  },
  {
    id: '3',
    sourceUrl: 'https://partenaire-example.fr/partners',
    sourceDomain: 'partenaire-example.fr',
    targetUrl: 'https://boostactivity.fr',
    anchorText: 'agence SEO Paris',
    linkType: 'dofollow',
    status: 'active',
    domainAuthority: 52,
    category: 'partner',
    acquiredDate: '2024-11-01',
    lastChecked: '2024-11-25',
  },
];

export const linkOpportunities: LinkOpportunity[] = [
  {
    id: '1',
    domain: 'marketing-blog.fr',
    url: 'https://marketing-blog.fr/guest-posts',
    domainAuthority: 48,
    pageAuthority: 42,
    type: 'guest-blogging',
    difficulty: 'medium',
    status: 'new',
    contactEmail: 'editor@marketing-blog.fr',
    notes: 'Accepts guest posts about SEO and digital marketing',
    estimatedValue: 85,
    discoveredDate: '2024-11-20',
  },
  {
    id: '2',
    domain: 'entrepreneur-magazine.fr',
    url: 'https://entrepreneur-magazine.fr/resources/marketing',
    domainAuthority: 62,
    pageAuthority: 58,
    type: 'resource-page',
    difficulty: 'hard',
    status: 'contacted',
    contactEmail: 'contact@entrepreneur-magazine.fr',
    notes: 'Resource page for marketing tools. Sent email on 2024-11-18',
    estimatedValue: 95,
    discoveredDate: '2024-11-15',
    lastContactDate: '2024-11-18',
  },
  {
    id: '3',
    domain: 'tech-startup.fr',
    url: 'https://tech-startup.fr/blog/broken-page',
    domainAuthority: 41,
    pageAuthority: 35,
    type: 'broken-link',
    difficulty: 'easy',
    status: 'new',
    contactEmail: 'webmaster@tech-startup.fr',
    notes: 'Found broken link to competitor. Offer our content as replacement',
    estimatedValue: 70,
    discoveredDate: '2024-11-22',
  },
];

export const outreachTemplates: OutreachTemplate[] = [
  {
    id: 'guest-post-1',
    name: 'Guest Post Outreach - Generic',
    type: 'guest-blogging',
    subject: 'Proposition d\'article invité pour {domain}',
    body: `Bonjour {name},

Je m'appelle {myName} de Boost Activité, une agence de marketing digital basée à Paris.

Je suis tombé sur {domain} et j'ai été impressionné par la qualité de vos articles, notamment {exampleArticle}.

Je me demandais si vous acceptiez les articles invités ? J'aimerais proposer un article de {wordCount} mots sur le sujet : "{proposedTitle}".

Cet article apporterait de la valeur à vos lecteurs car il couvre :
• {point1}
• {point2}
• {point3}

Je suis expert en {expertise} avec {yearsExperience} ans d'expérience. Vous pouvez voir quelques exemples de mon travail ici : {portfolioLink}

Qu'en pensez-vous ? Je serais ravi d'en discuter.

Cordialement,
{myName}
{myTitle}
Boost Activité
{myEmail}`,
    followUpSubject: 'Re: Proposition d\'article invité pour {domain}',
    followUpBody: `Bonjour {name},

Je voulais juste faire un suivi rapide sur mon email précédent concernant une proposition d'article invité.

Êtes-vous toujours intéressé ? Je peux ajuster le sujet si vous avez d'autres préférences.

Merci !

Cordialement,
{myName}`,
    variables: [
      'name',
      'domain',
      'myName',
      'myTitle',
      'myEmail',
      'exampleArticle',
      'wordCount',
      'proposedTitle',
      'point1',
      'point2',
      'point3',
      'expertise',
      'yearsExperience',
      'portfolioLink',
    ],
    successRate: 15,
  },

  {
    id: 'broken-link-1',
    name: 'Broken Link Building',
    type: 'broken-link',
    subject: 'Lien cassé sur {domain} - Suggestion de remplacement',
    body: `Bonjour {name},

Je m'appelle {myName} et je naviguais sur {domain} aujourd'hui (super site au passage !).

J'ai remarqué que vous avez un lien cassé sur cette page : {pageUrl}

Le lien pointe vers : {brokenUrl}
(Erreur 404)

Je voulais vous le signaler car ça impacte l'expérience utilisateur et votre SEO.

J'ai justement écrit un article similaire qui pourrait remplacer ce lien :
{myContentUrl}

Il couvre {topic} de manière complète et pourrait être utile à vos lecteurs.

Qu'en pensez-vous ?

Merci et bonne journée !

Cordialement,
{myName}
{myTitle}
Boost Activité`,
    followUpSubject: 'Re: Lien cassé sur {domain}',
    followUpBody: `Bonjour {name},

Avez-vous eu le temps de regarder mon email concernant le lien cassé sur {pageUrl} ?

Je serais ravi de vous aider à améliorer cette page.

Merci !

{myName}`,
    variables: [
      'name',
      'domain',
      'myName',
      'myTitle',
      'pageUrl',
      'brokenUrl',
      'myContentUrl',
      'topic',
    ],
    successRate: 25,
  },

  {
    id: 'resource-page-1',
    name: 'Resource Page Link Request',
    type: 'resource-page',
    subject: 'Suggestion de ressource pour {pageTitle}',
    body: `Bonjour {name},

Je suis tombé sur votre excellente page de ressources : {pageUrl}

C'est une liste vraiment complète sur {topic} !

Je me demandais si vous seriez intéressé d'ajouter notre {resourceType} à votre liste ?

{resourceUrl}

C'est {resourceDescription}. Nous avons déjà aidé plus de {numberOfUsers} utilisateurs.

Voici ce qui le rend unique :
• {uniquePoint1}
• {uniquePoint2}
• {uniquePoint3}

Je pense que ça pourrait vraiment apporter de la valeur à vos visiteurs.

Qu'en pensez-vous ?

Merci d'avance !

Cordialement,
{myName}
{myTitle}
Boost Activité`,
    variables: [
      'name',
      'pageTitle',
      'pageUrl',
      'topic',
      'resourceType',
      'resourceUrl',
      'resourceDescription',
      'numberOfUsers',
      'uniquePoint1',
      'uniquePoint2',
      'uniquePoint3',
      'myName',
      'myTitle',
    ],
    successRate: 20,
  },

  {
    id: 'unlinked-mention-1',
    name: 'Unlinked Brand Mention',
    type: 'unlinked-mention',
    subject: 'Merci pour la mention de Boost Activité !',
    body: `Bonjour {name},

Je viens de tomber sur votre article : {articleUrl}

Merci d'avoir mentionné Boost Activité ! 🙏

Je me demandais si vous pourriez transformer la mention en lien vers notre site ?
Ça aiderait vraiment nos lecteurs à nous trouver.

Voici notre URL : https://boostactivity.fr

Si jamais vous avez besoin d'informations supplémentaires ou d'images, n'hésitez pas !

Merci encore et continuez votre excellent travail !

Cordialement,
{myName}
{myTitle}
Boost Activité`,
    variables: ['name', 'articleUrl', 'myName', 'myTitle'],
    successRate: 40,
  },

  {
    id: 'partnership-1',
    name: 'Partnership Link Exchange',
    type: 'partnership',
    subject: 'Partenariat entre {myDomain} et {domain}',
    body: `Bonjour {name},

Je m'appelle {myName}, responsable du développement chez Boost Activité.

Nous sommes une agence de marketing digital spécialisée en {specialization}.

J'ai remarqué que nos audiences se chevauchent et je pense qu'un partenariat pourrait être bénéfique pour nos deux entreprises.

Je propose :
• Échange de liens sur nos pages partenaires
• Partage de contenu sur nos réseaux sociaux
• Possibles collaborations sur des projets clients

Nous avons {monthlyTraffic} visiteurs mensuels et une audience engagée de professionnels du marketing.

Seriez-vous intéressé à en discuter ?

Voici notre site : {myWebsite}

Au plaisir d'échanger !

Cordialement,
{myName}
{myTitle}
Boost Activité
{myEmail}
{myPhone}`,
    variables: [
      'name',
      'domain',
      'myDomain',
      'myName',
      'myTitle',
      'myEmail',
      'myPhone',
      'specialization',
      'monthlyTraffic',
      'myWebsite',
    ],
    successRate: 12,
  },
];

export const linkBuildingCampaigns: LinkBuildingCampaign[] = [
  {
    id: 'campaign-1',
    name: 'Q4 2024 - Guest Blogging',
    type: 'guest-blogging',
    targetBacklinks: 20,
    acquiredBacklinks: 3,
    status: 'active',
    startDate: '2024-10-01',
    opportunities: ['1', '4', '7', '9'],
    results: {
      contacted: 15,
      responded: 8,
      accepted: 5,
      rejected: 3,
      completed: 3,
    },
  },
  {
    id: 'campaign-2',
    name: 'Broken Link Building - November 2024',
    type: 'broken-link',
    targetBacklinks: 10,
    acquiredBacklinks: 2,
    status: 'active',
    startDate: '2024-11-01',
    opportunities: ['3', '8'],
    results: {
      contacted: 12,
      responded: 6,
      accepted: 3,
      rejected: 3,
      completed: 2,
    },
  },
];

// ===== HELPERS =====

/**
 * Calculer le Domain Authority Score moyen
 */
export function calculateAverageDomainAuthority(backlinks: Backlink[]): number {
  if (backlinks.length === 0) return 0;
  const activeBacklinks = backlinks.filter((b) => b.status === 'active');
  const sum = activeBacklinks.reduce((acc, b) => acc + b.domainAuthority, 0);
  return Math.round(sum / activeBacklinks.length);
}

/**
 * Obtenir les backlinks par catégorie
 */
export function getBacklinksByCategory(
  backlinks: Backlink[],
  category: BacklinkCategory
): Backlink[] {
  return backlinks.filter((b) => b.category === category);
}

/**
 * Obtenir les opportunités par statut
 */
export function getOpportunitiesByStatus(
  opportunities: LinkOpportunity[],
  status: LinkOpportunity['status']
): LinkOpportunity[] {
  return opportunities.filter((o) => o.status === status);
}

/**
 * Calculer le taux de conversion d'une campagne
 */
export function calculateCampaignConversionRate(campaign: LinkBuildingCampaign): number {
  const { contacted, completed } = campaign.results;
  if (contacted === 0) return 0;
  return Math.round((completed / contacted) * 100);
}

/**
 * Obtenir le template d'outreach par type
 */
export function getTemplateByType(type: LinkOpportunityType): OutreachTemplate | undefined {
  return outreachTemplates.find((t) => t.type === type);
}

/**
 * Remplacer les variables dans un template
 */
export function fillTemplate(
  template: OutreachTemplate,
  variables: { [key: string]: string }
): { subject: string; body: string } {
  let subject = template.subject;
  let body = template.body;

  Object.entries(variables).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    subject = subject.replace(new RegExp(placeholder, 'g'), value);
    body = body.replace(new RegExp(placeholder, 'g'), value);
  });

  return { subject, body };
}

/**
 * Priorités des opportunités basées sur DA et difficulté
 */
export function prioritizeOpportunities(opportunities: LinkOpportunity[]): LinkOpportunity[] {
  return [...opportunities].sort((a, b) => {
    // Score = DA * valeur estimée / difficulté
    const difficultyMultiplier = { easy: 3, medium: 2, hard: 1 };
    const scoreA = a.domainAuthority * a.estimatedValue * difficultyMultiplier[a.difficulty];
    const scoreB = b.domainAuthority * b.estimatedValue * difficultyMultiplier[b.difficulty];
    return scoreB - scoreA;
  });
}

/**
 * Statistiques globales de link building
 */
export function getLinkBuildingStats(backlinks: Backlink[], opportunities: LinkOpportunity[]) {
  const activeBacklinks = backlinks.filter((b) => b.status === 'active');
  const dofollowBacklinks = activeBacklinks.filter((b) => b.linkType === 'dofollow');

  return {
    totalBacklinks: activeBacklinks.length,
    dofollowBacklinks: dofollowBacklinks.length,
    nofollowBacklinks: activeBacklinks.length - dofollowBacklinks.length,
    averageDA: calculateAverageDomainAuthority(backlinks),
    totalOpportunities: opportunities.length,
    newOpportunities: getOpportunitiesByStatus(opportunities, 'new').length,
    contacted: getOpportunitiesByStatus(opportunities, 'contacted').length,
    completed: getOpportunitiesByStatus(opportunities, 'completed').length,
  };
}
