"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "navy" | "white";
}

const Logo = ({ variant = "white" }: LogoProps) => {
  const logoSrc = variant === "white"
    ? "/Extendia_logo_white.png"
    : "/Extendia_logo_navy.png";
  const alt = "Extendia logo";
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-3"
      >
        <Image
          src={logoSrc}
          alt={alt}
          width={48}
          height={48}
          className="w-12 h-12 object-contain drop-shadow-lg transition-all duration-300"
          priority
        />
        <div className="hidden sm:block">
          <h1 className={`text-2xl font-bold ${variant === "white" ? "text-white" : "text-gray-900"}`}>Extendia</h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;
