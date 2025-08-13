import type { Metadata } from 'next';
import { getProjects, getProjectBySlug } from '@/data';
import { VirtualTourEmbed } from '@/components/portfolio/VirtualTourEmbed';
import Image from 'next/image';
import { notFound } from 'next/navigation';
// (No Link component needed for simplified alpha-like version)

interface Props { 
  params: Promise<{ project: string }> 
}

export async function generateStaticParams() {
  return getProjects().map(p => ({ project: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = await params;
  const data = getProjectBySlug(project);
  if (!data) return { title: 'Project Not Found | Extendia' };
  return {
    title: `${data.title} | Extendia Portfolio`,
    description: `${data.title} project images in ${data.location}. Representative gallery.`
  };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const data = getProjectBySlug(project);
  
  if (!data) notFound();
  
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://extendia.co.uk';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: data.title,
    url: `${site}/portfolio/${data.slug}`,
    about: data.title,
    image: data.images.map(i => i.full),
    ...(data.virtualTour ? {
      hasPart: {
        '@type': 'TouristTrip',
        name: `${data.title} 360° Virtual Tour`,
        url: data.virtualTour,
        description: `Interactive 360° virtual tour of ${data.title}`
      }
    } : {})
  };

  return (
  <main id="main-content" aria-label="Project gallery" className="container mx-auto py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="mb-10 max-w-5xl">
        <h1 className="text-3xl font-semibold mb-4">{data.title}</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Service: {data.serviceType.replace('-', ' ')} • Location: {data.location}</p>
        {data.virtualTour && (
          <div className="mb-8">
            <VirtualTourEmbed url={data.virtualTour} title={data.title} />
            <p className="mt-2 text-xs text-slate-500">Interactive 360° virtual tour (opens full-screen on click inside).</p>
          </div>
        )}
      </header>
      <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.images.map(img => (
          <li key={img.id} className="relative rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
            <figure>
              <Image
                src={img.thumb}
                alt={img.alt ? `${data.title} – ${img.alt}` : data.title}
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto object-cover bg-slate-700/40"
              />
              {img.alt && <figcaption className="sr-only">{img.alt}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <a href="/portfolio" className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" aria-label="Back to all portfolio projects">← Back to portfolio</a>
      </div>
    </main>
  );
}
