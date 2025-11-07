// Schema.org structured data templates

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Boost Activity',
  alternateName: 'Boost Activity - Agence Marketing Digital',
  url: 'https://boostactivity.fr',
  logo: 'https://boostactivity.fr/logo.png',
  description: 'Agence de marketing digital premium à Paris spécialisée en SEO, publicité en ligne, social media et stratégie digitale pour PME ambitieuses.',
  email: 'boostactivityfr@gmail.com',
  telephone: '+33660968516',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.facebook.com/boostactivity',
    'https://www.instagram.com/boostactivity',
    'https://www.linkedin.com/company/boostactivity',
    'https://twitter.com/boostactivity',
  ],
  foundingDate: '2020',
  knowsAbout: [
    'Marketing Digital',
    'SEO',
    'Publicité en ligne',
    'Social Media Marketing',
    'Google Ads',
    'Facebook Ads',
    'Stratégie Digitale',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Boost Activity',
  image: 'https://boostactivity.fr/logo.png',
  '@id': 'https://boostactivity.fr',
  url: 'https://boostactivity.fr',
  telephone: '+33660968516',
  email: 'boostactivityfr@gmail.com',
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '165',
    bestRating: '5',
    worstRating: '1',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Boost Activity',
  url: 'https://boostactivity.fr',
  description: 'Agence de marketing digital premium à Paris',
  publisher: {
    '@type': 'Organization',
    name: 'Boost Activity',
    logo: {
      '@type': 'ImageObject',
      url: 'https://boostactivity.fr/logo.png',
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://boostactivity.fr/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@type': 'Organization',
    name: 'Boost Activity',
    url: 'https://boostactivity.fr',
  },
  description: service.description,
  url: service.url,
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'EUR',
    },
  }),
});

export const articleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author || 'Boost Activity',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Boost Activity',
    logo: {
      '@type': 'ImageObject',
      url: 'https://boostactivity.fr/logo.png',
    },
  },
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const offerSchema = (offer: {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
  validFrom?: string;
  validThrough?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: offer.name,
  description: offer.description,
  price: offer.price,
  priceCurrency: offer.priceCurrency || 'EUR',
  seller: {
    '@type': 'Organization',
    name: 'Boost Activity',
  },
  ...(offer.validFrom && { validFrom: offer.validFrom }),
  ...(offer.validThrough && { validThrough: offer.validThrough }),
  availability: 'https://schema.org/InStock',
});
