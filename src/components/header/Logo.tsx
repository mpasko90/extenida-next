import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-3"
      >
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-extendia-primary to-extendia-accent rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold text-gray-900">Extendia</h1>
          <p className="text-xs text-gray-600 font-medium">Building Excellence in London</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;
