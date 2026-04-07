import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Sparkles, Palette, Target, ShoppingCart, Globe, TrendingUp, RefreshCw } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { GradientBackground } from '../components/GradientBackground';
import { FloatingShapes } from '../components/FloatingShapes';
import { SEO } from '../components/SEO';
import { breadcrumbSchema, offerSchema } from '../utils/seo/schemas';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const pageSchema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Tarifs', url: 'https://boostactivity.fr/pricing' },
  ]);

  const starterOffer = offerSchema({
    name: 'Pack Starter',
    description: 'Pour démarrer votre présence digitale avec les fondamentaux du marketing digital.',
    price: '490',
    priceCurrency: 'EUR',
  });

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [pageSchema, starterOffer],
  };

  return (
    <div className="bg-white">
      <SEO
        title="Tarifs Marketing Digital - Packs & Abonnements | Boost Activity"
        description="Tarifs transparents : Starter 490€/mois, Growth 990€/mois, Performance 1990€/mois. Services sur-mesure disponibles. Devis gratuit."
        keywords="tarif marketing digital, prix SEO, prix publicité en ligne, abonnement marketing, pack marketing digital, devis marketing"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/pricing"
        schema={combinedSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <GradientBackground variant="pricing-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-4 sm:mb-5 md:mb-6">
              <span className="text-black">Tarifs & </span>
              <span className="gradient-text-animated">Offres</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Des solutions flexibles et transparentes, adaptées à chaque étape de votre croissance.
          </motion.p>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="pricing-plans" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="gradient-text-animated">Forfaits</span>
              <span className="text-black"> mensuels</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Un accompagnement continu pour une croissance durable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {[
              {
                icon: Sparkles,
                name: 'Starter',
                price: '490',
                period: '/mois',
                description: 'Idéal pour démarrer votre présence digitale',
                features: [
                  'Site web 5 pages',
                  'SEO on-page',
                  'Google My Business',
                  'Gestion réseaux sociaux (2 plateformes)',
                  '2 posts par semaine',
                  'Rapport mensuel',
                  'Support email',
                ],
                cta: 'Choisir Starter',
                badge: 'Idéal pour débuter',
                badgeColor: 'bg-gray-800',
              },
              {
                icon: Zap,
                name: 'Growth',
                price: '990',
                period: '/mois',
                description: 'Pour accélérer votre croissance',
                features: [
                  'Site web 10-15 pages',
                  'SEO avancé + blog',
                  'Campagnes publicitaires (Budget inclus 1000€)',
                  'Gestion réseaux sociaux (5 plateformes)',
                  '5 posts par semaine',
                  'Email marketing automation',
                  'CRM Setup & intégration',
                  'Rapports hebdomadaires',
                  'Support prioritaire',
                  'Réunion stratégique mensuelle',
                ],
                cta: 'Choisir Growth',
                badge: 'Le plus populaire',
                badgeColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
                isPopular: true,
              },
              {
                icon: ArrowRight,
                name: 'Performance',
                price: '1990',
                period: '/mois',
                description: 'Solution complète et personnalisée',
                features: [
                  'Tout de Growth, plus :',
                  'Stratégie complète sur-mesure',
                  'Site custom illimité',
                  'Campagnes multi-canal',
                  'Budget pub optimisé',
                  'Branding complet',
                  'App mobile si nécessaire',
                  'Automatisation avancée',
                  'Équipe dédiée',
                  'Support 24/7',
                  'Reporting en temps réel',
                ],
                cta: 'Nous contacter',
                badge: 'Solution complète',
                badgeColor: 'bg-gray-800',
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Badge toujours visible */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className={`${plan.badgeColor} text-white text-[12px] px-4 py-1.5 rounded-full shadow-lg`}>
                    {plan.badge}
                  </span>
                </div>
                
                <Card
                  className={`p-6 sm:p-7 md:p-8 h-full border-2 transition-all duration-500 relative overflow-hidden
                    ${hoveredPlan === plan.name ? 'scale-105 border-black shadow-2xl' : ''}
                    ${plan.isPopular && !hoveredPlan
                      ? 'border-black bg-white shadow-xl' 
                      : plan.isPopular && hoveredPlan && hoveredPlan !== plan.name
                      ? 'border-gray-200 bg-white shadow-xl'
                      : !plan.isPopular && !hoveredPlan
                      ? 'border-gray-200 bg-white/80 backdrop-blur-sm'
                      : !plan.isPopular && hoveredPlan && hoveredPlan !== plan.name
                      ? 'border-gray-200 bg-white/80 backdrop-blur-sm'
                      : ''
                    }
                  `}
                >
                  {/* Effet hover background pour tous */}
                  <div className="absolute inset-0 card-hover-pricing-plans transition-opacity duration-500" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <plan.icon className="w-10 h-10 text-gray-800 mb-6" />
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] tracking-tight gradient-text-animated mb-2">{plan.name}</h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-600 mb-4 sm:mb-5 md:mb-6">{plan.description}</p>

                    <div className="mb-6 sm:mb-7 md:mb-8">
                      <div className="flex items-baseline">
                        <span className="text-[40px] sm:text-[48px] md:text-[56px] tracking-tight text-black">{plan.price}</span>
                        {plan.price !== 'Sur devis' && <span className="text-[15px] sm:text-[17px] text-gray-600 ml-1">€</span>}
                        <span className="text-[13px] sm:text-[14px] text-gray-600 ml-2">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-gray-800 flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-[13px] sm:text-[14px] text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block mt-auto">
                      <Button
                        className={`w-full rounded-full py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] min-h-[52px] transition-all ease-in-out ${
                          hoveredPlan === plan.name
                            ? 'gradient-primary text-white shine-effect duration-150 delay-100'
                            : hoveredPlan && hoveredPlan !== plan.name
                            ? 'bg-gray-100 text-gray-500 opacity-50 duration-400 delay-100'
                            : plan.isPopular
                            ? 'gradient-primary text-white shine-effect duration-150'
                            : 'bg-gray-100 text-black duration-150'
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-time Services */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="pricing-plans" opacity={0.48} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="text-black">Services </span>
              <span className="gradient-text-animated">à l'unité</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Prestations ponctuelles pour des besoins spécifiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                name: 'Branding & Identité',
                priceFrom: '490',
                priceTo: '1,500',
                description: 'Logo, charte graphique, brand book',
                icon: Palette,
              },
              {
                name: 'Stratégie digitale',
                priceFrom: '490',
                priceTo: '2,490',
                description: 'Audit, analyse, roadmap 12-24 mois',
                icon: TrendingUp,
              },
              {
                name: 'Campagne SEA (Setup)',
                priceFrom: '590',
                priceTo: null,
                description: 'Setup Google Ads / Meta Ads + 1er mois gestion',
                icon: Target,
                badge: '+ Budget pub',
              },
              {
                name: 'Création de site web',
                priceFrom: '990',
                priceTo: '2,500',
                description: 'Site vitrine 5-10 pages, responsive, CMS inclus',
                icon: Globe,
              },
              {
                name: 'E-commerce complet',
                priceFrom: '1,090',
                priceTo: '3,500',
                description: 'Boutique en ligne complète avec paiement et gestion',
                icon: ShoppingCart,
              },
              {
                name: 'Refonte site existant',
                priceFrom: '2,200',
                priceTo: '5,000',
                description: 'Modernisation et optimisation de votre site',
                icon: RefreshCw,
              },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="p-5 sm:p-6 border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 group relative overflow-hidden h-full">
                  {/* Effet gradient synchronisé avec le background */}
                  <div className="absolute inset-0 card-hover-pricing-plans opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <service.icon className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors duration-300" />
                      {service.badge && (
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-[18px] sm:text-[20px] md:text-[21px] tracking-tight gradient-text-animated mb-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-[13px] text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-light">À partir de</span>
                      </div>
                      <div className="flex items-baseline mt-1.5 gap-1">
                        <span className="text-[24px] sm:text-[28px] md:text-[32px] tracking-tight text-black font-light">{service.priceFrom}</span>
                        {service.priceTo && (
                          <>
                            <span className="text-[14px] sm:text-[16px] text-gray-400 mx-1">—</span>
                            <span className="text-[24px] sm:text-[28px] md:text-[32px] tracking-tight text-black font-light">{service.priceTo}</span>
                          </>
                        )}
                        <span className="text-[16px] text-gray-600 font-light">€</span>
                      </div>
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
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <Link to="/contact">
              <Button className="w-full sm:w-auto gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]">
                Demander un devis personnalisé
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="pricing-faq" opacity={0.48} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8">
              <span className="text-black">Pourquoi </span>
              <span className="gradient-text-animated">investir</span>
              <span className="text-black"> avec</span>
              <br />
              <span className="text-black">Boost Activity ?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-10 sm:mt-12 md:mt-16">
            {[
              {
                title: 'ROI mesurable',
                description: 'Chaque euro investi génère en moyenne 3x de retour pour nos clients',
              },
              {
                title: 'Transparence totale',
                description: 'Rapports détaillés, accès complet à vos campagnes, aucun frais caché',
              },
              {
                title: 'Flexibilité',
                description: 'Solutions modulables qui s\'adaptent à votre croissance et budget',
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
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] tracking-tight gradient-text-animated mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="pricing-faq" opacity={0.48} />
        <div className="max-w-[900px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-10 sm:mb-12 md:mb-16 text-center"
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
              {[
                {
                  question: 'Comment fonctionnent les forfaits mensuels ?',
                  answer: 'Nos forfaits mensuels sont des abonnements sans engagement sur 12 mois minimum. Ils incluent un ensemble de services récurrents (gestion réseaux sociaux, SEO, reporting, support). Vous pouvez ajuster ou annuler avec un préavis de 30 jours.',
                },
                {
                  question: 'Puis-je combiner plusieurs services ?',
                  answer: 'Absolument ! Nous créons souvent des packages sur-mesure combinant plusieurs services selon vos besoins. Contactez-nous pour un devis personnalisé.',
                },
                {
                  question: 'Y a-t-il des frais cachés ?',
                  answer: 'Non, transparence totale. Les seuls coûts additionnels peuvent être : budget publicitaire (que vous contrôlez), outils tiers nécessaires (hosting, domaine, etc.), et prestations supplémentaires que vous demandez.',
                },
                {
                  question: 'Que se passe-t-il si je dépasse mon budget pub inclus ?',
                  answer: 'Pour les forfaits incluant du budget pub, si vous souhaitez augmenter, nous ajustons simplement la facture pour couvrir le supplément. Pas de frais cachés, juste le coût réel.',
                },
                {
                  question: 'Proposez-vous des paiements échelonnés ?',
                  answer: 'Oui, pour les projets one-time au-dessus de 5,000€, nous pouvons proposer un paiement en 2-3 fois (30% démarrage, 40% mi-parcours, 30% livraison).',
                },
                {
                  question: 'Offrez-vous une garantie ?',
                  answer: 'Nous garantissons notre travail : si vous n\'êtes pas satisfait de nos livrables, nous les révisons jusqu\'à satisfaction. Pour les forfaits mensuels, vous voyez les résultats mois après mois.',
                },
                {
                  question: 'Comment se passe la facturation ?',
                  answer: 'Forfaits mensuels : prélèvement automatique le 1er du mois. Projets one-time : facturation selon échéancier défini. Devis détaillé fourni avant tout engagement.',
                },
                {
                  question: 'Puis-je annuler mon forfait mensuel ?',
                  answer: 'Oui, avec un préavis de 30 jours. Nous recommandons un engagement minimum de 6 mois pour voir des résultats significatifs, mais vous restez libre.',
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-5 sm:px-6 md:px-8 py-2 transition-all duration-500 relative overflow-hidden group hover:shadow-lg"
                >
                  <div className="absolute inset-0 card-hover-pricing-faq pointer-events-none"></div>
                  <AccordionTrigger className="text-[16px] sm:text-[18px] md:text-[20px] tracking-tight text-black hover:no-underline relative z-10">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-[15px] md:text-[17px] text-gray-600 leading-relaxed pt-4 relative z-10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="pricing-cta" opacity={0.58} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8">
              <span className="text-black">Besoin d'une </span>
              <span className="gradient-text-animated">offre</span>
              <br />
              <span className="gradient-text-animated">sur-mesure</span>
              <span className="text-black"> ?</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
              Chaque entreprise est unique. Parlons de vos besoins spécifiques et créons l'offre parfaite pour vous.
            </p>
            <Link to="/contact">
              <Button className="w-full sm:w-auto gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]">
                Discuter de mon projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}