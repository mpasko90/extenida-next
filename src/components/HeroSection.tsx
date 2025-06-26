import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/placeholder.svg"
        aria-label="Extendia building projects in South West London"
      />
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary/80 via-extendia-secondary/60 to-extendia-primary/80 z-10" />

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

      {/* Gradient Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-extendia-primary/40 blur-md opacity-80 pointer-events-none" aria-hidden="true" />

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
                  className="bg-white/30 text-extendia-accent border-white/40 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative z-10">Award-Winning Builders in South West London</span>
                </Badge>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                House Extensions, Loft Conversions & Renovations in <span className="text-extendia-accent">South West London</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl drop-shadow-md">
                Extendia is your local, fully insured building company serving Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon. From house extensions to loft conversions, we deliver projects on time and on budget. Free quotes, 10 year guarantee, and 150+ 5-star reviews on Checkatrade.
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
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="relative bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-extendia-accent focus:ring-offset-2 overflow-hidden group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    aria-label="Get Free Quote for your building project in South West London"
                  >
                    <span className="relative z-10">Get Free Quote</span>
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
            <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group flex flex-col justify-center">
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
              <div className="absolute inset-0 pointer-events-none">
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
              {/* SEO Content Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 z-10 pointer-events-auto">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg text-center">Our Services in South West London</h2>
                <ul className="flex flex-wrap justify-center gap-4 mb-4">
                  <li className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 text-white text-sm font-medium shadow-sm"><span aria-hidden="true">🏠</span> House Extensions</li>
                  <li className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 text-white text-sm font-medium shadow-sm"><span aria-hidden="true">🏢</span> Loft Conversions</li>
                  <li className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 text-white text-sm font-medium shadow-sm"><span aria-hidden="true">🔨</span> Renovations</li>
                  <li className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1 text-white text-sm font-medium shadow-sm"><span aria-hidden="true">🚿</span> Kitchen & Bathroom Refurbishments</li>
                </ul>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="bg-extendia-accent/80 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Kingston</span>
                  <span className="bg-extendia-accent/80 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Putney</span>
                  <span className="bg-extendia-accent/80 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Richmond</span>
                  <span className="bg-extendia-accent/80 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Surbiton</span>
                  <span className="bg-extendia-accent/80 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Twickenham</span>
                  <span className="bg-extendia-accent/80 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Wimbledon</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1 bg-white/30 text-extendia-accent rounded-lg px-3 py-1 text-xs font-semibold shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent" aria-label="Checkatrade Verified"><svg width="16" height="16" fill="currentColor" className="inline-block"><circle cx="8" cy="8" r="8" fill="#00AEEF"/><text x="8" y="12" textAnchor="middle" fontSize="10" fill="#fff">C</text></svg>Checkatrade Verified</span>
                  <span className="inline-flex items-center gap-1 bg-white/30 text-extendia-accent rounded-lg px-3 py-1 text-xs font-semibold shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent" aria-label="10 Year Guarantee">🔒 10 Year Guarantee</span>
                  <span className="inline-flex items-center gap-1 bg-white/30 text-extendia-accent rounded-lg px-3 py-1 text-xs font-semibold shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent" aria-label="Free Quotes">💬 Free Quotes</span>
                </div>
              </div>
              {/* Testimonial Card - always at the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 m-4 z-20 group"
              >
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
                    <p className="text-sm text-gray-100">
                      "Extendia delivered our house extension in Kingston on time and on budget. Highly recommend for any project in South West London!"
                    </p>
                    <p className="text-xs text-gray-200 mt-1">- Sarah M., Kingston</p>
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
