"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { companyInfo } from '@/lib/companyInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">Extendia</h3>
            <p className="text-gray-300/90 mb-4 leading-relaxed">
              Professional building services, renovations and extensions. Serving South West London.
            </p>
            <div className="mt-4">
              <Image
                src="/images/awards/updated/Aug25050_BUILDCLOCK-LIMITED_Logo.png"
                alt="BuildClock Limited logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain opacity-80"
                priority={false}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/home-extensions" className="text-gray-300 hover:text-white">Home Extensions</Link>
              </li>
              <li>
                <Link href="/services/loft-conversions" className="text-gray-300 hover:text-white">Loft Conversions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/areas/wimbledon" className="text-gray-300 hover:text-white">Wimbledon</Link>
              </li>
              <li>
                <Link href="/areas/kingston" className="text-gray-300 hover:text-white">Kingston</Link>
              </li>
              <li>
                <Link href="/areas/richmond" className="text-gray-300 hover:text-white">Richmond</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href={companyInfo.phone.href} className="hover:text-white">
                  Phone: {companyInfo.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white">
                  Email: {companyInfo.email}
                </a>
              </li>
              <li>
                <div className="leading-snug">
                  <span className="block">Address:</span>
                  <address
                    className="not-italic"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    aria-label={`Registered office address: ${companyInfo.registeredOfficeFormatted}`}
                  >
                    <span itemProp="streetAddress">
                      {companyInfo.registeredOffice.line1}, {companyInfo.registeredOffice.line2}
                    </span>
                    <br />
                    <span>
                      <span itemProp="addressLocality">{companyInfo.registeredOffice.city}</span>,{' '}
                      <span itemProp="addressCountry">{companyInfo.registeredOffice.country}</span>{' '}
                      <span itemProp="postalCode">{companyInfo.registeredOffice.postcode}</span>
                    </span>
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.registeredOfficeFormatted)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-extendia-accent hover:underline text-sm mt-1 inline-block"
                  >
                    View on Maps
                  </a>
                </div>
              </li>
            </ul>
            {/* Social links moved under Contact */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow us</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.houzz.co.uk/pro/webuser-473195861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-extendia-accent transition"
                  aria-label="Visit our Houzz profile"
                  title="Houzz"
                >
                  <Image
                    src="https://st.hzcdn.com/static_en-GB/badge96_96@2x.png"
                    alt="Houzz"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </a>
                <a
                  href="https://www.instagram.com/extendiaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-extendia-accent transition"
                  aria-label="Visit our Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/extendiaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-extendia-accent transition"
                  aria-label="Visit our Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© {currentYear} Extendia. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
            <Link href="/warranty" className="text-gray-300 hover:text-white">Warranty</Link>
            <Link href="/sitemap.xml" className="text-gray-300 hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
