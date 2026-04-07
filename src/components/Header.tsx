import { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Target, TrendingUp, Palette, Globe, BarChart3, MessageSquare, Mail, Zap, UtensilsCrossed, Store, Dumbbell, Home, Briefcase, Heart, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

export const Header = memo(function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Throttle scroll event pour meilleures performances
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const services = [
    { icon: Target, label: 'Stratégie digitale', path: '/services/strategie-digitale' },
    { icon: TrendingUp, label: 'Marketing & Acquisition', path: '/services/marketing-acquisition' },
    { icon: Palette, label: 'Branding', path: '/services/branding' },
    { icon: Globe, label: 'Création web', path: '/services/creation-web' },
    { icon: BarChart3, label: 'SEO & SEA', path: '/services/seo-sea' },
    { icon: MessageSquare, label: 'Social Media', path: '/services/social-media' },
    { icon: Mail, label: 'Emailing & CRM', path: '/services/emailing-crm' },
    { icon: Zap, label: 'Automatisation & IA', path: '/services/automatisation-ia' },
    { icon: UtensilsCrossed, label: 'Drop Eats', path: '/services/drop-eats' },
  ];

  const servicesCol1 = [
    { icon: Target, label: 'Stratégie digitale', path: '/services/strategie-digitale' },
    { icon: Palette, label: 'Branding', path: '/services/branding' },
    { icon: BarChart3, label: 'SEO & SEA', path: '/services/seo-sea' },
    { icon: Mail, label: 'Emailing & CRM', path: '/services/emailing-crm' },
    { icon: UtensilsCrossed, label: 'Drop Eats', path: '/services/drop-eats' },
  ];

  const servicesCol2 = [
    { icon: TrendingUp, label: 'Marketing & Acquisition', path: '/services/marketing-acquisition' },
    { icon: Globe, label: 'Création web', path: '/services/creation-web' },
    { icon: MessageSquare, label: 'Social Media', path: '/services/social-media' },
    { icon: Zap, label: 'Automatisation & IA', path: '/services/automatisation-ia' },
  ];

  const solutions = [
    { icon: UtensilsCrossed, label: 'Restaurants & Hôtellerie', path: '/solutions/restaurants-hotellerie' },
    { icon: Store, label: 'Commerces & E-commerce', path: '/solutions/commerces-ecommerce' },
    { icon: Dumbbell, label: 'Fitness & Bien-être', path: '/solutions/fitness-bien-etre' },
    { icon: Home, label: 'Immobilier', path: '/solutions/immobilier' },
    { icon: Briefcase, label: 'B2B & Services pro', path: '/solutions/b2b-services' },
    { icon: Heart, label: 'Santé & Libéraux', path: '/solutions/sante-liberaux' },
  ];

  const navItems = [
    { label: 'Études de cas', path: '/case-studies' },
    { label: 'Tarifs', path: '/pricing' },
    { label: 'À propos', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Ressources', path: '/resources' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link to="/" className="flex items-center space-x-2 z-50">
              <div className="flex items-center">
                <span className="text-[28px] tracking-tight text-black">Boost Activity</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className="flex items-center text-[14px] tracking-tight transition-opacity hover:opacity-70 text-gray-600"
                >
                  Services <ChevronDown className="ml-1 w-3 h-3" />
                </Link>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-[260px] bg-white rounded-lg shadow-lg border border-gray-200/60 overflow-hidden z-50"
                    >
                      <div className="py-3">
                        {services.map((service, index) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center px-4 py-2.5 hover:bg-gray-50/80 transition-all duration-200 group"
                          >
                            <div className="w-9 flex items-center justify-start">
                              <service.icon className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-200" />
                            </div>
                            <span className="text-[14px] text-gray-700 group-hover:text-gray-900 transition-colors">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-200/60 bg-gray-50/30 px-4 py-3">
                        <Link
                          to="/services"
                          className="flex items-center justify-center text-[13px] text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          Voir tous les services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  to="/solutions"
                  className="flex items-center text-[14px] tracking-tight transition-opacity hover:opacity-70 text-gray-600"
                >
                  Solutions <ChevronDown className="ml-1 w-3 h-3" />
                </Link>
                
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-[260px] bg-white rounded-lg shadow-lg border border-gray-200/60 overflow-hidden z-50"
                    >
                      <div className="py-3">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.path}
                            to={solution.path}
                            className="flex items-center px-4 py-2.5 hover:bg-gray-50/80 transition-all duration-200 group"
                          >
                            <div className="w-9 flex items-center justify-start">
                              <solution.icon className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-200" />
                            </div>
                            <span className="text-[14px] text-gray-700 group-hover:text-gray-900 transition-colors">{solution.label}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-200/60 bg-gray-50/30 px-4 py-3">
                        <Link
                          to="/solutions"
                          className="flex items-center justify-center text-[13px] text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          Voir toutes les solutions →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[14px] tracking-tight transition-opacity hover:opacity-70 ${
                    location.pathname === item.path ? 'text-black' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6 transition-opacity">
                  Nous contacter
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col"
          >
            {/* Header fixe dans le menu mobile */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between shadow-sm">
              <span className="text-[20px] tracking-tight text-black font-medium">Boost Activity</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Contenu scrollable du menu */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col items-stretch px-6 pt-6 pb-20 space-y-3 max-w-[340px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0, duration: 0.3 }}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between text-[16px] tracking-tight text-black transition-all bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-2xl px-4 py-3.5 border border-blue-100/50 h-[52px]"
                  >
                    <span className="font-medium">Services</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 text-primary ${servicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col pl-0 space-y-0.5 overflow-hidden mt-2"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center text-[14px] text-gray-700 hover:text-primary transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl px-3 border border-transparent hover:border-blue-100/50 h-[44px]"
                          >
                            <service.icon className="w-4 h-4 mr-2.5 flex-shrink-0 text-primary" />
                            {service.label}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="flex items-center text-[13px] text-primary hover:opacity-70 transition-opacity mt-1.5 pt-3 border-t border-blue-100 h-[40px] px-3"
                        >
                          Voir tous les services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="w-full flex items-center justify-between text-[16px] tracking-tight text-black transition-all bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-2xl px-4 py-3.5 border border-blue-100/50 h-[52px]"
                  >
                    <span className="font-medium">Solutions</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 text-primary ${solutionsOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col pl-0 space-y-0.5 overflow-hidden mt-2"
                      >
                        {solutions.map((solution) => (
                          <Link
                            key={solution.path}
                            to={solution.path}
                            className="flex items-center text-[14px] text-gray-700 hover:text-primary transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl px-3 border border-transparent hover:border-blue-100/50 h-[44px]"
                          >
                            <solution.icon className="w-4 h-4 mr-2.5 flex-shrink-0 text-primary" />
                            {solution.label}
                          </Link>
                        ))}
                        <Link
                          to="/solutions"
                          className="flex items-center text-[13px] text-primary hover:opacity-70 transition-opacity mt-1.5 pt-3 border-t border-blue-100 h-[40px] px-3"
                        >
                          Voir toutes les solutions →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 2) * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className="w-full text-[16px] tracking-tight text-black hover:text-primary transition-all flex items-center bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-2xl px-4 border border-blue-100/50 font-medium h-[52px]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navItems.length + 2) * 0.05, duration: 0.3 }}
                >
                  <Link 
                    to="/contact"
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-4 text-[16px] transition-opacity h-[52px] flex items-center justify-center font-medium"
                  >
                    Nous contacter
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});