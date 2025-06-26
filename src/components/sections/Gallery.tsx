import Image from 'next/image';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  href?: string;
  location?: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
  showViewAll?: boolean;
}

export const Gallery = ({
  title = "Our Recent Projects in South West London",
  subtitle = "See our house extensions, loft conversions and renovations in Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon.",
  images = [
    {
      src: "/projects/project1.jpg",
      alt: "House extension in Wimbledon - modern rear extension",
      category: "House Extensions",
      location: "Wimbledon"
    },
    {
      src: "/projects/project2.jpg",
      alt: "Loft conversion in Kingston - spacious bedroom loft",
      category: "Loft Conversions",
      location: "Kingston"
    },
    {
      src: "/projects/project3.jpg",
      alt: "Driveway and patio in Richmond - premium paving",
      category: "Driveways & Patios",
      location: "Richmond"
    },
    {
      src: "/projects/project4.jpg",
      alt: "Kitchen extension in Surbiton - open plan living",
      category: "House Extensions",
      location: "Surbiton"
    },
    {
      src: "/projects/project5.jpg",
      alt: "Loft conversion in Putney - modern home office",
      category: "Loft Conversions",
      location: "Putney"
    },
    {
      src: "/projects/project6.jpg",
      alt: "Garden patio in Twickenham - outdoor living space",
      category: "Driveways & Patios",
      location: "Twickenham"
    }
  ],
  showViewAll = true
}: GalleryProps) => {
  return (
    <section className="py-20 bg-gradient-to-tr from-extendia-primary/80 via-extendia-accent/10 to-gray-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">{title}</h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 drop-shadow-md">{subtitle}</p>
        </div>
        <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="relative h-72 rounded-2xl overflow-hidden group bg-gradient-to-br from-white/5 to-extendia-accent/10 shadow-xl border-0 transition-all duration-300">
              <div className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  aria-label={`${image.category} in ${image.location}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <Badge className="mb-1 bg-extendia-accent/80 text-white text-xs font-semibold shadow">{image.category}</Badge>
                    <h3 className="text-lg font-medium drop-shadow">{image.alt}</h3>
                    <span className="text-xs text-white/80">{image.location}</span>
                  </div>
                </div>
                {image.href && (
                  <Link href={image.href} className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent" aria-label={`View details of ${image.alt}`}>
                    <span className="sr-only">View details</span>
                  </Link>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="bg-white/30 text-white text-xs font-semibold shadow cursor-pointer" aria-label={`Project in ${image.location}`}>{image.location}</Badge>
                    </TooltipTrigger>
                    <TooltipContent className="bg-extendia-accent/90 text-white text-xs font-semibold shadow">
                      Project in {image.location}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </TooltipProvider>
        {showViewAll && (
          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-block bg-extendia-accent text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-extendia-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all duration-300" aria-label="View full portfolio of building projects in South West London">
              View Full Portfolio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
