"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ValuesSection = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  
  // Values data with descriptions
  const values = [
    {
      text: "We are transparent",
      description: "Clear and honest in all our communications",
      icon: "💎",
      bgColor: "from-extendia-primary to-extendia-secondary",
      longDescription: "We believe in complete transparency with our clients throughout every project. No hidden fees, clear timelines, and open communication."
    },
    {
      text: "We are open and real",
      description: "Authentic in all our interactions",
      icon: "🤝",
      bgColor: "from-blue-500 to-blue-600",
      longDescription: "We are authentic in our approach, valuing genuine connections and honest relationships with every client we work with."
    },
    {
      text: "We get results",
      description: "Focused on achieving objectives",
      icon: "📈",
      bgColor: "from-indigo-600 to-indigo-800",
      longDescription: "We focus on delivering measurable results that help your project succeed in meaningful ways."
    },
    {
      text: "We bring vision to life",
      description: "Turning dreams into reality",
      icon: "✨",
      bgColor: "from-violet-500 to-violet-800",
      longDescription: "Our creative approach transforms ideas into reality, combining innovation with practical solutions that exceed expectations."
    },
    {
      text: "We care",
      description: "About every project we undertake",
      icon: "❤️",
      bgColor: "from-amber-500 to-amber-700",
      longDescription: "We care deeply about your project as if it were our own, bringing passion and dedication to every detail."
    },
    {
      text: "We respect clients' needs",
      description: "Your priorities are our priorities",
      icon: "👑",
      bgColor: "from-emerald-500 to-emerald-700",
      longDescription: "Your needs always come first. We adapt our processes and solutions to fit your specific requirements and objectives."
    },
    {
      text: "We are passionate",
      description: "About what we do everyday",
      icon: "🔥",
      bgColor: "from-cyan-500 to-cyan-700",
      longDescription: "Our passion for excellence drives us to deliver exceptional quality in everything we do, from start to finish."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="our-values" className="py-24 overflow-hidden bg-slate-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-1 bg-extendia-accent/20 text-extendia-accent rounded-full text-sm font-semibold mb-4 inline-block">Our Core Principles</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
            Our <span className="text-extendia-accent">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Core principles that guide every project we undertake and every client relationship we build.
          </p>
        </motion.div>

        {/* Values grid with center focus */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Values layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* First column - 2 values */}
            <div className="flex flex-col gap-8 justify-center">
              {[values[5], values[6]].map((value, idx) => (
                <motion.div
                  key={`col1-${idx}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => setActiveValue(idx === 0 ? 5 : 6)}
                  className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 ${
                    activeValue === (idx === 0 ? 5 : 6) ? "border-extendia-accent" : "border-transparent"
                  } transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.bgColor} flex items-center justify-center text-white text-2xl mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{value.text}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Center column with main value */}
            <div className="flex items-center justify-center">
              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)"
                }}
                onClick={() => setActiveValue(0)}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  activeValue === 0 ? "border-extendia-accent" : "border-transparent"
                } flex flex-col items-center justify-center text-center max-w-xs md:max-w-md mx-auto cursor-pointer transition-all duration-300 z-20`}
              >
                {/* Decorative background glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-extendia-accent to-extendia-primary rounded-3xl opacity-20 blur-lg -z-10"></div>
                
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-extendia-primary to-extendia-secondary flex items-center justify-center text-white text-4xl mb-6">
                  {values[0].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{values[0].text}</h3>
                <div className="w-16 h-1 bg-extendia-accent/50 mx-auto mb-4"></div>
                <p className="text-gray-600">{values[0].description}</p>
              </motion.div>
            </div>

            {/* Third column - 2 values */}
            <div className="flex flex-col gap-8 justify-center">
              {[values[2], values[3]].map((value, idx) => (
                <motion.div
                  key={`col3-${idx}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => setActiveValue(idx === 0 ? 2 : 3)}
                  className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 ${
                    activeValue === (idx === 0 ? 2 : 3) ? "border-extendia-accent" : "border-transparent"
                  } transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.bgColor} flex items-center justify-center text-white text-2xl mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{value.text}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom row - 2 values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            {[values[1], values[4]].map((value, idx) => (
              <motion.div
                key={`bottom-${idx}`}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                onClick={() => setActiveValue(idx === 0 ? 1 : 4)}
                className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 ${
                  activeValue === (idx === 0 ? 1 : 4) ? "border-extendia-accent" : "border-transparent"
                } transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.bgColor} flex items-center justify-center text-white text-2xl mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{value.text}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile values list for small screens */}
        <div className="md:hidden mt-12">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">All Our Values</h3>
          <div className="space-y-4">
            {values.map((value, idx) => (
              <motion.div
                key={`mobile-value-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveValue(idx)}
                className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg border ${
                  activeValue === idx ? "border-extendia-accent" : "border-gray-100"
                } cursor-pointer transition-all duration-300`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3 bg-gradient-to-br from-extendia-accent to-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white">{value.icon}</span>
                  <h3 className="font-bold text-gray-800">{value.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Expanded value detail section - shows when a value is clicked */}
        {activeValue !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto mt-8 bg-white rounded-xl p-6 shadow-xl border border-extendia-accent/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{values[activeValue].icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{values[activeValue].text}</h3>
              </div>
              <button 
                onClick={() => setActiveValue(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-extendia-accent/30 to-transparent my-4"></div>
            <p className="text-gray-600 leading-relaxed">{values[activeValue].longDescription}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ValuesSection;
