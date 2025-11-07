import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, Target, Users, TrendingUp, Heart, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GradientBackground } from '../components/GradientBackground';
import { FloatingShapes } from '../components/FloatingShapes';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../utils/seo/schemas';

export function AboutPage() {
  const pageSchema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'À propos', url: 'https://boostactivity.fr/about' },
  ]);

  return (
    <div className="bg-white">
      <SEO
        title="À Propos - Agence Marketing Digital Premium Paris | Boost Activity"
        description="Agence marketing digital basée à Paris depuis 2020. Notre mission : rendre le marketing digital accessible, transparent et performant pour toutes les entreprises ambitieuses."
        keywords="agence marketing Paris, à propos Boost Activity, équipe marketing digital, valeurs agence digitale, expertise marketing"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/about"
        schema={pageSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <GradientBackground variant="about-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text-animated">À propos</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Nous sommes une équipe passionnée d'experts digitaux dédiés à propulser votre croissance avec excellence et authenticité.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-mission" opacity={0.48} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
                <span className="text-black">Notre </span>
                <span className="gradient-text-animated">mission</span>
              </h2>
              <p className="text-[21px] text-gray-700 leading-relaxed mb-6">
                Rendre le marketing digital accessible, transparent et performant pour toutes les entreprises ambitieuses.
              </p>
              <p className="text-[17px] text-gray-600 leading-relaxed">
                Trop souvent, le digital est perçu comme complexe, opaque ou réservé aux grandes entreprises. Nous changeons cela en proposant des solutions claires, mesurables et adaptées à chaque besoin, sans jargon inutile ni promesses vides.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMjUzNDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Notre équipe"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-values" opacity={0.48} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Nos </span>
            <span className="gradient-text-animated">valeurs</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'Nous aimons ce que nous faisons et ça se voit dans chaque projet',
              },
              {
                icon: Target,
                title: 'Résultats',
                description: 'Votre succès est notre unique KPI. Pas de vanity metrics.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Toujours à la pointe, nous adoptons les meilleures technologies',
              },
              {
                icon: Users,
                title: 'Transparence',
                description: 'Communication claire, rapports détaillés, honnêteté constante',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm text-center group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-about-values">
                  </div>
                  <div className="relative z-10">
                    <value.icon className="w-10 h-10 text-gray-800 mx-auto mb-6" />
                    <h3 className="text-[24px] tracking-tight mb-3 gradient-text-animated">
                      {value.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-stats" opacity={0.48} />
        <FloatingShapes />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 2022, label: 'Année de création', suffix: '' },
              { value: 165, label: 'Projets réalisés', suffix: '+' },
              { value: 2, label: 'Experts passionnés', suffix: '' },
              { value: 100, label: 'Clients satisfaits', suffix: '%' },
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
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-[14px] text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-timeline" opacity={0.48} />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Notre </span>
            <span className="gradient-text-animated">histoire</span>
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                year: '2022',
                title: 'Les débuts',
                description: 'Fondation de Boost Activity avec une vision : rendre le marketing digital accessible et performant pour toutes les entreprises ambitieuses.',
              },
              {
                year: '2023',
                title: 'Premiers clients',
                description: 'Accompagnement des 15 premiers clients, validation de notre approche centrée sur les résultats concrets et la transparence.',
              },
              {
                year: '2024',
                title: 'Croissance',
                description: 'Expansion de notre portefeuille à 165+ projets, développement de notre expertise en e-commerce et marketing local.',
              },
              {
                year: '2025',
                title: 'Aujourd\'hui',
                description: 'Équipe de 2 experts passionnés, solutions innovantes intégrant l\'IA, réputation solide et clients satisfaits.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-[48px] tracking-tight gradient-text-animated">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[28px] tracking-tight text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[17px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-team" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="gradient-text-animated">L'équipe</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
            {[
              {
                name: 'Sarah Benali',
                role: 'Graphiste & Designer',
                bio: 'Spécialiste en identité visuelle et design digital. Crée des univers graphiques impactants pour nos clients.',
              },
              {
                name: 'Thomas Leroy',
                role: 'Chargé de Marketing Digital',
                bio: 'Expert en stratégie d\'acquisition et gestion de campagnes. Optimise la performance de chaque euro investi.',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group relative">
                  <div className="absolute inset-0 card-hover-about-team"></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Gradient Circle Avatar */}
                    <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-[32px] tracking-tight">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-[24px] tracking-tight text-black mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-[16px] gradient-text-animated mb-4 text-center">{member.role}</p>
                    <p className="text-[14px] text-gray-600 leading-relaxed text-center">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-why" opacity={0.48} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Pourquoi </span>
            <span className="gradient-text-animated">nous choisir</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Expertise reconnue',
                description: 'Certifications Google, Meta, HubSpot. Des résultats mesurables sur chaque projet.',
              },
              {
                icon: TrendingUp,
                title: 'Résultats prouvés',
                description: 'ROI moyen de 3.5x, 100% de clients satisfaits, croissance mesurable.',
              },
              {
                icon: Users,
                title: 'Accompagnement humain',
                description: 'Pas de sous-traitance, équipe dédiée, communication transparente.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-gray-200 bg-white/80 backdrop-blur-sm text-center group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-about-why">
                  </div>
                  <div className="relative z-10">
                    <item.icon className="w-10 h-10 text-gray-800 mx-auto mb-6" />
                    <h3 className="text-[24px] tracking-tight mb-3 gradient-text-animated">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="about-cta" opacity={0.58} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
              <span className="gradient-text-animated">Prêt</span>
              <span className="text-black"> à travailler</span>
              <br />
              <span className="text-black">ensemble ?</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Rejoignez les entreprises qui nous font confiance pour leur croissance digitale.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                Démarrer notre collaboration
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}