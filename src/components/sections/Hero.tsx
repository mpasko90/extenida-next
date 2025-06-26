import Button from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  videoSrc?: string;
  overlay?: boolean;
}

export const Hero = ({
  title = "Profesjonalne usługi budowlane w Londynie",
  subtitle = "Rozbudowy, przebudowy i remonty domów. Wieloletnie doświadczenie i setki zadowolonych klientów.",
  ctaText = "Darmowa wycena",
  ctaLink = "/contact",
  secondaryCtaText = "Nasze realizacje",
  secondaryCtaLink = "/gallery",
  imageSrc,
  videoSrc = "/hero-video.mp4",
  overlay = true,
}: HeroProps) => {
  return (
    <section className="relative bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaLink}>
                <Button size="lg" variant="primary">
                  {ctaText}
                </Button>
              </Link>
              <Link href={secondaryCtaLink}>
                <Button size="lg" variant="outline">
                  {secondaryCtaText}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-64 md:h-full min-h-[400px]">
            {videoSrc ? (
              <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl bg-gray-900">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {overlay && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/25 backdrop-blur-[2px]" />
                )}
              </div>
            ) : imageSrc ? (
              <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={imageSrc}
                  alt="House Extension"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                {overlay && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/25" />
                )}
              </div>
            ) : null}
          </div>
        </div>

        {/* Hero Bottom Content - optional stats or additional info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">15+ Lat Doświadczenia</h3>
            <p className="text-gray-600">Profesjonalne wykonawstwo i najwyższa jakość usług</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">500+ Projektów</h3>
            <p className="text-gray-600">Zrealizowanych z sukcesem na terenie Londynu</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">100% Zadowolonych</h3>
            <p className="text-gray-600">Klientów poleca nasze usługi</p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-extendia-primary/20 to-extendia-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-gradient-to-tr from-extendia-accent/20 to-extendia-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
