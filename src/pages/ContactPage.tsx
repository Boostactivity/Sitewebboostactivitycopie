import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Loader2, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { GradientBackground } from '../components/GradientBackground';
import { FloatingShapes } from '../components/FloatingShapes';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../utils/seo/schemas';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
  });

  const pageSchema = breadcrumbSchema([
    { name: 'Accueil', url: 'https://boostactivity.fr' },
    { name: 'Contact', url: 'https://boostactivity.fr/contact' },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-bc3c2c3d/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Merci pour votre message ! Nous vous recontactons sous 24h.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          budget: '',
        });
      } else {
        console.error('Form submission error:', data);
        toast.error('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Impossible d\'envoyer le message. Vérifiez votre connexion.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'boostactivityfr@gmail.com',
      link: 'mailto:boostactivityfr@gmail.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 6 60 96 85 16',
      link: 'tel:+33660968516',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '2 Bis Rue Jules César, 78420 Carrières-sur-Seine',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Contact - Démarrez Votre Projet Digital | Boost Activity"
        description="Contactez Boost Activity pour discuter de votre projet digital. Réponse sous 24h, appel gratuit, devis personnalisé. Marketing digital, SEO, réseaux sociaux."
        keywords="contact agence marketing digital, devis marketing digital, appel gratuit, consultation marketing"
        ogImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=630&fit=crop"
        canonical="https://boostactivity.fr/contact"
        schema={pageSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-5 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-contact-hero pointer-events-none" />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-4 sm:mb-5 md:mb-6">
              <span className="gradient-text-animated">Contactez-nous</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Partagez-nous votre projet et découvrons ensemble comment nous pouvons vous aider à atteindre vos objectifs.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-info pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 sm:p-7 md:p-8 text-center border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg active:scale-[0.98]">
                    <div className="absolute inset-0 card-hover-contact-info">
                    </div>
                    <div className="relative z-10">
                      <info.icon className="w-9 h-9 sm:w-10 sm:h-10 text-gray-800 mx-auto mb-5 sm:mb-6" />
                      <h3 className="text-[18px] sm:text-[19px] md:text-[20px] tracking-tight mb-2.5 sm:mb-3 gradient-text-animated">
                        {info.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] text-gray-600">{info.value}</p>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-form pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[36px] sm:text-[44px] md:text-[56px] tracking-tight leading-tight mb-5 sm:mb-6">
                <span className="text-black">Parlez-nous de</span>
                <br />
                <span className="gradient-text-animated">votre projet</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                Remplissez ce formulaire et nous reviendrons vers vous sous 24h pour discuter de vos besoins et vous proposer une solution sur-mesure.
              </p>

              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-[18px] sm:text-[19px] md:text-[20px] tracking-tight text-black mb-2.5 sm:mb-3">
                    Ce qui se passe ensuite
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {[
                      'Réponse sous 24h maximum',
                      'Appel découverte de 30 minutes',
                      'Proposition personnalisée',
                      'Démarrage rapide si alignement',
                    ].map((item, index) => (
                      <li key={item} className="flex items-center">
                        <div className="w-7 h-7 rounded-full border border-[var(--contact-azure)]/20 bg-gradient-to-br from-[var(--services-indigo-light)]/40 to-[var(--contact-azure-light)]/40 backdrop-blur-sm flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-[13px] tracking-tight gradient-text-animated">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-[13px] sm:text-[14px] text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 sm:pt-5 md:pt-6">
                  <h3 className="text-[18px] sm:text-[19px] md:text-[20px] tracking-tight text-black mb-2.5 sm:mb-3">
                    Besoin d'aide immédiate ?
                  </h3>
                  <a
                    href="tel:+33660968516"
                    className="inline-flex items-center text-[13px] sm:text-[14px] text-black hover:opacity-70 transition-opacity min-h-[52px] py-3"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +33 6 60 96 85 16
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 sm:p-7 md:p-8 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 card-hover-contact-form opacity-30"></div>
                
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[13px] sm:text-[14px]">Prénom *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        className="bg-white min-h-[52px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[13px] sm:text-[14px]">Nom *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        className="bg-white min-h-[52px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[13px] sm:text-[14px]">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-white min-h-[52px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[13px] sm:text-[14px]">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="bg-white min-h-[52px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[13px] sm:text-[14px]">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="bg-white min-h-[52px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[13px] sm:text-[14px]">Parlez-nous de votre projet *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Décrivez vos objectifs, défis, et ce que vous attendez de nous..."
                      className="bg-white resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-[13px] sm:text-[14px]">Budget approximatif</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="bg-white min-h-[52px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary text-white hover:opacity-90 rounded-full py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    Envoyer ma demande
                  </Button>

                  <p className="text-[11px] sm:text-[12px] text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-info pointer-events-none" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-gray-800 mx-auto mb-5 sm:mb-6" />
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8">
              <span className="text-black">Préférez un </span>
              <span className="gradient-text-animated">appel</span>
              <span className="text-black"> ?</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[21px] text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto">
              Réservez un créneau dans notre agenda pour un appel découverte de 30 minutes, sans engagement.
            </p>
            <a 
              href="https://wa.me/33660968516?text=Bonjour%20Boost%20Activity%2C%20je%20souhaite%20planifier%20un%20appel%20gratuit%20pour%20discuter%20de%20mon%20projet%20digital."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-7 sm:px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] md:text-[17px] transition-opacity shine-effect min-h-[52px]">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver un appel gratuit
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-info pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-4 sm:mb-5">
              <span className="text-black">Trouvez </span>
              <span className="gradient-text-animated">notre agence</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-gray-600 leading-relaxed max-w-[600px] mx-auto">
              Située à Carrières-sur-Seine, nous sommes à votre écoute pour tous vos projets digitaux.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.5847884931443!2d2.1666874!3d48.9094429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6656c4c4c4c4d%3A0x4c4c4c4c4c4c4c4c!2s2%20Bis%20Rue%20Jules%20C%C3%A9sar%2C%2078420%20Carri%C3%A8res-sur-Seine!5e0!3m2!1sfr!2sfr!4v1732547000000!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Boost Activity - 2 Bis Rue Jules César, 78420 Carrières-sur-Seine"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-[13px] sm:text-[14px] text-black mb-1">
                    <strong>Boost Activity</strong>
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-gray-600">
                    2 Bis Rue Jules César<br />
                    78420 Carrières-sur-Seine<br />
                    France
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=2+Bis+Rue+Jules+César,78420+Carrières-sur-Seine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[13px] sm:text-[14px] text-black hover:opacity-70 transition-opacity"
                  >
                    Obtenir l'itinéraire →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 md:py-32 px-5 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-form pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[36px] sm:text-[48px] md:text-[64px] tracking-tight leading-tight mb-10 sm:mb-12 md:mb-16 text-center"
          >
            <span className="text-black">Questions </span>
            <span className="gradient-text-animated">fréquentes</span>
          </motion.h2>

          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {[
              {
                q: 'Quel est votre délai de réponse ?',
                a: 'Nous nous engageons à répondre à toute demande sous 24h ouvrées maximum.',
              },
              {
                q: 'Est-ce qu\'un premier appel est payant ?',
                a: 'Non, l\'appel découverte de 30 minutes est totalement gratuit et sans engagement.',
              },
              {
                q: 'Travaillez-vous avec des petites entreprises ?',
                a: 'Absolument. Nous accompagnons des entreprises de toutes tailles, de l\'indépendant à la PME.',
              },
              {
                q: 'Proposez-vous des devis gratuits ?',
                a: 'Oui, après notre appel découverte, nous vous envoyons un devis détaillé gratuit.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-7 md:p-8 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg active:scale-[0.98]">
                  <div className="absolute inset-0 card-hover-contact-form">
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] tracking-tight gradient-text-animated mb-2.5 sm:mb-3">{item.q}</h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}