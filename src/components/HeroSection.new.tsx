import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Shield, Users, Clock } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Star, label: "4.9/5 Rating", value: "150+ Reviews" },
    { icon: Shield, label: "10 Year Guarantee", value: "Peace of Mind" },
    { icon: Users, label: "Checkatrade Verified", value: "100% Trust" },
    { icon: Clock, label: "Free Consultation", value: "Book Today" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(135deg, var(--extendia-primary) 0%, var(--extendia-secondary) 50%, var(--extendia-accent) 100%)",
            "linear-gradient(225deg, var(--extendia-accent) 0%, var(--extendia-secondary) 50%, var(--extendia-primary) 100%)",
            "linear-gradient(315deg, var(--extendia-primary) 0%, var(--extendia-accent) 50%, var(--extendia-secondary) 100%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border-2 border-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Smaller decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-8 h-8 bg-gradient-to-r from-extendia-accent to-extendia-primary rounded-lg opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 180],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary/40 via-transparent to-extendia-accent/40 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="flex justify-center">
          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center max-w-4xl"
          >
            <motion.div variants={itemVariants} className="space-y-4">              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                House Extensions, Loft Conversions & Renovations in <span className="text-extendia-accent">South West London</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Extendia is your local, fully insured building company serving Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon. From house extensions to loft conversions, we deliver projects on time and on budget. Free quotes, 10 year guarantee, and 150+ 5-star reviews on Checkatrade.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="relative bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-extendia-accent focus:ring-offset-2 overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    aria-label="Book a consultation for your building project in South West London"
                  >
                    <span className="relative z-10">Book a Consultation</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="relative border-2 border-white/70 text-white hover:bg-white/10 hover:text-white hover:border-white px-8 py-3 text-lg transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-extendia-primary backdrop-blur-sm overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    aria-label="View our building portfolio in South West London"
                  >
                    <span className="relative z-10">View Portfolio</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  variants={itemVariants}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center group cursor-pointer relative"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 p-4">
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-2 group-hover:bg-white/30 transition-colors duration-300 relative overflow-hidden"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <indicator.icon className="w-6 h-6 text-extendia-accent group-hover:scale-110 transition-transform duration-300" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-extendia-accent/20 to-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="text-2xl font-bold text-white group-hover:text-extendia-accent transition-colors duration-300"
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(255,255,255,0.3)",
                          "0 0 20px rgba(255,255,255,0.6)",
                          "0 0 10px rgba(255,255,255,0.3)",
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {indicator.value}
                    </motion.div>
                    <div className="text-sm text-white/70">
                      {indicator.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
