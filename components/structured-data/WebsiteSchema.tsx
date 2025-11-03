'use client';

/**
 * WebsiteSchema Component
 * 
 * Provides structured data (JSON-LD) for the website according to Schema.org standards.
 * Includes author and creator information for SEO purposes.
 */
export function WebsiteSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Extendia',
    url: 'https://extendia.co.uk',
    description: 'Expert house extensions, loft conversions, and home improvements in South West London.',
    author: {
      '@type': 'Person',
      name: 'Michał Paśko',
      url: 'https://paskomichal.pl'
    },
    creator: {
      '@type': 'Person',
      name: 'Michał Paśko',
      url: 'https://paskomichal.pl'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
