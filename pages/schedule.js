import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import CalenderIcon from '../public/assets/icons/calender.svg';
import FoodIcon from '../public/assets/icons/food.svg';

export default function Schedule() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('events');

  useEffect(() => {
    if (router.query.tab) {
      setActiveTab(router.query.tab);
    }
  }, [router.query.tab]);

  const schedule = [
    {
      day: "Day 1 (1st May 2026)",
      events: [
        { time: "10:00 AM", activity: "Arrival and Registration" },
        { time: "12:00 PM", activity: "Welcome Lunch" },
        { time: "2:00 PM", activity: "Opening Ceremony" },
        { time: "4:00 PM", activity: "Icebreaker Activities" },
        { time: "7:00 PM", activity: "Dinner and Cultural Program" }
      ]
    },
    {
      day: "Day 2 (2nd May 2026)",
      events: [
        { time: "8:00 AM", activity: "Breakfast" },
        { time: "9:00 AM", activity: "Spiritual Session" },
        { time: "11:00 AM", activity: "Group Discussions" },
        { time: "1:00 PM", activity: "Lunch" },
        { time: "3:00 PM", activity: "Outdoor Activities" },
        { time: "7:00 PM", activity: "Dinner and Talent Show" }
      ]
    },
    {
      day: "Day 3 (3rd May 2026)",
      events: [
        { time: "8:00 AM", activity: "Breakfast" },
        { time: "9:00 AM", activity: "Guest Speaker Session" },
        { time: "11:00 AM", activity: "Workshop Sessions" },
        { time: "1:00 PM", activity: "Lunch" },
        { time: "3:00 PM", activity: "Free Time / Networking" },
        { time: "7:00 PM", activity: "Gala Dinner and Awards" }
      ]
    },
    {
      day: "Day 4 (4th May 2026)",
      events: [
        { time: "8:00 AM", activity: "Breakfast" },
        { time: "9:00 AM", activity: "Closing Ceremony" },
        { time: "11:00 AM", activity: "Departure" }
      ]
    }
  ];

  const menu = [
    {
      day: "Day 1 (1st May 2026)",
      items: [
        { time: "12:00 PM - Lunch", description: "Paneer Butter Masala, Dal Tadka, Jeera Rice, Naan, Gulab Jamun" },
        { time: "7:00 PM - Dinner", description: "Vegetable Biryani, Raita, Mixed Veg Curry, Chapati, Kheer" }
      ]
    },
    {
      day: "Day 2 (2nd May 2026)",
      items: [
        { time: "8:00 AM - Breakfast", description: "Idli, Sambar, Coconut Chutney, Upma, Filter Coffee" },
        { time: "1:00 PM - Lunch", description: "Rajma Masala, Steamed Rice, Aloo Gobi, Salad, Papad" },
        { time: "7:00 PM - Dinner", description: "Malai Kofta, Roti, Pulao, Moong Dal Halwa" }
      ]
    },
    {
      day: "Day 3 (3rd May 2026)",
      items: [
        { time: "8:00 AM - Breakfast", description: "Poha, Jalebi, Masala Chai, Fresh Fruits" },
        { time: "1:00 PM - Lunch", description: "Chole Bhature, Pickles, Lassi, Green Salad" },
        { time: "7:00 PM - Dinner", description: "Palak Paneer, Missi Roti, Veg Pulao, Rasgulla" }
      ]
    },
    {
      day: "Day 4 (4th May 2026)",
      items: [
        { time: "8:00 AM - Breakfast", description: "Aloo Paratha, Curd, Pickle, Chai" }
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Schedule & Menu - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 pb-24 px-4 lg:px-8 text-white">
        <h1 className="text-4xl font-great-vibes text-center mb-8">Event Schedule & Menu</h1>
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 gap-4">
          <button 
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition border ${activeTab === 'events' ? 'bg-blue-accent text-dark-500 border-blue-accent font-bold' : 'bg-dark-450 text-white border-white border-opacity-20 hover:bg-white/10 cursor-pointer'}`}
          >
            <CalenderIcon className="w-5 h-5 stroke-current stroke-[0.5]" />
            Events
          </button>
          <button 
            onClick={() => setActiveTab('menu')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition border ${activeTab === 'menu' ? 'bg-yellow-accent text-dark-500 border-yellow-accent font-bold' : 'bg-dark-450 text-white border-white border-opacity-20 hover:bg-white/10 cursor-pointer'}`}
          >
            <FoodIcon className="w-5 h-5 stroke-current stroke-[0.5]" />
            Menu
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {activeTab === 'events' ? (
            schedule.map((day, idx) => (
              <div key={idx} className="bg-dark-450 p-6 rounded-xl border border-white border-opacity-20 shadow-lg">
                <h2 className="text-xl font-habibi text-blue-accent mb-4 border-b border-gray-600 pb-2">{day.day}</h2>
                <ul className="space-y-3">
                  {day.events.map((event, eIdx) => (
                    <li key={eIdx} className="flex">
                      <span className="font-bold w-24 text-sm text-gray-300 flex-shrink-0">{event.time}</span>
                      <span className="text-sm">{event.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            menu.map((day, idx) => (
              <div key={idx} className="bg-dark-450 p-6 rounded-xl border border-white border-opacity-20 shadow-lg">
                <h2 className="text-xl font-habibi text-yellow-accent mb-4 border-b border-gray-600 pb-2">{day.day}</h2>
                <ul className="space-y-4">
                  {day.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex flex-col">
                      <span className="font-bold text-sm text-pink-accent mb-1">{item.time}</span>
                      <span className="text-sm text-gray-200">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
