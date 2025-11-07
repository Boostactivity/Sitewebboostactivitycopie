import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Target } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { UtensilsCrossed, Store, Dumbbell, Home, Briefcase, Heart } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { SEO } from '../components/SEO';
import { breadcrumbSchema, serviceSchema } from '../utils/seo/schemas';

export function SolutionDetailPage() {
  const { slug } = useParams();

  const solutionsData: Record<string, any> = {
    'restaurants-hotellerie': {
      icon: UtensilsCrossed,
      title: 'Restaurants & Hôtellerie',
      subtitle: 'Remplissez vos tables et développez votre réputation',
      description: 'Dans le secteur de la restauration et de l\'hôtellerie, la visibilité en ligne et la réputation sont essentielles. Nous vous aidons à attirer plus de clients, optimiser vos réservations et construire une image de marque forte.',
      image: 'https://images.unsplash.com/photo-1761095596849-608b6a337c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGRpbmluZyUyMHRhYmxlfGVufDF8fHx8MTc2MjQ3ODYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenges: [
        { title: 'Faible visibilité locale', description: 'Difficile d\'être trouvé par les clients qui cherchent un restaurant dans votre zone' },
        { title: 'Tables vides en semaine', description: 'Taux de remplissage insuffisant hors weekends et événements' },
        { title: 'Gestion des avis', description: 'Difficulté à obtenir et gérer les avis clients sur Google, TripAdvisor' },
        { title: 'Absence en ligne', description: 'Pas de site web moderne ou présence sociale engageante' },
      ],
      solutions: [
        {
          title: 'Site web avec réservation en ligne',
          description: 'Site moderne showcasing votre cuisine, menu, ambiance avec système de réservation intégré (OpenTable, TheFork, ou custom)',
        },
        {
          title: 'SEO local optimisé',
          description: 'Positionnement #1 sur Google pour "restaurant [votre ville]", Google My Business optimisé, cartes Google enrichies',
        },
        {
          title: 'Social Media gastro',
          description: 'Stratégie Instagram/TikTok avec contenu photo/vidéo professionnel de vos plats, coulisses, chefs en action',
        },
        {
          title: 'Gestion de réputation',
          description: 'Système automatisé pour collecter les avis positifs, répondre aux commentaires, améliorer votre note moyenne',
        },
        {
          title: 'Campagnes locales',
          description: 'Google Ads et Facebook Ads géolocalisées pour promouvoir événements, menus spéciaux, offres',
        },
      ],
      results: [
        'Augmentation de 150-300% des réservations en ligne',
        'Taux de remplissage de 80%+ même en semaine',
        'Note Google/TripAdvisor 4.5+ avec 100+ avis',
        'Présence Instagram engageante (5K-20K followers)',
        'ROI positif dès le 2ème mois sur les campagnes',
      ],
      caseStudy: {
        title: 'La Belle Table',
        result: '+240% de réservations en 6 mois',
        link: '/case-studies/restaurant-la-belle-table',
      },
    },
    'commerces-ecommerce': {
      icon: Store,
      title: 'Commerces & E-commerce',
      subtitle: 'Vendez plus, en ligne et en magasin',
      description: 'Que vous ayez une boutique physique, un e-commerce ou les deux, nous vous accompagnons dans la transformation digitale pour maximiser vos ventes et fidéliser vos clients.',
      image: 'https://images.unsplash.com/photo-1758272423130-5bbccae36b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjI0NjgxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenges: [
        { title: 'Transition digitale', description: 'Difficulté à passer d\'un modèle traditionnel au e-commerce' },
        { title: 'Acquisition clients', description: 'Coût d\'acquisition élevé et manque de trafic qualifi' },
        { title: 'Fidélisation', description: 'Clients one-shot sans retour, faible lifetime value' },
        { title: 'Omnicanal', description: 'Gestion complexe entre boutique physique et ventes en ligne' },
      ],
      solutions: [
        {
          title: 'E-commerce performant',
          description: 'Boutique en ligne sur Shopify/WooCommerce optimisée pour la conversion, UX fluide, checkout simplifié',
        },
        {
          title: 'Stratégie omnicanal',
          description: 'Click & collect, stock unifié, expérience client cohérente en ligne et en magasin',
        },
        {
          title: 'Acquisition multicanal',
          description: 'Google Shopping, Facebook/Instagram Ads, retargeting, SEO produits pour générer du trafic qualifié',
        },
        {
          title: 'CRM & Fidélisation',
          description: 'Programme de fidélité, email automation (abandon panier, recommandations, anniversaires), segmentation client',
        },
        {
          title: 'Analytics avancé',
          description: 'Tracking complet du parcours client, analyse du panier moyen, optimisation du taux de conversion',
        },
      ],
      results: [
        'Croissance du CA en ligne de 200-500%',
        'Taux de conversion e-commerce 2.5-4%',
        'Panier moyen +30-50% via upsell/cross-sell',
        'Taux de réachat +150% avec fidélisation',
        'Coût d\'acquisition réduit de 40%',
      ],
      caseStudy: {
        title: 'Élégance Fashion',
        result: '150K€ de CA en 4 mois',
        link: '/case-studies/boutique-mode-elegance',
      },
    },
    'fitness-bien-etre': {
      icon: Dumbbell,
      title: 'Fitness & Bien-être',
      subtitle: 'Recrutez et fidélisez vos membres',
      description: 'Salles de sport, studios de yoga, coachs personnels : développez votre base de membres, réduisez le churn et créez une communauté engagée autour de votre marque.',
      image: 'https://images.unsplash.com/photo-1573858129038-6f98c3cb2ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMjIzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenges: [
        { title: 'Acquisition membres', description: 'Difficulté à recruter de nouveaux membres face à la concurrence' },
        { title: 'Churn élevé', description: 'Taux de désabonnement important après les premiers mois' },
        { title: 'Communication', description: 'Pas de contact régulier avec les membres existants' },
        { title: 'Réservations', description: 'Système de réservation de cours obsolète ou inexistant' },
      ],
      solutions: [
        {
          title: 'Site avec réservation',
          description: 'Site showcase avec planning de cours en temps réel, réservation en ligne, profils coaches',
        },
        {
          title: 'App mobile membre',
          description: 'Application pour réserver cours, suivre progression, communauté, challenges, fidélité',
        },
        {
          title: 'Content marketing',
          description: 'Stratégie de transformation stories, conseils nutrition/training, success stories de membres',
        },
        {
          title: 'Ads ciblées',
          description: 'Facebook/Instagram Ads géolocalisées avec vidéos d\'ambiance, témoignages, offres d\'essai',
        },
        {
          title: 'Automation retention',
          description: 'Onboarding automatisé, rappels cours, re-engagement des membres inactifs, anniversaires',
        },
      ],
      results: [
        'Recrutement de 100-400 nouveaux membres/an',
        'Réduction du churn de 40-60%',
        'Taux d\'adoption app mobile 70%+',
        'Engagement membre multiplié par 2-3',
        'Revenus récurrents +150%',
      ],
      caseStudy: {
        title: 'FitPro Gym',
        result: '+320 membres en 90 jours',
        link: '/case-studies/salle-sport-fitpro',
      },
    },
    'immobilier': {
      icon: Home,
      title: 'Immobilier & Promoteurs',
      subtitle: 'Générez des leads qualifiés et vendez plus vite',
      description: 'Agents immobiliers, promoteurs, agences : attirez des acheteurs et vendeurs qualifiés, showcasez vos biens avec impact et réduisez votre cycle de vente.',
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIzODQ5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenges: [
        { title: 'Génération de leads', description: 'Difficulté à obtenir des contacts qualifiés d\'acheteurs et vendeurs' },
        { title: 'Cycle de vente long', description: 'Process de décision complexe et lengthy' },
        { title: 'Différenciation', description: 'Marché saturé, difficile de se démarquer de la concurrence' },
        { title: 'Présentation biens', description: 'Photos basiques, pas de visites virtuelles engageantes' },
      ],
      solutions: [
        {
          title: 'Site immobilier moderne',
          description: 'Plateforme avec recherche avancée, filtres, carte interactive, fiches biens détaillées, alertes email',
        },
        {
          title: 'Visites virtuelles 360°',
          description: 'Matterport 3D, vidéos drone, visites virtuelles immersives pour attirer acheteurs à distance',
        },
        {
          title: 'Lead generation',
          description: 'Landing pages par bien/quartier, formulaires optimisés, Facebook/Instagram Ads avec visuels premium',
        },
        {
          title: 'CRM immobilier',
          description: 'Système de gestion leads avec scoring, suivi automatisé, rappels, historique interactions',
        },
        {
          title: 'Nurturing automation',
          description: 'Séquences email pour éduquer, rassurer, maintenir l\'intérêt jusqu\'à la décision d\'achat',
        },
      ],
      results: [
        '40-100 leads qualifiés par mois',
        'Taux de qualification +60%',
        'Coût par lead réduit de 45%',
        'Cycle de vente réduit de 25%',
        'Taux de conversion lead→vente +30%',
      ],
      caseStudy: {
        title: 'Prestige Immobilier',
        result: '47 leads qualifiés/mois',
        link: '/case-studies/agence-immo-prestige',
      },
    },
    'b2b-services': {
      icon: Briefcase,
      title: 'B2B & Services professionnels',
      subtitle: 'Positionnez-vous comme expert et générez des opportunités',
      description: 'Cabinets de conseil, agences, SaaS, services B2B : établissez votre expertise, attirez des prospects qualifiés et construisez un pipeline prévisible.',
      image: 'https://images.unsplash.com/photo-1730382624761-af8112d26209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYyMjQ0Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      challenges: [
        { title: 'Pipeline insuffisant', description: 'Pas assez d\'opportunités commerciales qualifiées' },
        { title: 'Positionnement expert', description: 'Difficulté à se différencier et prouver son expertise' },
        { title: 'Cycle de vente long', description: 'Décision impliquant plusieurs stakeholders, process lengthy' },
        { title: 'Mesure du ROI', description: 'Attribution complexe, difficulté à prouver l\'impact marketing' },
      ],
      solutions: [
        {
          title: 'Inbound marketing',
          description: 'Stratégie de contenu (blog, guides, études de cas) pour attirer leads via SEO et thought leadership',
        },
        {
          title: 'LinkedIn strategy',
          description: 'Personal branding, contenu régulier, LinkedIn Ads pour cibler décideurs et générer leads qualifiés',
        },
        {
          title: 'Lead nurturing',
          description: 'Séquences email automatisées pour éduquer prospects et les faire progresser dans le funnel',
        },
        {
          title: 'Webinaires & événements',
          description: 'Organisation de webinars experts, événements digitaux pour démontrer expertise et collecter leads',
        },
        {
          title: 'ABM (Account-Based)',
          description: 'Approche ciblée sur comptes stratégiques avec campagnes ultra-personnalisées',
        },
      ],
      results: [
        'Pipeline généré: 500K€-2M€/an selon secteur',
        'Leads qualifiés SQL: 50-200/mois',
        'Taux de closing: 25-40%',
        'Cycle de vente réduit de 30%',
        'CAC (coût acquisition) réduit de 50%',
      ],
      caseStudy: {
        title: 'Stratégie Plus',
        result: '1.2M€ de pipeline en 8 mois',
        link: '/case-studies/cabinet-conseil-strategie',
      },
    },
    'sante-liberaux': {
      icon: Heart,
      title: 'Santé & Professionnels libéraux',
      subtitle: 'Développez votre patientèle et optimisez votre gestion',
      description: 'Médecins, dentistes, kinés, ostéos, psychologues : attirez de nouveaux patients, facilitez les prises de RDV et améliorez l\'expérience patient.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBvZmZpY2UlMjBjbGVhbnxlbnwxfHx8fDE3NjIzODM0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenges: [
        { title: 'Acquisition patients', description: 'Difficulté à attirer de nouveaux patients dans une zone concurrentielle' },
        { title: 'Prise de RDV', description: 'Gestion téléphonique chronophage, créneaux non optimisés' },
        { title: 'Communication', description: 'Pas de système pour rappeler RDV, envoyer infos, suivre patients' },
        { title: 'Conformité', description: 'Respect strict du RGPD et règles déontologiques secteur santé' },
      ],
      solutions: [
        {
          title: 'Site conforme santé',
          description: 'Site respectant toutes les normes (Ordre, RGPD, CNIL), présentant expertises, équipe, infos pratiques',
        },
        {
          title: 'Prise de RDV en ligne',
          description: 'Système Doctolib-like intégré, calendrier en temps réel, confirmation auto, rappels SMS/email',
        },
        {
          title: 'SEO local médical',
          description: 'Positionnement local sur "[spécialité] [ville]", Google My Business optimisé, annuaires santé',
        },
        {
          title: 'Automation conformes',
          description: 'Rappels RDV automatiques, enquêtes satisfaction, conseils post-consultation (tout conforme RGPD)',
        },
        {
          title: 'Réputation médicale',
          description: 'Collecte avis Google respectueuse, gestion e-réputation, showcase témoignages patients',
        },
      ],
      results: [
        'Nouveaux patients: +120-250%',
        'Taux de prise RDV en ligne: 70-85%',
        'Taux de no-show réduit de 60%',
        'Temps admin réduit de 40%',
        'Note Google moyenne: 4.7+/5',
      ],
      caseStudy: {
        title: 'Clinique Sourire',
        result: '+185% de nouveaux patients',
        link: '/case-studies/clinique-dentaire-sourire',
      },
    },
  };

  const solution = solutionsData[slug || ''];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-[48px] tracking-tight text-black mb-4">Solution non trouvée</h1>
          <Link to="/solutions">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6">
              Retour aux solutions
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = solution.icon;

  // Psychologie des couleurs selon le secteur
  const colorScheme = {
    'restaurants-hotellerie': { primary: 'warm', secondary: 'energy' }, // Appétit, convivialité
    'commerces-ecommerce': { primary: 'success', secondary: 'energy' }, // Commerce, prospérité
    'fitness-bien-etre': { primary: 'success', secondary: 'cool' }, // Santé, vitalité
    'immobilier': { primary: 'cool', secondary: 'success' }, // Confiance, stabilité
    'b2b-services': { primary: 'cool', secondary: 'purple' }, // Professionnalisme
    'sante-liberaux': { primary: 'cool', secondary: 'success' }, // Soin, confiance
  };

  const colors = colorScheme[slug as keyof typeof colorScheme] || { primary: 'cool', secondary: 'purple' };

  // SEO data for each solution
  const seoData: Record<string, any> = {
    'restaurants-hotellerie': {
      title: 'Marketing Restaurant & Hôtel - Réservations & Visibilité | Boost Activity',
      description: 'Solutions marketing pour restaurants et hôtels. Augmentez vos réservations de +180%, optimisez Google My Business, réseaux sociaux et photos professionnelles.',
      keywords: 'marketing restaurant, marketing hôtel, réservations restaurant, Google My Business, photos restaurant, avis clients',
    },
    'commerces-ecommerce': {
      title: 'Marketing E-commerce - Boutique en Ligne & Ventes | Boost Activity',
      description: 'Boostez vos ventes e-commerce de +340%. Shopify, WooCommerce, publicités Facebook/Google Ads, optimisation conversion et automatisation.',
      keywords: 'marketing e-commerce, boutique en ligne, Shopify, WooCommerce, Google Shopping, publicité e-commerce',
    },
    'fitness-bien-etre': {
      title: 'Marketing Fitness & Bien-être - Salles Sport & Studios | Boost Activity',
      description: 'Marketing digital pour salles de sport et studios bien-être. +220% d\'inscriptions, gestion communauté, campagnes locales performantes.',
      keywords: 'marketing fitness, marketing salle sport, marketing bien-être, inscriptions gym, marketing yoga',
    },
    'immobilier': {
      title: 'Marketing Immobilier - Agents & Agences Immobilières | Boost Activity',
      description: 'Marketing digital immobilier : +165% de mandats, publicités ciblées, site web optimisé, génération leads qualifiés pour agents et agences.',
      keywords: 'marketing immobilier, agent immobilier, publicité immobilière, leads immobilier, site immobilier',
    },
    'b2b-services': {
      title: 'Marketing B2B - Services Professionnels & SaaS | Boost Activity',
      description: 'Marketing B2B pour services professionnels. LinkedIn Ads, inbound marketing, lead nurturing. Générez 500K€-2M€ de pipeline.',
      keywords: 'marketing B2B, LinkedIn Ads, inbound marketing, lead generation, marketing SaaS, ABM',
    },
    'sante-liberaux': {
      title: 'Marketing Santé - Médecins, Dentistes & Professionnels | Boost Activity',
      description: 'Marketing digital santé conforme RGPD. +185% de nouveaux patients, prise RDV en ligne, gestion avis Google pour professionnels santé.',
      keywords: 'marketing santé, marketing médecin, marketing dentiste, prise rdv en ligne, Doctolib, avis patients',
    },
  };

  const currentSeo = seoData[slug || ''] || seoData['commerces-ecommerce'];

  const pageBreadcrumb = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Solutions', url: 'https://boostactivity.fr/solutions' },
    { name: solution?.title || 'Solution', url: `https://boostactivity.fr/solutions/${slug}` },
  ]);

  const pageSolution = serviceSchema({
    name: solution?.title || 'Solution',
    description: solution?.description || '',
    url: `https://boostactivity.fr/solutions/${slug}`,
  });

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [pageBreadcrumb, pageSolution],
  };

  return (
    <div className="bg-white">
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        ogImage={solution?.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'}
        canonical={`https://boostactivity.fr/solutions/${slug}`}
        schema={combinedSchema}
      />
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-32 pb-20 relative overflow-hidden">
        <GradientBackground variant="solutions" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <Link to="/solutions" className="inline-flex items-center text-[14px] text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux solutions
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <IconComponent className="w-16 h-16 text-gray-800 mb-6" />
            <h1 className="text-[56px] md:text-[80px] tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text-animated">{solution.title}</span>
            </h1>
            <p className="text-[28px] text-gray-600 leading-relaxed mb-8">
              {solution.subtitle}
            </p>
            <p className="text-[17px] text-gray-700 leading-relaxed max-w-[800px]">
              {solution.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[21/9]"
          >
            <ImageWithFallback
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-solutions-grid pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Défis </span>
            <span className="gradient-text-animated">courants</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.challenges.map((challenge: any, index: number) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-solutions-grid">
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-[24px] tracking-tight gradient-text-animated mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-[16px] text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-solutions-features pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Nos </span>
            <span className="gradient-text-animated">solutions</span>
          </motion.h2>

          <div className="space-y-6">
            {solution.solutions.map((sol: any, index: number) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-solutions-features">
                  </div>
                  <div className="flex items-start relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--solutions-cyan)]/20 bg-gradient-to-br from-[var(--solutions-cyan-light)]/40 to-[var(--solutions-violet-light)]/40 backdrop-blur-sm flex items-center justify-center mr-6 mt-0.5">
                      <span className="text-[16px] tracking-tight gradient-text-animated">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[24px] tracking-tight text-black mb-3">
                        {sol.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-solutions-grid pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Résultats </span>
            <span className="gradient-text-animated">attendus</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {solution.results.map((result: string, index: number) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle2 className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
                <p className="text-[17px] text-gray-700 leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-solutions-features pointer-events-none" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TrendingUp className="w-12 h-12 text-gray-800 mx-auto mb-6" />
            <h2 className="text-[48px] md:text-[56px] tracking-tight leading-tight mb-6">
              <span className="text-black">Cas client : </span>
              <span className="gradient-text-animated">{solution.caseStudy.title}</span>
            </h2>
            <p className="text-[28px] text-gray-700 mb-12">
              {solution.caseStudy.result}
            </p>
            <Link to={solution.caseStudy.link}>
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                Lire l'étude de cas complète
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions" opacity={0.65} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
              <span className="gradient-text-animated">Prêt</span>
              <span className="text-black"> à transformer</span>
              <br />
              <span className="text-black">votre </span>
              <span className="gradient-text-animated">activité</span>
              <span className="text-black"> ?</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Discutons de vos défis spécifiques et créons ensemble la solution parfaite pour votre secteur.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                Parler à un expert de votre secteur
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}