import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Facebook, Cookie } from 'lucide-react';
import { XLogo } from './icons/XLogo';
import { TikTokLogo } from './icons/TikTokLogo';
import { resetCookieConsent } from './CookieConsent';

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
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Ressources', path: '/resources' },
    { label: 'Tarifs', path: '/pricing' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="text-[18px] sm:text-[20px] tracking-tight text-black mb-4 sm:mb-5 md:mb-6">Boost Activity</h3>
            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-5 sm:mb-6">
              Votre partenaire pour une croissance digitale maîtrisée et durable.
            </p>
            <div className="flex items-center gap-1.5 -ml-1.5">
              <a 
                href="https://www.linkedin.com/company/boost-activity/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/boostactivityfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors" 
                aria-label="X (Twitter)"
              >
                <XLogo size={18} />
              </a>
              <a 
                href="https://www.instagram.com/boostactivityfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/1FyS9p9ngL/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@boostactivity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors" 
                aria-label="TikTok"
              >
                <TikTokLogo size={18} />
              </a>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors" aria-label="Email">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] sm:text-[14px] tracking-tight text-black mb-4 sm:mb-5 md:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[13px] sm:text-[14px] text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] sm:text-[14px] tracking-tight text-black mb-4 sm:mb-5 md:mb-6">Entreprise</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[13px] sm:text-[14px] text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] sm:text-[14px] tracking-tight text-black mb-4 sm:mb-5 md:mb-6">Nous contacter</h4>
            <div className="space-y-3 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
              <p>
                <strong className="text-black">Boost Activity</strong><br />
                Agence Marketing Digital<br />
                Carrières-sur-Seine, Île-de-France
              </p>
              <p>
                <a href="mailto:contact@boostactivity.fr" className="hover:text-black transition-colors">
                  contact@boostactivity.fr
                </a>
              </p>
              <p className="text-[12px] text-gray-500">
                Lun-Ven : 9h00 - 18h00
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-4 text-[13px] sm:text-[14px] text-black hover:opacity-70 transition-opacity"
            >
              Prendre rendez-vous →
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-7 md:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-0">
          <p className="text-[11px] sm:text-[12px] text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Boost Activity. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/legal" className="text-[11px] sm:text-[12px] text-gray-600 hover:text-black transition-colors">
              Mentions légales
            </Link>
            <Link to="/privacy" className="text-[11px] sm:text-[12px] text-gray-600 hover:text-black transition-colors">
              Politique de confidentialité
            </Link>
            <button
              onClick={resetCookieConsent}
              className="text-[11px] sm:text-[12px] text-gray-600 hover:text-black transition-colors"
            >
              Réinitialiser les cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}