import { motion } from 'motion/react';

interface GradientBackgroundProps {
  variant?: 'primary' | 'purple' | 'success' | 'energy' | 'multi' | 'warm' | 'cool' | 'coral' | 'amber' | 'sage' | 'sky' | 'rose' | 'teal' | 'indigo' | 'gold' | 'slate' | 'about' | 'services' | 'solutions' | 'cases' | 'pricing' | 'contact' | 'resources' | 'legal' | 'privacy' | 
  // HomePage variants
  'home' | 'home-cta' | 'home-stats' | 'home-manifesto' | 'home-feature' | 'home-services' | 'home-industries' | 'home-process' | 'home-why' | 'home-testimonials' | 'home-resources' |
  // AboutPage variants
  'about-hero' | 'about-mission' | 'about-values' | 'about-stats' | 'about-timeline' | 'about-team' | 'about-why' | 'about-cta' |
  // ServicesPage variants
  'services-hero' | 'services-content' | 'services-cta' |
  // SolutionsPage variants
  'solutions-hero' | 'solutions-content' | 'solutions-cta' |
  // CaseStudiesPage variants
  'cases-hero' | 'cases-content' | 'cases-cta' |
  // PricingPage variants
  'pricing-hero' | 'pricing-plans' | 'pricing-faq' | 'pricing-cta' |
  // ContactPage variants
  'contact-hero' | 'contact-form' | 'contact-cta' |
  // ResourcesPage variants
  'resources-hero' | 'resources-content' | 'resources-cta' |
  // LegalPage & PrivacyPage variants
  'legal-hero' | 'legal-content' | 'privacy-hero' | 'privacy-content';
  opacity?: number;
  animated?: boolean;
}

