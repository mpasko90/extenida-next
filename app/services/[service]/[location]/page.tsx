import { notFound } from 'next/navigation';
import { companyInfo } from '@/lib/companyInfo';
import { PageLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';

// Temporary minimal data – fast fix for 404s. Include canonical 'home-extensions' and legacy 'house-extensions' (redirected) for static param generation.
const SERVICES = [
  'home-extensions',
  'house-extensions', // legacy
  'loft-conversions',
  'kitchen-renovations',
  'bathroom-renovations',
  'architectural-design',
  'structural-engineering',
  'planning-permission',
  'project-management',
  'interior-fit-out',
  'basement-conversions'
];
const LOCATIONS = ['Kingston','Putney','Richmond','Surbiton','Twickenham','Wimbledon'];

export function generateStaticParams() {
  const combos: { service: string; location: string }[] = [];
  for (const s of SERVICES) for (const l of LOCATIONS) combos.push({ service: s, location: l.toLowerCase() });
  return combos;
}

export const dynamicParams = true;
export const revalidate = 3600;

interface PageProps { params: Promise<{ service: string; location: string }> }

export default async function ServiceLocationPage({ params }: PageProps) {
  const { service, location } = await params;
  const serviceSlug = service.toLowerCase();
  const locationSlug = location.toLowerCase();

  if (!SERVICES.includes(serviceSlug) || !LOCATIONS.map(l=>l.toLowerCase()).includes(locationSlug)) {
    notFound();
  }

  const normalisedServiceName = serviceSlug.replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase());
  const normalisedLocationName = LOCATIONS.find(l => l.toLowerCase() === locationSlug) || location;

  const title = `${normalisedServiceName} in ${normalisedLocationName}`;
  const description = `Professional ${normalisedServiceName.toLowerCase()} services in ${normalisedLocationName}. Contact ${companyInfo.name} for a consultation.`;

  return (
    <PageLayout>
      <section className="py-16 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90">
              <a href={companyInfo.phone.href}>Call {companyInfo.phone.display}</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary">
              <a href="/contact">Get Quote</a>
            </Button>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose Us for {normalisedServiceName} in {normalisedLocationName}?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
            <li className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Experienced project delivery & transparent communication.</li>
            <li className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Compliance with local regulations & building control.</li>
            <li className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Quality craftsmanship and curated material options.</li>
            <li className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Clear investment guidance and phased timeline planning.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Next Steps</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-6">Book a consultation to assess feasibility, budget ranges and planning considerations for your {normalisedServiceName.toLowerCase()} in {normalisedLocationName}. We provide a structured, no‑pressure process.</p>
          <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90">
            <a href="/contact">Book Consultation</a>
          </Button>
        </section>
      </main>
    </PageLayout>
  );
}
