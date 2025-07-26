'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Your Journey', href: '/journey' },
    {
      title: 'Services',
      href: '/services',
      submenu: [
        { title: 'House Extensions', href: '/services/house-extensions' },
        { title: 'Loft Conversions', href: '/services/loft-conversions' }
      ]
    },
    {
      title: 'Areas',
      href: '/areas-served',
      submenu: [
        { title: 'Wimbledon', href: '/areas-served/wimbledon' },
        { title: 'Kingston', href: '/areas-served/kingston' },
        { title: 'Richmond', href: '/areas-served/richmond' }
      ]
    },
    { title: 'Gallery', href: '/gallery' },
    { title: 'About Us', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className="font-medium px-3 py-2 rounded-lg transition-all duration-300 text-white hover:text-extendia-accent text-shadow-md hover:bg-white/10"
              aria-expanded={item.submenu ? "false" : undefined}
              aria-haspopup={item.submenu ? "true" : undefined}
            >
              {item.title}
            </Link>

            {item.submenu && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm rounded-md shadow-lg py-1 z-10 hidden group-hover:block border border-gray-700/50">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-100 hover:text-extendia-accent hover:bg-gray-700/50"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-extendia-accent focus:outline-none"
          aria-label="Toggle mobile menu"
          title="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-16 inset-x-0 z-50 bg-extendia-secondary shadow-lg border-t border-gray-200/10"
        >
          <nav aria-label="Mobile menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-extendia-accent hover:bg-white/10 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>

                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-extendia-accent hover:bg-white/10 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
