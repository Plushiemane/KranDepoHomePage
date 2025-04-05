import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import MenuProvider from './context/MenuContext';

// Import Bootstrap CSS and JS
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/js/bootstrap.min.js'
// Custom CSS imports
import './assets/css/Black-Navbar.css';
import './assets/css/Carousel_Image_Slider.css';
import './assets/css/Footer-Dark-icons.css';
import './assets/css/iframe.css';
import './assets/css/loader/styles.css';
import './assets/css/SBE-Hamburger-Animated.compiled.css';
import './assets/css/animate.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <App />
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// Initialize animations on page load
window.addEventListener('load', () => {
  // Hide loader when page is loaded
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('loader--hidden');
  }
  
  // Initialize AOS animations if available
  if ((window as any).AOS) {
    (window as any).AOS.init();
  }
});
