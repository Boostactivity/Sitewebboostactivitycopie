# Stratégie de Couleurs Psychologiques - BoostActivity

## Palette par Page - Basée sur la Psychologie des Couleurs

### 1. **AboutPage** - Passion, Équipe, Chaleur Humaine
**Émotion**: Confiance, authenticité, connexion humaine  
**Couleurs principales**:
- Hero: `coral` (chaleur, passion, humanité) - opacity: 0.14
- Mission: `rose` (empathie, bienveillance) - opacity: 0.10
- Valeurs: `purple` (vision, leadership) - opacity: 0.12
- Stats: `gold` (excellence, réussite) - opacity: 0.12
- Timeline: `indigo` (stabilité, confiance) - opacity: 0.10
- Team: `rose` (connexion humaine) - opacity: 0.08
- Why Us: `coral` (énergie positive) - opacity: 0.12

---

### 2. **ServicesPage** - Professionnalisme, Expertise, Solutions
**Émotion**: Confiance, compétence, technologie  
**Couleurs principales**:
- Hero: `indigo` (professionnalisme, expertise) - opacity: 0.12
- Services Grid: `sky` (clarté, solutions) - opacity: 0.10
- Hover cards: `teal` (innovation, modernité) - opacity: 0.05
- Process: `sage` (croissance, développement) - opacity: 0.10
- CTA: `indigo` (action professionnelle) - opacity: 0.12

---

### 3. **SolutionsPage** - Adaptabilité, Innovation Sectorielle
**Émotion**: Polyvalence, expertise multi-domaines  
**Couleurs principales**:
- Hero: `purple` (innovation, transformation) - opacity: 0.12
- Solutions Grid: `indigo` (expertise professionnelle) - opacity: 0.10
- Hover cards: `sky` (adaptabilité) - opacity: 0.05
- Industries: `teal` (diversité, modernité) - opacity: 0.10
- CTA: `purple` (transformation) - opacity: 0.12

---

### 4. **CaseStudiesPage** - Résultats, Succès, Preuves
**Émotion**: Réussite, croissance, résultats tangibles  
**Couleurs principales**:
- Hero: `sage` (croissance, succès) - opacity: 0.14
- Cases Grid: `gold` (excellence, victoires) - opacity: 0.10
- Hover cards: `sage` (résultats positifs) - opacity: 0.05
- Stats: `gold` (succès mesurable) - opacity: 0.12
- CTA: `sage` (croissance continue) - opacity: 0.12

---

### 5. **CaseStudyDetailPage** - Transformation, Données, Preuves
**Émotion**: Résultats concrets, transformation mesurable  
**Couleurs principales**:
- Hero: `sage` (croissance démontrée) - opacity: 0.14
- Challenge: `slate` (problématique sérieuse) - opacity: 0.08
- Solution: `indigo` (expertise appliquée) - opacity: 0.10
- Results: `gold` (succès quantifié) - opacity: 0.12
- Testimonial: `rose` (satisfaction client) - opacity: 0.08
- CTA: `sage` (réplication du succès) - opacity: 0.12

---

### 6. **PricingPage** - Valeur, Investissement, ROI
**Émotion**: Investissement intelligent, valeur claire  
**Couleurs principales**:
- Hero: `purple` (valeur premium) - opacity: 0.12
- Plans: `indigo` (confiance, sérieux) - opacity: 0.10
- Popular plan: `gold` (meilleur choix) - opacity: 0.12
- Features: `sage` (croissance ROI) - opacity: 0.08
- FAQ: `sky` (clarté, transparence) - opacity: 0.08
- CTA: `purple` (décision premium) - opacity: 0.12

---

### 7. **ContactPage** - Action, Accessibilité, Engagement
**Émotion**: Invitation à l'action, réactivité, connexion  
**Couleurs principales**:
- Hero: `sky` (accessibilité, communication) - opacity: 0.12
- Form section: `indigo` (sérieux, engagement) - opacity: 0.10
- Contact info: `teal` (disponibilité, modernité) - opacity: 0.08
- CTA Button: `energy` (action immédiate) - opacity: 0.14

---

### 8. **ResourcesPage** - Apprentissage, Savoir, Découverte
**Émotion**: Éducation, partage de connaissance, lumière  
**Couleurs principales**:
- Hero: `amber` (lumière, connaissance) - opacity: 0.14
- Resources Grid: `sky` (clarté, apprentissage) - opacity: 0.10
- Hover cards: `amber` (découverte) - opacity: 0.05
- Categories: `purple` (expertise partagée) - opacity: 0.08
- Newsletter: `indigo` (engagement continu) - opacity: 0.10

---

### 9. **LegalPage** - Sérieux, Conformité, Transparence
**Émotion**: Professionnalisme, légalité, confiance  
**Couleurs principales**:
- Hero: `slate` (neutralité, sérieux) - opacity: 0.08
- Content sections: `indigo` (légalité, conformité) - opacity: 0.06
- Très sobre et professionnel

---

## Règles d'Application

1. **Opacité générale**: Entre 0.06 et 0.14 pour garder la douceur
2. **Hover effects**: Toujours 0.05 pour la subtilité
3. **gradient-text-animated**: Utilisé pour les titres principaux (défini dans globals.css)
4. **Cohérence**: Chaque page a 2-3 couleurs principales qui tournent selon les sections
5. **Hiérarchie**: Hero = opacité la plus haute, ensuite décroissant

## Mise en Œuvre Technique

- Utiliser `<GradientBackground variant="couleur" opacity={0.XX} />`
- Garder les animations fluides avec `motion.div`
- Préserver tous les autres styles (texte noir, layouts, spacing)
