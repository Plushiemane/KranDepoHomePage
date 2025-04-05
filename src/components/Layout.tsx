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
      <Header title={title} />
      <Navbar />
      <main className="flex-grow overflow-x-hidden w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
