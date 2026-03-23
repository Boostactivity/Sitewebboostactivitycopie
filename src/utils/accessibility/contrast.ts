/**
 * Utilitaires pour vérifier le contraste des couleurs
 * WCAG 2.1 - 1.4.3 Contrast (Minimum) - Level AA
 * 
 * Ratios requis :
 * - Texte normal : 4.5:1
 * - Texte large (18pt+ ou 14pt+ bold) : 3:1
 * - Texte de composant UI : 3:1
 */

interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Convertit une couleur hex en RGB
 */
export function hexToRgb(hex: string): RGB | null {
  // Enlever le # si présent
  hex = hex.replace('#', '');

  // Gérer le format court (#fff)
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calcule la luminance relative d'une couleur
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export function getRelativeLuminance(rgb: RGB): number {
  const { r, g, b } = rgb;

  // Convertir en valeurs sRGB
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;

  // Appliquer la formule de luminance
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Calcule le ratio de contraste entre deux couleurs
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) {
    throw new Error('Couleur hex invalide');
  }

  const lum1 = getRelativeLuminance(rgb1);
  const lum2 = getRelativeLuminance(rgb2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Vérifie si le contraste respecte WCAG AA
 */
export function isWCAGCompliant(
  foreground: string,
  background: string,
  options?: {
    level?: 'AA' | 'AAA';
    size?: 'normal' | 'large';
  }
): boolean {
  const { level = 'AA', size = 'normal' } = options || {};

  const ratio = getContrastRatio(foreground, background);

  // WCAG AA
  if (level === 'AA') {
    if (size === 'normal') {
      return ratio >= 4.5; // 4.5:1 pour texte normal
    } else {
      return ratio >= 3; // 3:1 pour texte large
    }
  }

  // WCAG AAA (plus strict)
  if (level === 'AAA') {
    if (size === 'normal') {
      return ratio >= 7; // 7:1 pour texte normal
    } else {
      return ratio >= 4.5; // 4.5:1 pour texte large
    }
  }

  return false;
}

/**
 * Retourne un grade pour le ratio de contraste
 */
export function getContrastGrade(ratio: number): {
  grade: 'AAA' | 'AA' | 'AA Large' | 'Fail';
  description: string;
} {
  if (ratio >= 7) {
    return {
      grade: 'AAA',
      description: 'Excellent - Conforme WCAG AAA',
    };
  } else if (ratio >= 4.5) {
    return {
      grade: 'AA',
      description: 'Bon - Conforme WCAG AA',
    };
  } else if (ratio >= 3) {
    return {
      grade: 'AA Large',
      description: 'Acceptable pour texte large uniquement',
    };
  } else {
    return {
      grade: 'Fail',
      description: 'Insuffisant - Non conforme WCAG',
    };
  }
}

/**
 * Suggère une couleur de texte (noir ou blanc) pour un fond donné
 */
export function suggestTextColor(backgroundColor: string): '#000000' | '#ffffff' {
  const rgb = hexToRgb(backgroundColor);
  if (!rgb) return '#000000';

  const luminance = getRelativeLuminance(rgb);

  // Si le fond est clair, utiliser du texte noir
  // Si le fond est sombre, utiliser du texte blanc
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

/**
 * Vérifie et log les problèmes de contraste (dev tool)
 */
export function auditContrast(
  foreground: string,
  background: string,
  context: string
): void {
  try {
    const ratio = getContrastRatio(foreground, background);
    const grade = getContrastGrade(ratio);

    if (grade.grade === 'Fail') {
      console.warn(`⚠️ Contraste insuffisant (${context}):`, {
        foreground,
        background,
        ratio: ratio.toFixed(2),
        grade: grade.grade,
        description: grade.description,
      });
    } else if (process.env.NODE_ENV === 'development') {
      console.log(`✅ Contraste OK (${context}):`, {
        foreground,
        background,
        ratio: ratio.toFixed(2),
        grade: grade.grade,
      });
    }
  } catch (error) {
    console.error(`❌ Erreur audit contraste (${context}):`, error);
  }
}

/**
 * Batch audit de plusieurs paires de couleurs
 */
export function auditMultipleContrasts(
  pairs: Array<{
    foreground: string;
    background: string;
    context: string;
  }>
): Array<{
  context: string;
  ratio: number;
  grade: ReturnType<typeof getContrastGrade>;
  compliant: boolean;
}> {
  return pairs.map((pair) => {
    const ratio = getContrastRatio(pair.foreground, pair.background);
    const grade = getContrastGrade(ratio);
    const compliant = grade.grade !== 'Fail';

    return {
      context: pair.context,
      ratio,
      grade,
      compliant,
    };
  });
}
