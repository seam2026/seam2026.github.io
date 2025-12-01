import Head from 'next/head';
import Layout from '@/components/Layout/Layout';

export default function Schedule() {
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

  return (
    <Layout>
      <Head>
        <title>Schedule - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 pb-24 px-4 lg:px-8 text-white">
        <h1 className="text-4xl font-great-vibes text-center mb-12">Event Schedule</h1>
        
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {schedule.map((day, idx) => (
            <div key={idx} className="bg-dark-450 p-6 rounded-xl border border-white border-opacity-20">
              <h2 className="text-xl font-habibi text-yellow-500 mb-4 border-b border-gray-600 pb-2">{day.day}</h2>
              <ul className="space-y-3">
                {day.events.map((event, eIdx) => (
                  <li key={eIdx} className="flex">
                    <span className="font-bold w-24 text-sm text-gray-300 flex-shrink-0">{event.time}</span>
                    <span className="text-sm">{event.activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
