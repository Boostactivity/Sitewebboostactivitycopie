import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { XLogo } from './icons/XLogo';

export function Footer() {
  const services = [
    { label: 'Stratégie digitale', path: '/services/strategie-digitale' },
    { label: 'Marketing & Acquisition', path: '/services/marketing-acquisition' },
    { label: 'Branding', path: '/services/branding' },
    { label: 'Création web', path: '/services/creation-web' },
    { label: 'SEO & SEA', path: '/services/seo-sea' },
    { label: 'Social Media', path: '/services/social-media' },
  ];

  const company = [
    { label: 'À propos', path: '/about' },
    { label: 'Études de cas', path: '/case-studies' },
    { label: 'Ressources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-[20px] tracking-tight text-black mb-6">Boost Activity</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
              Votre partenaire pour une croissance digitale maîtrisée et durable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <XLogo size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] tracking-tight text-black mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[14px] text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] tracking-tight text-black mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[14px] text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] tracking-tight text-black mb-6">Nous contacter</h4>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
              Parlons de votre projet
            </p>
            <Link
              to="/contact"
              className="inline-block text-[14px] text-black hover:opacity-70 transition-opacity"
            >
              Prendre rendez-vous →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[12px] text-gray-600">
            © {new Date().getFullYear()} Boost Activity. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal" className="text-[12px] text-gray-600 hover:text-black transition-colors">
              Mentions légales
            </Link>
            <Link to="/privacy" className="text-[12px] text-gray-600 hover:text-black transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}