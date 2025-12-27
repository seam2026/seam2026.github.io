import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  return (
    <div className="hidden lg:block fixed top-0 right-0 left-0 bg-transparent px-8 z-20">
      <div className="w-full mx-auto flex justify-between items-center pt-4">
        {/* Logo - Top Left, links to Information */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <img
              src="/assets/icons/final_logo_small.svg"
              alt="SEAM 2026 Logo"
              className="h-8 w-8"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex text-sm lg:text-base text-gray-900 dark:text-white bg-light-surface/90 dark:bg-dark-500 py-4 rounded-full px-8 shadow-lg backdrop-blur-sm transition-colors duration-300">
            <li className="mx-3 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-3 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors">
              <Link href="/schedule">Schedule</Link>
            </li>
            <li className="mx-3 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors">
              <Link href="/information">Information</Link>
            </li>
            <li className="mx-3 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors">
              <Link href="/faq">FAQs & Contact</Link>
            </li>
          </ul>
          
          <div className="bg-light-surface/90 dark:bg-dark-500 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform scale-75 hover:scale-100 origin-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
