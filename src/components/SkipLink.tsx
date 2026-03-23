/**
 * Skip Link - WCAG 2.4.1 (Bypass Blocks)
 * Permet aux utilisateurs de clavier/screen reader de sauter directement au contenu principal
 */

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="skip-link"
      style={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 9999,
        padding: '1rem 1.5rem',
        backgroundColor: '#000',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 600,
        borderRadius: '0 0 8px 0',
        transition: 'left 0.2s ease',
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = '0';
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = '-9999px';
      }}
    >
      {children}
    </a>
  );
}

/**
 * Conteneur de Skip Links
 * Place plusieurs skip links au début du document
 */
interface SkipLinksProps {
  links?: Array<{ href: string; label: string }>;
}

export function SkipLinks({ links }: SkipLinksProps) {
  const defaultLinks = links || [
    { href: '#main-content', label: 'Aller au contenu principal' },
    { href: '#navigation', label: 'Aller à la navigation' },
    { href: '#footer', label: 'Aller au pied de page' },
  ];

  return (
    <div className="skip-links-container" role="navigation" aria-label="Raccourcis">
      {defaultLinks.map((link) => (
        <SkipLink key={link.href} href={link.href}>
          {link.label}
        </SkipLink>
      ))}
    </div>
  );
}
