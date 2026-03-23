import { motion } from 'motion/react';
import { FloatingShapes } from '../components/FloatingShapes';
import { GradientBackground } from '../components/GradientBackground';
import { Link } from 'react-router-dom';

export function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <GradientBackground variant="legal" opacity={0.6} />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[56px] md:text-[80px] tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text-animated">Politique</span>
              <span className="text-black"> de confidentialité</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[17px] text-gray-600 leading-relaxed"
          >
            Dernière mise à jour : 6 novembre 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-about-grid pointer-events-none" />
        <div className="max-w-[900px] mx-auto prose prose-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 text-gray-700"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">Introduction</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Chez Boost Activity, nous accordons une importance primordiale à la protection de vos données personnelles. 
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons 
                vos informations dans le respect du Règlement Général sur la Protection des Données (RGPD) et de la loi 
                Informatique et Libertés.
              </p>
            </div>

            {/* Responsable du traitement */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">1. Responsable du traitement</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Le responsable du traitement de vos données personnelles est :
              </p>
              <ul className="space-y-2 text-[16px] mb-4">
                <li><strong>Société :</strong> Boost Activity SAS</li>
                <li><strong>Siège social :</strong> 2 Bis Rue Jules César, 78420 Carrières-sur-Seine, France</li>
                <li><strong>Email :</strong> boostactivityfr@gmail.com</li>
                <li><strong>Téléphone :</strong> +33 6 60 96 85 16</li>
              </ul>
            </div>

            {/* Données collectées */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">2. Données collectées</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>
              
              <h3 className="text-[24px] tracking-tight text-black mb-3 mt-6">2.1. Données fournies directement</h3>
              <ul className="space-y-2 text-[16px] mb-4">
                <li>Identité : nom, prénom, fonction</li>
                <li>Contact : email, téléphone, adresse postale</li>
                <li>Entreprise : nom, secteur d'activité, site web</li>
                <li>Informations commerciales : besoins, budget, projets</li>
              </ul>

              <h3 className="text-[24px] tracking-tight text-black mb-3 mt-6">2.2. Données collectées automatiquement</h3>
              <ul className="space-y-2 text-[16px]">
                <li>Données de connexion : adresse IP, type de navigateur, système d'exploitation</li>
                <li>Données de navigation : pages visitées, durée de visite, source de trafic</li>
                <li>Cookies et technologies similaires (voir section 7)</li>
              </ul>
            </div>

            {/* Finalités */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">3. Finalités du traitement</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Gestion des demandes :</strong> Traiter vos demandes de contact, devis ou informations</li>
                <li><strong>Relation client :</strong> Assurer le suivi de nos prestations et la communication avec vous</li>
                <li><strong>Marketing :</strong> Vous envoyer nos newsletters et communications commerciales (avec votre consentement)</li>
                <li><strong>Amélioration :</strong> Analyser l'utilisation de notre site pour améliorer nos services</li>
                <li><strong>Sécurité :</strong> Prévenir la fraude et assurer la sécurité de notre plateforme</li>
                <li><strong>Obligations légales :</strong> Respecter nos obligations comptables et fiscales</li>
              </ul>
            </div>

            {/* Base légale */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">4. Base légale du traitement</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Exécution du contrat :</strong> Pour fournir nos services</li>
                <li><strong>Consentement :</strong> Pour l'envoi de communications marketing</li>
                <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et assurer la sécurité</li>
                <li><strong>Obligation légale :</strong> Pour respecter nos obligations fiscales et comptables</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">5. Destinataires des données</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Vos données peuvent être transmises à :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Personnel autorisé :</strong> Nos collaborateurs dans le cadre de leurs fonctions</li>
                <li><strong>Prestataires techniques :</strong> Hébergement (Vercel), emailing (selon outil), CRM</li>
                <li><strong>Partenaires marketing :</strong> Plateformes publicitaires (Google, Meta) avec votre consentement</li>
                <li><strong>Autorités :</strong> Si requis par la loi</li>
              </ul>
              <p className="text-[17px] leading-relaxed mt-4">
                Nous nous assurons que tous nos partenaires respectent le RGPD et offrent des garanties suffisantes 
                en matière de protection des données.
              </p>
            </div>

            {/* Durée de conservation */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">6. Durée de conservation</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Nous conservons vos données pendant :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Clients :</strong> Durée de la relation contractuelle + 10 ans (obligations comptables)</li>
                <li><strong>Données marketing :</strong> Jusqu'au retrait de votre consentement</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">7. Cookies et traceurs</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience et analyser notre trafic :
              </p>
              <ul className="space-y-2 text-[16px] mb-4">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site, mémorisation de vos préférences (pas de consentement requis)</li>
                <li><strong>Cookies analytiques :</strong> Google Analytics 4 (GA4) et Google Tag Manager (GTM) pour mesurer l'audience et analyser le trafic (nécessite votre consentement)</li>
                <li><strong>Cookies marketing :</strong> Actuellement non utilisés. Si activés à l'avenir, votre consentement sera demandé</li>
              </ul>
              <p className="text-[17px] leading-relaxed mb-4">
                <strong>Durée de conservation :</strong> Les cookies analytiques sont conservés 13 mois maximum conformément aux recommandations de la CNIL.
              </p>
              <p className="text-[17px] leading-relaxed">
                Vous pouvez gérer vos préférences de cookies à tout moment en cliquant sur "Réinitialiser les cookies" 
                en bas de page, ou via les paramètres de votre navigateur. Le refus de cookies analytiques n'affecte pas 
                votre navigation sur le site.
              </p>
            </div>

            {/* Vos droits */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">8. Vos droits (RGPD)</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 text-[16px] mb-4">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> S'opposer au traitement de vos données, notamment pour le marketing</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter les traitements antérieurs</li>
              </ul>
              <p className="text-[17px] leading-relaxed mb-4">
                Pour exercer vos droits, contactez-nous à :
              </p>
              <ul className="space-y-2 text-[16px] mb-4">
                <li><strong>Email :</strong> boostactivityfr@gmail.com</li>
                <li><strong>Courrier :</strong> Boost Activity SAS - Service DPO, 2 Bis Rue Jules César, 78420 Carrières-sur-Seine</li>
              </ul>
              <p className="text-[17px] leading-relaxed">
                Nous nous engageons à répondre dans un délai d'un mois. Vous disposez également du droit 
                d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </div>

            {/* Sécurité */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">9. Sécurité des données</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre :
              </p>
              <ul className="space-y-2 text-[16px]">
                <li>L'accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La perte ou la destruction</li>
                <li>Les modifications non autorisées</li>
              </ul>
              <p className="text-[17px] leading-relaxed mt-4">
                Ces mesures incluent : chiffrement SSL/TLS, contrôle d'accès, sauvegardes régulières, 
                et formation de notre personnel.
              </p>
            </div>

            {/* Transferts internationaux */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">10. Transferts internationaux</h2>
              <p className="text-[17px] leading-relaxed">
                Certains de nos prestataires peuvent être situés hors de l'Union Européenne. Dans ce cas, 
                nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, 
                Privacy Shield, etc.) pour assurer un niveau de protection adéquat de vos données.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">11. Modifications de la politique</h2>
              <p className="text-[17px] leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous 
                encourageons à consulter régulièrement cette page pour rester informé.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-[32px] tracking-tight text-black mb-4">12. Nous contacter</h2>
              <p className="text-[17px] leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
              </p>
              <ul className="space-y-2 text-[16px] mb-6">
                <li><strong>Email :</strong> boostactivityfr@gmail.com</li>
                <li><strong>Téléphone :</strong> +33 6 60 96 85 16</li>
                <li><strong>Adresse :</strong> Boost Activity SAS, 2 Bis Rue Jules César, 78420 Carrières-sur-Seine, France</li>
              </ul>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-[16px] text-gray-700 mb-4">
                  Pour en savoir plus sur nos pratiques commerciales, consultez également :
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/legal" className="text-[16px] text-black hover:underline underline-offset-4">
                    Mentions légales
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link to="/contact" className="text-[16px] text-black hover:underline underline-offset-4">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}