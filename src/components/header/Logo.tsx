
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex-shrink-0 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-extendia-primary to-extendia-accent rounded-full opacity-20 blur-sm animate-pulse"></div>
      <Link 
        to="/" 
        className="relative text-3xl font-bold bg-gradient-to-r from-extendia-primary to-extendia-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
      >
        Extendia
      </Link>
    </motion.div>
  );
};

export default Logo;
