import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-screen  bg-[#222222] rounded-md py-2 mb-6 ml-0 mt-6 z-50 max-w-[100vw] overflow-x-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-full">
          <Link 
            to="/" 
            className="text-white font-bold text-xl w-1/3 text-center hover:text-gray-300 transition-colors"
          >
            Strona Główna
          </Link>
          <Link 
            to="/menu" 
            className="text-white font-bold text-xl w-1/3 text-center mx-4 hover:text-gray-300 transition-colors"
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className="text-white font-bold text-xl w-1/3 text-center hover:text-gray-300 transition-colors rounded-md"
          >
            O nas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
