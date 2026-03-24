import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingShapes } from '../components/FloatingShapes';
import { Search, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { blogPosts, blogCategories, getFeaturedBlogPosts, getBlogPostsByCategory } from '../data/blogPosts';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = getFeaturedBlogPosts();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Blog Marketing Digital - Conseils & Actualités SEO"
        description="Découvrez nos articles sur le marketing digital, SEO, Google Ads, réseaux sociaux et stratégie digitale. Conseils d'experts pour booster votre visibilité."
        canonical="/blog"
        ogType="blog"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
          <FloatingShapes />

          {/* Gradient Background */}
          <div className="absolute inset-0 bg-resources-hero opacity-0 group-hover:opacity-0.55 transition-opacity duration-700" />

          <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 sm:mb-5 md:mb-6 bg-resources-amber text-gray-900">
                <TrendingUp className="w-3 h-3 mr-1" />
                Blog
              </Badge>

              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-tight mb-5 sm:mb-6 md:mb-8">
                Actualités &{' '}
                <span className="bg-gradient-to-r from-resources-amber to-services-sky bg-clip-text text-transparent">
                  Conseils
                </span>
              </h1>

              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 mb-8 sm:mb-10 md:mb-12">
                Découvrez nos articles sur le marketing digital, le SEO, les réseaux sociaux et toutes les tendances pour booster votre visibilité en ligne.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  aria-label="Rechercher un article"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 sm:py-10 md:py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous les articles
              </button>
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && searchQuery === '' && featuredPosts.length > 0 && (
          <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-resources-amber/5 to-transparent">
            <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-resources-amber" />
                <h2 className="text-3xl">Articles en vedette</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-resources-amber text-gray-900">
                            Vedette
                          </Badge>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 md:p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} min
                          </div>
                        </div>

                        <h3 className="text-2xl mb-4 group-hover:text-resources-amber transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium text-sm">{post.author.name}</p>
                              <p className="text-xs text-gray-500">{post.author.role}</p>
                            </div>
                          </div>

                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-12 sm:py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  Aucun article ne correspond à votre recherche.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-6"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl">
                    {selectedCategory === 'all'
                      ? 'Tous les articles'
                      : blogCategories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group"
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readingTime} min
                            </div>
                          </div>

                          <h3 className="text-xl mb-3 group-hover:text-resources-amber transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <p className="text-sm font-medium">{post.author.name}</p>
                            </div>

                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-resources-amber/10 to-services-sky/10">
          <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8 text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] leading-tight mb-4 sm:mb-5 md:mb-6">
              Recevez nos meilleurs conseils par email
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 mb-6 sm:mb-7 md:mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos articles, guides et études de cas directement dans votre boîte mail.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                required
                aria-label="Adresse email"
              />
              <Button type="submit" size="lg" className="bg-resources-amber text-gray-900 hover:bg-resources-amber/90">
                S'abonner
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Pas de spam. Désinscription en 1 clic.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
