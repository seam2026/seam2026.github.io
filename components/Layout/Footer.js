import React from 'react';
import Link from 'next/link';
import HomeIcon from '../../public/assets/icons/home.svg';
import CalenderIcon from '../../public/assets/icons/calender.svg';
import ChatIcon from '../../public/assets/icons/chat.svg';
import QuestionIcon from '../../public/assets/icons/question.svg';

const Footer = () => {
  return (
    <div className="fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="bg-dark-500 w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className="flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">
          <Link href="/">
            <li className="flex items-center font-medium flex-col px-2 py-1 cursor-pointer">
              <HomeIcon className="h-6 w-6 mb-1" />
              <p>Home</p>
            </li>
          </Link>
          <Link href="/schedule">
            <li className="flex items-center flex-col px-2 py-1 cursor-pointer">
              <CalenderIcon className="h-6 w-6 mb-1" />
              <p>Schedule</p>
            </li>
          </Link>
          <Link href="/notifications">
            <li className="flex items-center flex-col px-2 py-1 cursor-pointer">
              <ChatIcon className="h-6 w-6 mb-1" />
              <p>Updates</p>
            </li>
          </Link>
          <Link href="/faq">
            <li className="flex items-center flex-col px-2 py-1 cursor-pointer">
              <QuestionIcon className="h-6 w-6 mb-1" />
              <p>FAQ</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
