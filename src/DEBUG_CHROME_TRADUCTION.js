/**
 * 🔍 SCRIPT DE DIAGNOSTIC CHROME - DÉTECTION DE LANGUE
 * 
 * Comment l'utiliser :
 * 1. Ouvrir https://boostactivity.fr
 * 2. Ouvrir la Console Chrome (F12 → Console)
 * 3. Copier-coller CE FICHIER ENTIER dans la console
 * 4. Appuyer sur Entrée
 * 5. Analyser les résultats
 */

console.clear();
console.log('%c🔍 DIAGNOSTIC CHROME - DÉTECTION DE LANGUE', 'background: #000; color: #fff; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('');

// ===== 1. VÉRIFIER LES ATTRIBUTS HTML =====
console.log('%c1️⃣ ATTRIBUTS HTML <html>', 'background: #4CAF50; color: #fff; font-size: 16px; padding: 5px;');

const htmlElement = document.documentElement;

const checks = {
  'lang': {
    actual: htmlElement.getAttribute('lang'),
    expected: 'fr',
    passed: htmlElement.getAttribute('lang') === 'fr'
  },
  'translate': {
    actual: htmlElement.getAttribute('translate'),
    expected: 'no',
    passed: htmlElement.getAttribute('translate') === 'no'
  },
  'class notranslate': {
    actual: htmlElement.classList.contains('notranslate'),
    expected: true,
    passed: htmlElement.classList.contains('notranslate')
  }
};

Object.entries(checks).forEach(([name, check]) => {
  const emoji = check.passed ? '✅' : '❌';
  const color = check.passed ? 'color: green' : 'color: red';
  console.log(`${emoji} %c${name}`, color, `→ Valeur: "${check.actual}" (Attendu: "${check.expected}")`);
});

console.log('');

// ===== 2. VÉRIFIER LES META TAGS =====
console.log('%c2️⃣ META TAGS LANGUE', 'background: #2196F3; color: #fff; font-size: 16px; padding: 5px;');

const metaTags = [
  { selector: 'meta[http-equiv="content-language"]', attribute: 'content', expected: 'fr' },
  { selector: 'meta[name="language"]', attribute: 'content', expected: 'French' },
  { selector: 'meta[name="content-language"]', attribute: 'content', expected: 'fr' },
  { selector: 'meta[name="google"]', attribute: 'content', expected: 'notranslate' },
  { selector: 'meta[property="og:locale"]', attribute: 'content', expected: 'fr_FR' },
];

metaTags.forEach(({ selector, attribute, expected }) => {
  const element = document.querySelector(selector);
  const actual = element?.getAttribute(attribute);
  const passed = actual === expected;
  const emoji = passed ? '✅' : '❌';
  const color = passed ? 'color: green' : 'color: red';
  
  console.log(`${emoji} %c${selector}`, color);
  if (element) {
    console.log(`   → ${attribute}="${actual}" ${passed ? '' : `(Attendu: "${expected}")`}`);
  } else {
    console.log(`   → %cNON TROUVÉ !`, 'color: red; font-weight: bold');
  }
});

console.log('');

// ===== 3. ANALYSER LE CONTENU DE LA PAGE =====
console.log('%c3️⃣ ANALYSE DU CONTENU', 'background: #FF9800; color: #fff; font-size: 16px; padding: 5px;');

// Récupérer tout le texte visible
const bodyText = document.body.innerText || document.body.textContent;

// Mots anglais courants qui pourraient tromper Chrome
const commonEnglishWords = [
  'the', 'and', 'or', 'for', 'with', 'this', 'that', 'from', 'about',
  'services', 'contact', 'home', 'blog', 'pricing', 'resources',
  'marketing', 'digital', 'social', 'media', 'strategy', 'business',
  'boost', 'activity', 'seo', 'sea', 'ads', 'google', 'facebook',
];

// Compter les occurrences
let englishWordCount = 0;
commonEnglishWords.forEach(word => {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = bodyText.match(regex);
  if (matches) {
    englishWordCount += matches.length;
  }
});

// Compter les mots totaux (approximatif)
const totalWords = bodyText.split(/\s+/).length;

const englishRatio = ((englishWordCount / totalWords) * 100).toFixed(2);
const frenchRatio = (100 - englishRatio).toFixed(2);

console.log(`📊 Mots totaux (approximatif): ${totalWords}`);
console.log(`📊 Mots anglais détectés: ${englishWordCount}`);
console.log(`📊 Ratio français: %c${frenchRatio}%`, frenchRatio >= 80 ? 'color: green; font-weight: bold' : 'color: orange; font-weight: bold');
console.log(`📊 Ratio anglais: %c${englishRatio}%`, englishRatio <= 20 ? 'color: green' : 'color: orange; font-weight: bold');

if (englishRatio > 20) {
  console.warn('⚠️ Chrome pourrait détecter trop de mots anglais (>20%)');
  console.log('💡 Solution : Ajouter plus de contenu français visible dès le premier écran');
}

console.log('');

// ===== 4. VÉRIFIER LE TITLE =====
console.log('%c4️⃣ TITLE & HEADINGS', 'background: #9C27B0; color: #fff; font-size: 16px; padding: 5px;');

const title = document.querySelector('title')?.textContent;
console.log(`📄 <title>: "${title}"`);

// Vérifier les H1
const h1Elements = document.querySelectorAll('h1');
console.log(`📝 Nombre de H1: ${h1Elements.length}`);
h1Elements.forEach((h1, index) => {
  const text = h1.textContent?.trim().substring(0, 100);
  const hasLang = h1.getAttribute('lang');
  console.log(`   H1 #${index + 1}: "${text}..."`);
  if (hasLang) {
    console.log(`      → lang="${hasLang}" ✅`);
  } else {
    console.log(`      → %cPas d'attribut lang (optionnel)`, 'color: orange');
  }
});

console.log('');

// ===== 5. DIAGNOSTIQUER LE PROBLÈME =====
console.log('%c5️⃣ DIAGNOSTIC', 'background: #f44336; color: #fff; font-size: 16px; padding: 5px;');

const allPassed = Object.values(checks).every(c => c.passed) &&
                  metaTags.every(({ selector, attribute, expected }) => {
                    const el = document.querySelector(selector);
                    return el?.getAttribute(attribute) === expected;
                  });

if (allPassed && englishRatio < 20) {
  console.log('%c✅ PARFAIT ! Tous les attributs sont corrects !', 'color: green; font-size: 16px; font-weight: bold');
  console.log('');
  console.log('%c🤔 Si Chrome propose ENCORE de traduire, voici les raisons possibles :', 'font-size: 14px; font-weight: bold');
  console.log('');
  console.log('1️⃣ %cCACHE DU NAVIGATEUR', 'font-weight: bold');
  console.log('   Chrome mémorise que tu as déjà vu cette popup.');
  console.log('   Solution : Vider le cache (Ctrl+Shift+Delete) et tester en navigation privée.');
  console.log('');
  console.log('2️⃣ %cHISTORIQUE DE TRADUCTION', 'font-weight: bold');
  console.log('   Chrome se souvient que tu as déjà cliqué sur "Traduire" pour ce site.');
  console.log('   Solution : Paramètres Chrome → Langues → Réinitialiser les préférences.');
  console.log('');
  console.log('3️⃣ %cBUG CHROME MOBILE', 'font-weight: bold');
  console.log('   Certaines versions Chrome mobile ignorent translate="no".');
  console.log('   Solution : Mettre à jour Chrome ou ignorer (bug connu).');
  console.log('');
  console.log('4️⃣ %cNOM DE MARQUE EN ANGLAIS', 'font-weight: bold');
  console.log('   "Boost Activity" est en anglais et Chrome le détecte.');
  console.log('   Solution : Normal, impossible à changer (c\'est ton nom de marque).');
  
} else {
  console.log('%c⚠️ PROBLÈMES DÉTECTÉS !', 'color: orange; font-size: 16px; font-weight: bold');
  console.log('');
  
  if (!checks.lang.passed) {
    console.log('❌ %cAttribut lang manquant ou incorrect', 'color: red; font-weight: bold');
    console.log('   Solution : Ajouter lang="fr" sur <html>');
  }
  
  if (!checks.translate.passed) {
    console.log('❌ %cAttribut translate manquant ou incorrect', 'color: red; font-weight: bold');
    console.log('   Solution : Ajouter translate="no" sur <html>');
  }
  
  if (!checks['class notranslate'].passed) {
    console.log('❌ %cClasse .notranslate manquante', 'color: red; font-weight: bold');
    console.log('   Solution : Ajouter class="notranslate" sur <html>');
  }
  
  const missingMeta = metaTags.filter(({ selector, attribute, expected }) => {
    const el = document.querySelector(selector);
    return !el || el.getAttribute(attribute) !== expected;
  });
  
  if (missingMeta.length > 0) {
    console.log(`❌ %c${missingMeta.length} meta tag(s) manquant(s) ou incorrect(s)`, 'color: red; font-weight: bold');
    missingMeta.forEach(({ selector }) => {
      console.log(`   → ${selector}`);
    });
  }
  
  if (englishRatio > 20) {
    console.log('⚠️ %cTrop de mots anglais détectés (>20%)', 'color: orange; font-weight: bold');
    console.log(`   Ratio actuel : ${englishRatio}% anglais / ${frenchRatio}% français`);
    console.log('   Solution : Ajouter plus de contenu français visible.');
  }
}

console.log('');

// ===== 6. RECOMMANDATIONS =====
console.log('%c6️⃣ RECOMMANDATIONS', 'background: #00BCD4; color: #fff; font-size: 16px; padding: 5px;');

console.log('');
console.log('🔧 %cActions à faire maintenant :', 'font-weight: bold; font-size: 14px');
console.log('');
console.log('1. %cVider le cache Chrome complètement', 'font-weight: bold');
console.log('   → Ctrl+Shift+Delete → Cocher "Cookies" et "Cache" → Période: Toutes les données → Effacer');
console.log('');
console.log('2. %cTester en navigation privée', 'font-weight: bold');
console.log('   → Ctrl+Shift+N → Aller sur https://boostactivity.fr → Vérifier si popup apparaît');
console.log('');
console.log('3. %cTester sur un autre appareil', 'font-weight: bold');
console.log('   → Mobile (iOS/Android) → Vérifier si popup apparaît');
console.log('');
console.log('4. %cDemander à quelqu\'un d\'autre de tester', 'font-weight: bold');
console.log('   → Personne qui n\'a JAMAIS visité le site → Chrome à jour → Noter si popup apparaît');
console.log('');

// ===== 7. EXPORT DES RÉSULTATS =====
console.log('%c7️⃣ EXPORT RÉSULTATS', 'background: #607D8B; color: #fff; font-size: 16px; padding: 5px;');

const diagnosticResults = {
  timestamp: new Date().toISOString(),
  url: window.location.href,
  htmlAttributes: {
    lang: htmlElement.getAttribute('lang'),
    translate: htmlElement.getAttribute('translate'),
    classList: Array.from(htmlElement.classList),
  },
  metaTags: metaTags.map(({ selector, attribute, expected }) => {
    const el = document.querySelector(selector);
    return {
      selector,
      found: !!el,
      value: el?.getAttribute(attribute),
      expected,
      passed: el?.getAttribute(attribute) === expected,
    };
  }),
  contentAnalysis: {
    totalWords,
    englishWordCount,
    englishRatio: parseFloat(englishRatio),
    frenchRatio: parseFloat(frenchRatio),
  },
  title,
  h1Count: h1Elements.length,
  allPassed,
  userAgent: navigator.userAgent,
};

console.log('📊 Résultats du diagnostic exportés dans window.diagnosticResults');
window.diagnosticResults = diagnosticResults;

console.log('');
console.log('%c📋 Pour copier les résultats :', 'font-size: 14px; font-weight: bold');
console.log('   Tapez dans la console : copy(window.diagnosticResults)');
console.log('   Puis colle le résultat dans un fichier texte pour analyse.');

console.log('');
console.log('%c✅ DIAGNOSTIC TERMINÉ !', 'background: #4CAF50; color: #fff; font-size: 18px; padding: 10px; font-weight: bold');
console.log('');

// Retourner les résultats
diagnosticResults;
