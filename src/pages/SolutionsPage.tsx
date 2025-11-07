import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <GradientBackground variant="solutions-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text-animated">Solutions</span>
              <span className="text-black"> par secteur</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Des stratégies digitales sur-mesure, pensées pour les défis spécifiques de votre secteur d'activité.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/solutions/${solution.slug}`}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group relative">
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
                      
                      <div className="p-8">
                        <solution.icon className="w-10 h-10 text-gray-800 mb-4" />
                        
                        <h3 className="text-[28px] tracking-tight gradient-text-animated mb-3 leading-tight">
                          {solution.title}
                        </h3>
                        
                        <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-t border-gray-200">
                          {solution.highlights.map((highlight) => (
                            <div key={highlight} className="text-center">
                              <div className="text-[16px] tracking-tight text-black">
                                {highlight}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-[14px] text-black">
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
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-6">
              <span className="gradient-text-animated">Résultats</span>
              <span className="text-black"> concrets</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Des chiffres qui parlent d'eux-mêmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '+150%', label: 'Croissance moyenne du trafic' },
              { value: '+85%', label: 'Augmentation des conversions' },
              { value: '4.2x', label: 'ROI moyen sur 12 mois' },
              { value: '94%', label: 'Taux de satisfaction client' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[48px] md:text-[64px] tracking-tight gradient-text-animated mb-2">
                  {stat.value}
                </div>
                <div className="text-[14px] text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="solutions-cta" opacity={0.58} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
              <span className="text-black">Votre </span>
              <span className="gradient-text-animated">secteur</span>
              <span className="text-black"> n'est</span>
              <br />
              <span className="text-black">pas listé ?</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Nous accompagnons des entreprises de tous secteurs. Parlons de vos défis spécifiques et créons une solution sur-mesure.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                Parlez-nous de votre activité
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}