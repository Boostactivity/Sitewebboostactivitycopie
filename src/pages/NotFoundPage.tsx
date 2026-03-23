import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { FloatingShapes } from '../components/FloatingShapes';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import { useState } from 'react';

export function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Rediriger vers Google site search
      window.location.href = `https://www.google.com/search?q=site:boostactivity.fr ${encodeURIComponent(searchQuery)}`;
    }
  };

  // Pages populaires à suggérer
  const popularPages = [
    { title: 'Services', path: '/services', icon: '🎯' },
    { title: 'Blog', path: '/blog', icon: '📝' },
    { title: 'Tarifs', path: '/pricing', icon: '💰' },
    { title: 'Contact', path: '/contact', icon: '📞' },
    { title: 'FAQ', path: '/faq', icon: '❓' },
    { title: 'Études de Cas', path: '/case-studies', icon: '📊' },
  ];

  return (
    <>
      <SEO
        title="Page Non Trouvée (404) | Boost Activity"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Découvrez nos services de marketing digital ou contactez-nous pour de l'aide."
        canonical="/404"
        noIndex
      />

      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        <FloatingShapes />

        <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-[200px] leading-none font-bold bg-gradient-to-r from-resources-amber to-services-sky bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl mb-6">
            Oups ! Page introuvable
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            La page que vous recherchez n'existe pas, a été déplacée ou est temporairement indisponible.
            Mais ne vous inquiétez pas, nous allons vous aider à trouver ce que vous cherchez !
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher sur notre site..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                aria-label="Rechercher sur le site"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size="sm"
              >
                Rechercher
              </Button>
            </div>
          </form>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Page précédente
            </button>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Contactez-nous
              </Button>
            </Link>
          </div>

          {/* Popular Pages */}
          <div>
            <h3 className="text-2xl mb-6">Pages populaires</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {popularPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="p-6 rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all group"
                >
                  <div className="text-4xl mb-2">{page.icon}</div>
                  <p className="font-medium group-hover:text-black transition-colors">
                    {page.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-16 p-6 bg-gradient-to-br from-resources-amber/10 to-services-sky/10 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gray-700">
              💡 <strong>Besoin d'aide ?</strong> Contactez-nous sur{' '}
              <a
                href="https://wa.me/33660968516"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                WhatsApp
              </a>{' '}
              ou par{' '}
              <a href="mailto:boostactivityfr@gmail.com" className="text-black hover:underline">
                email
              </a>
              . Nous vous répondrons rapidement !
            </p>
          </div>

          {/* SEO Text (hidden but good for Google) */}
          <div className="mt-16 text-sm text-gray-500 max-w-2xl mx-auto">
            <p>
              <strong>Erreur 404 :</strong> Cette page n'existe pas sur boostactivity.fr. 
              Si vous pensez qu'il s'agit d'une erreur, veuillez nous contacter. 
              Boost Activity est une agence de marketing digital à Paris spécialisée en SEO, 
              Google Ads, réseaux sociaux et stratégie digitale pour PME et startups.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
