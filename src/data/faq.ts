/**
 * FAQ avec Schema.org pour Rich Snippets
 * Optimisé pour apparaître dans les "People Also Ask" de Google
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[]; // Mots-clés pour le SEO
}

export const faqCategories = [
  { id: 'services', name: 'Services', slug: 'services' },
  { id: 'tarifs', name: 'Tarifs & Pricing', slug: 'tarifs' },
  { id: 'processus', name: 'Processus & Méthode', slug: 'processus' },
  { id: 'resultats', name: 'Résultats & ROI', slug: 'resultats' },
  { id: 'technique', name: 'Questions Techniques', slug: 'technique' },
  { id: 'general', name: 'Questions Générales', slug: 'general' },
];

export const faqItems: FAQItem[] = [
  // ===== SERVICES =====
  {
    id: '1',
    question: 'Quels services proposez-vous chez Boost Activity ?',
    answer: `Boost Activity propose une gamme complète de services de marketing digital :

**1. Référencement SEO**
- Audit SEO complet
- Optimisation on-page et off-page
- Link building
- SEO local
- Suivi des performances

**2. Google Ads (SEA)**
- Création de campagnes Search, Display, Shopping
- Optimisation du Quality Score
- Remarketing
- Suivi des conversions

**3. Réseaux Sociaux**
- Stratégie social media
- Création de contenu
- Community management
- Publicité sociale (Facebook Ads, Instagram Ads, LinkedIn Ads)

**4. Content Marketing**
- Création de contenu SEO-friendly
- Blog professionnel
- Infographies et vidéos
- Email marketing

**5. Web Analytics**
- Configuration Google Analytics 4
- Tableaux de bord personnalisés
- Rapports de performance
- Recommandations data-driven

Tous nos services sont personnalisables selon vos besoins et votre budget.`,
    category: 'services',
    keywords: ['services marketing digital', 'agence SEO', 'Google Ads', 'réseaux sociaux'],
  },

  {
    id: '2',
    question: 'Quelle est la différence entre SEO et Google Ads ?',
    answer: `Le **SEO (Search Engine Optimization)** et **Google Ads** sont deux stratégies complémentaires mais différentes :

**SEO (Référencement Naturel) :**
- Résultats organiques (non payants)
- Résultats à moyen/long terme (3-6 mois)
- Trafic "gratuit" mais nécessite du temps et des ressources
- Résultats durables dans le temps
- Taux de clics plus élevé (28% pour position #1)
- Crédibilité et confiance élevées

**Google Ads (Référencement Payant) :**
- Annonces payantes en haut des résultats
- Résultats immédiats (dès la première heure)
- Coût par clic (CPC)
- Trafic s'arrête quand on arrête de payer
- Taux de clics plus faible (3-5%)
- Ciblage très précis (démographie, géographie, remarketing)

**Notre recommandation :**
Combiner les deux pour maximiser votre visibilité ! Le SEO pour le long terme, Google Ads pour les résultats immédiats.`,
    category: 'services',
    keywords: ['SEO vs Google Ads', 'référencement naturel', 'référencement payant', 'SEA'],
  },

  // ===== TARIFS =====
  {
    id: '3',
    question: 'Combien coûtent vos services de marketing digital ?',
    answer: `Nos tarifs varient selon vos besoins et objectifs. Voici nos gammes de prix :

**SEO (Référencement Naturel) :**
- Audit SEO : À partir de 800€ (one-time)
- Accompagnement mensuel : 500€ - 3000€/mois
- Dépend de : taille du site, concurrence, objectifs

**Google Ads :**
- Gestion de campagnes : 15-20% du budget publicitaire
- Budget pub minimum recommandé : 1000€/mois
- Setup initial : 500€ (configuration compte, tracking, première campagne)

**Réseaux Sociaux :**
- Community management : 800€ - 2000€/mois
- Création de contenu : 300€ - 1000€/mois
- Publicité sociale : 15-20% du budget pub

**Packages All-Inclusive :**
- **Starter** : 490€/mois (Site web, SEO on-page, Google My Business, réseaux sociaux)
- **Growth** : 990€/mois (SEO avancé, campagnes publicitaires, email marketing, CRM)
- **Performance** : 1990€/mois (Stratégie complète sur-mesure, équipe dédiée, support 24/7)

**Garanties :**
- Sans engagement (préavis 1 mois)
- Rapports mensuels détaillés
- Support client réactif
- ROI garanti ou remboursé

Contactez-nous pour un devis personnalisé gratuit !`,
    category: 'tarifs',
    keywords: ['prix marketing digital', 'tarif SEO', 'coût Google Ads', 'budget marketing'],
  },

  {
    id: '4',
    question: 'Proposez-vous des forfaits sans engagement ?',
    answer: `Oui ! Chez Boost Activity, nous proposons des **forfaits sans engagement** avec préavis d'1 mois.

**Pourquoi sans engagement ?**
- Nous croyons en la qualité de notre travail
- Vous devez voir les résultats pour rester avec nous
- Flexibilité totale pour votre business

**Modalités :**
- Contrat mensuel renouvelable
- Préavis : 1 mois avant la fin du mois en cours
- Aucune pénalité de résiliation
- Vous gardez tous les accès et le travail effectué

**Ce que nous garantissons :**
- Transparence totale sur les actions menées
- Rapports mensuels détaillés
- Réunions de suivi régulières
- Disponibilité et réactivité
- ROI mesurable

**Notre philosophie :**
"Si nous ne vous apportons pas de valeur, vous devez pouvoir partir librement."

Nos clients restent en moyenne **3+ ans** avec nous, car ils voient les résultats !`,
    category: 'tarifs',
    keywords: ['forfait sans engagement', 'contrat marketing', 'flexibilité', 'préavis'],
  },

  // ===== PROCESSUS =====
  {
    id: '5',
    question: 'Comment se déroule la collaboration avec Boost Activity ?',
    answer: `Notre processus de collaboration est structuré en **5 étapes clés** :

**1. Découverte & Audit (Semaine 1)**
- Appel de découverte (1h)
- Analyse de votre situation actuelle
- Audit complet (site, concurrents, marché)
- Définition des objectifs SMART

**2. Stratégie & Proposition (Semaine 2)**
- Élaboration de la stratégie personnalisée
- Plan d'action détaillé sur 3-6-12 mois
- Présentation et validation
- Signature du contrat

**3. Setup & Lancement (Semaines 3-4)**
- Configuration des outils (Analytics, Search Console, etc.)
- Accès nécessaires (site, comptes, etc.)
- Mise en place des campagnes
- Premiers contenus / optimisations

**4. Exécution & Optimisation (En continu)**
- Exécution du plan d'action
- Création de contenu régulière
- Optimisations basées sur les données
- Tests A/B et ajustements

**5. Reporting & Suivi (Mensuel)**
- Rapport de performance détaillé
- Réunion de suivi (1h/mois)
- Recommandations pour le mois suivant
- Ajustement de la stratégie si nécessaire

**Communication :**
- Email : Réponse sous 24h
- Slack/WhatsApp : Support réactif
- Réunions mensuelles : Review + Planning
- Dashboard 24/7 : Accès à vos données en temps réel`,
    category: 'processus',
    keywords: ['processus collaboration', 'méthodologie agence', 'étapes projet marketing'],
  },

  {
    id: '6',
    question: 'Combien de temps faut-il pour voir des résultats ?',
    answer: `Les délais varient selon le service :

**SEO (Référencement Naturel) :**
- **Premiers résultats :** 2-3 mois
- **Résultats significatifs :** 6-9 mois
- **Plein potentiel :** 12-18 mois
- **ROI typique :** 500-1000% à 12 mois

**Pourquoi ça prend du temps ?**
- Google met du temps à indexer et réévaluer votre site
- Construction progressive de l'autorité
- Concurrence dans votre secteur
- Création de contenu prend du temps

**Google Ads (Référencement Payant) :**
- **Premiers résultats :** 1 heure (dès activation)
- **Optimisation :** 2-4 semaines
- **ROI optimal :** 1-2 mois
- **ROI typique :** 200-400% à 3 mois

**Réseaux Sociaux :**
- **Premiers résultats :** 1-2 semaines (engagement)
- **Croissance significative :** 2-3 mois
- **Communauté établie :** 6-12 mois
- **ROI typique :** 300-500% à 6 mois

**Content Marketing :**
- **Premiers résultats :** 1-3 mois
- **Trafic significatif :** 6-12 mois
- **ROI typique :** 600-800% à 12 mois

**Notre recommandation :**
Commencer par Google Ads (résultats immédiats) tout en investissant dans le SEO (long terme). Cette stratégie combinée maximise votre ROI.

**Timeline réaliste pour une PME :**
- Mois 1-3 : Setup + Quick Wins
- Mois 4-6 : Premiers résultats mesurables
- Mois 7-12 : Croissance accélérée
- Mois 12+ : ROI exponentiel`,
    category: 'resultats',
    keywords: ['délai résultats SEO', 'temps résultats marketing digital', 'ROI marketing'],
  },

  // ===== RÉSULTATS =====
  {
    id: '7',
    question: 'Garantissez-vous des résultats ?',
    answer: `Nous sommes l'une des rares agences à offrir une **garantie de résultats** :

**Ce que nous garantissons :**

**Pour le SEO :**
- Amélioration du positionnement sur vos mots-clés cibles
- Augmentation du trafic organique de minimum 30% en 6 mois
- Amélioration des Core Web Vitals (performance)
- Rapports mensuels transparents

**Pour Google Ads :**
- ROI positif dès le 3ème mois
- Optimisation continue du coût par acquisition
- Quality Score > 7/10 sur vos campagnes principales
- Rapports hebdomadaires détaillés

**Pour les Réseaux Sociaux :**
- Croissance d'audience de minimum 20% par trimestre
- Taux d'engagement > 3%
- Génération de leads qualifiés

**Notre Garantie "Satisfait ou Remboursé" :**
Si après 3 mois vous n'êtes pas satisfait des résultats, nous vous remboursons le mois en cours. Sans questions, sans conditions.

**Pourquoi nous pouvons garantir ça ?**
- Méthodologie éprouvée sur 100+ clients
- Équipe d'experts certifiés (Google Partner, Meta Blueprint)
- Outils professionnels et technologies de pointe
- Process d'optimisation continue

**Ce que nous NE garantissons PAS :**
- Position #1 sur Google (personne ne peut garantir ça)
- Résultats en 1 mois (soyons réalistes)
- Miracles sans travail de votre côté

**Notre philosophie :**
Nous sommes vos partenaires de croissance. Si vous ne gagnez pas, nous ne gagnons pas.`,
    category: 'resultats',
    keywords: ['garantie résultats SEO', 'ROI garanti', 'performance marketing digital'],
  },

  {
    id: '8',
    question: 'Quels sont vos taux de réussite et références clients ?',
    answer: `Nos clients obtiennent en moyenne des résultats exceptionnels :

**Statistiques Globales :**
- **Taux de satisfaction :** 4.9/5 (165 avis clients)
- **Taux de rétention :** 92% (clients qui restent 12+ mois)
- **ROI moyen :** 450% à 12 mois
- **Clients actifs :** 80+ PME et startups

**Résultats Moyens par Service :**

**SEO :**
- +120% de trafic organique en 12 mois
- +85% de leads qualifiés
- Position moyenne : Top 3 sur 70% des mots-clés cibles

**Google Ads :**
- ROI moyen : 380%
- Coût par lead : -40% après 3 mois d'optimisation
- Quality Score moyen : 8.2/10

**Réseaux Sociaux :**
- +150% de croissance d'audience en 6 mois
- Taux d'engagement moyen : 5.8%
- +200% de trafic social vers le site

**Exemples de Résultats Clients :**

**Cabinet d'Avocats (Paris) :**
- Trafic : +240% en 8 mois
- Leads : +180%
- ROI : 620%

**E-commerce Mode :**
- CA : +320% en 12 mois
- Panier moyen : +45%
- ROI Google Ads : 520%

**Startup SaaS B2B :**
- Leads qualifiés : +400% en 6 mois
- Coût par lead : -55%
- Pipeline généré : 2.4M€

**Références Vérifiables :**
Nous pouvons vous mettre en contact avec des clients similaires à votre secteur pour des témoignages directs.

**Certifications :**
- Google Partner
- Meta Business Partner
- Certifications Google Ads, Analytics, SEO
- 10+ ans d'expérience cumulée

Consultez nos études de cas complètes sur notre page [Case Studies](/case-studies).`,
    category: 'resultats',
    keywords: ['résultats clients', 'témoignages', 'taux de réussite', 'ROI réel'],
  },

  // ===== TECHNIQUE =====
  {
    id: '9',
    question: 'Avez-vous besoin d\'accès à mon site web ?',
    answer: `Oui, pour certains services nous aurons besoin d'accès :

**Accès Nécessaires selon le Service :**

**Pour le SEO :**
- **Accès CMS** (WordPress, Shopify, etc.) : Pour optimisations techniques
- **Google Search Console** : Suivi du référencement
- **Google Analytics** : Analyse des performances
- **Niveau requis :** Éditeur ou Administrateur

**Pour Google Ads :**
- **Google Ads** : Accès administrateur
- **Google Tag Manager** : Configuration du tracking
- **Google Analytics** : Suivi des conversions
- **Niveau requis :** Administrateur

**Pour les Réseaux Sociaux :**
- **Facebook Business Manager** : Rôle Analyste/Annonceur
- **Instagram** : Accès au compte professionnel
- **LinkedIn Pages** : Administrateur de page
- **Niveau requis :** Éditeur ou Administrateur

**Sécurité & Confidentialité :**
- Nous signons un **NDA (accord de confidentialité)**
- Accès via des comptes dédiés (pas de partage de mot de passe)
- Authentification à deux facteurs (2FA) obligatoire
- Toutes les actions sont tracées et auditables
- Vous gardez le contrôle total et pouvez révoquer l'accès à tout moment

**Ce à quoi nous N'avons PAS accès :**
- Données bancaires
- Informations clients sensibles (RGPD)
- Mot de passe principal
- Facturation/Paiements

**Propriété Intellectuelle :**
- Vous restez propriétaire de tous vos comptes
- Vous restez propriétaire de tout le contenu créé
- En cas d'arrêt de collaboration, vous gardez tout

**Alternative sans accès :**
Si vous préférez ne pas donner d'accès, nous pouvons travailler en mode "conseil" où nous vous guidons pour faire les modifications vous-même.`,
    category: 'technique',
    keywords: ['accès site web', 'sécurité données', 'confidentialité', 'NDA'],
  },

  {
    id: '10',
    question: 'Travaillez-vous avec tous les types de sites (WordPress, Shopify, etc.) ?',
    answer: `Oui ! Nous travaillons avec toutes les plateformes web courantes :

**CMS & Plateformes Supportées :**

**WordPress** ✅
- La plateforme que nous maîtrisons le mieux
- Plugins SEO : Yoast, Rank Math, All in One SEO
- Optimisation technique poussée
- 60% de nos clients sont sur WordPress

**Shopify** ✅
- Expertise e-commerce
- Optimisation SEO malgré les limitations
- Intégration Google Shopping
- Apps recommandées

**Wix** ✅
- Optimisations possibles malgré les contraintes
- SEO basique à avancé
- Recommandation : migration vers WordPress si budget

**Webflow** ✅
- Excellente plateforme pour le SEO
- Optimisations techniques faciles
- Design et performance

**Squarespace** ✅
- Optimisations SEO limitées mais efficaces
- Content marketing et link building prioritaires

**PrestaShop** ✅
- E-commerce français
- SEO e-commerce spécialisé
- Optimisation des fiches produits

**Sites Custom (HTML/React/Vue/Angular)** ✅
- Expertise technique avancée
- SEO technique poussé
- Server-Side Rendering (SSR)
- Optimisation des Core Web Vitals

**Magento** ✅
- E-commerce entreprise
- Optimisations complexes
- Partenaires techniques disponibles

**Plateformes Rares :**
Si votre site est sur une plateforme moins courante, contactez-nous ! Nous sommes capables de nous adapter à 95% des technologies web.

**Notre Recommandation :**
Pour le SEO optimal : **WordPress** (flexibilité) ou **Webflow** (performance).
Pour l'e-commerce : **Shopify** (simplicité) ou **PrestaShop** (sur-mesure).

**Cas Particulier - Site Trop Vieux :**
Si votre site a plus de 5 ans et n'est pas responsive, nous pouvons recommander une refonte complète. Nous avons des partenaires développeurs pour ça.`,
    category: 'technique',
    keywords: ['WordPress SEO', 'Shopify', 'plateformes web', 'CMS'],
  },

  // ===== GÉNÉRAL =====
  {
    id: '11',
    question: 'Pourquoi choisir Boost Activity plutôt qu\'une autre agence ?',
    answer: `Voici ce qui nous différencie des autres agences :

**1. Expertise Prouvée**
- 10+ ans d'expérience cumulée
- Google Partner certifié
- 100+ projets réussis
- Taux de satisfaction : 4.9/5

**2. Transparence Totale**
- Rapports mensuels détaillés
- Dashboard 24/7 avec vos données en temps réel
- Communication proactive (on ne disparaît jamais)
- Pricing clair et sans frais cachés

**3. Sans Engagement**
- Contrats mensuels (préavis 1 mois)
- Pas de période d'engagement minimum
- Garantie "Satisfait ou Remboursé"
- Vous gardez tous vos accès

**4. ROI Garanti**
- Objectifs chiffrés dès le départ
- Méthodologie data-driven
- Optimisation continue
- ROI moyen : 450% à 12 mois

**5. Équipe Dédiée**
- 1 chef de projet dédié
- Spécialistes par domaine (SEO, Ads, Social)
- Réunions mensuelles garanties
- Support réactif (réponse sous 24h)

**6. Technologies de Pointe**
- Outils professionnels (Ahrefs, SEMrush, etc.)
- IA pour l'optimisation
- Automatisations smart
- Stack technique à jour

**7. Approche Personnalisée**
- Pas de "one-size-fits-all"
- Stratégie sur-mesure selon vos objectifs
- Flexibilité et adaptabilité
- Nous nous adaptons à VOTRE business

**8. Prix Compétitifs**
- 30% moins cher que les grandes agences parisiennes
- Même qualité (voire meilleure)
- Packages flexibles
- ROI exceptionnel

**9. Résultats Mesurables**
- KPIs clairs et suivis
- Rapports compréhensibles (pas de jargon)
- Insights actionnables
- Recommandations concrètes

**10. Passion & Engagement**
- Nous aimons ce qu'on fait
- Votre succès = notre succès
- Relation de partenariat (pas juste prestataire)
- Disponibles et investis

**Ce que disent nos clients :**
"Boost Activity a transformé notre présence en ligne. +240% de trafic en 8 mois !" - Marie, Cabinet d'Avocats

"Enfin une agence qui tient ses promesses et répond rapidement !" - Thomas, E-commerce

"ROI exceptionnel, transparence totale, je recommande les yeux fermés." - Sophie, Startup SaaS

**Essayez Sans Risque :**
Premier mois sans engagement. Si vous n'êtes pas satisfait, vous partez sans payer. Simple.`,
    category: 'general',
    keywords: ['pourquoi Boost Activity', 'différenciation agence', 'avantages'],
  },

  {
    id: '12',
    question: 'Dans quelles villes et régions intervenez-vous ?',
    answer: `Nous intervenons **partout en France et à l'international** !

**Modes d'Intervention :**

**100% À Distance** ✅
- Visioconférences régulières (Zoom, Google Meet)
- Communication par email, Slack, WhatsApp
- Dashboard en ligne 24/7
- 80% de nos clients sont en remote

**Présentiel Possible** ✅
- Basés à **Paris**
- Déplacements possibles en Île-de-France
- Déplacements en province pour gros projets
- Frais de déplacement selon distance

**Nos Clients sont Répartis :**
- **Paris & Île-de-France :** 40%
- **Grandes villes françaises :** 35% (Lyon, Marseille, Bordeaux, Toulouse, Nantes, etc.)
- **Reste de la France :** 20%
- **International :** 5% (Belgique, Suisse, Luxembourg)

**Avantages du Remote :**
- Flexibilité maximale
- Pas de frais de déplacement
- Réunions plus fréquentes possibles
- Communication asynchrone efficace

**Quand le Présentiel est Utile :**
- Kick-off initial (recommandé mais pas obligatoire)
- Formations d'équipe
- Workshops stratégiques
- Événements spéciaux

**SEO Local :**
Nous sommes experts en **SEO local** pour toutes les villes de France :
- Optimisation Google My Business
- Citations dans annuaires locaux
- Contenu géolocalisé
- Link building local

**Langues :**
- Français : natif
- Anglais : courant
- Autres langues : partenaires disponibles

**Notre Philosophie :**
Peu importe où vous êtes, nous vous accompagnons avec la même qualité de service. La distance n'est plus un obstacle grâce aux outils digitaux !

**Zones d'Intervention Privilégiées :**
- Paris et Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
- Lyon et Auvergne-Rhône-Alpes
- Marseille et PACA
- Bordeaux et Nouvelle-Aquitaine
- Toulouse et Occitanie
- Nantes et Pays de la Loire

Contactez-nous, où que vous soyez ! 🇫🇷🌍`,
    category: 'general',
    keywords: ['zones intervention', 'Paris', 'France', 'international', 'remote'],
  },
];

/**
 * Helper pour obtenir les FAQs par catégorie
 */
export function getFAQsByCategory(categoryId: string): FAQItem[] {
  return faqItems.filter((item) => item.category === categoryId);
}

/**
 * Helper pour obtenir toutes les FAQs
 */
export function getAllFAQs(): FAQItem[] {
  return faqItems;
}

/**
 * Générer le Schema.org FAQPage pour le SEO
 */
export function generateFAQSchema(faqs: FAQItem[] = faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
