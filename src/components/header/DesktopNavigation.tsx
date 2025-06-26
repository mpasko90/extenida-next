import { motion } from "framer-motion";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNavigation = () => {
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

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              href="/" 
              className="relative px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300 font-medium group overflow-hidden"
            >
              <span className="relative z-10">Home</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-extendia-primary to-extendia-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300 font-medium bg-transparent hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 data-[state=open]:bg-gradient-to-r data-[state=open]:from-extendia-primary/5 data-[state=open]:to-extendia-accent/5 rounded-lg">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-[600px] p-6 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-2xl relative overflow-hidden grid grid-cols-2 gap-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary/5 to-extendia-accent/5"></div>
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-extendia-accent/20 to-transparent rounded-full blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="space-y-3 relative z-10">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={service.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/10 hover:to-extendia-accent/10 rounded-xl transition-all duration-300 group relative overflow-hidden"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-extendia-primary to-extendia-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"
                          whileHover={{ rotate: 180 }}
                        />
                        {service.name}
                      </Link>
                      {service.locations && (
                        <div className="ml-6 mt-1 grid grid-cols-2 gap-1">
                          {service.locations.map((location) => (
                            <Link
                              key={location.href}
                              href={location.href}
                              className="text-sm px-3 py-1 text-gray-600 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300"
                            >
                              {location.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3 px-4">Areas Served</h3>
                    <div className="grid grid-cols-2 gap-1">
                      {areas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          className="text-sm px-3 py-1 text-gray-600 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-3 px-4">Resources</h3>
                    <div className="space-y-1">
                      {resources.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="block text-sm px-3 py-1 text-gray-600 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300"
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {["Portfolio", "Blog", "Contact"].map((item) => (
            <NavigationMenuItem key={item}>
              <Link 
                href={`/${item.toLowerCase()}`}
                className="relative px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300 font-medium group overflow-hidden"
              >
                <span className="relative z-10">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-extendia-primary to-extendia-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
