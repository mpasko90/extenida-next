"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { companyInfo } from "../lib/companyInfo";

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Your Journey", href: "/journey" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
  { name: "Home Extensions", href: "/services/home-extensions" },
    { name: "Loft Conversions", href: "/services/loft-conversions" },
    { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
    { name: "Bathroom Renovations", href: "/services/bathroom-renovations" },
  ],
  areas: [
  { name: "Kingston", href: "/london/kingston" },
    { name: "Richmond", href: "/london/richmond" },
    { name: "Putney", href: "/london/putney" },
    { name: "Wimbledon", href: "/london/wimbledon" },
    { name: "Surbiton", href: "/london/surbiton" },
    { name: "Twickenham", href: "/london/twickenham" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/wp-content/uploads/2021/05/Extendia_logo_white.png"
              alt="Extendia Logo"
              width={150}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6">
              Expert house extensions and home improvement services in South West London. Quality craftsmanship and professional project management.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-extendia-accent flex-shrink-0 mt-1" />
                <address
                  className="ml-3 not-italic text-gray-300"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                  aria-label={`Registered office address: ${companyInfo.registeredOfficeFormatted}`}
                >
                  <span itemProp="streetAddress">
                    {companyInfo.registeredOffice.line1}, {companyInfo.registeredOffice.line2}
                  </span>
                  <br />
                  <span>
                    <span itemProp="addressLocality">{companyInfo.registeredOffice.city}</span>,{" "}
                    <span itemProp="addressCountry">{companyInfo.registeredOffice.country}</span>{" "}
                    <span itemProp="postalCode">{companyInfo.registeredOffice.postcode}</span>
                  </span>
                  <br />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.registeredOfficeFormatted)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-extendia-accent hover:underline text-sm"
                  >
                    View on Maps
                  </a>
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-extendia-accent flex-shrink-0" />
                <a href={companyInfo.phone.href} className="ml-3 text-gray-300 hover:text-white">
                  {companyInfo.phone.display}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-extendia-accent flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="ml-3 text-gray-300 hover:text-white">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas</h3>
            <ul className="space-y-3">
              {navigation.areas.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {companyInfo.name}. Company No. {companyInfo.companyNumber}. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Website crafted by{' '}
                <a
                  href="https://paskomichal.pl"
                  target="_blank"
                  rel="noopener noreferrer author"
                  className="text-extendia-primary hover:text-extendia-secondary transition-colors duration-200 underline underline-offset-4"
                  aria-label="Visit Michał Paśko's website"
                >
                  Michał Paśko
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-extendia-accent"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