export function GradientBackground({ 
  variant = 'multi', 
  opacity = 0.4,
  animated = true 
}: GradientBackgroundProps) {
  const gradients = {
    primary: `
      radial-gradient(ellipse 80% 80% at 10% 20%, rgba(88, 80, 236, ${opacity * 0.3}) 0%, transparent 50%),
      radial-gradient(ellipse 70% 70% at 90% 80%, rgba(99, 102, 241, ${opacity * 0.25}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(88, 80, 236, ${opacity * 0.05}) 0%, rgba(99, 102, 241, ${opacity * 0.08}) 100%)
    `,
    purple: `
      radial-gradient(ellipse 90% 70% at 20% 30%, rgba(139, 92, 246, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 80% 80% at 80% 70%, rgba(168, 85, 247, ${opacity * 0.22}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,
    success: `
      radial-gradient(ellipse 85% 75% at 30% 40%, rgba(16, 185, 129, ${opacity * 0.3}) 0%, transparent 50%),
      radial-gradient(ellipse 75% 85% at 70% 80%, rgba(5, 150, 105, ${opacity * 0.25}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(16, 185, 129, ${opacity * 0.05}) 0%, rgba(5, 150, 105, ${opacity * 0.08}) 100%)
    `,
    energy: `
      radial-gradient(ellipse 80% 90% at 40% 20%, rgba(251, 146, 60, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 70% 70% at 80% 70%, rgba(249, 115, 22, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 146, 60, ${opacity * 0.06}) 0%, rgba(249, 115, 22, ${opacity * 0.08}) 100%)
    `,
    multi: `
      radial-gradient(ellipse 100% 80% at 5% 15%, rgba(88, 80, 236, ${opacity * 0.2}) 0%, transparent 45%),
      radial-gradient(ellipse 90% 70% at 95% 25%, rgba(139, 92, 246, ${opacity * 0.18}) 0%, transparent 45%),
      radial-gradient(ellipse 85% 90% at 40% 85%, rgba(16, 185, 129, ${opacity * 0.16}) 0%, transparent 45%),
      radial-gradient(ellipse 75% 75% at 85% 90%, rgba(251, 146, 60, ${opacity * 0.15}) 0%, transparent 45%),
      linear-gradient(135deg, rgba(88, 80, 236, ${opacity * 0.04}) 0%, rgba(16, 185, 129, ${opacity * 0.05}) 50%, rgba(251, 146, 60, ${opacity * 0.04}) 100%)
    `,
    warm: `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(251, 146, 60, ${opacity * 0.25}) 0%, transparent 50%),
      radial-gradient(ellipse 80% 90% at 80% 75%, rgba(139, 92, 246, ${opacity * 0.22}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 146, 60, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,
    cool: `
      radial-gradient(ellipse 85% 85% at 15% 25%, rgba(88, 80, 236, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 75% at 85% 80%, rgba(16, 185, 129, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(88, 80, 236, ${opacity * 0.06}) 0%, rgba(16, 185, 129, ${opacity * 0.08}) 100%)
    `,
    coral: `
      radial-gradient(ellipse 90% 80% at 25% 30%, rgba(255, 127, 80, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 85% at 75% 70%, rgba(255, 99, 71, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 127, 80, ${opacity * 0.06}) 0%, rgba(255, 99, 71, ${opacity * 0.08}) 100%)
    `,
    amber: `
      radial-gradient(ellipse 88% 78% at 30% 25%, rgba(251, 191, 36, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 80% 80% at 70% 75%, rgba(245, 158, 11, ${opacity * 0.22}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.05}) 0%, rgba(245, 158, 11, ${opacity * 0.07}) 100%)
    `,
    sage: `
      radial-gradient(ellipse 85% 82% at 20% 35%, rgba(134, 239, 172, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 78% 88% at 80% 65%, rgba(74, 222, 128, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(134, 239, 172, ${opacity * 0.06}) 0%, rgba(74, 222, 128, ${opacity * 0.08}) 100%)
    `,
    sky: `
      radial-gradient(ellipse 90% 85% at 25% 30%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 82% 82% at 75% 70%, rgba(14, 165, 233, ${opacity * 0.23}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.05}) 0%, rgba(14, 165, 233, ${opacity * 0.07}) 100%)
    `,
    rose: `
      radial-gradient(ellipse 88% 80% at 30% 28%, rgba(251, 113, 133, ${opacity * 0.27}) 0%, transparent 50%),
      radial-gradient(ellipse 80% 85% at 72% 72%, rgba(244, 63, 94, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 113, 133, ${opacity * 0.06}) 0%, rgba(244, 63, 94, ${opacity * 0.08}) 100%)
    `,
    teal: `
      radial-gradient(ellipse 86% 84% at 22% 32%, rgba(45, 212, 191, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 82% 86% at 78% 68%, rgba(20, 184, 166, ${opacity * 0.25}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(45, 212, 191, ${opacity * 0.06}) 0%, rgba(20, 184, 166, ${opacity * 0.08}) 100%)
    `,
    indigo: `
      radial-gradient(ellipse 88% 82% at 28% 30%, rgba(129, 140, 248, ${opacity * 0.27}) 0%, transparent 50%),
      radial-gradient(ellipse 84% 84% at 74% 72%, rgba(99, 102, 241, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(129, 140, 248, ${opacity * 0.06}) 0%, rgba(99, 102, 241, ${opacity * 0.08}) 100%)
    `,
    gold: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(234, 179, 8, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 82% 88% at 72% 72%, rgba(202, 138, 4, ${opacity * 0.25}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(234, 179, 8, ${opacity * 0.05}) 0%, rgba(202, 138, 4, ${opacity * 0.07}) 100%)
    `,
    slate: `
      radial-gradient(ellipse 85% 82% at 25% 30%, rgba(148, 163, 184, ${opacity * 0.22}) 0%, transparent 50%),
      radial-gradient(ellipse 80% 85% at 75% 70%, rgba(100, 116, 139, ${opacity * 0.20}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(148, 163, 184, ${opacity * 0.04}) 0%, rgba(100, 116, 139, ${opacity * 0.06}) 100%)
    `,
    // AboutPage - Chaleur, passion, corail/rose/ambre
    about: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(255, 127, 80, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(255, 182, 193, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 127, 80, ${opacity * 0.06}) 0%, rgba(251, 191, 36, ${opacity * 0.08}) 100%)
    `,
    // ServicesPage - Professionnalisme, indigo/teal/sky
    services: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(99, 102, 241, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(20, 184, 166, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(99, 102, 241, ${opacity * 0.06}) 0%, rgba(56, 189, 248, ${opacity * 0.08}) 100%)
    `,
    // SolutionsPage - Innovation, violet/cyan/purple
    solutions: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(139, 92, 246, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(168, 85, 247, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(34, 211, 238, ${opacity * 0.08}) 100%)
    `,
    // CaseStudiesPage - Succès, vert émeraude/mint/or
    cases: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(16, 185, 129, ${opacity * 0.32}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(110, 231, 183, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(16, 185, 129, ${opacity * 0.06}) 0%, rgba(234, 179, 8, ${opacity * 0.08}) 100%)
    `,
    // PricingPage - Valeur, violet/lavande/lime
    pricing: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(139, 92, 246, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(132, 204, 22, ${opacity * 0.30}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(132, 204, 22, ${opacity * 0.08}) 100%)
    `,
    // ContactPage - Communication, azur/orange
    contact: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(56, 189, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(14, 165, 233, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.06}) 0%, rgba(251, 146, 60, ${opacity * 0.08}) 100%)
    `,
    // ResourcesPage - Apprentissage, ambre/sky/indigo/purple/mint
    resources: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(251, 191, 36, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.06}) 0%, rgba(56, 189, 248, ${opacity * 0.08}) 100%)
    `,
    // LegalPage - Sérieux, ardoise/navy
    legal: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(251, 146, 60, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(255, 182, 193, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.06}) 0%, rgba(255, 127, 80, ${opacity * 0.08}) 100%)
    `,
    // PrivacyPage - Confidentialité, gris/bleu
    privacy: `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(148, 163, 184, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(148, 163, 184, ${opacity * 0.06}) 0%, rgba(56, 189, 248, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Accueil, bleu/vert (anticipe le vert de stats)
    home: `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(56, 189, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 80%, rgba(16, 185, 129, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.06}) 0%, rgba(16, 185, 129, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Stats, vert dominant avec teal en bas (anticipe manifesto teal/sky)
    'home-stats': `
      radial-gradient(ellipse 90% 80% at 25% 25%, rgba(16, 185, 129, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 75% at 80% 85%, rgba(45, 212, 191, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(16, 185, 129, ${opacity * 0.06}) 0%, rgba(45, 212, 191, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Manifesto, teal/sky avec indigo en bas (anticipe feature indigo)
    'home-manifesto': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(45, 212, 191, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 80% 70% at 85% 85%, rgba(129, 140, 248, ${opacity * 0.24}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(45, 212, 191, ${opacity * 0.06}) 0%, rgba(129, 140, 248, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Feature, sky/indigo avec violet en bas (anticipe services violet)
    'home-feature': `
      radial-gradient(ellipse 90% 80% at 25% 25%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 80% 85%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(129, 140, 248, ${opacity * 0.06}) 0%, rgba(139, 92, 246, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Services, indigo/violet avec violet profond en bas (anticipe industries)
    'home-services': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(129, 140, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(168, 85, 247, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(129, 140, 248, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Industries, violet profond continuité (anticipe process violet)
    'home-industries': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(139, 92, 246, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(168, 85, 247, ${opacity * 0.30}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Process, violet haut-gauche avec orange bas-droit (anticipe why orange)
    'home-process': `
      radial-gradient(ellipse 85% 75% at 15% 20%, rgba(168, 85, 247, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 85% at 85% 88%, rgba(251, 146, 60, ${opacity * 0.32}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(168, 85, 247, ${opacity * 0.06}) 0%, rgba(251, 146, 60, ${opacity * 0.10}) 100%)
    `,
    // HomePage - Why, orange dominant avec rose en bas (anticipe testimonials rose)
    'home-why': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(251, 146, 60, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(251, 113, 133, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 146, 60, ${opacity * 0.06}) 0%, rgba(251, 113, 133, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Testimonials, rose/orange avec teal en bas (anticipe resources teal)
    'home-testimonials': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(251, 113, 133, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 75% at 85% 88%, rgba(45, 212, 191, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 113, 133, ${opacity * 0.06}) 0%, rgba(45, 212, 191, ${opacity * 0.08}) 100%)
    `,
    // HomePage - Resources, teal/sky avec vert en bas (anticipe CTA vert/bleu)
    'home-resources': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(45, 212, 191, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(16, 185, 129, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(45, 212, 191, ${opacity * 0.06}) 0%, rgba(16, 185, 129, ${opacity * 0.08}) 100%)
    `,
    // HomePage - CTA, bleu/vert (boucle complète)
    'home-cta': `
      radial-gradient(ellipse 90% 80% at 30% 28%, rgba(56, 189, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 72% 72%, rgba(16, 185, 129, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.06}) 0%, rgba(16, 185, 129, ${opacity * 0.08}) 100%)
    `,
    
    // ===================== ABOUTPAGE BLEEDING =====================
    // AboutPage - Hero corail/ambre avec rose en bas (anticipe Mission rose)
    'about-hero': `
      radial-gradient(ellipse 90% 80% at 20% 20%, rgba(255, 127, 80, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(255, 182, 193, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 127, 80, ${opacity * 0.06}) 0%, rgba(251, 191, 36, ${opacity * 0.08}) 100%)
    `,
    // AboutPage - Mission rose/corail avec purple en bas (anticipe Values purple)
    'about-mission': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(255, 182, 193, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 182, 193, ${opacity * 0.05}) 0%, rgba(255, 127, 80, ${opacity * 0.07}) 100%)
    `,
    // AboutPage - Values purple/rose avec ambre en bas (anticipe Stats ambre)
    'about-values': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(251, 191, 36, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.05}) 0%, rgba(255, 182, 193, ${opacity * 0.07}) 100%)
    `,
    // AboutPage - Stats ambre/corail avec rose en bas (anticipe Timeline rose)
    'about-stats': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(251, 191, 36, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(255, 182, 193, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.05}) 0%, rgba(255, 127, 80, ${opacity * 0.07}) 100%)
    `,
    // AboutPage - Timeline rose/corail avec purple en bas (anticipe Team purple)
    'about-timeline': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(255, 182, 193, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 182, 193, ${opacity * 0.05}) 0%, rgba(255, 127, 80, ${opacity * 0.07}) 100%)
    `,
    // AboutPage - Team purple/rose avec rose/ambre en bas (anticipe Why rose/ambre)
    'about-team': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(255, 182, 193, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.05}) 0%, rgba(255, 182, 193, ${opacity * 0.07}) 100%)
    `,
    // AboutPage - Why rose/ambre avec ambre/corail en bas (anticipe CTA ambre/corail)
    'about-why': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(255, 182, 193, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(251, 191, 36, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 182, 193, ${opacity * 0.05}) 0%, rgba(251, 191, 36, ${opacity * 0.07}) 100%)
    `,
    // AboutPage - CTA ambre/corail (section finale)
    'about-cta': `
      radial-gradient(ellipse 90% 78% at 20% 28%, rgba(251, 191, 36, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 78% at 80% 72%, rgba(255, 127, 80, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.06}) 0%, rgba(255, 182, 193, ${opacity * 0.08}) 100%)
    `,

    // ===================== SERVICESPAGE BLEEDING =====================
    // ServicesPage - Hero indigo/teal avec sky en bas (anticipe content)
    'services-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(99, 102, 241, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(99, 102, 241, ${opacity * 0.06}) 0%, rgba(20, 184, 166, ${opacity * 0.08}) 100%)
    `,
    // ServicesPage - Content sky/teal avec indigo en bas (anticipe CTA)
    'services-content': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(99, 102, 241, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.05}) 0%, rgba(20, 184, 166, ${opacity * 0.07}) 100%)
    `,
    // ServicesPage - CTA indigo/teal (section finale)
    'services-cta': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(99, 102, 241, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 72%, rgba(20, 184, 166, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(99, 102, 241, ${opacity * 0.06}) 0%, rgba(56, 189, 248, ${opacity * 0.08}) 100%)
    `,

    // ===================== SOLUTIONSPAGE BLEEDING =====================
    // SolutionsPage - Hero violet/purple avec cyan en bas (anticipe content)
    'solutions-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(139, 92, 246, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(34, 211, 238, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,
    // SolutionsPage - Content cyan/purple avec violet en bas (anticipe CTA)
    'solutions-content': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(34, 211, 238, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(139, 92, 246, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(34, 211, 238, ${opacity * 0.05}) 0%, rgba(168, 85, 247, ${opacity * 0.07}) 100%)
    `,
    // SolutionsPage - CTA violet/purple (section finale)
    'solutions-cta': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(139, 92, 246, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 72%, rgba(168, 85, 247, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(34, 211, 238, ${opacity * 0.08}) 100%)
    `,

    // ===================== CASESTUDIESPAGE BLEEDING =====================
    // CaseStudiesPage - Hero vert émeraude/mint avec or en bas (anticipe content)
    'cases-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(16, 185, 129, ${opacity * 0.32}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(234, 179, 8, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(16, 185, 129, ${opacity * 0.06}) 0%, rgba(110, 231, 183, ${opacity * 0.08}) 100%)
    `,
    // CaseStudiesPage - Content mint/or avec vert en bas (anticipe CTA)
    'cases-content': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(110, 231, 183, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(16, 185, 129, ${opacity * 0.30}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(110, 231, 183, ${opacity * 0.05}) 0%, rgba(234, 179, 8, ${opacity * 0.07}) 100%)
    `,
    // CaseStudiesPage - CTA vert émeraude/mint (section finale)
    'cases-cta': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(16, 185, 129, ${opacity * 0.32}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 72%, rgba(110, 231, 183, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(16, 185, 129, ${opacity * 0.06}) 0%, rgba(234, 179, 8, ${opacity * 0.08}) 100%)
    `,

    // ===================== PRICINGPAGE BLEEDING =====================
    // PricingPage - Hero violet/lime (anticipe plans)
    'pricing-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(139, 92, 246, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(132, 204, 22, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,
    // PricingPage - Plans lime/violet (anticipe FAQ)
    'pricing-plans': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(132, 204, 22, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(132, 204, 22, ${opacity * 0.05}) 0%, rgba(168, 85, 247, ${opacity * 0.07}) 100%)
    `,
    // PricingPage - FAQ violet avec lime en bas (anticipe CTA)
    'pricing-faq': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(139, 92, 246, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(132, 204, 22, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(139, 92, 246, ${opacity * 0.05}) 0%, rgba(168, 85, 247, ${opacity * 0.07}) 100%)
    `,
    // PricingPage - CTA lime/violet (section finale)
    'pricing-cta': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(132, 204, 22, ${opacity * 0.30}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 72%, rgba(139, 92, 246, ${opacity * 0.28}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(132, 204, 22, ${opacity * 0.06}) 0%, rgba(168, 85, 247, ${opacity * 0.08}) 100%)
    `,

    // ===================== CONTACTPAGE BLEEDING =====================
    // ContactPage - Hero azur/sky (anticipe form)
    'contact-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(56, 189, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(14, 165, 233, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.06}) 0%, rgba(251, 146, 60, ${opacity * 0.08}) 100%)
    `,
    // ContactPage - Form sky avec orange en bas (anticipe CTA)
    'contact-form': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(251, 146, 60, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.05}) 0%, rgba(14, 165, 233, ${opacity * 0.07}) 100%)
    `,
    // ContactPage - CTA azur/orange (section finale)
    'contact-cta': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(56, 189, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 72%, rgba(251, 146, 60, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.06}) 0%, rgba(14, 165, 233, ${opacity * 0.08}) 100%)
    `,

    // ===================== RESOURCESPAGE BLEEDING =====================
    // ResourcesPage - Hero ambre/sky (anticipe content)
    'resources-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(251, 191, 36, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.06}) 0%, rgba(245, 158, 11, ${opacity * 0.08}) 100%)
    `,
    // ResourcesPage - Content sky/ambre avec indigo en bas (anticipe CTA)
    'resources-content': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(129, 140, 248, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.05}) 0%, rgba(251, 191, 36, ${opacity * 0.07}) 100%)
    `,
    // ResourcesPage - CTA indigo/ambre (section finale)
    'resources-cta': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(129, 140, 248, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 90% 80% at 80% 72%, rgba(251, 191, 36, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(129, 140, 248, ${opacity * 0.06}) 0%, rgba(56, 189, 248, ${opacity * 0.08}) 100%)
    `,

    // ===================== LEGALPAGE BLEEDING =====================
    // LegalPage - Hero orange/rose avec ambre en bas (anticipe content)
    'legal-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(251, 146, 60, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(251, 191, 36, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 146, 60, ${opacity * 0.06}) 0%, rgba(255, 182, 193, ${opacity * 0.08}) 100%)
    `,
    // LegalPage - Content ambre/rose (section finale)
    'legal-content': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(251, 191, 36, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(255, 182, 193, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(251, 191, 36, ${opacity * 0.05}) 0%, rgba(255, 127, 80, ${opacity * 0.07}) 100%)
    `,

    // ===================== PRIVACYPAGE BLEEDING =====================
    // PrivacyPage - Hero gris/ardoise avec sky en bas (anticipe content)
    'privacy-hero': `
      radial-gradient(ellipse 90% 80% at 20% 28%, rgba(148, 163, 184, ${opacity * 0.28}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(148, 163, 184, ${opacity * 0.06}) 0%, rgba(100, 116, 139, ${opacity * 0.08}) 100%)
    `,
    // PrivacyPage - Content sky/gris (section finale)
    'privacy-content': `
      radial-gradient(ellipse 88% 78% at 20% 25%, rgba(56, 189, 248, ${opacity * 0.26}) 0%, transparent 50%),
      radial-gradient(ellipse 85% 80% at 85% 85%, rgba(148, 163, 184, ${opacity * 0.26}) 0%, transparent 50%),
      linear-gradient(135deg, rgba(56, 189, 248, ${opacity * 0.05}) 0%, rgba(100, 116, 139, ${opacity * 0.07}) 100%)
    `,
  };

  const gradient = gradients[variant];

  if (!animated) {
    return (
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: gradient }}
      />
    );
  }

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ background: gradient }}
      animate={{
        opacity: [0.85, 1, 0.85],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}