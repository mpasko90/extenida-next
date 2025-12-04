import type { Metadata } from 'next';
import PortfolioPage from './page';
import { getProjects } from '@/data/portfolio';

const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://extendia.co.uk';

export const metadata: Metadata = {
  title: 'Project Portfolio | Extendia',
  description:
    'Extendia portfolio page showcasing completed house extensions, refurbishments and bathroom projects across South West London.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPageWrapper() {
  const projects = getProjects();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${site}/portfolio/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioPage />
    </>
  );
}
