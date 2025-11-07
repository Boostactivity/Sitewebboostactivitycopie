import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, Zap, Award, BarChart, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
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
  { value: 280, suffix: '%', label: 'Croissance moyenne', prefix: '+' },
  { value: 150, suffix: '+', label: 'Clients accompagnés' },
  { value: 95, suffix: '%', label: 'Satisfaction client' },
  { value: 5, suffix: 'M€', label: 'CA généré' },
];

const services = [
  {
    slug: 'strategie-digitale',
    icon: Target,
    title: 'Stratégie Digitale',
    description: 'Définissez une vision claire et des objectifs mesurables pour votre croissance en ligne.',
  },
  {
    slug: 'seo-sea',
    icon: TrendingUp,
    title: 'SEO & SEA',
    description: 'Dominez les résultats de recherche et attirez un trafic qualifié sur votre site.',
  },
  {
    slug: 'social-media',
    icon: Users,
    title: 'Social Media',
    description: 'Créez une communauté engagée et transformez vos followers en clients fidèles.',
  },
  {
    slug: 'marketing-acquisition',
    icon: Zap,
    title: 'Marketing d\'Acquisition',
    description: 'Attirez, convertissez et fidélisez vos clients avec des campagnes performantes.',
  },
  {
    slug: 'audience-engagement',
    icon: Users,
    title: 'Audience & Engagement',
    description: 'Développez votre communauté et maximisez l\'engagement de votre audience.',
  },
  {
    slug: 'performance-analytics',
    icon: BarChart,
    title: 'Performance & Analytics',
    description: 'Mesurez, analysez et optimisez vos résultats en temps réel.',
  },
];

const industries = [
  { name: 'E-commerce', growth: '+340%' },
  { name: 'Restauration', growth: '+180%' },
  { name: 'Fitness', growth: '+220%' },
  { name: 'Immobilier', growth: '+165%' },
  { name: 'Services B2B', growth: '+290%' },
  { name: 'Santé', growth: '+145%' },
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
    description: '280% de croissance moyenne pour nos clients et des résultats mesurables dès les premiers mois.',
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
    author: 'Sophie Martin',
    role: 'Fondatrice, La Belle Table',
    text: 'Grâce à Boost Activity, nos réservations ont augmenté de 180% en 6 mois. Leur approche est professionnelle et orientée résultats.',
    rating: 5,
  },
  {
    author: 'Thomas Dubois',
    role: 'CEO, Élégance Fashion',
    text: 'Une équipe exceptionnelle qui a transformé notre présence en ligne. Nos ventes e-commerce ont explosé !',
    rating: 5,
  },
  {
    author: 'Marie Leclerc',
    role: 'Directrice Marketing, FitPro',
    text: 'Des professionnels qui comprennent vraiment les enjeux du digital. Résultats au-delà de nos espérances.',
    rating: 5,
  },
  {
    author: 'Jean-Pierre Rousseau',
    role: 'Fondateur, Prestige Immo',
    text: 'Notre visibilité a été multipliée par 3. Les prospects sont plus qualifiés et nos ventes ont augmenté de 165%.',
    rating: 5,
  },
  {
    author: 'Claire Fontaine',
    role: 'CEO, Stratégie Plus',
    text: 'Un partenaire stratégique qui nous a permis de générer 520K€ de pipeline en 5 mois. Impressionnant !',
    rating: 5,
  },
  {
    author: 'Alexandre Chen',
    role: 'Dr., Clinique Sourire',
    text: 'Notre patientèle a doublé grâce à leur stratégie digitale. Un investissement qui se rentabilise rapidement.',
    rating: 5,
  },
];

