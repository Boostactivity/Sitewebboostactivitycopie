import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { Target, TrendingUp, Palette, Globe, BarChart3, MessageSquare, Mail, Zap, Check, ArrowRight, ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { SEO } from '../components/SEO';
import { breadcrumbSchema, serviceSchema } from '../utils/seo/schemas';

export function ServiceDetailPage() {
  const { slug } = useParams();

  const servicesData: Record<string, any> = {
    'strategie-digitale': {
      icon: Target,
      title: 'Stratégie digitale',
      subtitle: 'Transformez votre vision en plan d\'action concret',
      description: 'Une stratégie digitale solide est la fondation de toute réussite en ligne. Nous analysons votre marché, vos concurrents et vos objectifs pour créer un plan sur-mesure qui génère des résultats mesurables.',
      benefits: [
        'Vision claire de vos objectifs et moyens',
        'Compréhension approfondie de votre marché',
        'Roadmap détaillée et priorisée',
        'KPIs précis pour mesurer le succès',
        'Avantage concurrentiel identifié',
        'ROI maximisé sur vos investissements',
      ],
      process: [
        {
          title: 'Audit & Diagnostic',
          description: 'Analyse complète de votre présence digitale actuelle, de votre marché et de vos concurrents',
        },
        {
          title: 'Définition des objectifs',
          description: 'Établissement d\'objectifs SMART alignés avec votre vision business',
        },
        {
          title: 'Stratégie & Roadmap',
          description: 'Création d\'un plan d\'action détaillé avec priorités et timeline',
        },
        {
          title: 'Déploiement & Suivi',
          description: 'Mise en œuvre de la stratégie avec suivi régulier des performances',
        },
      ],
      deliverables: [
        'Audit digital complet (30-50 pages)',
        'Analyse concurrentielle détaillée',
        'Personas clients documentés',
        'Roadmap stratégique 12-24 mois',
        'Dashboard KPIs personnalisé',
        'Plan d\'action priorisé',
      ],
      faq: [
        {
          question: 'Combien de temps dure l\'élaboration d\'une stratégie ?',
          answer: 'Typiquement entre 3 et 6 semaines, selon la complexité de votre activité et l\'ampleur de l\'audit requis.',
        },
        {
          question: 'Que se passe-t-il après la stratégie ?',
          answer: 'Nous vous accompagnons dans la mise en œuvre avec nos services d\'exécution, ou vous pouvez implémenter la stratégie en interne avec notre support.',
        },
        {
          question: 'Est-ce adapté aux petites entreprises ?',
          answer: 'Absolument. Nous adaptons l\'ampleur et la profondeur de la stratégie à votre taille et budget, tout en maintenant la même rigueur méthodologique.',
        },
      ],
    },
    'marketing-acquisition': {
      icon: TrendingUp,
      title: 'Marketing & Acquisition',
      subtitle: 'Attirez et convertissez vos clients idéaux',
      description: 'Générez un flux constant de prospects qualifiés et transformez-les en clients fidèles grâce à des stratégies d\'acquisition éprouvées et des tunnels de conversion optimisés.',
      benefits: [
        'Flux constant de leads qualifiés',
        'Taux de conversion optimisés',
        'Coût d\'acquisition maîtrisé',
        'Tunnel de vente performant',
        'Croissance prévisible et scalable',
        'ROI mesurable et transparent',
      ],
      process: [
        {
          title: 'Analyse & Ciblage',
          description: 'Identification précise de votre audience cible et de leurs comportements',
        },
        {
          title: 'Création du tunnel',
          description: 'Conception d\'un parcours client optimisé de la découverte à l\'achat',
        },
        {
          title: 'Campagnes d\'acquisition',
          description: 'Déploiement de campagnes multi-canaux pour générer du trafic qualifié',
        },
        {
          title: 'Optimisation continue',
          description: 'Tests A/B et ajustements pour maximiser les performances',
        },
      ],
      deliverables: [
        'Stratégie d\'acquisition multicanale',
        'Landing pages optimisées',
        'Campagnes publicitaires (Google, Meta, LinkedIn)',
        'Lead magnets et contenus',
        'Email automation setup',
        'Rapports de performance mensuels',
      ],
      faq: [
        {
          question: 'Quels canaux d\'acquisition utilisez-vous ?',
          answer: 'Nous utilisons tous les canaux pertinents pour votre business : SEO, SEA, Social Ads, content marketing, email, partnerships, et plus selon vos besoins.',
        },
        {
          question: 'Quel budget prévoir pour l\'acquisition ?',
          answer: 'Nous recommandons généralement de démarrer avec 1500-3000€/mois en média, ajustable selon vos objectifs et votre secteur.',
        },
        {
          question: 'Combien de temps avant de voir des résultats ?',
          answer: 'Les premiers leads arrivent généralement sous 2-4 semaines. L\'optimisation complète du tunnel prend 2-3 mois.',
        },
      ],
    },
    'branding': {
      icon: Palette,
      title: 'Branding & Image de marque',
      subtitle: 'Construisez une marque qui marque les esprits',
      description: 'Créez une identité de marque forte, cohérente et mémorable qui résonne avec votre audience et vous différencie de la concurrence. Du logo à la stratégie de brand, nous façonnons votre image.',
      benefits: [
        'Identité visuelle unique et impactante',
        'Différenciation forte de la concurrence',
        'Cohérence sur tous les touchpoints',
        'Reconnaissance de marque accrue',
        'Confiance et crédibilité renforcées',
        'Valeur perçue augmentée',
      ],
      process: [
        {
          title: 'Brand Discovery',
          description: 'Exploration de vos valeurs, mission, vision et positionnement',
        },
        {
          title: 'Brand Strategy',
          description: 'Définition de votre plateforme de marque et storytelling',
        },
        {
          title: 'Identité visuelle',
          description: 'Création du logo, couleurs, typographie et éléments graphiques',
        },
        {
          title: 'Brand Guidelines',
          description: 'Documentation complète pour garantir la cohérence',
        },
      ],
      deliverables: [
        'Plateforme de marque complète',
        'Logo et déclinaisons',
        'Charte graphique détaillée',
        'Templates (cartes de visite, docs, présentations)',
        'Assets digitaux (bannières, pictogrammes)',
        'Brand book complet',
      ],
      faq: [
        {
          question: 'Dois-je refaire toute mon identité ?',
          answer: 'Pas nécessairement. Nous pouvons faire un refresh partiel ou un rebranding complet selon vos besoins et votre budget.',
        },
        {
          question: 'Combien de concepts me proposez-vous ?',
          answer: 'Nous présentons 2-3 directions créatives initiales, puis affinons votre choix avec 2-3 itérations.',
        },
        {
          question: 'Que comprend le brand book ?',
          answer: 'Positionnement, valeurs, logo et usages, couleurs, typographie, iconographie, tone of voice, et exemples d\'applications.',
        },
      ],
    },
    'creation-web': {
      icon: Globe,
      title: 'Création web & Tunnels',
      subtitle: 'Sites modernes qui convertissent',
      description: 'Créez une présence en ligne qui impressionne et convertit. Sites vitrine, e-commerce ou landing pages : nous concevons des expériences digitales performantes, rapides et optimisées SEO.',
      benefits: [
        'Design moderne et sur-mesure',
        'Expérience utilisateur optimale',
        'Performance et rapidité',
        'Optimisation SEO intégrée',
        'Responsive tous écrans',
        'Conversion maximisée',
      ],
      process: [
        {
          title: 'UX Research',
          description: 'Analyse des besoins utilisateurs et parcours optimal',
        },
        {
          title: 'Design UI',
          description: 'Création de maquettes modernes et sur-mesure',
        },
        {
          title: 'Développement',
          description: 'Code propre, performant et maintenable',
        },
        {
          title: 'Tests & Lancement',
          description: 'QA complète et mise en ligne optimisée',
        },
      ],
      deliverables: [
        'Site web complet (5-15 pages selon formule)',
        'Design responsive tous écrans',
        'CMS intégré pour autonomie',
        'Optimisation SEO on-page',
        'Intégrations (analytics, forms, CRM)',
        'Formation et documentation',
      ],
      faq: [
        {
          question: 'Quel CMS utilisez-vous ?',
          answer: 'Nous travaillons avec WordPress, Webflow, ou des solutions headless selon vos besoins techniques et budget.',
        },
        {
          question: 'Le site sera-t-il optimisé pour mobile ?',
          answer: 'Absolument. Tous nos sites sont responsive et mobile-first, testés sur tous les appareils.',
        },
        {
          question: 'Puis-je modifier le contenu moi-même ?',
          answer: 'Oui, nous intégrons un CMS intuitif et vous formons à son utilisation pour une totale autonomie.',
        },
      ],
    },
    'seo-sea': {
      icon: BarChart3,
      title: 'SEO & SEA',
      subtitle: 'Dominez les résultats de recherche',
      description: 'Maximisez votre visibilité en ligne avec une stratégie SEO durable et des campagnes SEA performantes. Générez du trafic qualifié et augmentez vos conversions grâce au search marketing.',
      benefits: [
        'Visibilité accrue sur Google',
        'Trafic qualifié et constant',
        'Coût par clic optimisé (SEA)',
        'Positionnement durable (SEO)',
        'ROI mesurable et transparent',
        'Autorité de domaine renforcée',
      ],
      process: [
        {
          title: 'Audit & Recherche',
          description: 'Analyse SEO complète et recherche de mots-clés stratégiques',
        },
        {
          title: 'Stratégie & Setup',
          description: 'Définition de la stratégie et mise en place technique',
        },
        {
          title: 'Optimisation',
          description: 'Optimisation on-page, off-page et lancement des campagnes SEA',
        },
        {
          title: 'Monitoring & Scaling',
          description: 'Suivi continu et optimisation des performances',
        },
      ],
      deliverables: [
        'Audit SEO technique complet',
        'Stratégie de mots-clés',
        'Optimisation on-page',
        'Création de contenu optimisé',
        'Campagnes Google Ads',
        'Rapports mensuels détaillés',
      ],
      faq: [
        {
          question: 'Combien de temps pour voir des résultats SEO ?',
          answer: 'Les premiers résultats apparaissent sous 3-4 mois, avec un impact significatif à 6-12 mois. Le SEO est un investissement long terme.',
        },
        {
          question: 'Quelle différence entre SEO et SEA ?',
          answer: 'Le SEO est le référencement naturel (gratuit mais long), le SEA est la publicité payante (immédiat mais coûteux). Nous recommandons les deux.',
        },
        {
          question: 'Garantissez-vous un classement #1 ?',
          answer: 'Personne ne peut garantir une position précise. Nous garantissons notre méthodologie éprouvée et une amélioration mesurable de vos positions.',
        },
      ],
    },
    'social-media': {
      icon: MessageSquare,
      title: 'Social Media & Contenu',
      subtitle: 'Engagez votre communauté',
      description: 'Créez une présence sociale forte et engageante. Du contenu créatif à la gestion de communauté, nous développons votre audience et transformons vos followers en clients.',
      benefits: [
        'Présence sociale professionnelle',
        'Communauté engagée et fidèle',
        'Notoriété de marque accrue',
        'Contenu cohérent et impactant',
        'Trafic et leads qualifiés',
        'Relation client renforcée',
      ],
      process: [
        {
          title: 'Stratégie sociale',
          description: 'Définition de votre présence et ligne éditoriale sur chaque plateforme',
        },
        {
          title: 'Création de contenu',
          description: 'Production de visuels, vidéos et textes engageants',
        },
        {
          title: 'Community Management',
          description: 'Animation, modération et engagement avec votre audience',
        },
        {
          title: 'Social Ads',
          description: 'Campagnes publicitaires ciblées pour amplifier votre portée',
        },
      ],
      deliverables: [
        'Stratégie social media complète',
        'Calendrier éditorial mensuel',
        'Création de contenu (posts, stories, reels)',
        'Community management quotidien',
        'Campagnes publicitaires',
        'Rapports mensuels d\'engagement',
      ],
      faq: [
        {
          question: 'Sur quels réseaux devons-nous être présents ?',
          answer: 'Cela dépend de votre audience. Nous analysons où se trouve votre cible (LinkedIn B2B, Instagram lifestyle, TikTok jeunes, etc.)',
        },
        {
          question: 'À quelle fréquence publier ?',
          answer: 'Nous recommandons 3-5 posts par semaine minimum par plateforme pour maintenir l\'engagement et la visibilité.',
        },
        {
          question: 'Créez-vous aussi les visuels et vidéos ?',
          answer: 'Oui, nous avons une équipe créative qui produit tous les contenus visuels, photos et vidéos nécessaires.',
        },
      ],
    },
    'emailing-crm': {
      icon: Mail,
      title: 'Emailing & CRM',
      subtitle: 'Fidélisez et maximisez la valeur client',
      description: 'Développez une relation durable avec vos clients grâce à l\'email marketing et un CRM bien configuré. Automatisez, personnalisez et maximisez la lifetime value de chaque client.',
      benefits: [
        'Base de données organisée',
        'Communication personnalisée',
        'Automation intelligente',
        'Fidélisation accrue',
        'Lifetime value augmentée',
        'ROI exceptionnel (42:1 en moyenne)',
      ],
      process: [
        {
          title: 'Setup CRM',
          description: 'Configuration et intégration de votre CRM avec vos outils',
        },
        {
          title: 'Segmentation',
          description: 'Organisation et segmentation intelligente de votre base',
        },
        {
          title: 'Campaigns & Automation',
          description: 'Création de campagnes et scénarios automatisés',
        },
        {
          title: 'Optimisation',
          description: 'A/B testing et amélioration continue des performances',
        },
      ],
      deliverables: [
        'CRM configuré et opérationnel',
        'Base de données nettoyée',
        'Templates d\'emails branded',
        'Scénarios d\'automation (welcome, abandon, re-engagement)',
        'Campagnes mensuelles',
        'Analytics et rapports',
      ],
      faq: [
        {
          question: 'Quel CRM recommandez-vous ?',
          answer: 'Selon vos besoins : HubSpot (complet), Brevo (PME), Salesforce (entreprise), ou ActiveCampaign (automation).',
        },
        {
          question: 'Comment nettoyer ma base existante ?',
          answer: 'Nous effectuons un audit complet, supprimons les doublons, validons les emails et segmentons intelligemment.',
        },
        {
          question: 'Quelle fréquence d\'envoi idéale ?',
          answer: 'Généralement 1-2 emails par semaine pour l\'engagement, ajusté selon votre secteur et les retours.',
        },
      ],
    },
    'automatisation-ia': {
      icon: Zap,
      title: 'Automatisation & IA',
      subtitle: 'Optimisez avec les technologies avancées',
      description: 'Gagnez du temps et en efficacité en automatisant vos processus répétitifs et en intégrant l\'IA dans votre business. De la génération de contenu aux chatbots intelligents.',
      benefits: [
        'Gain de temps considérable',
        'Réduction des coûts opérationnels',
        'Moins d\'erreurs humaines',
        'Scalabilité facilitée',
        'Productivité décuplée',
        'Avantage compétitif technologique',
      ],
      process: [
        {
          title: 'Audit des processus',
          description: 'Identification des tâches automatisables et opportunités IA',
        },
        {
          title: 'Architecture',
          description: 'Conception des workflows et intégrations nécessaires',
        },
        {
          title: 'Implémentation',
          description: 'Mise en place des automatisations et outils IA',
        },
        {
          title: 'Formation',
          description: 'Formation de vos équipes et documentation',
        },
      ],
      deliverables: [
        'Workflows automatisés (Zapier, Make, n8n)',
        'Chatbots IA pour support client',
        'Outils de génération de contenu',
        'Intégrations d\'outils',
        'Documentation complète',
        'Formation équipes',
      ],
      faq: [
        {
          question: 'Quels types de processus peut-on automatiser ?',
          answer: 'Presque tout : emails, réseaux sociaux, facturation, support client, reporting, prospection, et bien plus.',
        },
        {
          question: 'L\'IA va-t-elle remplacer mes employés ?',
          answer: 'Non, l\'IA augmente les capacités humaines en prenant en charge les tâches répétitives, libérant du temps pour des missions à plus forte valeur.',
        },
        {
          question: 'Est-ce complexe à maintenir ?',
          answer: 'Nous créons des systèmes simples et robustes, avec documentation claire et formation pour une maintenance facile.',
        },
      ],
    },
    'drop-eats': {
      icon: UtensilsCrossed,
      title: 'Drop Eats',
      subtitle: 'Générez un revenu additionnel net pour votre restaurant',
      description: 'Drop Eats permet aux restaurateurs de générer en moyenne +2 500 € nets par mois en créant une seconde marque virtuelle. Sans investissement initial, sans coûts fixes, sans embauches, et sans perturber votre activité principale.',
      benefits: [
        'Aucun coût fixe ou investissement initial',
        'Aucun engagement contractuel',
        'Aucun risque financier',
        'Marque séparée qui ne dilue pas votre image',
        'Ne perturbe pas votre organisation existante',
        'Résultats visibles en quelques semaines',
        'ROI moyen de x3 à x7 sur le canal additionnel',
        'Jusqu\'à 60% de capacité non exploitée valorisée',
      ],
      stats: [
        { value: '+150', label: 'Audits réalisés' },
        { value: '+45', label: 'Restaurateurs accompagnés' },
        { value: '+2 500 €', label: 'Bénéfices nets mensuels moyens' },
        { value: '98%', label: 'Taux de satisfaction' },
        { value: '+10', label: 'Plateformes utilisées' },
        { value: '<10h', label: 'Accompagnement par mois' },
      ],
      problems: [
        'Clientèle habituelle limitée → ventes plafonnées',
        'Heures creuses non rentabilisées',
        'Charges fixes élevées (loyer, salaires, énergie)',
        'Concurrence locale accrue',
        'Difficulté à attirer de nouveaux clients sans gros budget',
        'Dépendance à un seul canal de chiffre d\'affaires',
      ],
      model: {
        restaurant: [
          'Prépare les commandes dans sa cuisine (comme d\'habitude)',
          'Utilise ses ressources actuelles',
          'Pas de changement dans l\'organisation',
        ],
        dropEats: [
          'Crée la marque virtuelle',
          'Gère le marketing et le positionnement',
          'Optimise les ventes et analyse les performances',
          'Assure l\'acquisition de clients',
        ],
        result: 'Un revenu net additionnel + une visibilité renforcée',
      },
      process: [
        {
          title: 'Audit & Analyse locale',
          description: 'Étude du marché dans votre zone, analyse de la concurrence existante, identification des cuisines et opportunités rentables, validation de la faisabilité.',
        },
        {
          title: 'Création de marque Drop Eats',
          description: 'Branding complet, menu optimisé, identité visuelle unique et promesse différenciée pour toucher une nouvelle audience sans cannibaliser votre enseigne principale.',
        },
        {
          title: 'Lancement du nouveau canal',
          description: 'Mise en place du tunnel de commande, mise en ligne sur les plateformes de livraison, premières commandes généralement en 72h à 10 jours.',
        },
        {
          title: 'Croissance & optimisation',
          description: 'Ajustement continu des prix, menus et offres. Optimisation marketing pour stabiliser un flux constant de commandes.',
        },
        {
          title: 'Stabilisation et scaling',
          description: 'Objectif : atteindre +2 500 € nets/mois de manière stable. Analyse des KPIs et montée en puissance progressive.',
        },
      ],
      comparison: {
        before: {
          title: 'Avant Drop Eats',
          items: [
            'Un seul flux de revenus',
            'Capacité de cuisine sous-exploitée',
            'Heures creuses non rentabilisées',
            'Dépendance à la clientèle locale',
            'Charges fixes qui pèsent',
          ],
        },
        with: {
          title: 'Avec Drop Eats',
          items: [
            'Double flux de revenus',
            'Utilisation optimale de la cuisine',
            'Heures creuses monétisées',
            'Nouvelle audience acquise',
            'Charges mieux absorbées',
          ],
        },
        goal: {
          title: 'Objectif final',
          items: [
            '+2 500 € nets/mois en moyenne',
            'Canal additionnel stable',
            'Visibilité accrue sur les plateformes',
            'Rentabilité du lieu doublée',
            'Croissance sans embauche',
          ],
        },
      },
      cases: [
        {
          type: 'Restaurant italien',
          result: '+2 800 €/mois en 6 semaines',
          description: 'Un restaurant italien familial a lancé une marque de pâtes artisanales en livraison. Résultat : un nouveau segment de clientèle et un revenu stable même en basse saison.',
        },
        {
          type: 'Snack moderne',
          result: '+2 300 €/mois stable toute l\'année',
          description: 'Un snack a créé une marque de burgers premium. Le flux de commandes reste constant même hors saison touristique, offrant une stabilité financière précieuse.',
        },
        {
          type: 'Restaurant sushi',
          result: 'Nouvelle audience + upsell + fidélisation',
          description: 'Un restaurant de sushis a lancé une marque de pokébowls santé. Non seulement le revenu a augmenté, mais les clients découvrent aussi le restaurant principal.',
        },
      ],
      deliverables: [
        'Audit de marché complet de votre zone',
        'Étude de faisabilité détaillée',
        'Création complète de la marque virtuelle',
        'Identité visuelle et branding',
        'Menu optimisé pour la livraison',
        'Mise en ligne sur plateformes (Uber Eats, Deliveroo, etc.)',
        'Stratégie marketing multi-plateformes',
        'Campagnes d\'acquisition (Instagram, TikTok, Google, Snapchat, Meta)',
        'Dashboard de suivi des performances',
        'Optimisation continue des ventes',
        'Support mensuel (moins de 10h/mois)',
      ],
      faq: [
        {
          question: 'Est-ce que ça va perturber mon restaurant ?',
          answer: 'Non, c\'est justement l\'objectif inverse. Drop Eats utilise votre capacité existante pendant les heures creuses. Aucun changement dans votre organisation, vous préparez simplement des commandes supplémentaires avec vos équipes actuelles.',
        },
        {
          question: 'Et si ça ne marche pas ?',
          answer: 'Il n\'y a aucun risque financier car il n\'y a ni coût fixe ni engagement. Si pour une raison quelconque le modèle ne fonctionne pas dans votre zone (très rare), vous arrêtez simplement sans avoir perdu d\'argent.',
        },
        {
          question: 'Je dois investir combien ?',
          answer: 'Zéro investissement initial. Aucun coût fixe. Le modèle est basé sur le partage des revenus générés : vous ne payez que si ça marche, proportionnellement aux résultats.',
        },
        {
          question: 'Combien de temps pour avoir des résultats ?',
          answer: 'Les premières commandes arrivent généralement entre 72h et 10 jours après le lancement. L\'objectif de +2 500 €/mois est atteint en moyenne en 4 à 8 semaines selon votre zone.',
        },
        {
          question: 'Est-ce que je dois recruter du personnel ?',
          answer: 'Non, c\'est justement l\'avantage. Vous utilisez votre équipe actuelle et votre cuisine existante. Le but est de mieux rentabiliser vos ressources déjà en place, pas d\'en ajouter.',
        },
        {
          question: 'Suis-je engagé sur une durée ?',
          answer: 'Aucun engagement contractuel. Vous êtes libre d\'arrêter quand vous voulez. Notre objectif est de créer un partenariat gagnant-gagnant sur le long terme, pas de vous enfermer.',
        },
        {
          question: 'Comment la marque virtuelle est-elle différente de mon restaurant ?',
          answer: 'Nous créons une identité complètement séparée (nom, branding, menu, positionnement) pour toucher une audience différente et éviter toute cannibalisation de votre clientèle existante.',
        },
        {
          question: 'Quelles plateformes utilisez-vous ?',
          answer: 'Nous utilisons toutes les plateformes pertinentes : Uber Eats, Deliveroo, et nous faisons aussi de l\'acquisition via Instagram, TikTok, Google Ads, Snapchat Ads et Meta Ads selon votre marché.',
        },
      ],
    },
  };

  const serviceData = servicesData[slug || ''];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-[48px] tracking-tight text-black mb-4">Service non trouvé</h1>
          <Link to="/services">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6">
              Retour aux services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = serviceData.icon;

  // Psychologie des couleurs selon le service
  const colorScheme = {
    'strategie-digitale': { primary: 'cool', secondary: 'purple' }, // Vision, intelligence
    'marketing-acquisition': { primary: 'success', secondary: 'energy' }, // Croissance, ROI
    'branding': { primary: 'purple', secondary: 'warm' }, // Créativité, luxe
    'creation-web': { primary: 'cool', secondary: 'purple' }, // Innovation, tech
    'seo-sea': { primary: 'success', secondary: 'cool' }, // Visibilité, croissance
    'social-media': { primary: 'energy', secondary: 'warm' }, // Engagement, connexion
    'emailing-crm': { primary: 'cool', secondary: 'success' }, // Communication, fidélité
    'automatisation-ia': { primary: 'purple', secondary: 'energy' }, // Innovation, futur
    'drop-eats': { primary: 'success', secondary: 'energy' }, // Croissance, revenus, food
  };

  const colors = colorScheme[slug as keyof typeof colorScheme] || { primary: 'cool', secondary: 'purple' };

  // SEO data for each service
  const seoData: Record<string, any> = {
    'strategie-digitale': {
      title: 'Stratégie Digitale - Conseil & Plan d\'Action | Boost Activity',
      description: 'Élaborez une stratégie digitale sur-mesure avec nos experts. Audit complet, plan d\'action, roadmap et KPIs pour maximiser votre ROI digital.',
      keywords: 'stratégie digitale, conseil digital, audit digital, plan d\'action digital, roadmap digitale',
    },
    'marketing-acquisition': {
      title: 'Marketing d\'Acquisition - SEA, Social Ads & Growth | Boost Activity',
      description: 'Générez des leads qualifiés avec nos campagnes d\'acquisition. Google Ads, Facebook Ads, LinkedIn Ads optimisés pour la conversion et le ROI.',
      keywords: 'marketing acquisition, génération leads, Google Ads, Facebook Ads, LinkedIn Ads, growth marketing',
    },
    'branding': {
      title: 'Branding & Identité Visuelle - Création de Marque | Boost Activity',
      description: 'Créez une identité de marque forte et mémorable. Logo, charte graphique, positionnement et storytelling pour vous démarquer.',
      keywords: 'branding, identité visuelle, création logo, charte graphique, positionnement marque',
    },
    'creation-web': {
      title: 'Création Site Web - Design & Développement Sur-Mesure | Boost Activity',
      description: 'Développement de sites web performants et responsive. E-commerce, vitrine, application web optimisés pour la conversion.',
      keywords: 'création site web, développement web, site e-commerce, site vitrine, responsive design',
    },
    'social-media': {
      title: 'Social Media Marketing - Réseaux Sociaux | Boost Activity',
      description: 'Développez votre présence sur les réseaux sociaux. Stratégie, création de contenu, community management et publicités social ads.',
      keywords: 'social media, réseaux sociaux, Instagram, Facebook, LinkedIn, community management',
    },
    'seo-sea': {
      title: 'SEO & SEA - Référencement Naturel & Payant | Boost Activity',
      description: 'Dominez les résultats de recherche Google. SEO technique, contenu optimisé et campagnes Google Ads pour un trafic qualifié.',
      keywords: 'SEO, référencement naturel, SEA, Google Ads, référencement payant, audit SEO',
    },
    'emailing': {
      title: 'Email Marketing - Campagnes & Automation | Boost Activity',
      description: 'Créez des campagnes email performantes. Automation, segmentation, A/B testing pour maximiser l\'engagement et les conversions.',
      keywords: 'email marketing, campagne email, automation email, newsletter, email automation',
    },
    'analytics': {
      title: 'Analytics & Data - Analyse de Données Web | Boost Activity',
      description: 'Mesurez et optimisez vos performances digitales. Google Analytics, dashboards, tracking avancé et insights actionnables.',
      keywords: 'analytics, Google Analytics, analyse données, tracking web, data marketing',
    },
    'automatisation-ia': {
      title: 'Automatisation & IA - Intelligence Artificielle Marketing | Boost Activity',
      description: 'Automatisez vos processus marketing avec l\'IA. Chatbots, automation, personnalisation et optimisation intelligente.',
      keywords: 'automatisation marketing, intelligence artificielle, IA marketing, chatbot, automation',
    },
    'drop-eats': {
      title: 'Drop Eats - Marketing Restaurants & Livraison | Boost Activity',
      description: 'Boostez vos commandes sur Uber Eats, Deliveroo et Just Eat. Optimisation menus, photos professionnelles et campagnes performantes.',
      keywords: 'marketing restaurant, Uber Eats, Deliveroo, Just Eat, livraison restaurant, optimisation menu',
    },
  };

  const currentSeo = seoData[slug || ''] || seoData['strategie-digitale'];

  const pageBreadcrumb = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Services', url: 'https://boostactivity.fr/services' },
    { name: serviceData?.title || 'Service', url: `https://boostactivity.fr/services/${slug}` },
  ]);

  const pageService = serviceSchema({
    name: serviceData?.title || 'Service',
    description: serviceData?.description || '',
    url: `https://boostactivity.fr/services/${slug}`,
  });

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [pageBreadcrumb, pageService],
  };

  return (
    <div className="bg-white">
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical={`https://boostactivity.fr/services/${slug}`}
        schema={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <GradientBackground variant="services" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <Link to="/services" className="inline-flex items-center text-[14px] text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux services
            </Link>
          </motion.div>

          <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <Icon className="w-20 h-20 text-gray-800 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h1 className="text-[56px] md:text-[80px] tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text-animated">{serviceData.title}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-[28px] text-gray-600 leading-relaxed max-w-[800px] mx-auto mb-12"
          >
            {serviceData.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                Démarrer ce service
              </Button>
            </Link>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-services-grid pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[21px] text-gray-700 leading-relaxed text-center"
          >
            {serviceData.description}
          </motion.p>
        </div>
      </section>

      {/* Stats Section - Drop Eats only */}
      {slug === 'drop-eats' && serviceData.stats && (
        <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-services-features pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
            >
              <span className="text-black">Drop Eats en </span>
              <span className="gradient-text-animated">chiffres</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {serviceData.stats.map((stat: any, index: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[40px] md:text-[48px] tracking-tight gradient-text-animated mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[15px] text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problems Section - Drop Eats only */}
      {slug === 'drop-eats' && serviceData.problems && (
        <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-services-grid pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
            >
              <span className="text-black">Les </span>
              <span className="gradient-text-animated">défis</span>
              <span className="text-black"> des restaurateurs</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.problems.map((problem: string, index: number) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                    <div className="relative z-10">
                      <p className="text-[17px] text-gray-700 leading-relaxed">
                        {problem}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Model Section - Drop Eats only */}
      {slug === 'drop-eats' && serviceData.model && (
        <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-services-features pointer-events-none" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
            >
              <span className="text-black">Le modèle </span>
              <span className="gradient-text-animated">gagnant-gagnant</span>
            </motion.h2>

            {/* Three columns side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-[24px] tracking-tight text-black mb-6">Le restaurateur</h3>
                    <ul className="space-y-4">
                      {serviceData.model.restaurant.map((item: string) => (
                        <li key={item} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                          <span className="text-[16px] text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-[24px] tracking-tight text-black mb-6">Drop Eats</h3>
                    <ul className="space-y-4">
                      {serviceData.model.dropEats.map((item: string) => (
                        <li key={item} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                          <span className="text-[16px] text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-[24px] tracking-tight text-black mb-6">Résultat</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                        <span className="text-[16px] text-gray-700">Un nouveau canal de ventes indépendant</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                        <span className="text-[16px] text-gray-700">+2 000 à 3 000 € nets / mois en moyenne</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                        <span className="text-[16px] text-gray-700">Plus de visibilité et de nouveaux clients</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                        <span className="text-[16px] text-gray-700">Une activité optimisée et plus rentable</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table - Drop Eats only */}
      {slug === 'drop-eats' && serviceData.comparison && (
        <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-services-grid pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
            >
              <span className="text-black">L'impact </span>
              <span className="gradient-text-animated">Drop Eats</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[serviceData.comparison.before, serviceData.comparison.with, serviceData.comparison.goal].map((column: any, index: number) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                    <div className="relative z-10">
                      <h3 className="text-[24px] tracking-tight text-black mb-6 text-center">
                        {column.title}
                      </h3>
                      <ul className="space-y-4">
                        {column.items.map((item: string) => (
                          <li key={item} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                            <span className="text-[16px] text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-services-grid pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Les </span>
            <span className="gradient-text-animated">bénéfices</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <p className="text-[17px] text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-services-features pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Notre </span>
            <span className="gradient-text-animated">processus</span>
          </motion.h2>

          {slug === 'drop-eats' && serviceData.process.length === 5 ? (
            <>
              {/* First 4 steps in grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {serviceData.process.slice(0, 4).map((step: any, index: number) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                      <div className="absolute inset-0 card-hover-services-features">
                      </div>
                      <div className="relative z-10">
                        <div className="text-[48px] tracking-tight gradient-text-animated mb-4">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-[24px] tracking-tight text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[16px] text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* 5th step - full width special card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-12 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-xl">
                  <div className="absolute inset-0 card-hover-services-features pointer-events-none">
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-[56px] tracking-tight gradient-text-animated mb-4">
                        05
                      </div>
                      <h3 className="text-[32px] tracking-tight text-black mb-4">
                        {serviceData.process[4].title}
                      </h3>
                      <p className="text-[18px] text-gray-700 leading-relaxed">
                        {serviceData.process[4].description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-center">
                      <div className="text-[64px] md:text-[80px] tracking-tight gradient-text-animated leading-none">
                        +2 500 €
                      </div>
                      <div className="text-[20px] text-gray-700 mt-2">
                        nets/mois
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.process.map((step: any, index: number) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-services-features">
                    </div>
                    <div className="relative z-10">
                      <div className="text-[48px] tracking-tight gradient-text-animated mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-[24px] tracking-tight text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Section - Drop Eats only */}
      {slug === 'drop-eats' && serviceData.cases && (
        <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-services-grid pointer-events-none" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
            >
              <span className="text-black">Cas </span>
              <span className="gradient-text-animated">clients</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.cases.map((caseItem: any, index: number) => (
                <motion.div
                  key={caseItem.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="text-[20px] tracking-tight text-black mb-3">
                        {caseItem.type}
                      </div>
                      <div className="text-[24px] gradient-text-animated mb-4">
                        {caseItem.result}
                      </div>
                      <p className="text-[16px] text-gray-600 leading-relaxed">
                        {caseItem.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-services-grid pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Ce que vous </span>
            <span className="gradient-text-animated">recevez</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-12 border-gray-200 bg-white/80 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.deliverables.map((item: string) => (
                  <div key={item} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-800 flex-shrink-0 mt-1" />
                    <span className="text-[17px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-services-features pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Questions </span>
            <span className="gradient-text-animated">fréquentes</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {serviceData.faq.map((item: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-8 py-2 transition-all duration-500 relative overflow-hidden group hover:shadow-lg"
                >
                  <div className="absolute inset-0 card-hover-services-features pointer-events-none"></div>
                  <AccordionTrigger className="text-[20px] tracking-tight text-black hover:no-underline relative z-10">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] text-gray-600 leading-relaxed pt-4 relative z-10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="services" opacity={0.65} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
              <span className="gradient-text-animated">{slug === 'drop-eats' ? 'Découvrez' : 'Prêt'}</span>
              <span className="text-black"> {slug === 'drop-eats' ? 'votre potentiel' : 'à démarrer ?'}</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              {slug === 'drop-eats' 
                ? 'Obtenez un audit gratuit et une simulation de revenus pour votre restaurant.'
                : 'Parlons de votre projet et découvrez comment ce service peut transformer votre activité.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                  {slug === 'drop-eats' ? 'Demander un audit gratuit' : 'Discutons de votre projet'}
                </Button>
              </Link>
              <Link to={slug === 'drop-eats' ? '/contact' : '/services'}>
                <Button variant="outline" className="rounded-full px-8 py-6 text-[17px] border-gray-300 hover:border-black transition-colors">
                  {slug === 'drop-eats' ? 'Simuler mes revenus' : 'Voir tous les services'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
