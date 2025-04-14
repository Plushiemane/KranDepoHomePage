import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white py-8 overflow-hidden shadow-lg border-t border-[#333]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start">
          <img 
            src="/assets/img/sigma.webp" 
            alt="Kran Nadziei Logo" 
            className="h-20 object-contain"
          />
          <div className="ml-4">
            <h3 className="text-xl font-['Alkatra'] font-bold">Kran Nadziei</h3>
            <p className="text-gray-300 text-sm">Restauracja & Bar</p>
          </div>
        </div>
        
        {/* Middle Section - Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2 font-['Alkatra']">Kontakt</h4>
          <p className="text-gray-300 mb-1">ul. Siedlecka 2b, 72-010 Police</p>
          <p className="text-gray-300 mb-1">Tel: +48 537 220 230</p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-2 font-['Alkatra']">Śledź nas</h4>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61566859973402" 
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="container mx-auto mt-6 pt-4 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kran Nadziei. Wszelkie prawa zastrzeżone.
          </p>
          <a 
            href="https://fexcode.pl/" 
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm italic mt-2 md:mt-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Fexcode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;