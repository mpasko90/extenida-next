"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <>
      <div className="w-full h-2 bg-gradient-to-r from-extendia-primary/0 via-extendia-accent/60 to-extendia-primary/0 blur-[2px] opacity-80 mb-0" aria-hidden="true"></div>
      <footer className="bg-gradient-to-t from-gray-900/95 via-extendia-primary/80 to-extendia-accent/10 text-white pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-extendia-accent">Extendia</h3>
              <p className="text-white/80 mb-4 text-sm">
                Award-winning building company in South West London. Specialising in house extensions, loft conversions, renovations, and more. Serving Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon. Fully insured, Checkatrade verified, 10 year guarantee.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className="bg-white/20 text-white text-xs font-semibold shadow">Checkatrade Verified</Badge>
                <Badge className="bg-white/20 text-white text-xs font-semibold shadow">10 Year Guarantee</Badge>
                <Badge className="bg-white/20 text-white text-xs font-semibold shadow">Free Quotes</Badge>
              </div>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-white/90">
                <li><Link href="/services/house-extensions" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="House Extensions in South West London">House Extensions</Link></li>
                <li><Link href="/services/loft-conversions" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="Loft Conversions in South West London">Loft Conversions</Link></li>
                <li><Link href="/services/kitchen-renovations" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="Kitchen Renovations in South West London">Kitchen Renovations</Link></li>
                <li><Link href="/services/bathroom-renovations" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="Bathroom Renovations in South West London">Bathroom Renovations</Link></li>
                <li><Link href="/services/driveways" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="Driveways & Patios in South West London">Driveways & Patios</Link></li>
              </ul>
            </div>
            {/* Areas */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Areas Served</h4>
              <ul className="space-y-2 text-white/90">
                <li><Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow">Kingston</Badge></li>
                <li><Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow">Putney</Badge></li>
                <li><Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow">Richmond</Badge></li>
                <li><Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow">Surbiton</Badge></li>
                <li><Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow">Twickenham</Badge></li>
                <li><Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow">Wimbledon</Badge></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-white/90">
                <li><a href="tel:+442012345678" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="Call Extendia">020 1234 5678</a></li>
                <li><a href="mailto:info@extendia.co.uk" className="hover:text-extendia-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent transition-colors" aria-label="Email Extendia">info@extendia.co.uk</a></li>
                <li><span className="text-white/70 text-xs">Mon-Fri: 8:00-18:00</span></li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://www.checkatrade.com/trades/extendia" target="_blank" rel="noopener" aria-label="Checkatrade profile" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent"><img src="/checkatrade.svg" alt="Checkatrade" className="h-8" /></a>
                <a href="https://www.facebook.com/extendia" target="_blank" rel="noopener" aria-label="Facebook" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent"><img src="/facebook.svg" alt="Facebook" className="h-8" /></a>
                <a href="https://www.instagram.com/extendia" target="_blank" rel="noopener" aria-label="Instagram" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent"><img src="/instagram.svg" alt="Instagram" className="h-8" /></a>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-xs">
            <div>
              &copy; {new Date().getFullYear()} Extendia. All rights reserved. | Website by Extendia Team
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Schema.org Organization markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Extendia",
            "description": "Professional building services in South West London",
            "url": "https://extendia.com",
            "telephone": "+44-20-XXXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressRegion": "London",
              "addressCountry": "GB"
            },
            "sameAs": [
              "https://www.facebook.com/extendia",
              "https://www.instagram.com/extendia"
            ]
          })}
        </script>
      </footer>
    </>
  );
};

export default Footer;
