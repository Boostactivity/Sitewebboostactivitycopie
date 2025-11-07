import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { GradientBackground } from '../components/GradientBackground';
import { FloatingShapes } from '../components/FloatingShapes';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../utils/seo/schemas';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
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
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-contact-hero pointer-events-none" />
        <FloatingShapes />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-[56px] md:text-[80px] lg:text-[96px] tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text-animated">Contactez-nous</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[21px] text-gray-600 leading-relaxed max-w-[700px] mx-auto"
          >
            Partagez-nous votre projet et découvrons ensemble comment nous pouvons vous aider à atteindre vos objectifs.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-info pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <Card className="p-8 text-center border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:shadow-lg">
                    <div className="absolute inset-0 card-hover-contact-info">
                    </div>
                    <div className="relative z-10">
                      <info.icon className="w-10 h-10 text-gray-800 mx-auto mb-6" />
                      <h3 className="text-[20px] tracking-tight mb-3 gradient-text-animated">
                        {info.title}
                      </h3>
                      <p className="text-[14px] text-gray-600">{info.value}</p>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-form pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[48px] md:text-[56px] tracking-tight leading-tight mb-6">
                <span className="text-black">Parlez-nous de</span>
                <br />
                <span className="gradient-text-animated">votre projet</span>
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
                Remplissez ce formulaire et nous reviendrons vers vous sous 24h pour discuter de vos besoins et vous proposer une solution sur-mesure.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[20px] tracking-tight text-black mb-3">
                    Ce qui se passe ensuite
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Réponse sous 24h maximum',
                      'Appel découverte de 30 minutes',
                      'Proposition personnalisée',
                      'Démarrage rapide si alignement',
                    ].map((item, index) => (
                      <li key={item} className="flex items-start">
                        <div className="w-7 h-7 rounded-full border border-[var(--contact-azure)]/20 bg-gradient-to-br from-[var(--services-indigo-light)]/40 to-[var(--contact-azure-light)]/40 backdrop-blur-sm flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-[13px] tracking-tight gradient-text-animated">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-[14px] text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <h3 className="text-[20px] tracking-tight text-black mb-3">
                    Besoin d'aide immédiate ?
                  </h3>
                  <a
                    href="tel:+33660968516"
                    className="inline-flex items-center text-[14px] text-black hover:opacity-70 transition-opacity"
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
              <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 card-hover-contact-form opacity-30"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom et Prénom *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Parlez-nous de votre projet *</Label>
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

                  <Button
                    type="submit"
                    className="w-full gradient-primary text-white hover:opacity-90 rounded-full py-6 text-[17px] transition-opacity shine-effect"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    Envoyer ma demande
                  </Button>

                  <p className="text-[12px] text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-info pointer-events-none" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-12 h-12 text-gray-800 mx-auto mb-6" />
            <h2 className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-8">
              <span className="text-black">Préférez un </span>
              <span className="gradient-text-animated">appel</span>
              <span className="text-black"> ?</span>
            </h2>
            <p className="text-[21px] text-gray-600 leading-relaxed mb-12 max-w-[600px] mx-auto">
              Réservez un créneau dans notre agenda pour un appel découverte de 30 minutes, sans engagement.
            </p>
            <a 
              href="https://wa.me/33660968516?text=Bonjour%20Boost%20Activity%2C%20je%20souhaite%20planifier%20un%20appel%20gratuit%20pour%20discuter%20de%20mon%20projet%20digital."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gradient-primary text-white hover:opacity-90 rounded-full px-8 py-6 text-[17px] transition-opacity shine-effect">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver un appel gratuit
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-contact-form pointer-events-none" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[64px] tracking-tight leading-tight mb-16 text-center"
          >
            <span className="text-black">Questions </span>
            <span className="gradient-text-animated">fréquentes</span>
          </motion.h2>

          <div className="space-y-8">
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
                <Card className="p-8 border-gray-200 bg-white/80 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:shadow-lg">
                  <div className="absolute inset-0 card-hover-contact-form">
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-[20px] tracking-tight gradient-text-animated mb-3">{item.q}</h3>
                    <p className="text-[16px] text-gray-600 leading-relaxed">{item.a}</p>
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