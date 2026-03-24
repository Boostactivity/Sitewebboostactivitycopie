import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users, BarChart, MessageCircle, Award, UtensilsCrossed } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../utils/seo/schemas';

export function ServicesPage() {
  const schema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Services', url: 'https://boostactivity.fr/services' },
  ]);

  return (
    <div className="bg-white">
      <SEO
        title="Services Marketing Digital - SEO, Publicité & Social Media | Boost Activity"
        description="Services de marketing digital premium : SEO, Google Ads, Facebook Ads, Social Media, Stratégie digitale. Expertise et accompagnement personnalisé pour votre croissance."
        keywords="services marketing digital, SEO, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, social media marketing, stratégie digitale, content marketing"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/services"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <GradientBackground variant="services-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-4 sm:mb-5 md:mb-6">
              <span className="text-black">Nos </span>
              <span className="gradient-text-animated">services</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Une gamme complète de services conçus pour propulser votre croissance digitale. Chaque solution est sur-mesure, pensée pour vos objectifs uniques.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="services-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            {[
              {
                icon: Target,
                title: 'Stratégie digitale',
                slug: 'strategie-digitale',
                description: 'Élaborez un plan d\'action clair et mesurable pour atteindre vos objectifs business',
                features: ['Audit complet', 'Plan stratégique', 'Roadmap détaillée', 'KPIs & suivi'],
              },
              {
                icon: TrendingUp,
                title: 'Marketing & Acquisition',
                slug: 'marketing-acquisition',
                description: 'Attirez et convertissez vos clients idéaux avec des campagnes performantes',
                features: ['Tunnel de conversion', 'Lead generation', 'Marketing automation', 'Analytics'],
              },
              {
                icon: Users,
                title: 'Audience & Engagement',
                slug: 'audience-engagement',
                description: 'Comprendre et engager votre audience cible pour une meilleure interaction',
                features: ['Analyse d\'audience', 'Segmentation', 'Engagement', 'Feedback'],
              },
              {
                icon: BarChart,
                title: 'SEO & SEA',
                slug: 'seo-sea',
                description: 'Dominez les résultats de recherche et maximisez votre visibilité en ligne',
                features: ['Référencement naturel', 'Google Ads', 'Audit SEO', 'Stratégie de mots-clés'],
              },
              {
                icon: MessageCircle,
                title: 'Social Media & Contenu',
                slug: 'social-media',
                description: 'Engagez votre communauté avec du contenu qui marque les esprits',
                features: ['Stratégie de contenu', 'Community management', 'Publicités sociales', 'Influence'],
              },
              {
                icon: Award,
                title: 'Récompenses & Reconnaissance',
                slug: 'recompenses-reconnaissance',
                description: 'Obtenez des récompenses et une reconnaissance pour votre travail',
                features: ['Programmes de récompenses', 'Certifications', 'Reconnaissance', 'Récompenses'],
              },
              {
                icon: UtensilsCrossed,
                title: 'Drop Eats',
                slug: 'drop-eats',
                description: 'Solution complète pour restaurants et traiteurs : optimisation des livraisons, marketing ciblé et gestion digitale',
                features: ['Optimisation livraison', 'Marketing restaurant', 'Gestion commandes', 'Analyse performance'],
              },
            ].map((service, index) => {
              const isDropEats = service.slug === 'drop-eats';
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={isDropEats ? "md:col-span-2 max-w-[900px] mx-auto w-full" : ""}
                >
                  <Link to={`/services/${service.slug}`}>
                    <Card className={`p-6 sm:p-8 md:p-10 h-full transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden ${isDropEats ? 'hover:shadow-xl ring-2 ring-orange-200/50' : 'hover:shadow-lg'}`}>
                      <div className="absolute inset-0 card-hover-services-grid">
                      </div>
                      
                      <div className="relative z-10">
                        {isDropEats && (
                          <div className="flex justify-center mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[12px] tracking-wide uppercase">
                              Nouveau
                            </span>
                          </div>
                        )}
                        
                        <div className={isDropEats ? "flex justify-center mb-6" : ""}>
                          <service.icon className={`${isDropEats ? 'w-14 h-14' : 'w-12 h-12'} mb-6 text-gray-800`} />
                        </div>
                        
                        <h3 className={`${isDropEats ? 'text-[28px] sm:text-[32px] md:text-[36px] text-center' : 'text-[24px] sm:text-[28px] md:text-[32px]'} tracking-tight mb-3 sm:mb-4 gradient-text-animated`}>
                          {service.title}
                        </h3>
                        
                        <p className={`text-[14px] sm:text-[15px] md:text-[17px] text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6 ${isDropEats ? 'text-center max-w-[700px] mx-auto' : ''}`}>
                          {service.description}
                        </p>
                        
                        <ul className={`space-y-2 mb-6 ${isDropEats ? 'grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[600px] mx-auto' : ''}`}>
                          {service.features.map((feature) => (
                            <li key={feature} className={`flex items-center text-[14px] text-gray-700 ${isDropEats ? 'justify-center md:justify-start' : ''}`}>
                              <div className="w-1.5 h-1.5 rounded-full bg-black mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className={`flex items-center text-[14px] text-black ${isDropEats ? 'justify-center' : ''}`}>
                          Découvrir ce service <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="services-content" opacity={0.48} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-5 sm:mb-6">
              <span className="text-black">Notre </span>
              <span className="gradient-text-animated">méthode</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Un processus éprouvé pour garantir votre succès à chaque étape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8">
            {[
              { step: '01', title: 'Découverte', description: 'Comprendre vos objectifs, votre marché et vos défis' },
              { step: '02', title: 'Stratégie', description: 'Élaborer un plan d\'action sur-mesure et mesurable' },
              { step: '03', title: 'Exécution', description: 'Déployer les solutions avec excellence et précision' },
              { step: '04', title: 'Optimisation', description: 'Analyser, ajuster et maximiser les performances' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
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
                      <div className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-tight gradient-text-animated group-hover:scale-110 transition-transform duration-300 inline-block leading-none">
                        {phase.step}
                      </div>
                    </div>
                    
                    {/* Contenu - à droite sur mobile, en dessous sur desktop */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center sm:justify-start">
                      <h3 className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[24px] tracking-tight text-black mb-1.5 sm:mb-2 md:mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-600 leading-[1.55] sm:leading-[1.6]">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="services-cta" opacity={0.65} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8">
              <span className="text-black">Besoin d'un </span>
              <span className="gradient-text-animated">service</span>
              <br />
              <span className="gradient-text-animated">sur-mesure</span>
              <span className="text-black"> ?</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
              Parlons de votre projet et créons ensemble la solution parfaite pour vos besoins.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]">
                Discutons de votre projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}