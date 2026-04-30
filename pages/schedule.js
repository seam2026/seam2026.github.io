import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import CalenderIcon from '../public/assets/icons/calendar.svg';
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
      day: "Day 1 (Friday, 1st May 2026)",
      theme: "Arrival and Welcome",
      events: [
        { time: "2:00 PM - 4:45 PM", activity: "Arrival and Settling in; Welcome Song, Bhajans, Welcome talk (20m), Housekeeping & Schedule" },
        { time: "7:00 PM - 8:30 PM", activity: "Dinner" },
        { time: "8:30 PM - 10:00 PM", activity: "Free time / Networking / Practice" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" }
      ]
    },
    {
      day: "Day 2 (Saturday, 2nd May 2026)",
      theme: "Saturday Sessions",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:15 AM - 7:30 AM", activity: "Free time" },
        { time: "7:30 AM - 8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM - 12:20 PM", activity: "Morning Session: Vedam (10m), Bhajans (45m), Guest introduction (Giridhar, 5m), Guest Talk (Smt Geetha Mohan Ram, 90m), Open Mic (30m), Closing remarks" },
        { time: "12:20 PM - 12:30 PM", activity: "Outdoor Group Photo session 1 (whites & traditional sarees)" },
        { time: "12:30 PM - 1:55 PM", activity: "Lunch" },
        { time: "2:00 PM - 3:55 PM", activity: "Afternoon Outdoor Session: The Squirrel Park & Lake Heidsee" },
        { time: "4:00 PM - 4:55 PM", activity: "Tea break" },
        { time: "5:30 PM - 7:25 PM", activity: "Evening Session: Vedam (5m), Sai Student Talk (Kirthi Krishna, 15m), Musical Offering (45m), Bhajans & Aarthi (45m)" },
        { time: "7:30 PM - 9:00 PM", activity: "Dinner / Chat with Geetha aunty" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" }
      ]
    },
    {
      day: "Day 3 (Sunday, 3rd May 2026)",
      theme: "Sunday Sessions",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:30 AM - 7:30 AM", activity: "Free time" },
        { time: "7:30 AM - 8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM - 12:30 PM", activity: "Morning Session: Vedam (10m), Bhajans (40m), Children's music program (40m), Guest Talk (90m), Roundup" },
        { time: "12:30 PM - 1:50 PM", activity: "Lunch" },
        { time: "2:00 PM - 4:30 PM", activity: "Breakout Sessions: 'How are we Living Swami's Message?' and Children's interaction with Geetha aunty" },
        { time: "4:10 PM - 4:55 PM", activity: "Tea break" },
        { time: "5:00 PM - 7:25 PM", activity: "Evening Session: Vedam (10m), Sai Student Talk (Hari Krishna Prasad, 15m), Drama (35m), Bhajans & Aarti (45m)" },
        { time: "7:30 PM - 9:00 PM", activity: "Dinner" },
        { time: "9:00 PM - 10:00 PM", activity: "Networking and chats" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" },
        { time: "10:15 PM - 10:30 PM", activity: "Brief checkout announcements" }
      ]
    },
    {
      day: "Day 4 (Monday, 4th May 2026)",
      theme: "Closing and Departure",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:30 AM - 7:30 AM", activity: "Free time" },
        { time: "7:00 AM - 8:00 AM", activity: "Breakfast" },
        { time: "8:20 AM - 10:00 AM", activity: "Morning Session: Vedam (10m), Bhajans (40m), Short talk (30m), Vote of Thanks (20m), Aarti (5m)" },
        { time: "10:00 AM - 11:00 AM", activity: "Room clearance and checkout" }
      ]
    }
  ];

  const menu = [
    {
      day: "Fri (1st May)",
      items: [
        { time: "Dinner", description: "Vegetable Pulao, Paneer Butter Masala, Plain Rice, Cucumber Tomato Raita, Salad & Pickle; Sweet: Fruit Custard" }
      ]
    },
    {
      day: "Sat (2nd May)",
      items: [
        { time: "Breakfast", description: "Vegetable Upma, Peanut Chutney, Gun Powder Podi, Ghee" },
        { time: "Morning Break", description: "Biscuits; beverages: Chocomilk, Tea, Coffee" },
        { time: "Lunch", description: "Tomato Pappu, Bangaladumpa Vepudu (Potato Fry), Rasam, Lemon Rice, Plain Rice; Sweet: Semiya Payasam; Sides: Kandi Podi, Appadam/Vadiyalu, Pickle (Avakaya)" },
        { time: "Zvieri", description: "Mini Samosas with Chocomilk, Tea, Coffee" },
        { time: "Dinner", description: "Roti, Palak Paneer, Dal Makhani, Plain Rice, Salad, Pasta Gratin; Sweet: Mango Rasmalai; Sides: Ghee" }
      ]
    },
    {
      day: "Sun (3rd May)",
      items: [
        { time: "Breakfast", description: "Green Peas and Sweetcorn Poha, Chutney; beverages: Chocomilk, Tea, Coffee" },
        { time: "Znüni", description: "Grapes/Berries; beverages: Chocomilk, Tea, Coffee" },
        { time: "Lunch", description: "Soya Masala, Babycorn/Vegetable Jhalfraize, Jeera Pulao, Plain Rice, Salad, Pizza; Sweet: Gulab Jamun; Sides: Papad" },
        { time: "Zvieri", description: "Vegetable Spring Rolls with Chocomilk, Tea, Coffee" },
        { time: "Dinner", description: "Naan, Chole, Vegetable Pulao, Raita, Salad; Sweet: Fruit Salad Ice Cream; Sides: Sweet Chilli Soya Sauce" }
      ]
    },
    {
      day: "Mon (4th May)",
      items: [
        { time: "Breakfast", description: "Ghee Pongal with beverages: Chocomilk, Tea, Coffee; sides: Tomato Pacchadi, Mixed Cut Fresh Fruits" },
        { time: "Lunch", description: "Packed Lunch" }
      ]
    }
  ];

  const eventCardThemes = [
    {
      card: "bg-gradient-to-br from-blue-50 via-light-surface to-pink-50 dark:from-dark-450 dark:via-dark-450 dark:to-dark-500 border-blue-200/70 dark:border-blue-300/30",
      heading: "text-blue-700 dark:text-blue-accent"
    },
    {
      card: "bg-gradient-to-br from-yellow-50 via-light-surface to-rose-50 dark:from-dark-450 dark:via-dark-450 dark:to-dark-500 border-yellow-300/70 dark:border-yellow-300/30",
      heading: "text-rose-700 dark:text-yellow-accent"
    }
  ];

  const eventTimeStyles = [
    "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200",
    "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200"
  ];

  return (
    <Layout>
      <Head>
        <title>Schedule & Menu - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 pb-24 px-4 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300">
        <h1 className="text-4xl font-great-vibes text-center mb-8">Event Schedule & Menu</h1>
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 gap-4">
          <button 
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition border ${activeTab === 'events' ? 'bg-blue-accent text-white dark:text-dark-500 border-blue-accent font-bold' : 'bg-light-surface dark:bg-dark-450 text-gray-900 dark:text-white border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer'}`}
          >
            <CalenderIcon className="w-5 h-5 stroke-current stroke-[0.5]" />
            Events
          </button>
          <button 
            onClick={() => setActiveTab('menu')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition border ${activeTab === 'menu' ? 'bg-yellow-accent text-dark-500 border-yellow-accent font-bold' : 'bg-light-surface dark:bg-dark-450 text-gray-900 dark:text-white border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer'}`}
          >
            <FoodIcon className="w-5 h-5 stroke-current stroke-[0.5]" />
            Menu
          </button>
        </div>

        {activeTab === 'events' && (
          <div className="flex justify-center mb-8">
            <a
              href="https://github.com/seam2026/seam2026.github.io/blob/master/public/assets/presentations/SEAM%20poster%20program.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-400/30 hover:bg-blue-200 dark:hover:bg-blue-900/60 transition"
            >
              Download PDF
            </a>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {activeTab === 'events' ? (
            schedule.map((day, idx) => {
              const theme = eventCardThemes[idx % eventCardThemes.length];
              return (
              <div key={idx} className={`p-6 rounded-xl border shadow-lg transition-colors duration-300 ${theme.card}`}>
                <h2 className={`text-xl font-playfair mb-4 border-b border-gray-200 dark:border-gray-600 pb-2 ${theme.heading}`}>{day.day}</h2>
                <ul className="space-y-3">
                  {day.events.map((event, eIdx) => (
                    <li key={eIdx} className="flex gap-3 items-start rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-gray-100 dark:border-white/10">
                      <span className={`font-semibold text-xs sm:text-sm px-3 py-1 rounded-full flex-shrink-0 whitespace-nowrap ${eventTimeStyles[eIdx % eventTimeStyles.length]}`}>
                        {event.time}
                      </span>
                      <span className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">{event.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )})
          ) : (
            menu.map((day, idx) => (
              <div key={idx} className="bg-light-surface/80 dark:bg-dark-450 p-6 rounded-xl border border-gray-200 dark:border-white/20 shadow-lg transition-colors duration-300">
                <h2 className="text-xl font-playfair text-yellow-600 dark:text-yellow-accent mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">{day.day}</h2>
                <ul className="space-y-4">
                  {day.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex flex-col">
                      <span className="font-bold text-sm text-pink-600 dark:text-pink-accent mb-1">{item.time}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-200">{item.description}</span>
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
