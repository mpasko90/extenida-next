'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { PageLayout } from '@/components/layout';
import { motion } from 'framer-motion';

export default function ServicesIndexPage() {
  const primary = services.filter(s => ['home-extensions','loft-conversions','kitchen-renovations','bathroom-renovations'].includes(s.slug));
  const secondary = services.filter(s => !primary.find(p => p.slug === s.slug));

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-extendia-accent">Services</span></motion.h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Specialist extensions, conversions and renovations across South West London.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Core Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {primary.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group block p-6 rounded-xl border border-gray-200 hover:border-extendia-accent/50 shadow-sm hover:shadow-md transition bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-extendia-accent group-hover:underline">{s.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.description}</p>
                  <span className="text-sm font-medium text-extendia-primary group-hover:text-extendia-accent">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>

          {secondary.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Additional Services</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {secondary.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group block p-5 rounded-lg border border-gray-200 hover:border-extendia-accent/40 bg-white hover:shadow">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-extendia-accent">{s.name}</h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-3">{s.description}</p>
                    <span className="text-xs font-medium text-extendia-primary group-hover:text-extendia-accent">View →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
