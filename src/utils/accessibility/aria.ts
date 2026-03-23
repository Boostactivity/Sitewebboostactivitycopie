/**
 * Utilitaires ARIA pour améliorer l'accessibilité
 * WCAG 4.1.2 - Name, Role, Value
 */

/**
 * Génère un ID unique pour associer labels et inputs
 */
let idCounter = 0;
export function generateId(prefix = 'a11y'): string {
  idCounter += 1;
  return `${prefix}-${idCounter}-${Date.now()}`;
}

/**
 * Attributs ARIA pour un bouton qui contrôle un élément
 */
export function ariaButton(
  label: string,
  options?: {
    expanded?: boolean;
    controls?: string;
    pressed?: boolean;
    disabled?: boolean;
    describedBy?: string;
  }
) {
  return {
    role: 'button',
    'aria-label': label,
    ...(options?.expanded !== undefined && { 'aria-expanded': options.expanded }),
    ...(options?.controls && { 'aria-controls': options.controls }),
    ...(options?.pressed !== undefined && { 'aria-pressed': options.pressed }),
    ...(options?.disabled && { 'aria-disabled': options.disabled }),
    ...(options?.describedBy && { 'aria-describedby': options.describedBy }),
    tabIndex: options?.disabled ? -1 : 0,
  };
}

/**
 * Attributs ARIA pour un lien
 */
export function ariaLink(
  label: string,
  options?: {
    current?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
    describedBy?: string;
  }
) {
  return {
    'aria-label': label,
    ...(options?.current && { 'aria-current': options.current === true ? 'page' : options.current }),
    ...(options?.describedBy && { 'aria-describedby': options.describedBy }),
  };
}

/**
 * Attributs ARIA pour un heading
 */
export function ariaHeading(level: 1 | 2 | 3 | 4 | 5 | 6, label?: string) {
  return {
    role: 'heading',
    'aria-level': level,
    ...(label && { 'aria-label': label }),
  };
}

/**
 * Attributs ARIA pour une navigation
 */
export function ariaNavigation(label: string) {
  return {
    role: 'navigation',
    'aria-label': label,
  };
}

/**
 * Attributs ARIA pour une liste
 */
export function ariaList(label?: string) {
  return {
    role: 'list',
    ...(label && { 'aria-label': label }),
  };
}

/**
 * Attributs ARIA pour un item de liste
 */
export function ariaListItem() {
  return {
    role: 'listitem',
  };
}

/**
 * Attributs ARIA pour un dialog/modal
 */
export function ariaDialog(
  label: string,
  options?: {
    describedBy?: string;
    modal?: boolean;
  }
) {
  return {
    role: 'dialog',
    'aria-label': label,
    'aria-modal': options?.modal ?? true,
    ...(options?.describedBy && { 'aria-describedby': options.describedBy }),
  };
}

/**
 * Attributs ARIA pour un menu dropdown
 */
export function ariaMenu(label: string) {
  return {
    role: 'menu',
    'aria-label': label,
  };
}

/**
 * Attributs ARIA pour un item de menu
 */
export function ariaMenuItem(label: string, options?: { disabled?: boolean }) {
  return {
    role: 'menuitem',
    'aria-label': label,
    ...(options?.disabled && { 'aria-disabled': true }),
    tabIndex: options?.disabled ? -1 : 0,
  };
}

/**
 * Attributs ARIA pour un tablist
 */
export function ariaTabList(label: string) {
  return {
    role: 'tablist',
    'aria-label': label,
  };
}

/**
 * Attributs ARIA pour un tab
 */
export function ariaTab(label: string, options: { selected: boolean; controls: string }) {
  return {
    role: 'tab',
    'aria-label': label,
    'aria-selected': options.selected,
    'aria-controls': options.controls,
    tabIndex: options.selected ? 0 : -1,
  };
}

/**
 * Attributs ARIA pour un tabpanel
 */
export function ariaTabPanel(labelledBy: string) {
  return {
    role: 'tabpanel',
    'aria-labelledby': labelledBy,
    tabIndex: 0,
  };
}

/**
 * Attributs ARIA pour un alert
 */
export function ariaAlert(options?: { live?: 'polite' | 'assertive'; atomic?: boolean }) {
  return {
    role: 'alert',
    'aria-live': options?.live ?? 'polite',
    'aria-atomic': options?.atomic ?? true,
  };
}

/**
 * Attributs ARIA pour un status message
 */
export function ariaStatus(options?: { live?: 'polite' | 'assertive' }) {
  return {
    role: 'status',
    'aria-live': options?.live ?? 'polite',
    'aria-atomic': true,
  };
}

/**
 * Attributs ARIA pour un form field
 */
export function ariaFormField(
  label: string,
  options?: {
    required?: boolean;
    invalid?: boolean;
    describedBy?: string;
    errorMessage?: string;
  }
) {
  const id = generateId('field');
  const errorId = options?.errorMessage ? generateId('error') : undefined;

  return {
    id,
    'aria-label': label,
    ...(options?.required && { 'aria-required': true }),
    ...(options?.invalid && { 'aria-invalid': true }),
    ...(options?.describedBy && { 'aria-describedby': options.describedBy }),
    ...(errorId && { 'aria-describedby': errorId }),
  };
}

/**
 * Attributs ARIA pour une région landmark
 */
export function ariaRegion(label: string) {
  return {
    role: 'region',
    'aria-label': label,
  };
}

/**
 * Attributs ARIA pour masquer un élément aux screen readers
 */
export function ariaHidden() {
  return {
    'aria-hidden': true,
  };
}

/**
 * Attributs ARIA pour un live region (annonces dynamiques)
 */
export function ariaLive(
  politeness: 'off' | 'polite' | 'assertive' = 'polite',
  options?: {
    atomic?: boolean;
    relevant?: 'additions' | 'removals' | 'text' | 'all';
  }
) {
  return {
    'aria-live': politeness,
    'aria-atomic': options?.atomic ?? false,
    ...(options?.relevant && { 'aria-relevant': options.relevant }),
  };
}

/**
 * Attributs ARIA pour une progressbar
 */
export function ariaProgressBar(
  label: string,
  options: {
    current: number;
    min?: number;
    max?: number;
  }
) {
  return {
    role: 'progressbar',
    'aria-label': label,
    'aria-valuenow': options.current,
    'aria-valuemin': options.min ?? 0,
    'aria-valuemax': options.max ?? 100,
  };
}

/**
 * Attributs ARIA pour un searchbox
 */
export function ariaSearchBox(label: string) {
  return {
    role: 'searchbox',
    'aria-label': label,
  };
}

/**
 * Attributs ARIA pour un combobox (select personnalisé)
 */
export function ariaComboBox(
  label: string,
  options: {
    expanded: boolean;
    controls: string;
    activeDescendant?: string;
  }
) {
  return {
    role: 'combobox',
    'aria-label': label,
    'aria-expanded': options.expanded,
    'aria-controls': options.controls,
    'aria-haspopup': 'listbox' as const,
    ...(options.activeDescendant && { 'aria-activedescendant': options.activeDescendant }),
  };
}
