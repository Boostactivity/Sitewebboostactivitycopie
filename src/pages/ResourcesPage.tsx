import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, Download, BookOpen, Video, CheckCircle2, ArrowRight, Clock, Lightbulb } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GradientBackground } from '../components/GradientBackground';
import { FloatingShapes } from '../components/FloatingShapes';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../utils/seo/schemas';

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const pageSchema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Ressources', url: 'https://boostactivity.fr/resources' },
  ]);

  const resources = [
    {
      title: 'Checklist SEO complète',
      description: 'Les 50 points essentiels pour optimiser votre référencement naturel.',
      category: 'SEO',
      type: 'PDF',
      icon: FileText,
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop',
    },
    {
      title: 'Template de stratégie social media',
      description: 'Planifiez votre présence sur les réseaux sociaux pour le trimestre.',
      category: 'Social Media',
      type: 'Template',
      icon: Download,
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    },
    {
      title: 'Guide Google Ads 2025',
      description: 'Maîtrisez les campagnes Google Ads de A à Z avec nos conseils d\'experts.',
      category: 'SEA',
      type: 'Guide',
      icon: BookOpen,
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      title: 'Formation email marketing',
      description: 'Créez des campagnes d\'emailing qui convertissent vraiment.',
      category: 'Emailing',
      type: 'Vidéo',
      icon: Video,
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    },
    {
      title: 'Template d\'audit digital',
      description: 'Évaluez votre présence en ligne avec notre template professionnel.',
      category: 'Stratégie',
      type: 'Template',
      icon: FileText,
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      title: 'Guide Analytics & KPIs',
      description: 'Les métriques essentielles à suivre pour mesurer votre croissance.',
      category: 'Analytics',
      type: 'Guide',
      icon: BookOpen,
      duration: '35 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
  ];

  const blogPosts = [
    {
      title: 'Les tendances marketing digital 2025',
      excerpt: 'Découvrez les innovations qui vont transformer le marketing cette année.',
      category: 'Tendances',
      date: '15 Jan 2025',
      readTime: '5 min',
    },
    {
      title: 'Comment optimiser votre taux de conversion',
      excerpt: 'Techniques éprouvées pour transformer plus de visiteurs en clients.',
      category: 'Conversion',
      date: '10 Jan 2025',
      readTime: '8 min',
    },
    {
      title: 'Instagram vs TikTok : Quelle plateforme choisir ?',
      excerpt: 'Analyse comparative pour maximiser votre présence sur les réseaux sociaux.',
      category: 'Social Media',
      date: '5 Jan 2025',
      readTime: '6 min',
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Ressources Gratuites Marketing Digital - Guides & Templates | Boost Activity"
        description="Guides gratuits, templates, checklists et conseils d'experts en marketing digital. Guide SEO 2025, templates réseaux sociaux, stratégie de contenu et plus."
        keywords="guide marketing digital gratuit, template marketing, checklist SEO, ressources gratuites, guide réseaux sociaux, stratégie contenu"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/resources"
        schema={pageSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <GradientBackground variant="resources-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] tracking-tight text-black leading-[1.05] mb-6">
              Ressources
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Guides pratiques, templates et conseils d'experts pour accélérer votre croissance digitale.
          </motion.p>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="resources-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-gray-200 bg-white/80 backdrop-blur-sm group relative hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 card-hover-resources-featured"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYyMTk3NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ressource en vedette"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="mb-4 w-fit">
                    Nouveau
                  </Badge>
                  <h2 className="text-[48px] tracking-tight text-black leading-tight mb-4">
                    Guide ultime du marketing digital 2025
                  </h2>
                  <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
                    Notre guide le plus complet : stratégie, SEO, publicité, réseaux sociaux, email marketing et analytics. Tout ce dont vous avez besoin pour réussir en ligne.
                  </p>
                  <div className="flex items-center text-[14px] text-gray-600 mb-8">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>60 minutes de lecture • PDF 85 pages</span>
                  </div>
                  <Button className="gradient-energy text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] w-fit transition-opacity">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger gratuitement
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="resources-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-4 sm:mb-5 md:mb-6">
              Toutes les ressources
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Accédez gratuitement à notre bibliothèque complète
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group cursor-pointer relative">
                  <div className="absolute inset-0 card-hover-resources-grid">
                  </div>
                  
                  <div className="relative z-10">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <ImageWithFallback
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{resource.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <resource.icon className="w-5 h-5 text-black" />
                        <span className="text-[12px] text-gray-600">{resource.type}</span>
                      </div>
                      
                      <h3 className="text-[21px] tracking-tight text-black mb-3 leading-tight">
                        {resource.title}
                      </h3>
                      
                      <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] text-gray-500">{resource.duration}</span>
                        <div className="flex items-center text-[14px] text-black">
                          Télécharger <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="resources-content" opacity={0.48} />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Lightbulb className="w-12 h-12 text-gray-800 mx-auto mb-6" />
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="gradient-text-animated">Recevez</span>
              <span className="text-black"> nos meilleures ressources</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12">
              Inscrivez-vous à notre newsletter et recevez chaque semaine des conseils, guides et tendances marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
              <Input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 bg-white rounded-full px-6 py-6 text-[17px] border-gray-200"
              />
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] whitespace-nowrap shine-effect">
                S'inscrire
              </Button>
            </div>
            
            <p className="text-[12px] text-gray-600 mt-4">
              Pas de spam. Désinscription en un clic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="resources-content" opacity={0.48} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-4 sm:mb-5 md:mb-6">
              Derniers articles du blog
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto">
              Conseils et actualités pour rester à la pointe du marketing digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-500 border-gray-200 bg-white/80 backdrop-blur-sm group cursor-pointer relative">
                  <div className="absolute inset-0 card-hover-resources-blog"></div>
                  
                  <div className="relative z-10">
                    <Badge variant="outline" className="mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-[24px] tracking-tight text-black mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-[12px] text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime} de lecture</span>
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
            <Button variant="outline" className="rounded-full px-8 py-6 text-[17px] border-gray-300 hover:border-black">
              Voir tous les articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="resources-cta" opacity={0.58} />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-6 sm:mb-7 md:mb-8">
              Besoin d'aide pour
              <br />
              passer à l'action ?
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
              Les ressources c'est bien, un accompagnement personnalisé c'est encore mieux.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity">
                Parler à un expert
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}