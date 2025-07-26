"use client";

import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Extendia</h3>
            <p className="text-gray-300 mb-4">
              Professional building services, renovations and extensions. Serving South West London.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/house-extensions" className="text-gray-300 hover:text-white">
                  House Extensions
                </Link>
              </li>
              <li>
                <Link href="/services/loft-conversions" className="text-gray-300 hover:text-white">
                  Loft Conversions
                </Link>
              </li>
              <li>
                <Link href="/services/party-wall-surveys" className="text-gray-300 hover:text-white">
                  Party Wall Surveys
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/areas-served/wimbledon" className="text-gray-300 hover:text-white">
                  Wimbledon
                </Link>
              </li>
              <li>
                <Link href="/areas-served/kingston" className="text-gray-300 hover:text-white">
                  Kingston
                </Link>
              </li>
              <li>
                <Link href="/areas-served/richmond" className="text-gray-300 hover:text-white">
                  Richmond
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: 020 3916 5670</li>
              <li>Email: office@extendia.co.uk</li>
              <li>Address: South West London</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© {currentYear} Extendia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-300 hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
