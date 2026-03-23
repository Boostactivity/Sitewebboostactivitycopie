/**
 * Schemas avancés pour Rich Snippets Google
 * Product, Review, Event, Video, Recipe, HowTo, etc.
 */

/**
 * Schema Product - Pour e-commerce ou services
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  brand?: string;
  sku?: string;
  rating?: {
    value: number; // 0-5
    count: number; // Nombre d'avis
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Boost Activité',
    },
    ...(product.sku && { sku: product.sku }),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.priceCurrency || 'EUR',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      seller: {
        '@type': 'Organization',
        name: 'Boost Activité',
      },
    },
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating.value,
        reviewCount: product.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

/**
 * Schema Review - Pour afficher les étoiles dans Google
 */
export function generateReviewSchema(review: {
  itemName: string;
  author: string;
  rating: number; // 1-5
  reviewBody: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: review.itemName,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
}

/**
 * Schema Event - Pour événements, webinaires, formations
 */
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string; // ISO format: 2024-12-01T10:00:00+01:00
  endDate?: string;
  location: {
    name: string;
    address?: string;
    city?: string;
    country?: string;
  } | 'online';
  image?: string;
  price?: number;
  priceCurrency?: string;
  url?: string;
  performer?: string;
}) {
  const baseEvent = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    ...(event.image && { image: event.image }),
    organizer: {
      '@type': 'Organization',
      name: 'Boost Activité',
      url: 'https://boostactivity.fr',
    },
    ...(event.performer && {
      performer: {
        '@type': 'Person',
        name: event.performer,
      },
    }),
    ...(event.url && { url: event.url }),
  };

  // Location (physique ou online)
  if (event.location === 'online') {
    return {
      ...baseEvent,
      location: {
        '@type': 'VirtualLocation',
        url: event.url || 'https://boostactivity.fr',
      },
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      ...(event.price !== undefined && {
        offers: {
          '@type': 'Offer',
          price: event.price,
          priceCurrency: event.priceCurrency || 'EUR',
          availability: 'https://schema.org/InStock',
          url: event.url,
        },
      }),
    };
  } else {
    return {
      ...baseEvent,
      location: {
        '@type': 'Place',
        name: event.location.name,
        address: {
          '@type': 'PostalAddress',
          ...(event.location.address && { streetAddress: event.location.address }),
          ...(event.location.city && { addressLocality: event.location.city }),
          ...(event.location.country && { addressCountry: event.location.country }),
        },
      },
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      ...(event.price !== undefined && {
        offers: {
          '@type': 'Offer',
          price: event.price,
          priceCurrency: event.priceCurrency || 'EUR',
          availability: 'https://schema.org/InStock',
          url: event.url,
        },
      }),
    };
  }
}

/**
 * Schema Video - Pour vidéos YouTube, Vimeo, etc.
 */
export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // Format ISO 8601 : PT1H30M (1h30min)
  contentUrl?: string; // URL de la vidéo
  embedUrl?: string; // URL d'embed
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    publisher: {
      '@type': 'Organization',
      name: 'Boost Activité',
      logo: {
        '@type': 'ImageObject',
        url: 'https://boostactivity.fr/logo.png',
      },
    },
  };
}

/**
 * Schema HowTo - Pour tutoriels étape par étape
 */
export function generateHowToSchema(howto: {
  name: string;
  description: string;
  image?: string;
  totalTime?: string; // ISO 8601 : PT30M (30 minutes)
  steps: {
    name: string;
    text: string;
    image?: string;
    url?: string;
  }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    ...(howto.image && { image: howto.image }),
    ...(howto.totalTime && { totalTime: howto.totalTime }),
    step: howto.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };
}

/**
 * Schema JobPosting - Pour offres d'emploi
 */
export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY' | 'INTERN';
  location: {
    city: string;
    country: string;
  };
  baseSalary?: {
    min: number;
    max: number;
    currency: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    ...(job.validThrough && { validThrough: job.validThrough }),
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Boost Activité',
      sameAs: 'https://boostactivity.fr',
      logo: 'https://boostactivity.fr/logo.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location.city,
        addressCountry: job.location.country,
      },
    },
    ...(job.baseSalary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: job.baseSalary.currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: job.baseSalary.min,
          maxValue: job.baseSalary.max,
          unitText: 'YEAR',
        },
      },
    }),
  };
}

/**
 * Schema Course - Pour formations et cours
 */
