import Head from 'next/head';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEAM 2026 - Sai Europe Alumni Meet</title>
      </Head>
      <Layout>
        {/* Mobile Video Background Section */}
        <section className="flex lg:hidden w-full h-screen items-start py-14 relative overflow-hidden">
           <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
             <source src="/assets/video_mobile.mp4" type="video/mp4" />
           </video>
          <div className="absolute h-full w-full bg-dark-450 bg-blur-2px z-0"></div>
          
          <div className="flex flex-col w-full text-white text-center h-auto px-8 py-3.5 z-10 mt-10 overflow-y-auto pb-20">
            <p className="font-habibi text-xl">Aum Sri Sai Ram</p>
            <h4 className="font-playfair font-bold text-5xl mb-4 mt-6">
              SEAM 2026
            </h4>
            <p className="font-habibi">Sai Europe Alumni Meet</p>
            <p className="font-habibi mt-2">1st - 4th May 2026</p>

            <div className="mt-8 bg-dark-500 bg-opacity-80 p-6 rounded-xl border border-white border-opacity-20">
                <h3 className="text-xl font-bold mb-4">Event Details</h3>
                <p className="mb-2 text-sm"><strong>Dates:</strong> 1st May to 4th May, 2026</p>
                <p className="mb-2 text-sm"><strong>Location:</strong> Grischalodge, Parpan, Switzerland</p>
                <p className="mb-6 text-sm"><strong>Address:</strong> Hauptstrasse 22, 7076 Parpan, Switzerland</p>
                
                <div className="flex flex-col gap-3">
                    <a href="#" className="px-6 py-2 bg-white text-dark-500 rounded-full font-bold hover:bg-gray-200 transition text-sm">
                        Register Now
                    </a>
                    <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDAxMmwwaG80ZmJ1aG9kMmg5dmpyNWxxb2ogc2l2YXJhdG5ha2FyLmltbWFkaUBt&tmsrc=sivaratnakar.immadi%40gmail.com" target="_blank" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-dark-500 transition text-sm">
                        Add to Google Calendar
                    </a>
                    <a href="/seam_2026.ics" download className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-dark-500 transition text-sm">
                        Download iCal
                    </a>
                </div>
            </div>
          </div>
        </section>

        {/* Desktop Video Background Section */}
        <section className="hidden lg:grid bg-dark-500 py-14 lg:py-0 grid-cols-2 h-screen relative">
           <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40">
             <source src="/assets/video_computer.mp4" type="video/mp4" />
           </video>
          
          <div className="flex flex-col text-white px-16 justify-center z-10 col-span-2 text-center">
            <p className="font-habibi text-2xl mb-4">Aum Sri Sai Ram</p>
            <h1 className="font-playfair font-bold text-8xl mb-6">
              SEAM 2026
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Welcome to the official website for the Sai Europe Alumni Meet 2026. 
              This event is a special gathering for all Sai Student alumni across Europe 
              to come together to reconnect and rejoice the spirit of unity and devotion.
            </p>
            
            <div className="bg-dark-500 bg-opacity-80 p-8 rounded-xl max-w-2xl mx-auto border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-4">Event Details</h3>
                <p className="mb-2"><strong>Dates:</strong> 1st May to 4th May, 2026</p>
                <p className="mb-2"><strong>Location:</strong> Grischalodge, Parpan, Switzerland</p>
                <p className="mb-6"><strong>Address:</strong> Hauptstrasse 22, 7076 Parpan, Switzerland</p>
                
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href="#" className="px-6 py-2 bg-white text-dark-500 rounded-full font-bold hover:bg-gray-200 transition">
                        Register Now
                    </a>
                    <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDAxMmwwaG80ZmJ1aG9kMmg5dmpyNWxxb2ogc2l2YXJhdG5ha2FyLmltbWFkaUBt&tmsrc=sivaratnakar.immadi%40gmail.com" target="_blank" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-dark-500 transition">
                        Add to Google Calendar
                    </a>
                    <a href="/seam_2026.ics" download className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-dark-500 transition">
                        Download iCal
                    </a>
                </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
