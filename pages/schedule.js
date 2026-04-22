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
        { time: "2:00 PM - 4:45 PM", activity: "Arrival and Settling in" },
        { time: "5:00 PM - 7:00 PM", activity: "Vedam (30m), Lighting the Lamp (5m), Divine Discourse (5m), Welcome Song (5m), Bhajans (45m), Welcome Talk (20m), Housekeeping & Schedule (15m)" },
        { time: "7:00 PM - 8:30 PM", activity: "Dinner" },
        { time: "8:30 PM - 10:00 PM", activity: "Free Time / Networking / Informal Chats / Practice" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" }
      ]
    },
    {
      day: "Day 2 (Saturday, 2nd May 2026)",
      theme: "Learning from Swami",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:15 AM - 7:30 AM", activity: "Free Time" },
        { time: "7:30 AM - 8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM - 12:10 PM", activity: "Vedam (25m), Bhajans (35m), Guest Introduction (2m), Guest Talk (90m), Open Mic Session (30m), Closing Remarks (3m)" },
        { time: "12:30 PM - 2:00 PM", activity: "Lunch" },
        { time: "2:00 PM - 4:30 PM", activity: "Outdoor Group Photo and Breakout Session: Assemble in hall (10m), Group Photo Session 1 (20m), Group setup (10m), Breakout discussion on 'How are we Living Swami's Message?' (60m), Children's interaction with Aunty (simultaneous, 60m), Recap assembly (10m), Group recap sharing (30m)" },
        { time: "4:30 PM - 5:30 PM", activity: "Tea and Free Time" },
        { time: "5:30 PM - 7:30 PM", activity: "Vedam (10m), Sai Student Talk (10m), Musical Offering at the Divine Lotus Feet (45m), Bhajans & Aarti (35m)" },
        { time: "7:30 PM - 9:00 PM", activity: "Dinner" },
        { time: "8:30 PM - 9:30 PM", activity: "Optional: Sai Parenting - Informal Q & A with Geetha aunty" },
        { time: "9:00 PM - 10:00 PM", activity: "Relaxing Time / Networking Time" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" }
      ]
    },
    {
      day: "Day 3 (Sunday, 3rd May 2026)",
      theme: "Living in the Society",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:30 AM - 7:30 AM", activity: "Free Time" },
        { time: "7:30 AM - 8:30 AM", activity: "Breakfast" },
        { time: "9:00 AM - 12:30 PM", activity: "Vedam by Children (20m), Bhajans by Children (30m), Musical Offering by Children (25m), Guest Talk (90m), Closing Remarks (10m)" },
        { time: "12:30 PM - 1:55 PM", activity: "Lunch Break" },
        { time: "2:00 PM - 4:00 PM", activity: "Afternoon Session: Transfer to Heidesee, Group Photo Session 2 (Alpine lake background), Walk to The Squirrel Park and back, Transfer back to venue" },
        { time: "4:00 PM - 4:45 PM", activity: "Tea Break" },
        { time: "5:30 PM - 7:30 PM", activity: "Vedam (10m), Sai Student Talk (15m), Drama (45m), Bhajans and Aarti (45m), Buffer (5m)" },
        { time: "7:30 PM - 9:00 PM", activity: "Dinner" },
        { time: "9:00 PM - 10:00 PM", activity: "Networking and Informal Chats" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" },
        { time: "10:15 PM - 10:30 PM", activity: "Checkout Announcements / Instructions" }
      ]
    },
    {
      day: "Day 4 (Monday, 4th May 2026)",
      theme: "Closing and Departure",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:30 AM - 7:30 AM", activity: "Free Time" },
        { time: "7:00 AM - 8:00 AM", activity: "Breakfast" },
        { time: "8:30 AM - 10:30 AM", activity: "Vedam (10m), Bhajans (30m), Sai Students Activities Open Discussion (30m), Vote of Thanks and Felicitations (20m), Aarti (5m)" },
        { time: "11:00 AM", activity: "Check-out and await SEAM 2027" }
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
        { time: "Zveri", description: "Mini Samosas with Chocomilk, Tea, Coffee" },
        { time: "Dinner", description: "Roti, Palak Paneer, Dal Makhani, Plain Rice, Salad, Pasta Gratin; Sweet: Mango Rasmalai; Sides: Ghee" }
      ]
    },
    {
      day: "Sun (3rd May)",
      items: [
        { time: "Breakfast", description: "Green Peas and Sweetcorn Poha, Chutney; beverages: Chocomilk, Tea, Coffee" },
        { time: "Znuni", description: "Grapes/Berries; beverages: Chocomilk, Tea, Coffee" },
        { time: "Lunch", description: "Soya Masala, Babycorn/Vegetable Jhalfraize, Jeera Pulao, Plain Rice, Salad, Pizza; Sweet: Gulab Jamun; Sides: Papad" },
        { time: "Zveri", description: "Vegetable Spring Rolls with Chocomilk, Tea, Coffee" },
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
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="md:col-span-2 text-center mb-4">
            <p className="text-sm italic text-gray-600 dark:text-gray-400">This is tentative and the final details will be confirmed closer to the event date</p>
          </div>
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
