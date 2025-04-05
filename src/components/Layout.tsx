import React, { ReactNode } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden max-w-full">
      <div className="w-full max-w-full overflow-x-hidden">
        <Header title={title} />
        <Navbar />
        <main className="flex-grow overflow-x-hidden w-full px-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
