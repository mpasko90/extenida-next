import { motion } from "framer-motion";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const DesktopNavigation = () => {
  const pathname = usePathname();

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
    <nav 
      className="hidden lg:flex items-center space-x-1"
      aria-label="Main navigation"
      role="navigation"
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link 
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              aria-label="Home page"
              className={`relative px-4 py-2 text-white hover:text-extendia-primary transition-colors duration-300 font-medium overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 text-shadow-md ${pathname === "/" ? "text-extendia-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-extendia-primary after:to-extendia-accent after:rounded-xl after:transition-all after:duration-300" : ""}`}
              role="menuitem"
            >
              <span className="relative z-10">Home</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-extendia-primary to-extendia-accent transition-all duration-300 hover:w-full rounded-xl"></span>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="px-4 py-2 text-white hover:text-extendia-primary transition-all duration-300 font-medium bg-transparent hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 data-[state=open]:bg-gradient-to-r data-[state=open]:from-extendia-primary/5 data-[state=open]:to-extendia-accent/5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 shadow-none hover:shadow-md text-shadow-md"
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls="services-menu"
            >
              Services
              <span className="sr-only">(Click to expand services menu)</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              id="services-menu"
              role="menu"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-[600px] p-6 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 shadow-xl rounded-2xl relative overflow-hidden grid grid-cols-2 gap-6"
                role="presentation"
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
                        aria-current={pathname === service.href ? "page" : undefined}
                        className={`flex items-center px-4 py-3 text-gray-100 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/10 hover:to-extendia-accent/10 rounded-xl transition-all duration-300 relative overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 shadow-none hover:shadow-md ${pathname === service.href ? "text-extendia-primary bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-extendia-primary to-extendia-accent rounded-full mr-3 hover:scale-125 transition-transform duration-300"
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
                              aria-current={pathname === location.href ? "page" : undefined}
                              className={`text-sm px-3 py-1 text-gray-100 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 ${pathname === location.href ? "text-extendia-primary bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
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
                          aria-current={pathname === area.href ? "page" : undefined}
                          className={`text-sm px-3 py-1 text-gray-800 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 ${pathname === area.href ? "text-extendia-primary bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
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
                          aria-current={pathname === resource.href ? "page" : undefined}
                          className={`block text-sm px-3 py-1 text-gray-800 hover:text-extendia-primary hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 ${pathname === resource.href ? "text-extendia-primary bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
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

          {["Portfolio", "Blog", "Contact"].map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <NavigationMenuItem key={item}>
                <Link 
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-gray-700 hover:text-extendia-primary transition-colors duration-300 font-medium overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 ${isActive ? "text-extendia-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-extendia-primary after:to-extendia-accent after:rounded-xl after:transition-all after:duration-300" : ""}`}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 rounded-lg pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-extendia-primary to-extendia-accent transition-all duration-300 hover:w-full rounded-xl"></span>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
