import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Extenida</h3>
            <p className="text-gray-300 mb-4">
              Profesjonalne usługi budowlane, remonty i przebudowy. Działamy na terenie południowego Londynu.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Usługi</h3>
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
                <Link href="/services/driveways" className="text-gray-300 hover:text-white">
                  Driveways & Patios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Obszary</h3>
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
            <h3 className="text-lg font-medium mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Telefon: +44 20 1234 5678</li>
              <li>Email: info@extenida.co.uk</li>
              <li>Adres: 123 Main St, London SW19</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© {currentYear} Extenida. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
              Polityka prywatności
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Warunki korzystania
            </Link>
            <Link href="/sitemap" className="text-gray-300 hover:text-white">
              Mapa strony
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
