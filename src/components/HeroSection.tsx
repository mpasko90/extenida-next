
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Users, Clock } from "lucide-react";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Star, label: "4.9/5 Rating", value: "150+ Reviews" },
    { icon: Shield, label: "Fully Insured", value: "£2M Coverage" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
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
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary via-extendia-secondary to-extendia-primary">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 69, 19, 0.3))",
              "linear-gradient(90deg, rgba(139, 69, 19, 0.3), rgba(59, 130, 246, 0.3))",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 69, 19, 0.3))",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-extendia-accent/30 to-extendia-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-extendia-card/20 to-extendia-accent/30 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Smaller floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-extendia-accent to-extendia-primary rounded-full opacity-40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative z-10">Premium Building Services in South West London</span>
                </Badge>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-extendia-text-primary leading-tight">
                Transform Your Home with 
                <motion.span 
                  className="text-extendia-accent relative inline-block"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 30px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                > Expert Craftsmanship</motion.span>
              </h1>
              
              <p className="text-xl text-extendia-text-secondary max-w-2xl">
                From concept to completion, we deliver exceptional building services that transform your property 
                and enhance your lifestyle in South West London. Quality guaranteed, dreams delivered.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="relative bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-extendia-accent focus:ring-offset-2 overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,255,255,0.4)",
                        "0 0 0 4px rgba(255,255,255,0.1)",
                        "0 0 0 0 rgba(255,255,255,0.4)",
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
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="relative border-2 border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white px-8 py-3 text-lg transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-extendia-primary backdrop-blur-sm overflow-hidden group"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
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
                      className="text-2xl font-bold text-extendia-text-primary group-hover:text-extendia-accent transition-colors duration-300"
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
                    <div className="text-sm text-extendia-text-secondary">
                      {indicator.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-extendia-card/30 to-extendia-accent/20"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(139,69,19,0.2))",
                    "linear-gradient(225deg, rgba(139,69,19,0.2), rgba(255,255,255,0.3))",
                    "linear-gradient(315deg, rgba(255,255,255,0.3), rgba(139,69,19,0.2))",
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating geometric shapes */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 border-2 border-white/30 rounded-lg"
                    style={{
                      left: `${20 + (i % 3) * 30}%`,
                      top: `${20 + (i % 4) * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
              
              {/* Main content */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center text-extendia-text-primary/80 relative z-10"
                >
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🏗️
                  </motion.div>
                  <p className="text-lg backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                    Professional Building Services
                  </p>
                </motion.div>
              </div>
              
              {/* Floating testimonial card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 relative overflow-hidden group"
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-extendia-primary/20 via-extendia-accent/20 to-extendia-primary/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="flex items-center space-x-3 relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-extendia-card to-extendia-accent/20 rounded-full flex items-center justify-center text-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">👤</span>
                  </motion.div>
                  <div>
                    <div className="flex text-extendia-accent text-sm mb-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      "Exceptional work on our loft conversion. Professional, reliable, and the results exceeded our expectations!"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">- Sarah M., Wimbledon</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
