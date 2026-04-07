import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, Zap, Award, BarChart, Star, CheckCircle2, Shield, FileText, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SEO } from '../components/SEO';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../utils/seo/schemas';

const stats = [
  { value: 50, suffix: '+', label: 'Entreprises accompagnées' },
  { value: 100, suffix: '%', label: 'Satisfaction client' },
  { value: 3, suffix: 'x', label: 'ROI moyen' },
  { value: 2022, suffix: '', label: 'Année de fondation' },
];

const services = [
  {
    slug: 'marketing-acquisition',
    icon: Zap,
    title: 'Attirez des clients qualifiés chaque jour',
    description: 'Google Ads, Meta Ads, campagnes ciblées : on met en place la publicité digitale qui ramène des clients concrets, pas juste des clics.',
  },
  {
    slug: 'creation-web',
    icon: Target,
    title: 'Un site qui transforme vos visiteurs en clients',
    description: 'Sites vitrines, e-commerce, landing pages : des sites rapides, optimisés et pensés pour convertir vos visiteurs en demandes de devis ou en ventes.',
  },
  {
    slug: 'social-media',
    icon: Users,
    title: 'Construisez une communauté qui achète',
    description: 'Gestion Instagram, Facebook, LinkedIn, TikTok : on crée du contenu qui engage votre audience et génère des ventes.',
  },
  {
    slug: 'seo-sea',
    icon: TrendingUp,
    title: 'Soyez trouvé en premier sur Google',
    description: 'SEO technique, contenu optimisé, fiche Google Business : on vous positionne là où vos clients vous cherchent.',
  },
  {
    slug: 'strategie-digitale',
    icon: BarChart,
    title: 'Performance & Analytics',
    description: 'Rapports hebdomadaires, KPIs clairs, optimisation continue : chaque euro investi est suivi et optimisé.',
  },
  {
    slug: 'audience-engagement',
    icon: Award,
    title: 'Branding & Identité',
    description: 'Logo, charte graphique, identité de marque : on construit une image professionnelle qui inspire confiance.',
  },
];

const industries = [
  { name: 'E-commerce', growth: 'x2.5 CA' },
  { name: 'Restauration', growth: '+47%' },
  { name: 'Rénovation / BTP', growth: '15 devis/mois' },
  { name: 'Coaching', growth: '8 clients/mois' },
  { name: 'Commerce local', growth: '35% CA en ligne' },
  { name: 'DropEats', growth: '+2 100€/mois' },
];

const process = [
  {
    number: '01',
    title: 'Audit',
    description: 'Analyse complète de votre situation actuelle et identification des opportunités.',
  },
  {
    number: '02',
    title: 'Stratégie',
    description: 'Élaboration d\'un plan d\'action personnalisé et mesurable.',
  },
  {
    number: '03',
    title: 'Exécution',
    description: 'Mise en œuvre professionnelle de votre stratégie digitale.',
  },
  {
    number: '04',
    title: 'Optimisation',
    description: 'Amélioration continue basée sur les données et résultats.',
  },
];

const advantages = [
  {
    icon: Target,
    title: 'Expertise prouvée',
    description: 'ROI moyen x3 pour nos clients et des résultats mesurables dès les premiers mois.',
  },
  {
    icon: Award,
    title: 'Transparence totale',
    description: 'Rapports détaillés, accès aux données en temps réel et communication claire à chaque étape.',
  },
  {
    icon: Users,
    title: 'Accompagnement humain',
    description: 'Une équipe dédiée qui comprend vos enjeux et s\'adapte à vos besoins spécifiques.',
  },
];

const testimonials = [
  {
    author: 'M. R.',
    role: 'Gérant d\'un restaurant à Versailles',
    text: 'Boost Activity a vraiment boosté notre visibilité en ligne. En quelques mois, nos réservations ont nettement augmenté. Un accompagnement sérieux et à l\'écoute.',
    rating: 5,
  },
  {
    author: 'S. L.',
    role: 'Fondatrice d\'une boutique e-commerce en Île-de-France',
    text: 'Je cherchais une agence qui comprenne les contraintes d\'une petite structure. Boost Activity a su adapter sa stratégie à mon budget et les résultats sont là.',
    rating: 4,
  },
  {
    author: 'T. B.',
    role: 'Dirigeant d\'une PME dans le bâtiment',
    text: 'Très bon suivi, des rapports clairs et une vraie progression sur Google. Je recommande pour les entrepreneurs qui veulent se lancer dans le digital.',
    rating: 5,
  },
];

