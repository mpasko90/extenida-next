"use client";

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
      href: "/services/home-extensions",
      locations: [
        { name: "Kingston", href: "/services/home-extensions/kingston" },
        { name: "Putney", href: "/services/home-extensions/putney" },
        { name: "Richmond", href: "/services/home-extensions/richmond" },
        { name: "Surbiton", href: "/services/home-extensions/surbiton" },
        { name: "Twickenham", href: "/services/home-extensions/twickenham" },
        { name: "Wimbledon", href: "/services/home-extensions/wimbledon" },
      ]
    },
    { 
      name: "Loft Conversions", 
      href: "/services/loft-conversions",
      locations: [
        { name: "Kingston", href: "/services/loft-conversions/Kingston" },
        { name: "Putney", href: "/services/loft-conversions/Putney" },
        { name: "Richmond", href: "/services/loft-conversions/Richmond" },
        { name: "Surbiton", href: "/services/loft-conversions/Surbiton" },
        { name: "Twickenham", href: "/services/loft-conversions/Twickenham" },
        { name: "Wimbledon", href: "/services/loft-conversions/Wimbledon" },
      ]
    },
    { 
      name: "House/Flat Renovations", 
      href: "/services/house-renovations",
      locations: [
        { name: "Kingston", href: "/services/house-renovations/kingston" },
        { name: "Richmond", href: "/services/house-renovations/richmond" },
        { name: "Wimbledon", href: "/services/house-renovations/wimbledon" },
      ]
    },
    { 
      name: "Kitchen Renovations", 
      href: "/services/kitchen-renovations",
      locations: [
        { name: "Kingston", href: "/services/kitchen-renovations/kingston" },
        { name: "Richmond", href: "/services/kitchen-renovations/richmond" },
        { name: "Wimbledon", href: "/services/kitchen-renovations/wimbledon" },
      ]
    },
    { 
      name: "Bathroom Renovations", 
      href: "/services/bathroom-renovations",
      locations: [
        { name: "Kingston", href: "/services/bathroom-renovations/kingston" },
        { name: "Richmond", href: "/services/bathroom-renovations/richmond" },
        { name: "Wimbledon", href: "/services/bathroom-renovations/wimbledon" },
      ]
    },
  ];

  const areas = [
    { name: "Kingston", href: "/london/kingston" },
    { name: "Putney", href: "/london/putney" },
    { name: "Richmond", href: "/london/richmond" },
    { name: "Surbiton", href: "/london/surbiton" },
    { name: "Twickenham", href: "/london/twickenham" },
    { name: "Wimbledon", href: "/london/wimbledon" },
    { name: "Wandsworth", href: "/london/wandsworth" },
    { name: "Fulham", href: "/london/fulham" },
    { name: "Hammersmith", href: "/london/hammersmith" },
    { name: "Surrey", href: "/london/surrey" },
  ];

  // Resources removed per current scope (no public resources section)

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
              className={`relative px-4 py-2 text-white hover:text-extendia-accent transition-colors duration-300 font-medium overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 drop-shadow-lg hover:drop-shadow-xl nav-text-shadow ${pathname === "/" ? "text-extendia-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-extendia-primary after:to-extendia-accent after:rounded-xl after:transition-all after:duration-300" : ""}`}
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
            <Link 
              href="/journey"
              aria-current={pathname === "/journey" ? "page" : undefined}
              aria-label="Your Journey page"
              className={`relative px-4 py-2 text-white hover:text-extendia-accent transition-colors duration-300 font-medium overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 drop-shadow-lg hover:drop-shadow-xl nav-text-shadow ${pathname === "/journey" ? "text-extendia-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-extendia-primary after:to-extendia-accent after:rounded-xl after:transition-all after:duration-300" : ""}`}
              role="menuitem"
            >
              <span className="relative z-10">Your Journey</span>
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
              className="relative px-4 py-2 text-white hover:text-extendia-accent transition-colors duration-300 font-medium overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 drop-shadow-lg hover:drop-shadow-xl nav-text-shadow bg-transparent hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 data-[state=open]:bg-gradient-to-r data-[state=open]:from-extendia-primary/5 data-[state=open]:to-extendia-accent/5"
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
                        className={`flex items-center px-4 py-3 text-white hover:text-extendia-accent hover:bg-gradient-to-r hover:from-extendia-primary/10 hover:to-extendia-accent/10 rounded-xl transition-all duration-300 relative overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 shadow-none hover:shadow-md nav-text-shadow-md ${pathname === service.href ? "text-extendia-accent bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
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
                              className={`text-sm px-3 py-1 text-white hover:text-extendia-accent hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 nav-text-shadow-sm ${pathname === location.href ? "text-extendia-accent bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
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
                    <h3 className="font-medium text-white mb-3 px-4 nav-text-shadow-md">Areas Served</h3>
                    <div className="grid grid-cols-2 gap-1">
                      {areas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          aria-current={pathname === area.href ? "page" : undefined}
                          className={`text-sm px-3 py-1 text-white hover:text-extendia-accent hover:bg-gradient-to-r hover:from-extendia-primary/5 hover:to-extendia-accent/5 rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 nav-text-shadow-sm ${pathname === area.href ? "text-extendia-accent bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10" : ""}`}
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Resources section intentionally removed */}
                </div>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {["Portfolio", "Contact"].map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <NavigationMenuItem key={item}>
                <Link 
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 text-white hover:text-extendia-accent transition-colors duration-300 font-medium overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent focus-visible:z-20 drop-shadow-lg hover:drop-shadow-xl nav-text-shadow ${isActive ? "text-extendia-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-extendia-primary after:to-extendia-accent after:rounded-xl after:transition-all after:duration-300" : ""}`}
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
