import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-extendia-accent group"
              tabIndex={0}
              aria-label={`${service.title} in South West London`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 text-3xl bg-gradient-to-br ${service.color} shadow-lg`} aria-hidden="true">
                {service.emoji}
              </div>
              <h3 className="text-2xl font-bold text-extendia-accent mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-extendia-accent to-extendia-primary rounded-full mr-3"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link href="/services" className="mt-auto inline-block bg-extendia-accent text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-extendia-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-all duration-300" aria-label={`See all ${service.title} services in South West London`}>
                See All Services
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