export function HomePage() {
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema, websiteSchema],
  };

  const displayedTestimonials = testimonials;

  return (
    <div className="bg-white">
      <SEO
        title="Boost Activity - Agence Marketing Digital | Île-de-France"
        description="Agence de marketing digital en Île-de-France. SEO, publicité en ligne, social media et stratégie digitale pour PME ambitieuses. 50+ entreprises accompagnées, ROI moyen x3."
        keywords="agence marketing digital, agence SEO Île-de-France, publicité Google Ads, Facebook Ads, Instagram Ads, stratégie digitale, marketing digital PME"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr"
        schema={combinedSchema}
      />
      
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center px-5 md:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-20 overflow-hidden">
        <GradientBackground variant="home" opacity={0.3} className="md:opacity-60" />
        <FloatingShapes className="hidden lg:block" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[36px] sm:text-[52px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.15] sm:leading-[1.1] md:leading-[1.05] mb-5 md:mb-6 px-2 sm:px-0">
              <span className="text-black">On transforme votre</span>
              <br />
              <span className="gradient-text-animated">digital</span>
              <span className="text-black"> en </span>
              <span className="gradient-text-animated">machine à clients</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-[1.5] sm:leading-[1.6] md:leading-relaxed mb-10 md:mb-12 max-w-[650px] mx-auto px-2"
          >
            Publicité, sites web et réseaux sociaux pour les PME et entrepreneurs en Île-de-France. Des résultats mesurables, pas des promesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/contact" className="block">
                <Button className="w-full sm:w-auto gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] transition-opacity shine-effect min-h-[52px] shadow-lg shadow-primary/20">
                  Démarrer votre projet
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/case-studies" className="block">
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] border-2 border-gray-300 hover:border-primary transition-colors min-h-[52px]">
                  Voir nos résultats
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
            <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - MOBILE OPTIMIZED */}
      <section className="py-14 md:py-20 px-5 md:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-stats" opacity={0.25} className="md:opacity-40" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:bg-transparent md:backdrop-blur-none md:rounded-none md:p-0 cursor-pointer"
              >
                <div className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] tracking-tight bg-gradient-to-r from-primary to-[var(--accent-purple)] bg-clip-text text-transparent mb-1 md:mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-[13px] sm:text-[14px] text-gray-600 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-manifesto" opacity={0.3} className="md:opacity-45" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight leading-[1.2] sm:leading-tight mb-5 sm:mb-6 md:mb-8">
              <span className="text-black">Le digital </span>
              <span className="gradient-text-animated">accessible</span>
              <span className="text-black">,</span>
              <br />
              <span className="text-black">transparent, performant</span>
            </h2>
            <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] sm:leading-[1.65] md:leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-[600px] mx-auto">
              Trop souvent, le marketing digital est perçu comme complexe, opaque ou réservé aux grandes entreprises. Nous changeons cela.
            </p>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-gray-700 leading-[1.6] sm:leading-[1.65] md:leading-relaxed max-w-[650px] mx-auto">
              Notre mission : rendre le digital accessible à toutes les entreprises ambitieuses, avec des stratégies claires, des résultats mesurables, et un accompagnement humain de qualité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Image Section - MOBILE OPTIMIZED */}
      <section className="py-0 sm:py-12 md:py-20 px-0 sm:px-5 md:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-feature" opacity={0.2} className="md:opacity-35" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-none sm:rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNDc4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Espace de travail moderne avec ordinateur portable et outils de marketing digital - Boost Activity agence marketing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-[var(--success)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Services Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-services" opacity={0.3} className="md:opacity-40" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight leading-[1.2] sm:leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="text-black">Des </span>
              <span className="gradient-text-animated">services</span>
              <span className="text-black"> pensés</span>
              <br />
              <span className="text-black">pour votre </span>
              <span className="gradient-text-animated">réussite</span>
            </h2>
            <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] md:leading-relaxed max-w-[700px] mx-auto px-2">
              Une approche complète et intégrée pour accélérer votre croissance digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <Card className="p-6 sm:p-7 md:p-8 h-full transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden hover:shadow-lg active:scale-[0.98]">
                    <div className="absolute inset-0 card-hover-home-services opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                      </div>
                      <h3 className="text-[19px] sm:text-[21px] md:text-[24px] tracking-tight mb-2 sm:mb-2.5 md:mb-3 gradient-text-animated">
                        {service.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-[1.6] mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[13px] sm:text-[14px] text-black group-hover:text-primary transition-colors">
                        En savoir plus <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10 sm:mt-12 md:mt-12"
          >
            <Link to="/services">
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] border-2 border-gray-300 hover:border-black min-h-[52px]">
                Découvrir tous nos services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-industries" opacity={0.3} className="md:opacity-42" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <motion.h2 
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight leading-[1.2] sm:leading-tight mb-4 sm:mb-5 md:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="gradient-text-animated">Résultats</span> <span className="text-black">par secteur</span>
            </motion.h2>
            <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] md:leading-relaxed max-w-[700px] mx-auto px-2">
              Des stratégies adaptées à chaque industrie
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="p-5 sm:p-6 text-center border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg active:scale-[0.95]">
                  <div className="absolute inset-0 card-hover-purple-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-[22px] sm:text-[26px] md:text-[28px] tracking-tight mb-2 gradient-text-animated group-hover:scale-110 transition-transform duration-300 inline-block">
                      {industry.growth}
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-600 leading-tight">{industry.name}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10 sm:mt-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/solutions">
                <Button className="w-full sm:w-auto gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] transition-opacity shine-effect min-h-[52px] shadow-lg shadow-primary/20">
                  Découvrir les solutions par secteur
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-process" opacity={0.28} className="md:opacity-38" />
        <FloatingShapes className="hidden lg:block" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight leading-[1.2] sm:leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="gradient-text-animated">Notre méthode</span> <span className="text-black">éprouvée</span>
            </h2>
            <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] md:leading-relaxed max-w-[700px] mx-auto px-2">
              Un processus structuré pour garantir votre succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg active:scale-[0.98]">
                  <div className="absolute inset-0 card-hover-energy-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Layout horizontal sur mobile, vertical sur desktop */}
                  <div className="relative z-10 flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0 p-5 sm:p-7 md:p-8">
                    {/* Numéro - compact et centré sur mobile */}
                    <div className="flex-shrink-0 sm:mb-3 md:mb-4 flex items-center justify-center">
                      <div className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-tight bg-gradient-to-br from-primary to-[var(--accent-purple)] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block leading-none">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Contenu - à droite sur mobile, en dessous sur desktop */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center sm:justify-start">
                      <h3 className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[24px] tracking-tight text-black mb-1.5 sm:mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-600 leading-[1.55] sm:leading-[1.6]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-why" opacity={0.3} className="md:opacity-40" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight text-black leading-[1.2] sm:leading-tight mb-5 sm:mb-6 md:mb-8">
                Pourquoi nous
                <br />
                choisir ?
              </h2>
              <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] md:leading-relaxed mb-8 sm:mb-10 md:mb-12">
                Parce que votre réussite est notre priorité. Nous combinons expertise technique, créativité et accompagnement humain pour des résultats qui dépassent vos attentes.
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 sm:p-5 rounded-xl hover:bg-white/60 transition-all duration-500 group active:scale-[0.98]"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <advantage.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[17px] sm:text-[19px] md:text-[20px] tracking-tight text-black mb-1.5 sm:mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-[1.6]">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYyMTk3NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Équipe Boost Activity élaborant une stratégie de marketing digital innovante sur tableau blanc"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-testimonials" opacity={0.3} className="md:opacity-42" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight leading-[1.2] sm:leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="text-black">Ce que disent</span>
              <br />
              <span className="gradient-text-animated">nos clients</span>
            </h2>
            <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] md:leading-relaxed max-w-[700px] mx-auto px-2">
              La confiance de nos clients est notre plus belle récompense
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-7 md:p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg active:scale-[0.98]">
                  <div className="absolute inset-0 card-hover-warm-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[var(--energy)] fill-[var(--energy)]" />
                      ))}
                    </div>
                    <p className="text-[14px] sm:text-[15px] md:text-[17px] text-gray-700 leading-[1.6] mb-5 sm:mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="text-[15px] sm:text-[16px] text-black mb-1">{testimonial.author}</p>
                      <p className="text-[13px] sm:text-[14px] text-gray-600 leading-tight">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10 sm:mt-12"
          >
            <Link to="/case-studies">
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] border-2 border-gray-300 hover:border-black min-h-[52px]">
                Lire toutes les études de cas
              </Button>
            </Link>
          </motion.div>

          {/* Navigation removed - only 3 testimonials displayed */}
        </div>
      </section>

      {/* Audit Gratuit Section */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-[600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] tracking-tight leading-[1.2] sm:leading-tight mb-4 sm:mb-5">
                <span className="gradient-text-animated">Recevez votre audit digital</span>
                <br />
                <span className="text-black">gratuit en 24h</span>
              </h2>
              <p className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-600 leading-[1.6]">
                On analyse votre présence en ligne et on vous dit exactement quoi améliorer. Sans engagement.
              </p>
            </div>

            <Card className="p-6 sm:p-8 border-gray-200 bg-white shadow-lg">
              <form action="https://formspree.io/f/xeepdoly" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="audit-email" className="block text-[14px] text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="audit-email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all text-[15px]"
                  />
                </div>
                <div>
                  <label htmlFor="audit-company" className="block text-[14px] text-gray-700 mb-1.5">Nom de l'entreprise</label>
                  <input
                    type="text"
                    id="audit-company"
                    name="company"
                    required
                    placeholder="Votre entreprise"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all text-[15px]"
                  />
                </div>
                <div>
                  <label htmlFor="audit-url" className="block text-[14px] text-gray-700 mb-1.5">URL du site (optionnel)</label>
                  <input
                    type="url"
                    id="audit-url"
                    name="website"
                    placeholder="https://votre-site.fr"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all text-[15px]"
                  />
                </div>
                <input type="hidden" name="_subject" value="Demande d'audit digital gratuit" />
                <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90 rounded-full py-5 sm:py-6 text-[16px] sm:text-[17px] transition-opacity shine-effect min-h-[52px] shadow-lg shadow-primary/20">
                  Recevoir mon audit gratuit
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Garantie Section */}
      <section className="py-14 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 bg-white">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] tracking-tight leading-[1.2] sm:leading-tight mb-4">
              <span className="text-black">Notre </span>
              <span className="gradient-text-animated">garantie</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: 'Satisfait ou remboursé pendant 30 jours',
              },
              {
                icon: FileText,
                title: 'Rapports transparents chaque semaine',
              },
              {
                icon: Calendar,
                title: 'Pas d\'engagement au-delà de 3 mois',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gray-800" />
                </div>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-gray-700 leading-[1.5]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - MOBILE OPTIMIZED */}
      <section className="py-16 sm:py-20 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-cta" opacity={0.3} className="md:opacity-40" />
        <FloatingShapes className="hidden lg:block" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2 
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-tight text-black leading-[1.2] sm:leading-tight mb-5 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Prêt à booster
              <br />
              votre activité ?
            </motion.h2>
            <p className="text-[15px] sm:text-[17px] md:text-[21px] text-gray-600 leading-[1.6] md:leading-relaxed mb-10 sm:mb-12 max-w-[700px] mx-auto px-2">
              Discutons de votre projet et découvrez comment nous pouvons vous accompagner vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-2">
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <Link to="/contact" className="block">
                  <Button className="w-full sm:w-auto gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] transition-opacity shine-effect min-h-[52px] shadow-lg shadow-primary/20">
                    Planifier un appel gratuit
                  </Button>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full sm:w-auto"
              >
                <Link to="/pricing" className="block">
                  <Button variant="outline" className="w-full sm:w-auto rounded-full px-7 sm:px-8 py-6 text-[16px] sm:text-[17px] border-2 border-gray-300 hover:border-black text-black transition-colors min-h-[52px]">
                    Voir nos offres
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}