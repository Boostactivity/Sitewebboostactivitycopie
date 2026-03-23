import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { SEO } from '../components/SEO';
import { breadcrumbSchema, articleSchema } from '../utils/seo/schemas';

export function CaseStudyDetailPage() {
  const { slug } = useParams();

  const caseStudiesData: Record<string, any> = {
    'restaurant-la-belle-table': {
      title: 'La Belle Table',
      category: 'Restaurant',
      location: 'Lyon, France',
      image: 'https://images.unsplash.com/photo-1758537697448-dbfc1cb83e49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGFtYmlhbmNlfGVufDF8fHx8MTc2MjQ3ODc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Restaurant gastronomique à Lyon avec une excellente cuisine mais peu de visibilité en ligne. Tables vides en semaine, absence sur les réseaux sociaux, et un site web obsolète ne permettant pas les réservations en ligne.',
      solution: 'Stratégie digitale complète incluant refonte du site web avec système de réservation, optimisation SEO local, présence Instagram avec contenu photo/vidéo professionnel, campagnes Google Ads ciblées, et gestion active des avis Google.',
      metrics: [
        { label: 'Réservations en ligne', before: '0/mois', after: '340/mois', change: '+240%' },
        { label: 'Trafic web', before: '450/mois', after: '1,260/mois', change: '+180%' },
        { label: 'Note Google', before: '4.2/5', after: '4.8/5', change: '+14%' },
        { label: 'Followers Instagram', before: '380', after: '4,200', change: '+1,000%' },
      ],
      timeline: '6 mois',
      services: ['Site web + réservation', 'SEO Local', 'Social Media', 'Google Ads', 'Gestion réputation'],
      testimonial: {
        text: 'Grâce à Boost Activity, nous avons enfin compris le digital. Les réservations ont explosé de 240% et notre restaurant est maintenant rempli presque tous les soirs de la semaine.',
        author: 'Karim Alami',
        role: 'Chef & Propriétaire',
      },
      results: [
        'Site web moderne avec réservation en ligne intégrée',
        '340 réservations mensuelles en moyenne via le web',
        'Taux de remplissage de 92% (vs 65% avant)',
        'Présence Instagram engageante avec 4,200+ followers',
        'Position #1 sur Google pour "restaurant gastronomique Lyon"',
        'Note Google améliorée à 4.8/5 avec 120+ avis',
      ],
    },
    'boutique-mode-elegance': {
      title: 'Élégance Fashion',
      category: 'E-commerce Mode',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1760904571520-9bc5c35db3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHNob3BwaW5nfGVufDF8fHx8MTc2MjE4MDIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Marque de mode émergente souhaitant passer d\'une boutique physique unique à une présence e-commerce nationale. Aucune expérience du digital, besoin de créer une identité de marque forte et un site performant.',
      solution: 'Création complète de l\'identité de marque, développement d\'une boutique e-commerce optimisée, stratégie de contenu Instagram/TikTok, campagnes publicitaires ciblées, et mise en place d\'email automation pour la fidélisation.',
      metrics: [
        { label: 'Chiffre d\'affaires', before: '0€', after: '150,000€', change: '+150K€' },
        { label: 'Taux de conversion', before: '0%', after: '3.2%', change: '3.2%' },
        { label: 'Panier moyen', before: '0€', after: '85€', change: '85€' },
        { label: 'Commandes mensuelles', before: '0', after: '440', change: '+440' },
      ],
      timeline: '4 mois',
      services: ['Branding', 'E-commerce', 'Instagram Ads', 'Email Marketing', 'Content Creation'],
      testimonial: {
        text: 'Ils ont transformé ma vision en réalité. En 4 mois, nous avons généré 150K€ de CA en ligne grâce à leur expertise e-commerce complète.',
        author: 'Laura Chen',
        role: 'Fondatrice',
      },
      results: [
        'Identité de marque complète et cohérente',
        'Boutique e-commerce performante (Shopify)',
        '150K€ de CA généré en 4 mois',
        '440 commandes mensuelles en moyenne',
        '12,000+ followers Instagram organiques',
        'Base email de 3,500 clients engagés',
      ],
    },
    'salle-sport-fitpro': {
      title: 'FitPro Gym',
      category: 'Fitness',
      location: 'Marseille, France',
      image: 'https://images.unsplash.com/photo-1573858129038-6f98c3cb2ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyMjIzMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      challenge: 'Salle de sport avec un fort taux de désabonnement (churn) et des difficultés à recruter de nouveaux membres face à une concurrence low-cost agressive. Communication inexistante avec les membres.',
      solution: 'Stratégie content marketing (transformations, conseils, success stories), campagnes Facebook Ads ciblées, système de réservation de cours en ligne, app mobile membre, et programme d\'onboarding + retention automatisé.',
      metrics: [
        { label: 'Nouveaux membres', before: '25/mois', after: '132/mois', change: '+428%' },
        { label: 'Taux de churn', before: '18%', after: '9.9%', change: '-45%' },
        { label: 'Engagement membres', before: '23%', after: '61%', change: '+165%' },
        { label: 'Revenus mensuels', before: '24K€', after: '58K€', change: '+142%' },
      ],
      timeline: '90 jours',
      services: ['Facebook Ads', 'Content Marketing', 'App mobile', 'Marketing Automation', 'CRM'],
      testimonial: {
        text: 'En 3 mois, nous avons plus que doublé nos membres actifs et augmenté nos revenus de 142%. L\'automatisation et le contenu ont complètement changé notre relation client.',
        author: 'Mohamed Diallo',
        role: 'Directeur FitPro',
      },
      results: [
        '320 nouveaux membres en 90 jours',
        'Churn réduit de 45%',
        'App mobile avec 78% d\'adoption',
        'Engagement membre multiplié par 2.65',
        'Revenus mensuels +142%',
        'Communauté Instagram de 8,500+ followers',
      ],
    },
  };

  const study = caseStudiesData[slug || ''];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-[48px] tracking-tight text-black mb-4">Étude de cas non trouvée</h1>
          <Link to="/case-studies">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6">
              Retour aux études de cas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // SEO data for each case study
  const seoData: Record<string, any> = {
    'restaurant-la-belle-table': {
      title: 'Étude de Cas La Belle Table - +180% Réservations Restaurant | Boost Activity',
      description: 'Découvrez comment La Belle Table a augmenté ses réservations de 180% en 6 mois avec notre stratégie digitale : SEO local, réseaux sociaux, site web moderne.',
      keywords: 'étude de cas restaurant, marketing restaurant Lyon, réservations en ligne, SEO local restaurant, Instagram restaurant',
    },
    'boutique-mode-elegance': {
      title: 'Étude de Cas Élégance Fashion - 68K€ CA E-commerce en 4 Mois | Boost Activity',
      description: 'Comment une boutique mode a généré 68K€ de CA en 4 mois grâce à Shopify, Facebook Ads, Instagram Shopping et email marketing.',
      keywords: 'étude de cas e-commerce, marketing boutique mode, Shopify, Facebook Ads mode, Instagram Shopping',
    },
    'salle-sport-fitpro': {
      title: 'Étude de Cas FitPro - +220% Inscriptions Salle Sport | Boost Activity',
      description: 'FitPro a multiplié par 3 ses inscriptions avec Google Ads local, Instagram Reels et automation. +220% de membres en 5 mois.',
      keywords: 'étude de cas fitness, marketing salle sport, Google Ads fitness, Instagram fitness, inscriptions gym',
    },
    'agence-immo-prestige': {
      title: 'Étude de Cas Prestige Immo - +165% Mandats Immobilier | Boost Activity',
      description: 'Agence immobilière : +165% de mandats avec site web optimisé, Facebook Ads ciblées et génération leads qualifiés.',
      keywords: 'étude de cas immobilier, marketing agence immobilière, leads immobilier, Facebook Ads immobilier',
    },
    'cabinet-conseil-strategie': {
      title: 'Étude de Cas Stratégie Plus - 520K€ Pipeline B2B en 5 Mois | Boost Activity',
      description: 'Cabinet conseil B2B : 520K€ de pipeline généré avec LinkedIn Ads, inbound marketing et lead nurturing.',
      keywords: 'étude de cas B2B, marketing conseil, LinkedIn Ads B2B, inbound marketing, lead generation',
    },
    'clinique-dentaire-sourire': {
      title: 'Étude de Cas Clinique Sourire - +185% Nouveaux Patients | Boost Activity',
      description: 'Clinique dentaire : +185% de nouveaux patients avec site optimisé, prise RDV en ligne Doctolib et gestion avis Google.',
      keywords: 'étude de cas santé, marketing dentiste, prise rdv en ligne, Doctolib, avis patients Google',
    },
  };

  const currentSeo = seoData[slug || ''] || seoData['restaurant-la-belle-table'];

  const pageBreadcrumb = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Études de cas', url: 'https://boostactivity.fr/case-studies' },
    { name: study?.title || 'Étude de cas', url: `https://boostactivity.fr/case-studies/${slug}` },
  ]);

  const pageArticle = articleSchema({
    title: study?.title || 'Étude de cas',
    description: study?.challenge || '',
    image: study?.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    datePublished: '2024-01-01',
    dateModified: '2025-11-07',
  });

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [pageBreadcrumb, pageArticle],
  };

  return (
    <div className="bg-white">
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        ogType="article"
        ogImage={study?.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'}
        canonical={`https://boostactivity.fr/case-studies/${slug}`}
        schema={combinedSchema}
      />
      {/* Hero Section */}
      <section className="px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-hero pointer-events-none" />
        <FloatingShapes />
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <Link to="/case-studies" className="inline-flex items-center text-[14px] text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux études de cas
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="mb-6">
              {study.category}
            </Badge>
            <h1 className="text-[56px] md:text-[80px] tracking-tight text-black leading-[1.05] mb-6">
              {study.title}
            </h1>
            <p className="text-[21px] text-gray-600">{study.location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[21/9]"
          >
            <ImageWithFallback
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-stats pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {study.metrics.map((metric: any, index: number) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-cases-stats">
                  </div>
                  <div className="relative z-10">
                    <div className="text-[12px] text-gray-600 mb-2">{metric.label}</div>
                    <div className="text-[32px] tracking-tight text-black mb-1">
                      {metric.change}
                    </div>
                    <div className="text-[12px] text-gray-500">
                      {metric.before} → {metric.after}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-hero pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-black mr-3" />
                <h2 className="text-[32px] tracking-tight text-black">Le défi</h2>
              </div>
              <p className="text-[17px] text-gray-700 leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-black mr-3" />
                <h2 className="text-[32px] tracking-tight text-black">La solution</h2>
              </div>
              <p className="text-[17px] text-gray-700 leading-relaxed">
                {study.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Timeline */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-grid pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[24px] tracking-tight text-black mb-6">Services déployés</h3>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service: string) => (
                  <Badge key={service} variant="outline" className="text-[14px] py-2 px-4">
                    {service}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-[24px] tracking-tight text-black mb-6">Durée du projet</h3>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-black mr-3" />
                <span className="text-[21px] text-gray-700">{study.timeline}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-hero pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-16 text-center"
          >
            Résultats obtenus
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {study.results.map((result: string, index: number) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <p className="text-[17px] text-gray-700 leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-stats pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[28px] md:text-[32px] tracking-tight text-black leading-relaxed mb-12">
              "{study.testimonial.text}"
            </p>
            <div>
              <p className="text-[17px] text-black mb-1">{study.testimonial.author}</p>
              <p className="text-[14px] text-gray-600">{study.testimonial.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-hero pointer-events-none" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-8">
              Prêt pour votre
              <br />
              success story ?
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Discutons de votre projet et découvrons ensemble comment atteindre vos objectifs.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity">
                Démarrer mon projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}