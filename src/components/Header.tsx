import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Target, TrendingUp, Palette, Globe, BarChart3, MessageSquare, Mail, Zap, UtensilsCrossed, Store, Dumbbell, Home, Briefcase, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { label: 'Ressources', path: '/resources' },
    { label: 'À propos', path: '/about' },
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
                      className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <service.icon className="w-4 h-4 text-gray-600 mr-3" />
                          <span className="text-[14px] text-gray-700">{service.label}</span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <Link
                          to="/services"
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-[14px] text-black">Voir tous les services →</span>
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
                      className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-2xl shadow-xl border border-gray-200 py-3 z-50"
                    >
                      {solutions.map((solution) => (
                        <Link
                          key={solution.path}
                          to={solution.path}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <solution.icon className="w-4 h-4 text-gray-600 mr-3" />
                          <span className="text-[14px] text-gray-700">{solution.label}</span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <Link
                          to="/solutions"
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-[14px] text-black">Voir toutes les solutions →</span>
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
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-start px-8 pt-32 pb-20 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.3 }}
                className="w-full"
              >
                <Link
                  to="/services"
                  className="text-[28px] tracking-tight text-black hover:text-gray-600 transition-colors block mb-4"
                >
                  Services
                </Link>
                <div className="pl-4 space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center text-[16px] text-gray-600 hover:text-black transition-colors"
                    >
                      <service.icon className="w-4 h-4 mr-2" />
                      {service.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.3 }}
                className="w-full"
              >
                <Link
                  to="/solutions"
                  className="text-[28px] tracking-tight text-black hover:text-gray-600 transition-colors block mb-4"
                >
                  Solutions
                </Link>
                <div className="pl-4 space-y-3">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="flex items-center text-[16px] text-gray-600 hover:text-black transition-colors"
                    >
                      <solution.icon className="w-4 h-4 mr-2" />
                      {solution.label}
                    </Link>
                  ))}
                </div>
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
                    className="text-[28px] tracking-tight text-black hover:text-gray-600 transition-colors"
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
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 text-[18px] transition-opacity">
                    Nous contacter
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}