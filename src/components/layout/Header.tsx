import Link from 'next/link';
import Navigation from './Navigation';

export const Header = () => {

  return (
    <header className="w-full bg-gray-800/95 backdrop-blur-sm shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              Extendia
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
