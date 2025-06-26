
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)`
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-extendia-primary to-extendia-accent rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
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
            Our <span className="text-extendia-accent relative">
              Premium Services
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
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional building services that transform your property 
            and enhance your lifestyle in South West London.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-extendia-primary via-extendia-accent to-extendia-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                  padding: '2px',
                  borderRadius: '1rem',
                }}
              >
                <div className="w-full h-full bg-white rounded-2xl" />
              </motion.div>

              {/* Service Card Content */}
              <div className="p-8 relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-extendia-accent/10 to-extendia-primary/10 rounded-full flex items-center justify-center text-3xl mr-4 relative overflow-hidden group"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Rotating background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-extendia-accent/20 to-extendia-primary/20 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">{service.emoji}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-extendia-primary transition-colors relative">
                    {service.title}
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-extendia-primary to-extendia-accent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-gray-700"
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

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="ghost" 
                    className="group/button text-extendia-primary hover:text-extendia-accent p-0 h-auto font-semibold relative overflow-hidden transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-extendia-primary/5 to-extendia-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(139, 69, 19, 0.05))",
                    "linear-gradient(135deg, rgba(139, 69, 19, 0.05), rgba(59, 130, 246, 0.05))",
                    "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(139, 69, 19, 0.05))",
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-extendia-accent to-extendia-primary rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your dream project?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-extendia-accent to-extendia-accent/90 hover:from-extendia-accent/90 hover:to-extendia-accent text-white px-8 py-3 overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">Get Your Free Consultation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              {/* Pulsing border effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(139, 69, 19, 0.4)",
                    "0 0 0 6px rgba(139, 69, 19, 0.1)",
                    "0 0 0 0 rgba(139, 69, 19, 0.4)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
