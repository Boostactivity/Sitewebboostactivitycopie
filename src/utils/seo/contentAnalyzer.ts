/**
 * Analyseur de contenu SEO
 * Vérifie la qualité SEO d'un texte et donne des recommandations
 */

export interface ContentAnalysis {
  score: number; // 0-100
  wordCount: number;
  readingTime: number; // minutes
  keywordDensity: { [key: string]: number };
  headings: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  issues: {
    type: 'error' | 'warning' | 'info';
    message: string;
  }[];
  suggestions: string[];
  readabilityScore: number; // 0-100 (Flesch Reading Ease adapté au français)
}

/**
 * Analyser le contenu pour le SEO
 */
export function analyzeContent(
  content: string,
  targetKeywords: string[] = []
): ContentAnalysis {
  const wordCount = countWords(content);
  const readingTime = calculateReadingTime(wordCount);
  const keywordDensity = calculateKeywordDensity(content, targetKeywords);
  const headings = extractHeadings(content);
  const readabilityScore = calculateReadability(content);

  const issues: ContentAnalysis['issues'] = [];
  const suggestions: string[] = [];

  // Analyse du nombre de mots
  if (wordCount < 300) {
    issues.push({
      type: 'error',
      message: 'Contenu trop court (< 300 mots). Google privilégie les contenus de 1000+ mots.',
    });
    suggestions.push('Ajouter au moins 700 mots pour un meilleur référencement.');
  } else if (wordCount < 1000) {
    issues.push({
      type: 'warning',
      message: 'Contenu court (< 1000 mots). Idéal : 1500-2500 mots.',
    });
    suggestions.push('Développer le contenu pour atteindre 1500+ mots.');
  } else if (wordCount > 5000) {
    issues.push({
      type: 'info',
      message: 'Contenu très long (> 5000 mots). Vérifier que tout est pertinent.',
    });
  }

  // Analyse des headings
  if (headings.h1 === 0) {
    issues.push({
      type: 'error',
      message: 'Aucun H1 trouvé. Le H1 est essentiel pour le SEO.',
    });
    suggestions.push('Ajouter un H1 avec le mot-clé principal.');
  } else if (headings.h1 > 1) {
    issues.push({
      type: 'warning',
      message: `${headings.h1} H1 trouvés. Recommandé : 1 seul H1 par page.`,
    });
    suggestions.push('Garder un seul H1 et convertir les autres en H2.');
  }

  if (headings.h2 < 2) {
    issues.push({
      type: 'warning',
      message: 'Peu de H2. Recommandé : 3-6 H2 pour structurer le contenu.',
    });
    suggestions.push('Ajouter des sous-titres (H2) pour améliorer la structure.');
  }

  // Analyse de la densité des mots-clés
  targetKeywords.forEach((keyword) => {
    const density = keywordDensity[keyword.toLowerCase()] || 0;

    if (density === 0) {
      issues.push({
        type: 'error',
        message: `Mot-clé "${keyword}" absent du contenu.`,
      });
      suggestions.push(`Inclure le mot-clé "${keyword}" naturellement (densité idéale : 1-2%).`);
    } else if (density < 0.5) {
      issues.push({
        type: 'warning',
        message: `Mot-clé "${keyword}" sous-utilisé (${density.toFixed(2)}%).`,
      });
      suggestions.push(`Augmenter l'usage de "${keyword}" (cible : 1-2%).`);
    } else if (density > 3) {
      issues.push({
        type: 'warning',
        message: `Mot-clé "${keyword}" sur-optimisé (${density.toFixed(2)}%). Risque de keyword stuffing.`,
      });
      suggestions.push(`Réduire l'usage de "${keyword}" pour éviter la sur-optimisation.`);
    }
  });

  // Analyse de la lisibilité
  if (readabilityScore < 40) {
    issues.push({
      type: 'warning',
      message: 'Contenu difficile à lire. Simplifier les phrases.',
    });
    suggestions.push('Utiliser des phrases plus courtes et un vocabulaire plus simple.');
  } else if (readabilityScore < 60) {
    issues.push({
      type: 'info',
      message: 'Lisibilité correcte mais peut être améliorée.',
    });
    suggestions.push('Simplifier certaines phrases pour améliorer la lisibilité.');
  }

  // Calcul du score global
  const score = calculateOverallScore({
    wordCount,
    headings,
    keywordDensity,
    readabilityScore,
    issuesCount: issues.filter(i => i.type === 'error').length,
  });

  return {
    score,
    wordCount,
    readingTime,
    keywordDensity,
    headings,
    issues,
    suggestions,
    readabilityScore,
  };
}

/**
 * Compter les mots
 */
function countWords(text: string): number {
  // Enlever le HTML et les caractères spéciaux
  const cleanText = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText) return 0;

  return cleanText.split(' ').filter(word => word.length > 0).length;
}

/**
 * Calculer le temps de lecture (moyenne : 200 mots/min en français)
 */
