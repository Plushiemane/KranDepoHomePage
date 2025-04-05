import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-[#222222] rounded-2xl py-2 mb-6 mt-6 z-50 overflow-hidden mx-auto max-w-[95%]">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center">
          <Link 
            to="/" 
            className="text-white font-bold text-base lg:text-xl w-1/3 text-center hover:text-gray-300 transition-colors py-2"
          >
            Strona Główna
          </Link>
          <Link 
            to="/menu" 
            className="text-white font-bold text-base lg:text-xl w-1/3 text-center mx-4 hover:text-gray-300 transition-colors py-2"
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className="text-white font-bold text-base lg:text-xl w-1/3 text-center hover:text-gray-300 transition-colors py-2"
          >
            O nas
          </Link>
        </div>

        {/* Mobile Hamburger and Brand */}
        <div className="md:hidden flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">Kran Nadziei</Link>
          <button 
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon for close
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-gray-700">
            <Link 
              to="/" 
              className="block text-white text-lg font-medium py-2 hover:text-gray-300 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Strona Główna
            </Link>
            <Link 
              to="/menu" 
              className="block text-white text-lg font-medium py-2 hover:text-gray-300 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="block text-white text-lg font-medium py-2 hover:text-gray-300 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              O nas
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
