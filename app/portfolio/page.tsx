import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio | Extendia',
  description: 'Extendia portfolio page showcasing completed extensions, refurbishments and bathroom projects.'
};

import { getProjects } from '@/data/portfolio';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';

export default function PortfolioPage() {
  const projects = getProjects();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://extendia.co.uk'}/portfolio/${p.slug}`,
      name: p.title
    }))
  };
  return (
    <main id="main-content" aria-label="Portfolio projects" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Minimal header: only title */}
      <header className="container mx-auto px-4 pt-10 md:pt-14 pb-6 md:pb-8">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">Project Portfolio</span>
        </h1>
      </header>

      {/* Grid of project tiles */}
      <section aria-labelledby="portfolio-grid-heading" className="container mx-auto px-4 pb-16 md:pb-24">
        <h2 id="portfolio-grid-heading" className="sr-only">Projects list</h2>
        <PortfolioGrid projects={projects} />
      </section>
    </main>
  );
}
