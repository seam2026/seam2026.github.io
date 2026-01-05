import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ThemeToggle from '../ThemeToggle';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* Mobile Logo - Fixed Top Left */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Link
          href="/"
          className="cursor-pointer rounded-full shadow-lg hover:opacity-80 transition"
        >
          <img
            src="/assets/icons/final_logo_3.png"
            alt="SEAM 2026 Logo"
            className="h-12 w-12"
          />
        </Link>
      </div>
      {/* Mobile Theme Toggle - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <div className="bg-light-surface/80 dark:bg-dark-500/80 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors duration-300">
          <ThemeToggle />
        </div>
      </div>
      
      <div className="w-full transition-colors duration-300">
        <div className="mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
