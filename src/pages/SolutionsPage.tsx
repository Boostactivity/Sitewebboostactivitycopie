import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../utils/seo/schemas';

export function SolutionsPage() {
  const schema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Solutions', url: 'https://boostactivity.fr/solutions' },
  ]);

  const solutions = [
    {
      slug: 'e-commerce',
      title: 'E-commerce',
      description: 'Boostez vos ventes en ligne avec des campagnes ciblées et une expérience client optimisée.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      benefits: ['Augmentation du taux de conversion', 'Réduction du coût d\'acquisition', 'Fidélisation client'],
    },
    {
      slug: 'restaurant',
      title: 'Restaurants',
      description: 'Attirez plus de clients avec une présence digitale gourmande et des campagnes locales efficaces.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      benefits: ['Réservations en ligne', 'Présence Google Maps', 'Avis clients optimisés'],
    },
    {
      slug: 'services-professionnels',
      title: 'Services Professionnels',
      description: 'Générez des leads qualifiés et affirmez votre expertise dans votre domaine.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      benefits: ['Génération de leads B2B', 'Personal branding', 'Contenus d\'expertise'],
    },
    {
      slug: 'sante-bien-etre',
      title: 'Santé & Bien-être',
      description: 'Développez votre patientèle avec une communication digitale éthique et conforme.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      benefits: ['Prise de rendez-vous en ligne', 'Réputation digitale', 'Conformité RGPD'],
    },
    {
      slug: 'immobilier',
      title: 'Immobilier',
      description: 'Vendez et louez plus rapidement avec une visibilité maximale sur le digital.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      benefits: ['Visites virtuelles 360°', 'Publicités ciblées', 'Lead nurturing'],
    },
    {
      slug: 'btob',
      title: 'B2B & Industrie',
      description: 'Développez votre pipeline commercial avec des stratégies d\'inbound marketing performantes.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      benefits: ['Lead generation B2B', 'Marketing automation', 'Content marketing'],
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Solutions Marketing par Secteur - E-commerce, Restauration, Services | Boost Activity"
        description="Solutions marketing digital adaptées à votre secteur : E-commerce, Restaurants, Services professionnels, Santé, Immobilier. Stratégies sur-mesure pour chaque industrie."
        keywords="marketing e-commerce, marketing restaurant, marketing services professionnels, marketing santé, marketing immobilier, solutions sectorielles"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/solutions"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <GradientBackground variant="solutions-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-4 sm:mb-5 md:mb-6">
              <span className="gradient-text-animated">Solutions</span>
              <span className="text-black"> par secteur</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Des stratégies digitales sur-mesure, pensées pour les défis spécifiques de votre secteur d'activité.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/solutions/${solution.slug}`}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group relative active:scale-[0.98]">
                    <div className="absolute inset-0 card-hover-solutions-grid">
                    </div>
                    
                    <div className="relative z-10">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ImageWithFallback
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-6 sm:p-7 md:p-8">
                        <h3 className="text-[24px] sm:text-[26px] md:text-[28px] tracking-tight gradient-text-animated mb-2.5 sm:mb-3 leading-tight">
                          {solution.title}
                        </h3>
                        
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-5 sm:mb-6">
                          {solution.description}
                        </p>
                        
                        <div className="flex flex-col gap-2 mb-5 sm:mb-6 py-3 sm:py-4 border-t border-gray-200">
                          {solution.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-black mr-3 mt-1.5 flex-shrink-0" />
                              <div className="text-[13px] sm:text-[14px] tracking-tight text-gray-700 leading-relaxed">
                                {benefit}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-[13px] sm:text-[14px] text-black">
                          En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-5 sm:mb-6">
              <span className="gradient-text-animated">Résultats</span>
              <span className="text-black"> concrets</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Des chiffres qui parlent d'eux-mêmes
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
            {[
              { value: '+150%', label: 'Croissance moyenne du trafic' },
              { value: '+85%', label: 'Augmentation des conversions' },
              { value: '3x', label: 'ROI moyen sur 12 mois' },
              { value: '100%', label: 'Taux de satisfaction client' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[40px] sm:text-[52px] md:text-[64px] tracking-tight gradient-text-animated mb-1.5 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions-cta" opacity={0.58} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8">
              <span className="text-black">Votre </span>
              <span className="gradient-text-animated">secteur</span>
              <span className="text-black"> n'est</span>
              <br />
              <span className="text-black">pas listé ?</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
              Nous accompagnons des entreprises de tous secteurs. Parlons de vos défis spécifiques et créons une solution sur-mesure.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]">
                Parlez-nous de votre activité
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}