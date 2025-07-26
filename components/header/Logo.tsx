"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const logoSrc = "/logo-gray.png";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-10"
    >
      <Link 
        href="/" 
        className="flex flex-col items-center space-y-1 group relative overflow-hidden rounded-xl p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent"
        aria-label="Extendia Home"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        
        <motion.div
          className="relative"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={logoSrc}
            alt="Extendia"
            width={120}
            height={40}
            className="h-10 w-auto object-contain relative z-10"
            priority
          />
        </motion.div>
        
        <motion.div
          className="hidden sm:block relative z-10"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          <h1 className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
            Extendia
          </h1>
        </motion.div>
        
        <motion.div 
          className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-extendia-accent/20 to-transparent rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </Link>
    </motion.div>
  );
};

export default Logo;