function calculateReadingTime(wordCount: number): number {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Calculer la densité des mots-clés
 */
function calculateKeywordDensity(
  content: string,
  keywords: string[]
): { [key: string]: number } {
  const cleanContent = content.toLowerCase().replace(/<[^>]*>/g, ' ');
  const totalWords = countWords(content);
  const density: { [key: string]: number } = {};

  keywords.forEach((keyword) => {
    const keywordLower = keyword.toLowerCase();
    const regex = new RegExp(`\\b${keywordLower}\\b`, 'gi');
    const matches = cleanContent.match(regex);
    const count = matches ? matches.length : 0;
    density[keywordLower] = totalWords > 0 ? (count / totalWords) * 100 : 0;
  });

  return density;
}

/**
 * Extraire les headings
 */
function extractHeadings(content: string): ContentAnalysis['headings'] {
  const headings = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 };

  for (let i = 1; i <= 6; i++) {
    const regex = new RegExp(`<h${i}[^>]*>`, 'gi');
    const matches = content.match(regex);
    headings[`h${i}` as keyof typeof headings] = matches ? matches.length : 0;
  }

  return headings;
}

/**
 * Calculer la lisibilité (adapté du Flesch Reading Ease pour le français)
 */
function calculateReadability(content: string): number {
  const cleanText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  if (!cleanText) return 0;

  const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = cleanText.split(/\s+/).filter(w => w.length > 0);
  const syllables = countSyllables(cleanText);

  if (sentences.length === 0 || words.length === 0) return 0;

  const avgWordsPerSentence = words.length / sentences.length;
  const avgSyllablesPerWord = syllables / words.length;

  // Formule de Flesch adaptée au français
  const score = 207 - 1.015 * avgWordsPerSentence - 73.6 * avgSyllablesPerWord;

  // Normaliser entre 0 et 100
  return Math.max(0, Math.min(100, score));
}

/**
 * Compter les syllabes (approximation pour le français)
 */
function countSyllables(text: string): number {
  const words = text.toLowerCase().split(/\s+/);
  let totalSyllables = 0;

  words.forEach((word) => {
    // Voyelles en français
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê', 'à', 'ù', 'ô', 'â', 'î', 'û'];
    let syllableCount = 0;
    let previousWasVowel = false;

    for (const char of word) {
      const isVowel = vowels.includes(char);
      if (isVowel && !previousWasVowel) {
        syllableCount++;
      }
      previousWasVowel = isVowel;
    }

    // Minimum 1 syllabe par mot
    totalSyllables += Math.max(1, syllableCount);
  });

  return totalSyllables;
}

/**
 * Calculer le score global
 */
function calculateOverallScore(params: {
  wordCount: number;
  headings: ContentAnalysis['headings'];
  keywordDensity: { [key: string]: number };
  readabilityScore: number;
  issuesCount: number;
}): number {
  let score = 100;

  // Pénalités pour le nombre de mots
  if (params.wordCount < 300) score -= 30;
  else if (params.wordCount < 1000) score -= 15;
  else if (params.wordCount >= 1500) score += 5;

  // Pénalités pour les headings
  if (params.headings.h1 === 0) score -= 20;
  else if (params.headings.h1 > 1) score -= 10;

  if (params.headings.h2 < 2) score -= 10;

  // Pénalités pour les mots-clés
  Object.values(params.keywordDensity).forEach((density) => {
    if (density === 0) score -= 15;
    else if (density < 0.5 || density > 3) score -= 5;
  });

  // Pénalités pour la lisibilité
  if (params.readabilityScore < 40) score -= 10;
  else if (params.readabilityScore < 60) score -= 5;

  // Pénalités pour les erreurs
  score -= params.issuesCount * 10;

  return Math.max(0, Math.min(100, score));
}

/**
 * Générer des suggestions de mots-clés connexes
 */
export function generateRelatedKeywords(mainKeyword: string): string[] {
  const related: { [key: string]: string[] } = {
    seo: [
      'référencement naturel',
      'optimisation Google',
      'positionnement Google',
      'trafic organique',
      'Core Web Vitals',
      'backlinks',
    ],
    'marketing digital': [
      'stratégie digitale',
      'publicité en ligne',
      'transformation digitale',
      'présence en ligne',
      'acquisition client',
    ],
    'réseaux sociaux': [
      'social media',
      'community management',
      'engagement social',
      'stratégie sociale',
      'contenus sociaux',
    ],
    'google ads': [
      'référencement payant',
      'SEA',
      'campagne Google',
      'publicité Google',
      'CPC',
      'Google Shopping',
    ],
  };

  const keywordLower = mainKeyword.toLowerCase();
  return related[keywordLower] || [];
}

/**
 * Extraire les questions du contenu (pour FAQ)
 */
export function extractQuestions(content: string): string[] {
  const questionWords = [
    'comment',
    'pourquoi',
    'quoi',
    'quand',
    'où',
    'qui',
    'quel',
    'quelle',
    'quels',
    'quelles',
  ];

  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const questions: string[] = [];

  sentences.forEach((sentence) => {
    const trimmed = sentence.trim().toLowerCase();
    if (questionWords.some(word => trimmed.startsWith(word)) || trimmed.includes('?')) {
      questions.push(sentence.trim() + '?');
    }
  });

  return questions.slice(0, 10); // Max 10 questions
}
