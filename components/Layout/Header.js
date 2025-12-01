import React from 'react';
import Link from 'next/link';
import Logo from '../../public/assets/icons/final_logo_small.svg';

const Header = () => {
  return (
    <div className="hidden lg:block fixed top-0 right-0 left-0 bg-transparent px-8 z-20">
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center pt-4">
        {/* Logo - Top Left, links to Notifications */}
        <Link href="/notifications">
          <a className="cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
             <Logo className="h-8 w-8 text-dark-500" />
          </a>
        </Link>

        <ul className="flex text-sm lg:text-base text-white bg-dark-500 py-4 rounded-full px-8 shadow-lg">
          <li className="mx-3 cursor-pointer hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-3 cursor-pointer hover:text-gray-300">
            <Link href="/schedule">Schedule</Link>
          </li>
          <li className="mx-3 cursor-pointer hover:text-gray-300">
            <Link href="/notifications">Notifications</Link>
          </li>
          <li className="mx-3 cursor-pointer hover:text-gray-300">
            <Link href="/faq">FAQs & Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
