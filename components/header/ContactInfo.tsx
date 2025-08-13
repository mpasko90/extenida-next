"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { companyInfo } from '@/lib/companyInfo';

const ContactInfo = () => {
  return (
    <div className="flex items-center space-x-4 text-sm text-white">
      <motion.a
        href={companyInfo.phone.href}
        className="flex items-center space-x-2 hover:text-extendia-accent transition-colors duration-300 relative group"
        whileHover={{ scale: 1.05 }}
      >
        <Phone className="w-4 h-4" />
        <span>{companyInfo.phone.display}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg -z-10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.a>
      
      <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      
      <motion.a
        href={`mailto:${companyInfo.email}`}
        className="flex items-center space-x-2 hover:text-extendia-accent transition-colors duration-300 relative group"
        whileHover={{ scale: 1.05 }}
      >
        <Mail className="w-4 h-4" />
        <span>{companyInfo.email}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg -z-10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.a>
    </div>
  );
};

export default ContactInfo;
