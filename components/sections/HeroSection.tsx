import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Shield, Users, Clock, Award } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
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

  const trustIndicators = [
    { icon: Star, value: "End to End Service", label: "From design to completion" },
    { icon: Shield, value: "Simple Process", label: "Streamlined & efficient" },
    { icon: Users, value: "Tailored to Your Needs", label: "Bespoke solutions" },
    { icon: Clock, label: "Up to 5 Years Warranty", value: "Insurance backed warranty" },
    { icon: Award, value: "30+ Years Experience", label: "Proven expertise" },
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
        className="absolute inset-0 z-0 bg-extendia-secondary"
        animate={prefersReducedMotion ? {} : {
          opacity: [0.9, 1, 0.9],
          scale: [1, 1.02, 1]
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Diagonal grid pattern - equal spacing and thin lines */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <pattern 
              id="diagonal-grid" 
              x="0" 
              y="0" 
              width="10" 
              height="10" 
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path 
                d="M0,5 L10,5" 
                stroke="rgba(255,255,255,0.15)" 
                strokeWidth="0.25"
              />
              <path 
                d="M5,0 L5,10" 
                stroke="rgba(255,255,255,0.15)" 
                strokeWidth="0.25"
              />
            </pattern>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#diagonal-grid)"
            animate={prefersReducedMotion ? { opacity: 0.3 } : {
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.01, 1],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-extendia-primary/40 to-extendia-secondary/60 z-10" />

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
              
              <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md mb-4">
                Building Excellence in <span className="text-extendia-accent font-semibold">Every Project</span>
              </p>
              
              <p className="text-lg text-white max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                Transform your home with our comprehensive construction services. From design to completion, 
                we deliver quality craftsmanship and attention to detail in every project.
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 pt-8"
              role="list"
              aria-label="Company credentials and certifications"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  variants={itemVariants}
                  transition={{ 
                    duration: prefersReducedMotion ? 0 : 0.5,
                    delay: prefersReducedMotion ? 0 : index * 0.1,
                  }}
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center group relative focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-extendia-primary rounded-2xl"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${indicator.label}: ${indicator.value}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Handle interaction if needed
                    }
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm"
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
                    whileHover={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0.1 : 0.3 }}
                  />
                  
                  <div className="relative z-10 p-3">
                    <motion.div 
                      className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mb-2 group-hover:bg-white/30 transition-colors duration-300 relative overflow-hidden"
                      whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                    >
                      <indicator.icon 
                        className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" 
                        aria-hidden="true"
                      />
                      {!prefersReducedMotion && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-extendia-accent/20 to-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </motion.div>
                    
                    <motion.div 
                      className="text-lg lg:text-xl font-bold text-white group-hover:text-extendia-accent transition-colors duration-300"
                      animate={prefersReducedMotion ? {} : {
                        textShadow: [
                          "0 0 10px rgba(255,255,255,0.3)",
                          "0 0 20px rgba(255,255,255,0.6)",
                          "0 0 10px rgba(255,255,255,0.3)",
                        ]
                      }}
                      transition={prefersReducedMotion ? {} : {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {indicator.value}
                    </motion.div>
                    <div className="text-xs lg:text-sm text-white/80 font-medium">
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
