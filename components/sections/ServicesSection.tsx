import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServicesSection = () => {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const services = [
    {
      title: "Home Extensions",
      description: "Create additional space with stunning single and double-storey extensions tailored to your lifestyle.",
      features: ["Single & Double Storey", "Kitchen Extensions", "Planning Permission Support"],
      color: "from-blue-500 to-blue-600",
      emoji: "🏠"
    },
    {
      title: "Loft Conversions",
      description: "Transform your unused loft space into a beautiful bedroom, office, or entertainment area.",
      features: ["Dormer Conversions", "Mansard Extensions", "Structural Calculations"],
      color: "from-green-500 to-green-600",
      emoji: "🏢"
    },
    {
      title: "Kitchen Renovations",
      description: "Design and build the kitchen of your dreams with premium materials and expert craftsmanship.",
      features: ["Custom Design", "Premium Appliances", "Project Management"],
      color: "from-orange-500 to-orange-600",
      emoji: "👨‍🍳"
    },
    {
      title: "Party Wall Surveys",
      description: "Professional party wall surveys and agreements to ensure your project complies with regulations.",
      features: ["Party Wall Awards", "Neighbour Liaison", "Legal Compliance"],
      color: "from-teal-500 to-teal-600",
      emoji: "📋"
    },
    {
      title: "Bathroom Renovations",
      description: "Create a luxurious spa-like retreat with our complete bathroom renovation services.",
      features: ["Luxury Finishes", "Wet Rooms", "Accessibility Options"],
      color: "from-purple-500 to-purple-600",
      emoji: "🛁"
    }
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

  // Zamiast Math.random, ustal deterministyczne pozycje dla 12 kropek
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
            House Extensions, Loft Conversions, Kitchen & Bathroom Renovations, and more. Serving Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon. Fully managed, free quotes, 10 year guarantee.
          </p>
        </motion.div>
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6"
          role="list"
          aria-label="Building services offered in South West London"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-6 xl:p-5 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-extendia-accent focus-within:ring-offset-2 group"
              role="listitem"
            >
              <div className={`w-12 h-12 xl:w-10 xl:h-10 flex items-center justify-center rounded-full mb-4 text-2xl xl:text-xl bg-gradient-to-br ${service.color} shadow-lg`} aria-hidden="true">
                {service.emoji}
              </div>
              <h3 className="text-xl xl:text-lg font-bold text-extendia-accent mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4 text-sm xl:text-xs leading-relaxed">{service.description}</p>
              <ul className="space-y-1 xl:space-y-0.5 mb-6 xl:mb-4" role="list" aria-label={`${service.title} features`}>
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-gray-800 text-sm xl:text-xs"
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={prefersReducedMotion ? {} : { delay: idx * 0.1 }}
                    role="listitem"
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 xl:w-1 xl:h-1 bg-gradient-to-r from-extendia-accent to-extendia-primary rounded-full mr-2 xl:mr-1.5 flex-shrink-0"
                      animate={prefersReducedMotion ? {} : {
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={prefersReducedMotion ? {} : {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3
                      }}
                      aria-hidden="true"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link 
                href="/services" 
                className="mt-auto inline-block bg-extendia-accent text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-extendia-accent/90 focus-visible:ring-2 focus-visible:ring-extendia-accent focus-visible:ring-offset-2 transition-all duration-300"
                aria-label={`Learn more about ${service.title} services in South West London`}
              >
                Learn More
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div className="w-full h-8 bg-gradient-to-b from-transparent to-extendia-accent/30 blur-md opacity-80 pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default ServicesSection;
