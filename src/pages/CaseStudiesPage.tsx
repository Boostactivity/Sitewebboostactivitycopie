import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { SEO } from '../components/SEO';
import { breadcrumbSchema, faqSchema } from '../utils/seo/schemas';

export function CaseStudiesPage() {
  const pageSchema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Études de cas', url: 'https://boostactivity.fr/case-studies' },
  ]);

  const faq = faqSchema([
    {
      question: 'Quels résultats avez-vous obtenus pour vos clients ?',
      answer: 'Nos clients ont obtenu une croissance moyenne de +280%, avec des résultats concrets : +180% de réservations pour La Belle Table, 68K€ de CA en 4 mois pour Élégance Fashion, et 520K€ de pipeline pour Stratégie Plus.',
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'Les premiers résultats apparaissent généralement entre 30 et 90 jours selon le service. Le SEO nécessite 3-6 mois, tandis que les publicités en ligne peuvent générer des résultats dès les premières semaines.',
    },
  ]);

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [pageSchema, faq],
  };

  const caseStudies = [
    {
      slug: 'la-belle-table',
      title: 'La Belle Table',
      category: 'Restaurant',
      description: 'Comment ce restaurant gastronomique a multiplié ses réservations par 2.8 en 6 mois.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      results: [
        { label: 'Réservations', value: '+180%' },
        { label: 'Avis Google', value: '4.8/5' },
        { label: 'ROI', value: '420%' },
      ],
    },
    {
      slug: 'elegance-fashion',
      title: 'Élégance Fashion',
      category: 'E-commerce',
      description: 'Une boutique en ligne qui a généré 68K€ de CA en 4 mois avec nos stratégies SEO et publicités.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      results: [
        { label: 'Chiffre d\'affaires', value: '68K€' },
        { label: 'Taux de conversion', value: '+156%' },
        { label: 'Panier moyen', value: '+42%' },
      ],
    },
    {
      slug: 'energym',
      title: 'EnerGym',
      category: 'Fitness',
      description: 'Cette salle de sport a attiré 340 nouveaux membres en 5 mois grâce au marketing digital.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      results: [
        { label: 'Nouveaux membres', value: '340' },
        { label: 'Coût acquisition', value: '-63%' },
        { label: 'Rétention', value: '89%' },
      ],
    },
    {
      slug: 'strategie-plus',
      title: 'Stratégie Plus',
      category: 'Conseil B2B',
      description: 'Un cabinet de conseil qui a généré 520K€ de pipeline commercial avec l\'inbound marketing.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      results: [
        { label: 'Pipeline généré', value: '520K€' },
        { label: 'Leads qualifiés', value: '+385%' },
        { label: 'Taux closing', value: '34%' },
      ],
    },
    {
      slug: 'premium-immobilier',
      title: 'Premium Immobilier',
      category: 'Immobilier',
      description: 'Une agence immobilière qui a vendu 12 biens de luxe en 8 mois grâce aux publicités ciblées.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      results: [
        { label: 'Biens vendus', value: '12' },
        { label: 'Délai de vente', value: '-45%' },
        { label: 'Prix moyen', value: '780K€' },
      ],
    },
    {
      slug: 'clinique-sourire',
      title: 'Clinique Sourire',
      category: 'Santé',
      description: 'Un cabinet dentaire qui a doublé sa patientèle en 10 mois avec une stratégie locale efficace.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      results: [
        { label: 'Nouveaux patients', value: '+210%' },
        { label: 'Taux de remplissage', value: '95%' },
        { label: 'Satisfaction', value: '4.9/5' },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Études de Cas Marketing Digital - Résultats Clients | Boost Activity"
        description="Découvrez nos résultats : +180% réservations, 68K€ CA, 520K€ pipeline. Cas clients restaurant, e-commerce, fitness, immobilier."
        keywords="études de cas marketing digital, success stories, résultats clients, croissance restaurant, e-commerce, fitness, immobilier"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/case-studies"
        schema={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <GradientBackground variant="cases-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-4 sm:mb-5 md:mb-6">
              <span className="gradient-text-animated">Études de cas</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Découvrez comment nous avons aidé nos clients à atteindre et dépasser leurs objectifs de croissance digitale.
          </motion.p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="cases-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: TrendingUp, label: 'Résultats mesurables', value: '100%' },
              { icon: Users, label: 'Clients accompagnés', value: '35+' },
              { icon: Target, label: 'Taux de satisfaction', value: '100%' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-7 md:p-8 text-center border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-cases-stats">
                  </div>
                  <div className="relative z-10">
                    <item.icon className="w-10 h-10 text-gray-800 mx-auto mb-4" />
                    <div className="text-[36px] sm:text-[42px] md:text-[48px] tracking-tight gradient-text-animated mb-2">{item.value}</div>
                    <div className="text-[14px] text-gray-600">{item.label}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="cases-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/case-studies/${study.slug}`}>
                  <Card className="overflow-hidden h-full transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group relative hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-cases-grid">
                    </div>
                    
                    <div className="relative z-10">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ImageWithFallback
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-5 sm:p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="text-[12px]">
                            {study.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] tracking-tight gradient-text-animated mb-2 sm:mb-3">
                          {study.title}
                        </h3>
                        
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 mb-3 sm:mb-4">
                          {study.description}
                        </p>
                        
                        <div className="text-[17px] sm:text-[19px] md:text-[21px] tracking-tight text-black mb-4 sm:mb-6">
                          Résultats :
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 py-4 sm:py-6 border-t border-b border-gray-200">
                          {study.results.map((metric) => (
                            <div key={metric.label} className="text-center">
                              <div className="text-[18px] sm:text-[21px] md:text-[24px] tracking-tight gradient-text-animated mb-1">
                                {metric.value}
                              </div>
                              <div className="text-[12px] text-gray-600">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-[14px] text-black">
                          Lire l'étude complète <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="cases-cta" opacity={0.58} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8">
              <span className="gradient-text-animated">Écrivons ensemble</span>
              <br />
              <span className="text-black">votre </span>
              <span className="gradient-text-animated">success story</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
              Rejoignez les entreprises qui ont choisi Boost Activity pour accélérer leur croissance.
            </p>
            <Link to="/contact">
              <button className="w-full sm:w-auto gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]">
                Démarrer votre projet
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}