'use client';

import Link from 'next/link';
import { PageLayout } from '@/components/layout';
import { motion } from 'framer-motion';

const AREAS = [
  { slug: 'wimbledon', name: 'Wimbledon', blurb: 'Prestigious SW19 homes & period properties.' },
  { slug: 'kingston', name: 'Kingston', blurb: 'Riverside family houses & heritage stock.' },
  { slug: 'richmond', name: 'Richmond', blurb: 'Green conservation areas & premium plots.' },
  { slug: 'surbiton', name: 'Surbiton', blurb: 'Fast links, period & deco homes, suburban plots.' },
  { slug: 'putney', name: 'Putney', blurb: 'Riverside terraces & leafy commons living.' },
  { slug: 'twickenham', name: 'Twickenham', blurb: 'Riverside conservation character & family demand.' },
  { slug: 'wandsworth', name: 'Wandsworth', blurb: 'Leafy borough with Victorian/Edwardian stock and great transport.' },
  { slug: 'fulham', name: 'Fulham', blurb: 'Period terraces, riverfront living and premium SW6 renovations.' },
  { slug: 'hammersmith', name: 'Hammersmith', blurb: 'Riverside, conservation areas and mixed-use neighbourhoods.' },
  { slug: 'surrey', name: 'Surrey', blurb: 'Family homes, greenbelt considerations and generous plots.' }
];

export default function AreasIndexPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl md:text-6xl font-bold mb-6">Service <span className="text-extendia-accent">Areas</span></motion.h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Local expertise across South West London&apos;s most desirable postcodes.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map(a => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="group block p-6 rounded-xl border border-gray-200 hover:border-extendia-accent/50 shadow-sm hover:shadow-md transition bg-white">
                <h2 className="text-2xl font-semibold mb-2 text-extendia-accent group-hover:underline">{a.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{a.blurb}</p>
                <span className="text-sm font-medium text-extendia-primary group-hover:text-extendia-accent">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
