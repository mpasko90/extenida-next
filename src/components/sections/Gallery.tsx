import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  href?: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
  showViewAll?: boolean;
}

export const Gallery = ({
  title = "Nasze realizacje",
  subtitle = "Zobacz wybrane projekty zrealizowane przez nasz zespół",
  images = [
    {
      src: "/projects/project1.jpg",
      alt: "Rozbudowa domu w Wimbledonie",
      category: "House Extensions"
    },
    {
      src: "/projects/project2.jpg",
      alt: "Adaptacja poddasza w Kingston",
      category: "Loft Conversions"
    },
    {
      src: "/projects/project3.jpg",
      alt: "Podjazd i patio w Richmond",
      category: "Driveways & Patios"
    },
    {
      src: "/projects/project4.jpg",
      alt: "Rozbudowa kuchni",
      category: "House Extensions"
    },
    {
      src: "/projects/project5.jpg",
      alt: "Przebudowa poddasza",
      category: "Loft Conversions"
    },
    {
      src: "/projects/project6.jpg",
      alt: "Taras ogrodowy",
      category: "Driveways & Patios"
    }
  ],
  showViewAll = true
}: GalleryProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="text-sm font-semibold text-blue-200 mb-1">{image.category}</div>
                  <h3 className="text-lg font-medium">{image.alt}</h3>
                </div>
              </div>
              {image.href && (
                <Link href={image.href} className="absolute inset-0">
                  <span className="sr-only">Zobacz szczegóły</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Zobacz wszystkie projekty
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
