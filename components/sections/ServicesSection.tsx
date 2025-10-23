import { motion } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => {
  // Reduced motion preference is not used in this simplified section.

  // Simplified services list per request (no descriptions/icons/features)
  // Include target slugs so buttons can link to service pages
  // Slugs correspond to dynamic routes in app/services/[service]
  const services = [
    { title: "Home Extension", slug: "home-extensions" },
    { title: "Loft Conversion", slug: "loft-conversions" },
  { title: "House/Flat Renovations", slug: "house-renovations" },
    { title: "Bathroom Renovations", slug: "bathroom-renovations" },
    { title: "Kitchen Renovations", slug: "kitchen-renovations" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // Instead of Math.random, set deterministic positions for 12 dots
  const dotPositions = [
    { left: "10%", top: "20%" },
    { left: "30%", top: "40%" },
    { left: "50%", top: "60%" },
    { left: "70%", top: "80%" },
    { left: "20%", top: "70%" },
    { left: "40%", top: "10%" },
    { left: "60%", top: "30%" },
    { left: "80%", top: "50%" },
    { left: "15%", top: "55%" },
    { left: "55%", top: "15%" },
    { left: "75%", top: "25%" },
    { left: "25%", top: "75%" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dotPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-extendia-primary to-extendia-accent rounded-full opacity-20"
            style={{ left: pos.left, top: pos.top }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 4) * 0.5
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0.2)",
                "0 0 30px rgba(139, 69, 19, 0.2)",
                "0 0 20px rgba(59, 130, 246, 0.2)",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Building Services in <span className="text-extendia-accent relative">South West London</span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-extendia-accent/20 to-extendia-primary/20 blur-lg -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            House Extensions, Loft Conversions, Kitchen & Bathroom Renovations, and more. Serving Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon.
          </p>
        </motion.div>
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:gap-6 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"
          role="list"
          aria-label="Building services offered in South West London"
        >
  {services.map((service) => (
            <motion.article
              key={service.title}
        variants={itemVariants}
        className="relative overflow-hidden bg-extendia-primary/80 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 xl:p-5 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:shadow-2xl hover:border-white/20"
              role="listitem"
              // Add a shine effect on hover
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              <h3 className="text-xl xl:text-lg font-bold text-white mb-6 flex-grow [text-shadow:0_1px_3px_rgba(0,0,0,0.2)]">{service.title}</h3>
              <Link 
                href={service.slug ? `/services/${service.slug}` : "/services"}
                className="mt-auto inline-block bg-extendia-accent text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-extendia-accent/90 focus-visible:ring-2 focus-visible:ring-extendia-accent focus-visible:ring-offset-2 transition-all duration-300 group-hover:scale-105"
                aria-label={`Learn more about ${service.title} services in South West London`}
              >
                Learn More
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
