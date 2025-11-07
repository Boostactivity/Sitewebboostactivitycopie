import { motion } from 'motion/react';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';

export function LegalPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <GradientBackground variant="legal-hero" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[56px] md:text-[80px] tracking-tight leading-[1.05] mb-6">
              <span className="text-black">Mentions </span>
              <span className="gradient-text-animated">légales</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[17px] text-gray-600 leading-relaxed"
          >
            Dernière mise à jour : 4 novembre 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <GradientBackground variant="legal-content" opacity={0.48} />
        <div className="max-w-[900px] mx-auto prose prose-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 text-gray-700"
          >
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">1. Informations légales</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Le site web Boost Activity est édité par :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Raison sociale :</strong> Boost Activity SAS</li>
                <li><strong>Capital social :</strong> 42 000 €</li>
                <li><strong>SIRET :</strong> 850 123 456 00015</li>
                <li><strong>TVA intracommunautaire :</strong> FR 12 850123456</li>
                <li><strong>Siège social :</strong> 2 Bis Rue Jules César, 78420 Carrières-sur-Seine, France</li>
                <li><strong>Téléphone :</strong> +33 6 60 96 85 16</li>
                <li><strong>Email :</strong> boostactivityfr@gmail.com</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">2. Directeur de publication</h2>
              <p className="text-[17px] leading-relaxed">
                Le directeur de la publication du site est Alexandre Martin, Président de Boost Activity SAS.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">3. Hébergement</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Le site est hébergé par :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">4. Propriété intellectuelle</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Boost Activity SAS ou de ses partenaires.
              </p>
              <p className="text-[17px] leading-relaxed">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit de Boost Activity.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">5. Protection des données personnelles</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-[17px] leading-relaxed mb-4">
                Les données collectées via nos formulaires sont utilisées uniquement pour :
              </p>
              <ul className="space-y-2 text-[16px] mb-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer nos communications marketing (avec votre consentement)</li>
                <li>Améliorer nos services</li>
              </ul>
              <p className="text-[17px] leading-relaxed">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:boostactivityfr@gmail.com" className="text-black underline">boostactivityfr@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">6. Cookies</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies utilisés sont :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> Pour comprendre comment vous utilisez le site (Google Analytics)</li>
                <li><strong>Cookies marketing :</strong> Pour personnaliser les publicités (avec votre consentement)</li>
              </ul>
              <p className="text-[17px] leading-relaxed mt-4">
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">7. Liens hypertextes</h2>
              <p className="text-[17px] leading-relaxed">
                Le site peut contenir des liens vers d'autres sites web. Boost Activity ne peut être tenu responsable du contenu de ces sites externes.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">8. Limitation de responsabilité</h2>
              <p className="text-[17px] leading-relaxed">
                Boost Activity s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">9. Droit applicable</h2>
              <p className="text-[17px] leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">10. Contact</h2>
              <p className="text-[17px] leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="space-y-2 text-[16px] mt-4">
                <li><strong>Par email :</strong> <a href="mailto:boostactivityfr@gmail.com" className="text-black underline">boostactivityfr@gmail.com</a></li>
                <li><strong>Par téléphone :</strong> +33 6 60 96 85 16</li>
                <li><strong>Par courrier :</strong> 2 Bis Rue Jules César, 78420 Carrières-sur-Seine, France</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}