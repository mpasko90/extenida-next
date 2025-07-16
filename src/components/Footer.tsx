"use client";


import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-extendia-secondary text-extendia-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Extendia</h3>
            <p className="text-extendia-text-secondary mb-4 max-w-md">
              Professional building services in South West London. Specializing in home extensions, 
              loft conversions, and complete renovations with over 15 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348c0-1.297 1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348C10.797 15.937 9.746 16.988 8.449 16.988z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/extensions" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Home Extensions</Link></li>
              <li><Link href="/services/loft-conversions" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Loft Conversions</Link></li>
              <li><Link href="/services/kitchen-renovations" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Kitchen Renovations</Link></li>
              <li><Link href="/services/bathroom-renovations" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Bathroom Renovations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-extendia-text-secondary hover:text-extendia-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-extendia-text-secondary mb-4">
              Get building tips and project updates delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-extendia-text-secondary"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-extendia-accent hover:bg-extendia-accent/90 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-extendia-text-secondary text-sm">
              © 2024 Extendia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-extendia-text-secondary hover:text-extendia-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-extendia-text-secondary hover:text-extendia-accent text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
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
  );
};

export default Footer;
