'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import HomeIcon from '../../public/assets/icons/home.svg';
import CalenderIcon from '../../public/assets/icons/calendar.svg';
import ChatIcon from '../../public/assets/icons/chat.svg';
import QuestionIcon from '../../public/assets/icons/question.svg';
import FoodIcon from '../../public/assets/icons/food.svg';
import { usePathname } from 'next/navigation'

const Footer = () => {
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path + ((path != '/') ? '/' : '');

  return (
    <div className="fixed lg:hidden bottom-0 mb-0 right-0 left-0 z-20">
      {/* Schedule Popup */}
      {/* {showSchedulePopup && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center z-30">
          <div className="bg-dark-500 border border-white border-opacity-20 rounded-xl shadow-2xl p-2 flex gap-4 animate-bounce-in">
            <Link href="/schedule?tab=menu">
              <a 
                className="flex flex-col items-center justify-center w-20 h-20 bg-dark-450 rounded-lg hover:bg-white hover:bg-opacity-10 transition cursor-pointer"
                onClick={() => setShowSchedulePopup(false)}
              >
                <FoodIcon className="h-8 w-8 text-yellow-accent mb-1" />
                <span className="text-xs text-white">Menu</span>
              </a>
            </Link>
            <Link href="/schedule?tab=events">
              <a 
                className="flex flex-col items-center justify-center w-20 h-20 bg-dark-450 rounded-lg hover:bg-white hover:bg-opacity-10 transition cursor-pointer"
                onClick={() => setShowSchedulePopup(false)}
              >
                <CalenderIcon className="h-8 w-8 text-blue-accent mb-1" />
                <span className="text-xs text-white">Events</span>
              </a>
            </Link>
          </div>
        </div>
      )} */}

      <div className="bg-light-surface dark:bg-dark-500 w-full px-6 rounded-full border border-gray-900/20 dark:border-white/20 z-30 relative shadow-lg dark:shadow-none transition-colors duration-300">
        <ul className="flex items-center justify-evenly text-gray-900 dark:text-white text-xs font-light py-2 md:py-3">
          <Link href="/">
            <li className={`flex items-center font-medium flex-col px-2 py-1 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors
              ${isActive('/') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}`} onClick={() => setShowSchedulePopup(false)}>
              <HomeIcon className="h-6 w-6 mb-1" />
              <p>Home</p>
            </li>
          </Link>
          
          {/* 
          <li 
            className="flex items-center flex-col px-2 py-1 cursor-pointer relative"
            onClick={() => setShowSchedulePopup(!showSchedulePopup)}
          >
            <CalenderIcon className={`h-6 w-6 mb-1 transition ${showSchedulePopup ? 'text-blue-accent' : ''}`} />
            <p>Schedule</p>
          </li>
          */}
          <Link href="/schedule">
            <li className={`flex items-center font-medium flex-col px-2 py-1 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors
              ${isActive('/schedule') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}`}>
              <CalenderIcon className="h-6 w-6 mb-1" />
              <p>Schedule</p>
            </li>
          </Link>

          <Link href="/information">
            <li className={`flex items-center font-medium flex-col px-2 py-1 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors
              ${isActive('/information') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}`} onClick={() => setShowSchedulePopup(false)}>
              <ChatIcon className="h-6 w-6 mb-1" />
              <p>Info</p>
            </li>
          </Link>
          <Link href="/faq">
            <li className={`flex items-center font-medium flex-col px-2 py-1 cursor-pointer hover:text-pink-accent dark:hover:text-gray-300 transition-colors
              ${isActive('/faq') ? 'text-pink-accent dark:text-gray-300' : 'dark:text-gray-400'}`} onClick={() => setShowSchedulePopup(false)}>
              <QuestionIcon className="h-6 w-6 mb-1" />
              <p>FAQ</p>
            </li>
          </Link>
        </ul>
      </div>
      
      {/* Click outside to close */}
      {/* {showSchedulePopup && (
        <div className="fixed inset-0 z-10" onClick={() => setShowSchedulePopup(false)}></div>
      )} */}
    </div>
  );
};

export default Footer;
