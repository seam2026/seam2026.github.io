'use client'

import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path + ((path != '/') ? '/' : '');
  return (
    <div className="hidden lg:block fixed top-0 right-0 left-0 bg-transparent px-8 z-20">
      <div className="w-full mx-auto flex justify-between items-center pt-4">
        {/* Logo - Top Left, links to Information */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="cursor-pointer rounded-full shadow-lg hover:opacity-80 transition"
          >
            <img
              src="/assets/icons/final_logo_3.png"
              alt="SEAM 2026 Logo"
              className="h-24 w-24"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex text-sm lg:text-base text-gray-900 dark:text-white bg-light-surface/90 dark:bg-dark-500 py-4 rounded-full px-8 shadow-lg backdrop-blur-sm transition-colors duration-300">
            <li className={`
              mx-3 cursor-pointer transition-colors 
              hover:text-pink-accent dark:hover:text-gray-300
              ${isActive('/') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}
              `}>
              <Link href="/">Home</Link>
            </li>
            <li className={`
              mx-3 cursor-pointer transition-colors 
              hover:text-pink-accent dark:hover:text-gray-300
              ${isActive('/schedule') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}
              `}>
              <Link href="/schedule">Schedule</Link>
            </li>
            <li className={`
              mx-3 cursor-pointer transition-colors 
              hover:text-pink-accent dark:hover:text-gray-300
              ${isActive('/information') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}
              `}>
              <Link href="/information">Information</Link>
            </li>
            <li className={`
              mx-3 cursor-pointer transition-colors 
              hover:text-pink-accent dark:hover:text-gray-300
              ${isActive('/faq') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}
              `}>
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
