import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio | Extendia',
  description: 'Extendia portfolio page showcasing completed extensions, refurbishments and bathroom projects.'
};

import { getProjects } from '@/data/portfolio';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Layers, Ruler, Sparkles } from 'lucide-react';

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
  const totalImages = projects.reduce((sum,p)=> sum + p.images.length, 0);
  const categories = Array.from(new Set(projects.map(p=>p.serviceType)));
  return (
    <main id="main-content" aria-label="Portfolio projects" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-extendia-primary/80 to-slate-800 py-20 md:py-28 mb-12">
        <div className="absolute inset-0 opacity-[0.18] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0 H0 V40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Project <span className="text-extendia-accent">Portfolio</span></h1>
            {/* <p className="text-white/80 text-lg leading-relaxed">Curated selection of recent house extensions, bathrooms and whole-home refurbishments across London. We focus on craftsmanship, energy efficiency and intelligent spatial design.</p> */}
            <div className="flex flex-wrap gap-3 mt-8">
              {categories.map(cat => (
                <Badge key={cat} variant="secondary" className="bg-white/15 text-white hover:bg-white/25 capitalize">{cat.replace('-', ' ')}</Badge>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            <Card className="bg-white/10 backdrop-blur-md border-white/15">
              <CardContent className="p-6 flex items-start gap-4">
                <Layers className="w-8 h-8 text-extendia-accent" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">Projects</p>
                  <p className="text-2xl font-semibold text-white">{projects.length}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/15">
              <CardContent className="p-6 flex items-start gap-4">
                <Ruler className="w-8 h-8 text-extendia-accent" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">Images</p>
                  <p className="text-2xl font-semibold text-white">{totalImages}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/15 sm:col-span-1">
              <CardContent className="p-6 flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-extendia-accent" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">Virtual Tours</p>
                  <p className="text-2xl font-semibold text-white">{projects.filter(p=>p.virtualTour).length}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <section aria-labelledby="portfolio-grid-heading" className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl bg-slate-900/40 p-4 md:p-6 backdrop-blur-sm border border-slate-800/80 shadow-inner shadow-black/30">
        <h2 id="portfolio-grid-heading" className="sr-only">Projects list</h2>
        <PortfolioGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
