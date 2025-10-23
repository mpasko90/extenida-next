"use client";
import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioProject } from '@/data/portfolio';

interface PortfolioGridProps {
  projects: PortfolioProject[];
  className?: string;
}

export function PortfolioGrid({ projects, className = '' }: PortfolioGridProps) {
  return (
    <div className={`grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {projects.map(project => {
        const cover = project.images[0];
        return (
          <Link
            href={`/portfolio/${project.slug}`}
            key={project.slug}
            aria-label={`View project: ${project.title}`}
            className="group relative block overflow-hidden rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-extendia-accent/60"
          >
            {cover && (
              <div className="relative aspect-[4/3] bg-slate-800">
                <Image
                  src={cover.thumb}
                  alt={cover.alt || project.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={(e) => {
                    const imgEl = e.currentTarget as HTMLImageElement;
                    if (imgEl.src !== cover.full) {
                      imgEl.src = cover.full;
                    }
                  }}
                />
              </div>
            )}
            {/* Overlay gradient and pills */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="rounded-full bg-black/60 text-white/90 text-[10px] uppercase tracking-wide px-2.5 py-1 backdrop-blur-sm border border-white/10">
                {project.serviceType.replace('-', ' ')}
              </span>
              {project.featured && (
                <span className="rounded-full bg-extendia-accent/90 text-slate-950 text-[10px] font-semibold px-2.5 py-1 shadow-md">
                  Featured
                </span>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="text-white font-semibold text-sm md:text-base leading-snug line-clamp-2 drop-shadow">
                {project.title}
              </h3>
              <p className="mt-1 text-[11px] md:text-xs text-slate-200/80 uppercase tracking-wide">
                {project.location}
              </p>
              <span className="mt-3 inline-flex items-center text-xs font-medium text-white/90 group-hover:text-white/100 underline underline-offset-4 decoration-slate-400/60">
                View project →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
