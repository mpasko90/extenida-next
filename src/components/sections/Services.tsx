import Link from 'next/link';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

export const Services = ({
  title = "Nasze usługi",
  subtitle = "Oferujemy kompleksowe usługi budowlane dla klientów z południowego Londynu",
  services = [
    {
      title: "House Extensions",
      description: "Rozbudowa domów z pełnym projektem i realizacją. Zwiększ przestrzeń życiową i wartość swojej nieruchomości.",
      icon: "/window.svg",
      href: "/services/house-extensions",
      image: "/house-extension.jpg"
    },
    {
      title: "Loft Conversions",
      description: "Przebudowa poddaszy na funkcjonalne pomieszczenia. Wykorzystaj niewykorzystaną przestrzeń w swoim domu.",
      icon: "/file.svg",
      href: "/services/loft-conversions",
      image: "/loft-conversion.jpg"
    },
    {
      title: "Driveways & Patios",
      description: "Profesjonalne układanie podjazdów i tarasów. Zwiększ estetykę i funkcjonalność przestrzeni wokół domu.",
      icon: "/globe.svg",
      href: "/services/driveways",
      image: "/driveway.jpg"
    }
  ]
}: ServicesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="block group"
            >
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg flex flex-col">
                <div className="flex items-center mb-4">
                  {service.icon && (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={24}
                        height={24}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>

                {service.image && (
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}

                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

                <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Dowiedz się więcej
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
