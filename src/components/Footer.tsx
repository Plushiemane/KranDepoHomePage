import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#222222] text-white text-center py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <a href="https://www.facebook.com/profile.php?id=61566859973402" 
               className="text-white hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <a href="https://fexcode.pl/" className="text-white hover:text-gray-300 transition-colors italic">
        Powered by Fexcode - {new Date().getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;
