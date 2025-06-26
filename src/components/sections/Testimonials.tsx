import Image from 'next/image';

interface Testimonial {
  content: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

export const Testimonials = ({
  title = "Co mówią o nas klienci",
  subtitle = "Opinie naszych zadowolonych klientów z południowego Londynu",
  testimonials = [
    {
      content: "Extenida przeprowadziła rozbudowę naszego domu w Wimbledonie. Jesteśmy zachwyceni efektem końcowym i profesjonalizmem zespołu. Całość prac została wykonana terminowo i w ramach ustalonego budżetu.",
      author: "Anna Kowalska",
      role: "Wimbledon",
      avatar: "/testimonials/person1.jpg",
      rating: 5
    },
    {
      content: "Zdecydowaliśmy się na adaptację poddasza i jesteśmy bardzo zadowoleni z rezultatu. Firma Extenida zapewniła kompleksową obsługę od projektu po realizację. Polecam!",
      author: "Jan Nowak",
      role: "Kingston",
      avatar: "/testimonials/person2.jpg",
      rating: 5
    },
    {
      content: "Podjazd i patio wykonane przez Extenida przeszły nasze najśmielsze oczekiwania. Jakość materiałów i wykonania jest na najwyższym poziomie. Dziękujemy za profesjonalną realizację.",
      author: "Marta Wiśniewska",
      role: "Richmond",
      avatar: "/testimonials/person3.jpg",
      rating: 5
    }
  ]
}: TestimonialsProps) => {

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              {testimonial.rating && (
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              )}

              <blockquote className="text-gray-700 mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center">
                {testimonial.avatar && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}

                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  {testimonial.role && (
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
