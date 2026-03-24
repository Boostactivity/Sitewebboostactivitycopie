import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Badge } from '../components/ui/badge';
import { FloatingShapes } from '../components/FloatingShapes';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { faqItems, faqCategories, getFAQsByCategory, generateFAQSchema } from '../data/faq';
import { motion, AnimatePresence } from 'motion/react';

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const filteredFAQs = faqItems.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  // Schema FAQ pour le SEO
  const faqSchema = generateFAQSchema(filteredFAQs);

  return (
    <>
      <SEO
        title="FAQ - Questions Fréquentes sur nos Services Marketing Digital"
        description="Toutes vos questions sur nos services de marketing digital, SEO, Google Ads, réseaux sociaux. Tarifs, processus, résultats et plus encore."
        canonical="/faq"
        keywords={['FAQ marketing digital', 'questions SEO', 'tarifs agence', 'services marketing']}
        schema={faqSchema}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
          <FloatingShapes />

          {/* Gradient Background */}
          <div className="absolute inset-0 bg-resources-hero opacity-0 group-hover:opacity-0.55 transition-opacity duration-700" />

          <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-5 md:mb-6 bg-resources-amber text-gray-900 mx-auto">
                <HelpCircle className="w-3 h-3 mr-1" />
                FAQ
              </Badge>

              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-tight mb-5 sm:mb-6 md:mb-8">
                Questions{' '}
                <span className="bg-gradient-to-r from-resources-amber to-services-sky bg-clip-text text-transparent">
                  Fréquentes
                </span>
              </h1>

              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 mb-8 sm:mb-10 md:mb-12">
                Vous avez des questions ? Nous avons les réponses ! Parcourez notre FAQ pour tout savoir sur nos services, tarifs et processus.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  aria-label="Rechercher une question"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-6 sm:py-8 md:py-12 border-b border-gray-100 sticky top-0 bg-white z-20">
          <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Toutes les questions
              </button>
              {faqCategories.map((category) => (
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

        {/* FAQ List */}
        <section className="py-12 sm:py-14 md:py-16">
          <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  Aucune question ne correspond à votre recherche.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-600">
                    {filteredFAQs.length} question{filteredFAQs.length > 1 ? 's' : ''} trouvée{filteredFAQs.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors min-h-[52px]"
                        aria-expanded={openItemId === faq.id}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <h3 className="text-[15px] sm:text-[16px] md:text-lg pr-6 sm:pr-8">{faq.question}</h3>
                        <motion.div
                          animate={{ rotate: openItemId === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openItemId === faq.id && (
                          <motion.div
                            id={`faq-answer-${faq.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-2">
                              <div
                                className="text-gray-600 whitespace-pre-line prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-resources-amber/10 to-services-sky/10">
          <div className="max-w-4xl mx-auto px-5 md:px-6 lg:px-8 text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] leading-tight mb-4 sm:mb-5 md:mb-6">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 mb-6 sm:mb-7 md:mb-8">
              Notre équipe est là pour répondre à toutes vos questions. Contactez-nous et nous vous répondrons sous 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                Nous contacter
              </a>
              <a
                href="https://wa.me/33660968516"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                WhatsApp : +33 6 60 96 85 16
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
