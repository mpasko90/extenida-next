import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const services = [
    { 
      name: "Home Extensions", 
      href: "/services/HomeExtensions",
      locations: [
        { name: "Kingston", href: "/services/house-extensions/Kingston" },
        { name: "Putney", href: "/services/house-extensions/Putney" },
        { name: "Richmond", href: "/services/house-extensions/Richmond" },
        { name: "Surbiton", href: "/services/house-extensions/Surbiton" },
        { name: "Twickenham", href: "/services/house-extensions/Twickenham" },
        { name: "Wimbledon", href: "/services/house-extensions/Wimbledon" },
      ]
    },
    { 
      name: "Loft Conversions", 
      href: "/services/LoftConversions",
      locations: [
        { name: "Kingston", href: "/services/loft-conversions/Kingston" },
        { name: "Putney", href: "/services/loft-conversions/Putney" },
        { name: "Richmond", href: "/services/loft-conversions/Richmond" },
        { name: "Surbiton", href: "/services/loft-conversions/Surbiton" },
        { name: "Twickenham", href: "/services/loft-conversions/Twickenham" },
        { name: "Wimbledon", href: "/services/loft-conversions/Wimbledon" },
      ]
    },
    { name: "Kitchen Renovations", href: "/services/KitchenRenovations" },
    { name: "Bathroom Renovations", href: "/services/BathroomRenovations" },
    { name: "Bathrooms", href: "/services/Bathrooms" },
    { name: "Patios & Driveways", href: "/services/PatiosDriveways" },
  ];

  const areas = [
    { name: "Kingston Upon Thames", href: "/areas/KingstonUponThames" },
    { name: "Putney", href: "/areas/Putney" },
    { name: "Richmond", href: "/areas/Richmond" },
    { name: "Surbiton", href: "/areas/Surbiton" },
    { name: "Twickenham", href: "/areas/Twickenham" },
    { name: "Wimbledon", href: "/areas/Wimbledon" },
  ];

  const resources = [
    { name: "Cost Calculator", href: "/resources/CostCalculator" },
    { name: "Extension Ideas", href: "/resources/ExtensionIdeas" },
  ];

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-2xl shadow-xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary/5 to-extendia-accent/5"></div>
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-extendia-accent/20 to-transparent rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          <div className="px-6 py-8 space-y-6 relative z-10">
            <div className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    href={item.href} 
                    className="block px-4 py-3 text-gray-700 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/10 hover:to-extendia-accent/10 rounded-xl transition-all duration-300 font-semibold relative group overflow-hidden"
                    onClick={onClose}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-extendia-primary/20 to-extendia-accent/20"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              custom={4}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              className="border-t border-gradient-to-r from-gray-200/50 to-transparent pt-6"
            >
              <div className="px-4 py-2 font-semibold text-gray-900 mb-3">Services</div>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      className="flex items-center px-4 py-2 text-gray-600 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/10 hover:to-extendia-accent/10 rounded-lg transition-all duration-300 relative group overflow-hidden"
                      onClick={onClose}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-gradient-to-r from-extendia-primary to-extendia-accent rounded-full mr-3"
                        whileHover={{ scale: 1.5, rotate: 180 }}
                      />
                      <span className="relative z-10">{service.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              custom={5}
              variants={menuItemVariants}
              className="border-t border-gray-200/50 pt-4"
            >
              <h3 className="px-4 text-sm font-semibold text-gray-500 mb-2">Services</h3>
              <div className="space-y-1">
                {services.map((service) => (
                  <div key={service.href}>
                    <Link
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300"
                      onClick={onClose}
                    >
                      {service.name}
                    </Link>
                    {service.locations && (
                      <div className="pl-8 space-y-1 mt-1">
                        {service.locations.map((location) => (
                          <Link
                            key={location.href}
                            href={location.href}
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-extendia-primary transition-colors duration-300"
                            onClick={onClose}
                          >
                            {location.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Areas Section */}
            <motion.div
              custom={6}
              variants={menuItemVariants}
              className="border-t border-gray-200/50 pt-4"
            >
              <h3 className="px-4 text-sm font-semibold text-gray-500 mb-2">Areas Served</h3>
              <div className="space-y-1">
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="block px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300"
                    onClick={onClose}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Resources Section */}
            <motion.div
              custom={7}
              variants={menuItemVariants}
              className="border-t border-gray-200/50 pt-4"
            >
              <h3 className="px-4 text-sm font-semibold text-gray-500 mb-2">Resources</h3>
              <div className="space-y-1">
                {resources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300"
                    onClick={onClose}
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={5}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              className="border-t border-gradient-to-r from-gray-200/50 to-transparent pt-6 space-y-4"
            >
              <div className="flex flex-col space-y-3">
                <motion.a 
                  href="tel:+442012345678" 
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-extendia-primary transition-colors duration-300 relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>020 1234 5678</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
                <motion.a 
                  href="mailto:info@extendia.co.uk" 
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-extendia-primary transition-colors duration-300 relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>info@extendia.co.uk</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-extendia-accent to-extendia-accent/90 hover:from-extendia-accent/90 hover:to-extendia-accent text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <Link href="/contact" onClick={onClose}>
                    <span className="relative z-10">Get Free Quote</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
