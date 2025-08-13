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
    <main id="main-content" aria-label="Portfolio projects" className="container mx-auto py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-semibold mb-4">Project Portfolio</h1>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Curated selection of our recent house extensions, bathroom refurbishments and full home refurbishments across London. This is an initial MVP dataset; more case studies and detailed write-ups will be added.</p>
      </header>
      <section aria-labelledby="portfolio-grid-heading" className="rounded-xl bg-slate-900/40 p-2 md:p-4 backdrop-blur-sm border border-slate-800">
        <h2 id="portfolio-grid-heading" className="sr-only">Projects list</h2>
        <PortfolioGrid projects={projects} />
      </section>
    </main>
  );
}
