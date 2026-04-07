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
    'brasserie-du-marche': {
      title: 'Brasserie du Marché',
      category: 'Restaurant',
      location: 'Versailles, Île-de-France',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1080&h=600&fit=crop',
      challenge: '30% de tables vides en semaine, zéro présence en ligne. Le restaurant fonctionnait uniquement grâce au passage piéton et au bouche-à-oreille local, sans aucune fiche Google optimisée ni présence sur les réseaux sociaux.',
      solution: 'Mise en place de campagnes Google Ads locales ciblées sur un rayon de 15km, optimisation complète de la fiche Google Business (photos, horaires, menu, réponses aux avis), et gestion du compte Instagram avec publications régulières (3/semaine) mettant en avant les plats et l\'ambiance.',
      metrics: [
        { label: 'Réservations', before: 'Base', after: '+47%', change: '+47%' },
        { label: 'Coût par réservation', before: 'N/A', after: '3.20€', change: '3.20€' },
        { label: 'Avis Google', before: '12 avis', after: '85 avis', change: '+608%' },
        { label: 'Visites fiche Google', before: '120/mois', after: '890/mois', change: '+642%' },
      ],
      timeline: '3 mois',
      services: ['Google Ads local', 'Fiche Google Business', 'Gestion Instagram'],
      testimonial: {
        text: 'On ne pensait pas que le digital pouvait avoir un tel impact pour un restaurant de quartier. Nos lundis et mardis soir sont enfin remplis, et le coût par réservation est dérisoire comparé à ce que ça rapporte.',
        author: 'F. Dumas',
        role: 'Gérant',
      },
      results: [
        '+47% de réservations en seulement 3 mois',
        'Coût par réservation de 3.20€ seulement',
        'Fiche Google passée de 12 à 85 avis (4.6/5)',
        'Tables en semaine remplies à 80% (contre 50% avant)',
        'Compte Instagram actif avec 1 400+ abonnés locaux',
        'Visibilité Google locale multipliée par 7',
      ],
    },
    'maison-elara': {
      title: 'Maison Elara',
      category: 'E-commerce Cosmétiques',
      location: 'Île-de-France',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1080&h=600&fit=crop',
      challenge: 'Site Shopify existant avec 200 visites par jour mais un taux de conversion catastrophique de 0.8%. Le tunnel d\'achat était trop long, les fiches produits peu convaincantes, et aucune stratégie de relance n\'était en place.',
      solution: 'Refonte complète du tunnel de vente (réduction de 5 à 3 étapes), optimisation des fiches produits avec photos professionnelles et avis clients, mise en place de Meta Ads (Facebook + Instagram) ciblées, et création de séquences email marketing pour les paniers abandonnés et la fidélisation.',
      metrics: [
        { label: 'Taux de conversion', before: '0.8%', after: '3.2%', change: 'x4' },
        { label: 'Chiffre d\'affaires', before: 'Base', after: 'x2.5', change: 'x2.5' },
        { label: 'Panier moyen', before: '38€', after: '52€', change: '+37%' },
        { label: 'Taux abandon panier', before: '78%', after: '52%', change: '-33%' },
      ],
      timeline: '4 mois',
      services: ['Refonte tunnel de vente', 'Meta Ads', 'Email marketing', 'Optimisation fiches produits'],
      testimonial: {
        text: 'Le trafic était là mais rien ne convertissait. En retravaillant le tunnel et en lançant des campagnes ciblées, on a multiplié notre CA par 2.5 en 4 mois. Le retour sur investissement est clair.',
        author: 'N. Kessler',
        role: 'Fondatrice',
      },
      results: [
        'Taux de conversion passé de 0.8% à 3.2%',
        'Chiffre d\'affaires multiplié par 2.5 en 4 mois',
        'Panier moyen augmenté de 38€ à 52€',
        'Taux d\'abandon panier réduit de 78% à 52%',
        'Séquence email paniers abandonnés : 12% de récupération',
        'ROAS Meta Ads stable à 4.2x',
      ],
    },
    'atelier-renov': {
      title: 'Atelier Renov\'',
      category: 'Rénovation intérieure',
      location: 'Yvelines, Île-de-France',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1080&h=600&fit=crop',
      challenge: 'Entreprise de rénovation intérieure entièrement dépendante du bouche-à-oreille, avec seulement 2 demandes de devis par mois via le digital. Pas de site web professionnel, pas de présence Google, pas de publicité.',
      solution: 'Création d\'un site vitrine optimisé SEO avec portfolio de réalisations et formulaire de demande de devis, mise en place de campagnes Google Ads ciblées sur les requêtes locales (rénovation + ville), et optimisation de la fiche Google Business avec photos avant/après.',
      metrics: [
        { label: 'Demandes de devis/mois', before: '2', after: '15', change: 'x7.5' },
        { label: 'ROI publicités', before: 'N/A', after: '4.8x', change: '4.8x' },
        { label: 'Trafic site web', before: '0', after: '1 200/mois', change: '+1 200' },
        { label: 'Position Google', before: 'Absent', after: 'Top 5 local', change: 'Top 5' },
      ],
      timeline: '4 mois',
      services: ['Site vitrine SEO', 'Google Ads', 'Google Business Profile'],
      testimonial: {
        text: 'Avant, je dépendais à 100% du bouche-à-oreille. Maintenant je reçois 15 demandes de devis par mois via mon site et Google. Le ROI est excellent, chaque euro investi en pub m\'en rapporte presque 5.',
        author: 'P. Garnier',
        role: 'Gérant',
      },
      results: [
        '15 demandes de devis par mois via le digital (contre 2 avant)',
        'ROI de 4.8x sur les campagnes Google Ads',
        'Site web professionnel avec portfolio de 25+ réalisations',
        'Position Top 5 sur Google pour "rénovation intérieure Yvelines"',
        'Fiche Google Business avec 35 avis 5 étoiles',
        'Trafic web de 1 200 visiteurs/mois',
      ],
    },
    'sophie-martin-coaching': {
      title: 'Sophie Martin Coaching',
      category: 'Coaching professionnel',
      location: 'Paris, Île-de-France',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080&h=600&fit=crop',
      challenge: 'Coach professionnelle avec une présence Instagram active mais zéro client acquis via le digital. Pas de tunnel de vente, pas de landing page dédiée, et des publications sans stratégie de conversion.',
      solution: 'Création d\'un tunnel de vente complet avec landing page dédiée, lead magnet (guide gratuit), et séquence email de nurturing. Mise en place de campagnes Meta Ads ciblées sur les cadres en reconversion et les entrepreneurs en Île-de-France.',
      metrics: [
        { label: 'Clients/mois via ads', before: '0', after: '8', change: '+8' },
        { label: 'Coût d\'acquisition', before: 'N/A', after: '45€', change: '45€' },
        { label: 'Valeur client moyenne', before: '800€', after: '800€', change: 'ROI 17x' },
        { label: 'Leads/mois', before: '0', after: '45', change: '+45' },
      ],
      timeline: '3 mois',
      services: ['Landing page', 'Tunnel de vente', 'Meta Ads ciblées', 'Email nurturing'],
      testimonial: {
        text: 'Je postais sur Instagram depuis 2 ans sans jamais décrocher un seul client via le digital. Avec le tunnel de vente et les publicités Meta, j\'ai maintenant 8 clients par mois qui viennent directement des ads. Le coût d\'acquisition de 45€ pour un client à 800€, c\'est imbattable.',
        author: 'S. Martin',
        role: 'Coach professionnelle',
      },
      results: [
        '8 clients par mois acquis via les publicités Meta',
        'Coût d\'acquisition client de 45€ (valeur client 800€)',
        '45 leads qualifiés par mois via le tunnel de vente',
        'Taux de conversion landing page de 18%',
        'Séquence email avec 35% de taux d\'ouverture',
        'ROI global de 17x sur l\'investissement publicitaire',
      ],
    },
    'comptoir-des-epices': {
      title: 'Comptoir des Épices',
      category: 'Épicerie fine',
      location: 'Rueil-Malmaison, Île-de-France',
      image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=1080&h=600&fit=crop',
      challenge: 'Boutique physique avec une clientèle vieillissante et aucune présence e-commerce. Le chiffre d\'affaires stagnait et la propriétaire n\'avait aucune visibilité en ligne pour attirer de nouveaux clients.',
      solution: 'Création d\'un site e-commerce avec paiement en ligne et livraison, gestion des réseaux sociaux (Instagram et Facebook) avec contenu mettant en avant les produits et recettes, et mise en place d\'un programme de fidélité digital.',
      metrics: [
        { label: 'CA en ligne', before: '0%', after: '35%', change: '35% du CA' },
        { label: 'Abonnés Instagram', before: '0', after: '1 200', change: '+1 200' },
        { label: 'Commandes en ligne/mois', before: '0', after: '85', change: '+85' },
        { label: 'Panier moyen en ligne', before: 'N/A', after: '42€', change: '42€' },
      ],
      timeline: '6 mois',
      services: ['Site e-commerce', 'Gestion réseaux sociaux', 'Programme fidélité'],
      testimonial: {
        text: 'À 58 ans, je ne pensais pas me lancer dans le e-commerce. Boost Activity a tout géré et aujourd\'hui 35% de mon chiffre d\'affaires vient d\'Internet. Mes clients adorent commander en ligne et je touche une clientèle bien plus large.',
        author: 'M. Lefebvre',
        role: 'Propriétaire',
      },
      results: [
        '35% du chiffre d\'affaires généré en ligne après 6 mois',
        '1 200 abonnés Instagram engagés',
        '85 commandes en ligne par mois',
        'Panier moyen en ligne de 42€',
        'Programme fidélité avec 320 membres actifs',
        'Clientèle rajeunie et élargie géographiquement',
      ],
    },
    'dropeats-le-petit-jardin': {
      title: 'DropEats x Le Petit Jardin',
      category: 'DropEats - Marques virtuelles',
      location: 'Saint-Germain-en-Laye, Île-de-France',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1080&h=600&fit=crop',
      challenge: 'Restaurant avec une marge nette en baisse et une dépendance totale à la salle. Le gérant cherchait à générer des revenus additionnels sans investir dans du personnel ou du matériel supplémentaire.',
      solution: 'Création de 2 marques virtuelles (un concept burger gourmet et un concept poke bowl) exploitant la cuisine existante. Référencement sur Uber Eats et Deliveroo, optimisation des menus et des photos, et gestion des avis et du positionnement sur les plateformes.',
      metrics: [
        { label: 'Revenus nets additionnels', before: '0€', after: '+2 100€/mois', change: '+2 100€' },
        { label: 'Commandes livraison/mois', before: '0', after: '180', change: '+180' },
        { label: 'Employés supplémentaires', before: '0', after: '0', change: '0' },
        { label: 'Note moyenne plateformes', before: 'N/A', after: '4.5/5', change: '4.5/5' },
      ],
      timeline: '2 mois',
      services: ['Création marques virtuelles', 'Référencement Uber Eats & Deliveroo', 'Optimisation menus', 'Gestion avis'],
      testimonial: {
        text: 'Je ne savais même pas que c\'était possible. Deux marques virtuelles, zéro employé en plus, et 2 100€ nets de plus chaque mois. Le concept DropEats m\'a ouvert les yeux sur ce que la livraison peut apporter sans les contraintes habituelles.',
        author: 'R. Chevalier',
        role: 'Gérant',
      },
      results: [
        '+2 100€ nets par mois de revenus additionnels',
        '2 marques virtuelles actives sur Uber Eats et Deliveroo',
        '180 commandes livraison par mois',
        '0 employé supplémentaire nécessaire',
        'Note moyenne de 4.5/5 sur les plateformes',
        'Marge nette du restaurant restaurée et augmentée',
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
    'brasserie-du-marche': {
      title: 'Étude de Cas Brasserie du Marché - +47% Réservations Restaurant | Boost Activity',
      description: 'Comment la Brasserie du Marché à Versailles a augmenté ses réservations de 47% en 3 mois avec Google Ads local et une fiche Google optimisée.',
      keywords: 'étude de cas restaurant, marketing restaurant Versailles, Google Ads restaurant, réservations en ligne, fiche Google Business',
    },
    'maison-elara': {
      title: 'Étude de Cas Maison Elara - Conversion x4 E-commerce Cosmétiques | Boost Activity',
      description: 'Comment Maison Elara a multiplié son taux de conversion par 4 et son CA par 2.5 en 4 mois grâce à la refonte de son tunnel de vente et Meta Ads.',
      keywords: 'étude de cas e-commerce, marketing cosmétiques, tunnel de vente Shopify, Meta Ads, taux de conversion',
    },
    'atelier-renov': {
      title: 'Étude de Cas Atelier Renov - 15 Devis/Mois pour une PME BTP | Boost Activity',
      description: 'Atelier Renov est passé de 2 à 15 demandes de devis par mois grâce à un site SEO, Google Ads et une fiche Google optimisée. ROI 4.8x.',
      keywords: 'étude de cas rénovation, marketing BTP, Google Ads artisan, site vitrine SEO, devis en ligne',
    },
    'sophie-martin-coaching': {
      title: 'Étude de Cas Sophie Martin - 8 Clients/Mois via Meta Ads | Boost Activity',
      description: 'Comment une coach professionnelle a acquis 8 clients par mois via Meta Ads avec un coût d\'acquisition de 45€ pour une valeur client de 800€.',
      keywords: 'étude de cas coaching, marketing coach, tunnel de vente, Meta Ads coaching, acquisition clients',
    },
    'comptoir-des-epices': {
      title: 'Étude de Cas Comptoir des Épices - 35% du CA en Ligne | Boost Activity',
      description: 'Comment une épicerie fine a généré 35% de son CA en ligne en 6 mois grâce à un site e-commerce et la gestion des réseaux sociaux.',
      keywords: 'étude de cas épicerie, e-commerce alimentaire, marketing boutique locale, Instagram commerce, programme fidélité',
    },
    'dropeats-le-petit-jardin': {
      title: 'Étude de Cas DropEats x Le Petit Jardin - +2100€/Mois Revenus Additionnels | Boost Activity',
      description: 'Comment un restaurant a généré +2 100€ nets/mois de revenus additionnels grâce à 2 marques virtuelles sur Uber Eats et Deliveroo.',
      keywords: 'étude de cas DropEats, marque virtuelle restaurant, dark kitchen, Uber Eats, Deliveroo, revenus additionnels restaurant',
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
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600">{study.location}</p>
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
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
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
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
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
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
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
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-hero pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-10 sm:mb-12 md:mb-16 text-center"
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
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-stats pointer-events-none" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[28px] md:text-[32px] tracking-tight text-black leading-relaxed mb-8 sm:mb-10 md:mb-12">
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
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-cases-hero pointer-events-none" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight text-black leading-tight mb-6 sm:mb-7 md:mb-8">
              Prêt pour votre
              <br />
              success story ?
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
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