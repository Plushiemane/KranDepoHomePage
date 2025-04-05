import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Kran Nadziei" }) => {
  useEffect(() => {
    // Refresh AOS animations when component mounts
    if ((window as any).AOS) {
      setTimeout(() => {
        (window as any).AOS.refresh();
      }, 150);
    }
    
    document.title = `${title} - Restauracja w Policach`;
    
    return () => {
      // Cleanup (if needed)
    };
  }, [title]);

  return (
    <>
      <Header title={title} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
