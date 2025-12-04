import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import { portfolioProjects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'HTML Sitemap | Extendia',
  description:
    'Browse all key Extendia pages including services, London areas, portfolio projects and contact information.',
  alternates: { canonical: '/sitemap' },
};

const londonAreas = [
  'wimbledon',
  'kingston',
  'putney',
  'richmond',
  'surbiton',
  'twickenham',
  'wandsworth',
  'fulham',
  'hammersmith',
  'surrey',
];

export default function HtmlSitemapPage() {
  const sortedServices = [...services].sort((a, b) => a.name.localeCompare(b.name));
  const sortedProjects = [...portfolioProjects].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">HTML Sitemap</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Quick overview of the main pages on the Extendia website.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="font-semibold text-lg mb-3">Core pages</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services overview</Link></li>
            <li><Link href="/london">London areas overview</Link></li>
            <li><Link href="/portfolio">Portfolio overview</Link></li>
            <li><Link href="/journey">Your Journey</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Services</h2>
          <ul className="space-y-1 text-sm">
            {sortedServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">London areas</h2>
          <ul className="space-y-1 text-sm">
            {londonAreas.map((area) => (
              <li key={area}>
                <Link href={`/london/${area}`}>
                  {area.charAt(0).toUpperCase() + area.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Portfolio projects</h2>
          <ul className="space-y-1 text-sm">
            {sortedProjects.map((project) => (
              <li key={project.slug}>
                <Link href={`/portfolio/${project.slug}`}>
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Legal & policies</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/warranty">Warranty</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
