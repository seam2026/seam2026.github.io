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
        { time: "5:00 PM - 7:00 PM", activity: "Friday Evening Session: Vedam (30m), Lighting the Lamp (5m), Welcome Song (5m), Bhajans (45m), Welcome Talk (20m), Housekeeping & Schedule (15m)" },
        { time: "7:00 PM - 8:30 PM", activity: "Dinner" },
        { time: "8:30 PM - 10:00 PM", activity: "Free Time / Networking / Practice" },
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
        { time: "9:00 AM - 12:10 PM", activity: "Saturday Morning Session: Vedam & Open Mic (10m), Bhajans (45m), Guest Introduction (5m), Guest Talk by Smt Geetha MohanRam (1h30m), Open Mic Session (30m), Closing Remarks (10m)" },
        { time: "12:20 PM - 1:55 PM", activity: "Lunch" },
        { time: "2:00 PM - 4:30 PM", activity: "Saturday Noon Session: Group Photo Session (20m), Outdoor Breakout Groups on 'Living Swami's Message' (60m), Children Interaction with Geetha aunty (Simultaneous), Session Recap (30m)" },
        { time: "4:30 PM - 5:25 PM", activity: "Tea and Free Time" },
        { time: "5:30 PM - 7:25 PM", activity: "Saturday Evening Session: Vedam (10m), Sai Student Talk (20m), Musical Offering (35m), Bhajans and Aarti (45m)" },
        { time: "7:30 PM - 9:00 PM", activity: "Dinner & Chat with Geetha aunty on Parenting; Q&A" },
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
        { time: "9:00 AM - 12:30 PM", activity: "Sunday Morning Session: Vedam (10m), Bhajans (40m), Children's Music Program (40m), Guest Talk (90m), Roundup (10m)" },
        { time: "12:30 PM - 1:50 PM", activity: "Lunch Break" },
        { time: "2:00 PM - 4:00 PM", activity: "Afternoon Outdoor Session at Squirrel Park & Lake Heidsee: Transfer to Heidsee (14:05), Group Photo at Alpine Lake (14:10), Walk to Squirrel Park & Back (14:15-15:30), Transfer Back (15:50)" },
        { time: "4:00 PM - 4:55 PM", activity: "Tea Break" },
        { time: "5:00 PM - 7:25 PM", activity: "Sunday Evening Session: Vedam (10m), Sai Student Talk (20m), Drama (35m), Bhajans and Aarti (45m)" },
        { time: "7:30 PM - 9:00 PM", activity: "Dinner" },
        { time: "9:00 PM - 10:00 PM", activity: "Networking and Informal Chats" },
        { time: "10:00 PM - 10:15 PM", activity: "Hanuman Chalisa and Night Prayers" },
        { time: "10:15 PM - 10:30 PM", activity: "Brief Checkout Announcements" }
      ]
    },
    {
      day: "Day 4 (Monday, 4th May 2026)",
      theme: "Closing and Departure",
      events: [
        { time: "6:00 AM - 6:15 AM", activity: "Suprabhatam" },
        { time: "6:30 AM - 7:30 AM", activity: "Free Time" },
        { time: "7:00 AM - 8:00 AM", activity: "Breakfast" },
        { time: "8:20 AM - 10:00 AM", activity: "Closing Session: Vedam (10m), Bhajans (40m), Short Talk by Smt. Geetha Mohanram (30m), Vote of Thanks & Felicitations (20m), Aarati (5m)" },
        { time: "10:10 AM - 11:00 AM", activity: "Room Clearance and Checkout" }
      ]
    }
  ];

  const menu = [
    {
      day: "Fri (1st May)",
      items: [
        { time: "Dinner", description: "Vegetable Pulao, Paneer Butter Masala, Dal Tadka, Cucumber Tomato Raita, Salad & Pickle; Sweet: Fruit Custard" }
      ]
    },
    {
      day: "Sat (2nd May)",
      items: [
        { time: "Breakfast", description: "Vegetable Upma, Peanut Chutney, Gun Powder Podi, Ghee, Diced Watermelon; To be bought: Cereal, White Bread, Sliced Cheese, Jam, Butter, Nutella, Milk, Juice" },
        { time: "Morning Break", description: "Biscuits; beverages: Chocomilk, Tea, Coffee" },
        { time: "Lunch", description: "Tomato Pappu, Bangaladumpa Vepudu, Rasam, Lemon Rice, Plain Rice, Salad; Sweet: Semiya Payasam; Sides: Appadam/Vadiyalu, Pickle (Avakaya)" },
        { time: "Zveri", description: "Mini Samosas with Chocomilk, Tea, Coffee; To be bought: Yogurt, Cake/Mini Sweets" },
        { time: "Dinner", description: "Roti, Palak Paneer, Dal Makhani, Jeera Pulao, Pasta Gratin; Sweet: Mango Rasmalai; Sides: Mint Chutney" }
      ]
    },
    {
      day: "Sun (3rd May)",
      items: [
        { time: "Breakfast", description: "Green Peas and Sweetcorn Poha, Uthappam (buy batter), Chutney; beverages: Chocomilk, Tea, Coffee; To be bought: Cereal, White Bread, Cheese, Jam, Butter, Nutella, Milk, Juice" },
        { time: "Znuni", description: "Diced Papaya/Grapes/Berries; beverages: Chocomilk, Tea, Coffee" },
        { time: "Lunch", description: "Soya Masala, Babycorn/Vegetable Jhalfraize, Jeera Pulao, Salad, Naan, Pizza; Sweet: Fruit Salad Ice Cream; Sides: Papad" },
        { time: "Zveri", description: "Vegetable Spring Rolls with Chocomilk, Tea, Coffee; To be bought: Yogurt, Cake/Mini Sweets, Ice Cream" },
        { time: "Dinner", description: "Chapathi, Chole, Vegetable Pulao, Raita, Salad; Sweet: Gulab Jamun; Sides: Sweet Chilli Soya Sauce" }
      ]
    },
    {
      day: "Mon (4th May)",
      items: [
        { time: "Breakfast", description: "Ghee Pongal with beverages: Chocomilk, Tea, Coffee; sides: Tomato Pacchadi, Mixed Cut Fresh Fruits; To be bought: Cereal, White Bread, Cheese, Jam, Butter, Nutella, Milk, Juice" },
        { time: "Lunch", description: "Packed Lunch" }
      ]
    }
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
            schedule.map((day, idx) => (
              <div key={idx} className="bg-light-surface/80 dark:bg-dark-450 p-6 rounded-xl border border-gray-200 dark:border-white/20 shadow-lg transition-colors duration-300">
                <h2 className="text-xl font-playfair text-blue-600 dark:text-blue-accent mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">{day.day}</h2>
                <ul className="space-y-3">
                  {day.events.map((event, eIdx) => (
                    <li key={eIdx} className="flex">
                      <span className="font-bold w-24 text-sm text-gray-600 dark:text-gray-300 flex-shrink-0">{event.time}</span>
                      <span className="text-sm">{event.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
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