export function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema, websiteSchema],
  };

  const displayedTestimonials = testimonials.slice(
    currentTestimonial * 3,
    currentTestimonial * 3 + 3
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white">
      <SEO
        title="Boost Activity - Agence Marketing Digital Premium | Paris"
        description="Agence de marketing digital haut de gamme à Paris. SEO, publicité en ligne, social media et stratégie digitale pour PME ambitieuses. +280% de croissance moyenne pour nos clients."
        keywords="agence marketing digital Paris, agence SEO Paris, publicité Google Ads, Facebook Ads, Instagram Ads, stratégie digitale, marketing digital premium, agence digitale PME"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr"
        schema={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <GradientBackground variant="home" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-6">
              <span className="text-black">Votre </span>
              <span className="gradient-text-animated">croissance</span>
              <br />
              <span className="text-black">commence ici</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[700px] mx-auto"
          >
            Boost Activity accompagne les entrepreneurs et entreprises ambitieuses vers une croissance digitale maîtrisée, durable et impactante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                  Démarrer votre projet
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/case-studies">
                <Button variant="outline" className="rounded-full px-8 py-6 text-[17px] border-gray-300 hover:border-primary transition-colors">
                  Voir nos réalisations
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-stats" opacity={0.5} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[48px] md:text-[64px] tracking-tight bg-gradient-to-r from-primary to-[var(--accent-purple)] bg-clip-text text-transparent mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-[14px] text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-manifesto" opacity={0.55} />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
              <span className="text-black">Le digital </span>
              <span className="gradient-text-animated">accessible</span>
              <span className="text-black">,</span>
              <br />
              <span className="text-black">transparent, performant</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-8">
              Trop souvent, le marketing digital est perçu comme complexe, opaque ou réservé aux grandes entreprises. Nous changeons cela.
            </p>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              Notre mission : rendre le digital accessible à toutes les entreprises ambitieuses, avec des stratégies claires, des résultats mesurables, et un accompagnement humain de qualité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-feature" opacity={0.45} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden aspect-[16/9] group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNDc4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bureau moderne avec ordinateur portable"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-[var(--success)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-services" opacity={0.5} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-6">
              <span className="text-black">Des </span>
              <span className="gradient-text-animated">services</span>
              <span className="text-black"> pensés</span>
              <br />
              <span className="text-black">pour votre </span>
              <span className="gradient-text-animated">réussite</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Une approche complète et intégrée pour accélérer votre croissance digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <Card className="p-8 h-full transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-home-services">
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-6">
                        <service.icon className="w-6 h-6 text-gray-800" />
                      </div>
                      <h3 className="text-[24px] tracking-tight mb-3 gradient-text-animated">
                        {service.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[14px] text-black">
                        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
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
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-8 py-6 text-[17px] border-gray-300 hover:border-black">
                Découvrir tous nos services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-industries" opacity={0.52} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="gradient-text-animated">Résultats</span> <span className="text-black">par secteur</span>
            </motion.h2>
            <p className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Des stratégies adaptées à chaque industrie
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-purple-variant">
                  </div>
                  <div className="relative z-10">
                    <div className="text-[28px] tracking-tight mb-2 gradient-text-animated">
                      {industry.growth}
                    </div>
                    <div className="text-[12px] text-gray-600">{industry.name}</div>
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
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/solutions">
                <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                  Découvrir les solutions par secteur
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-process" opacity={0.48} />
        <FloatingShapes />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-6">
              <span className="gradient-text-animated">Notre méthode</span> <span className="text-black">éprouvée</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Un processus structuré pour garantir votre succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-energy-variant">
                  </div>
                  <div className="relative z-10">
                    <div className="text-[64px] tracking-tight bg-gradient-to-br from-primary to-[var(--accent-purple)] bg-clip-text text-transparent mb-4">
                      {step.number}
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-why" opacity={0.5} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-8">
                Pourquoi nous
                <br />
                choisir ?
              </h2>
              <p className="text-[21px] text-gray-600 leading-relaxed mb-12">
                Parce que votre réussite est notre priorité. Nous combinons expertise technique, créativité et accompagnement humain pour des résultats qui dépassent vos attentes.
              </p>

              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-500 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                        <advantage.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[20px] tracking-tight text-black mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-[16px] text-gray-600 leading-relaxed">
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
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYyMTk3NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Stratégie digitale"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-testimonials" opacity={0.52} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-6">
              <span className="text-black">Ce que disent</span>
              <br />
              <span className="gradient-text-animated">nos clients</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              La confiance de nos clients est notre plus belle récompense
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-warm-variant">
                  </div>
                  <div className="relative z-10">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[var(--energy)] fill-[var(--energy)]" />
                      ))}
                    </div>
                    <p className="text-[17px] text-gray-700 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-[16px] text-black mb-1">{testimonial.author}</p>
                      <p className="text-[14px] text-gray-600">{testimonial.role}</p>
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
            className="text-center mt-12"
          >
            <Link to="/case-studies">
              <Button variant="outline" className="rounded-full px-8 py-6 text-[17px] border-gray-300 hover:border-black">
                Lire toutes les études de cas
              </Button>
            </Link>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
            </motion.button>
            
            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-8 bg-gradient-to-r from-primary to-[var(--accent-purple)]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400 cursor-pointer'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
        <GradientBackground variant="home-resources" opacity={0.48} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-[var(--success)] to-[var(--primary)] text-white border-0">Gratuit</Badge>
              </motion.div>
              <h2 className="text-[48px] md:text-[56px] tracking-tight leading-tight mb-6">
                <span className="gradient-text-animated">Guides & ressources</span>
                <br />
                <span className="text-black">pour entrepreneurs</span>
              </h2>
              <p className="text-[21px] text-gray-600 leading-relaxed mb-8">
                Accédez gratuitement à notre bibliothèque de guides, templates et conseils d'experts pour accélérer votre croissance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Guide complet du marketing digital 2025',
                  'Templates prêts à l\'emploi',
                  'Checklists et outils pratiques',
                  'Articles et conseils d\'experts',
                ].map((item) => (
                  <li key={item} className="flex items-center text-[16px] text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-black mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/resources">
                <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity">
                  Accéder aux ressources
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759903553690-e29fdc8b1c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3JraW5nJTIwbW9kZXJufGVufDF8fHx8MTc2MjI2Njc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ressources"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="home-cta" opacity={0.5} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2 
              className="text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Prêt à booster
              <br />
              votre activité ?
            </motion.h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Discutons de votre projet et découvrez comment nous pouvons vous accompagner vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/contact">
                  <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                    Planifier un appel gratuit
                  </Button>
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link to="/pricing">
                  <Button variant="outline" className="rounded-full px-8 py-6 text-[17px] border-gray-300 hover:border-black text-black transition-colors">
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