export function generateCourseSchema(course: {
  name: string;
  description: string;
  provider: string;
  url?: string;
  image?: string;
  price?: number;
  priceCurrency?: string;
  duration?: string; // ISO 8601 : P3M (3 mois)
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      sameAs: 'https://boostactivity.fr',
    },
    ...(course.url && { url: course.url }),
    ...(course.image && { image: course.image }),
    ...(course.price !== undefined && {
      offers: {
        '@type': 'Offer',
        price: course.price,
        priceCurrency: course.priceCurrency || 'EUR',
      },
    }),
    ...(course.duration && { timeRequired: course.duration }),
  };
}

/**
 * Schema SoftwareApplication - Pour applications/outils SaaS
 */
export function generateSoftwareSchema(software: {
  name: string;
  description: string;
  operatingSystem?: string; // "Windows", "macOS", "Android", "iOS", "Web"
  applicationCategory: string; // "BusinessApplication", "GameApplication", etc.
  image?: string;
  price?: number;
  priceCurrency?: string;
  rating?: {
    value: number;
    count: number;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: software.name,
    description: software.description,
    applicationCategory: software.applicationCategory,
    ...(software.operatingSystem && { operatingSystem: software.operatingSystem }),
    ...(software.image && { image: software.image }),
    ...(software.price !== undefined && {
      offers: {
        '@type': 'Offer',
        price: software.price,
        priceCurrency: software.priceCurrency || 'EUR',
      },
    }),
    ...(software.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: software.rating.value,
        reviewCount: software.rating.count,
        bestRating: 5,
      },
    }),
  };
}

/**
 * Schema QAPage - Pour pages questions/réponses
 */
export function generateQAPageSchema(qa: {
  question: string;
  answers: {
    text: string;
    author: string;
    upvoteCount?: number;
    dateCreated?: string;
  }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: qa.answers.map((answer) => ({
        '@type': 'Answer',
        text: answer.text,
        author: {
          '@type': 'Person',
          name: answer.author,
        },
        ...(answer.upvoteCount && { upvoteCount: answer.upvoteCount }),
        ...(answer.dateCreated && { dateCreated: answer.dateCreated }),
      })),
    },
  };
}

/**
 * Exemples d'utilisation pour Boost Activité
 */

// Exemple 1 : Service SEO comme Product
export const seoServiceProduct = generateProductSchema({
  name: 'Service SEO Premium',
  description: 'Référencement naturel complet pour dominer Google',
  image: 'https://boostactivity.fr/images/seo-service.jpg',
  price: 1500,
  priceCurrency: 'EUR',
  availability: 'InStock',
  brand: 'Boost Activité',
  sku: 'BA-SEO-001',
  rating: {
    value: 4.9,
    count: 165,
  },
});

// Exemple 2 : Webinaire Marketing
export const marketingWebinar = generateEventSchema({
  name: 'Webinaire : SEO en 2024',
  description: 'Découvrez les tendances SEO 2024 et comment les appliquer',
  startDate: '2024-12-15T14:00:00+01:00',
  endDate: '2024-12-15T16:00:00+01:00',
  location: 'online',
  image: 'https://boostactivity.fr/images/webinar.jpg',
  price: 0,
  url: 'https://boostactivity.fr/webinar/seo-2024',
  performer: 'Équipe Boost Activité',
});

// Exemple 3 : Tutoriel SEO
export const seoTutorial = generateHowToSchema({
  name: 'Comment Optimiser Votre Site pour le SEO',
  description: 'Guide complet pour améliorer votre référencement',
  totalTime: 'PT1H',
  steps: [
    {
      name: 'Audit SEO Initial',
      text: 'Analysez l\'état actuel de votre site avec Google Search Console',
    },
    {
      name: 'Optimisation On-Page',
      text: 'Optimisez vos meta tags, headings et contenu',
    },
    {
      name: 'Link Building',
      text: 'Acquérez des backlinks de qualité',
    },
    {
      name: 'Suivi des Résultats',
      text: 'Mesurez vos performances avec Google Analytics',
    },
  ],
});

/**
 * Helper pour combiner plusieurs schemas
 */
export function combineSchemas(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

/**
 * Validation et Test :
 *
 * Testez vos schemas avec :
 * 1. Google Rich Results Test : https://search.google.com/test/rich-results
 * 2. Schema Markup Validator : https://validator.schema.org/
 * 3. Google Search Console → Enhancements
 */
