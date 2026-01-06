import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>SEAM 2026 - Sai Students Europe & UK Alumni Meet</title>
      </Head>
      <Layout>
        {/* Mobile Video Background Section */}
        {isMobile && (
        <section id='home' className="flex lg:hidden w-full h-dvh relative overflow-hidden flex-col justify-between">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute w-full h-full object-cover z-0"
          >
            <source src="/assets/video_mobile.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute h-full w-full bg-white/40 dark:bg-dark-450/60 z-0 transition-colors duration-300"></div>
          
          {/* <div className="flex flex-col w-full text-deep-pink dark:text-white text-center h-auto px-8 z-10 justify-center flex-grow transition-colors duration-300"> */}
          <div className="flex flex-col w-full text-gray-900 dark:text-white text-center h-auto px-8 z-10 pt-28 flex-grow transition-colors duration-300">
            <p className="font-habibi text-xl">Aum Sri Sai Ram</p>
            <h4 className="font-playfair font-bold text-3xl mb-2 mt-4">
              SEAM 2026
            </h4>
            <p className="font-habibi">Sai Students Europe & UK Alumni Meet</p>
            <p className="font-habibi mt-2">1st - 4th May 2026</p>
          </div>

          <div className="mx-4 bg-[rgba(255,249,196,0.03)] dark:bg-dark-500/13 p-3 rounded-xl border border-deep-pink/10 dark:border-white/20 text-gray-900 dark:text-white text-center z-10 mb-24 pb-6 backdrop-blur-[2px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">Event Details</h3>
              <p className="mb-1 text-sm"><strong>Dates:</strong> 1st May to 4th May, 2026</p>
              <p className="mb-1 text-sm"><strong>Location:</strong> <a href="https://maps.app.goo.gl/B39EJi1zC4Un6nKz9" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 dark:hover:text-gray-300">Grischalodge, Parpan, Switzerland</a></p>
              <p className="mb-4 text-sm"><strong>Address:</strong> Hauptstrasse 22, 7076 Parpan, Switzerland</p>
              
              <div className="flex flex-col gap-2">
                  <a href="https://form.jotform.com/253343514613047" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-dark-500 text-white dark:bg-white dark:text-dark-500 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm">
                    Register Now
                  </a>
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=SEAM+2026+-+Sai+Europe+Alumni+Meet&dates=20260501/20260505&details=Sai+Europe+Alumni+Meet+2026.+Reconnect+and+rejoice+the+spirit+of+unity+and+devotion.%0A%0AFor+more+details,+visit+https://seam2026.github.io/&location=Grischalodge,+Hauptstrasse+22,+7076+Parpan,+Switzerland" target="_blank" className="px-6 py-2 border border-gray-900 dark:border-white rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dark-500 transition text-sm">
                      Add to Google Calendar
                  </a>
                  <a href="/seam_2026.ics" download className="px-6 py-2 border border-gray-900 dark:border-white rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dark-500 transition text-sm">
                      Download iCal
                  </a>
              </div>
          </div>

        </section>
        )}

        {/* Desktop Video Background Section */}
        {!isMobile && (
        <section id='home' className='hidden lg:grid h-screen'>
          <div className="bg-white dark:bg-dark-500 py-14 lg:py-0 grid-cols-2 h-screen relative transition-colors duration-300">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50">
              <source src="/assets/video_computer.mp4" type="video/mp4" />
            </video>
            {/* <div className="flex flex-col text-deep-pink dark:text-white px-16 justify-center z-10 col-span-2 w-full h-full text-center flex justify-center transition-colors duration-300"> */}
            <div className="flex flex-col text-gray-900 dark:text-white px-16 justify-center z-10 col-span-2 w-full h-full text-center flex justify-center transition-colors duration-300">
              <p className="font-habibi text-2xl mb-4">Aum Sri Sai Ram</p>
              <h1 className="font-playfair font-bold text-8xl mb-6 text-shadow-outline dark:text-shadow-none">
                SEAM 2026
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Welcome to the official website for the Sai Students Europe & UK Alumni Meet 2026. 
                This event is a special gathering for all Sai Student alumni across Europe 
                to come together to reconnect and rejoice the spirit of unity and devotion.
              </p>
            </div>
            <div className='grow'>
              
            </div>

            <a
              href='#event-details'
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer p-2 rounded-full hover:bg-white/0 transition duration-300"
              aria-label="Scroll to next section"
            >{/* <svg className="w-8 h-8 text-deep-pink dark:text-white animate-bounce" xmlns="www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
              <svg className="w-8 h-8 text-gray-900 dark:text-white animate-bounce" xmlns="www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>
        )}

        <section id='event-details' className='hidden lg:block'>
          <div className="z-10 bg-light-surface/80 dark:bg-gray-800/30 p-6 max-w-2xl mx-auto border border-deep-pink/20 dark:border-white/20 text-deep-pink dark:text-white text-center shadow-xl backdrop-blur-sm rounded-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Event Details</h3>
              <p className="mb-2"><strong>Dates:</strong> 1st May to 4th May, 2026</p>
              <p className="mb-2"><strong>Location:</strong> <a href="https://maps.app.goo.gl/B39EJi1zC4Un6nKz9" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 dark:hover:text-gray-300">Grischalodge, Parpan, Switzerland</a></p>
              <p className="mb-6"><strong>Address:</strong> Hauptstrasse 22, 7076 Parpan, Switzerland</p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                  <a href="https://form.jotform.com/253343514613047" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-dark-500 text-white dark:bg-white dark:text-dark-500 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                    Register Now
                  </a>
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=SEAM+2026+-+Sai+Europe+Alumni+Meet&dates=20260501/20260505&details=Sai+Europe+Alumni+Meet+2026.+Reconnect+and+rejoice+the+spirit+of+unity+and+devotion.%0A%0AFor+more+details,+visit+https://seam2026.github.io/&location=Grischalodge,+Hauptstrasse+22,+7076+Parpan,+Switzerland" target="_blank" className="px-6 py-2 border border-gray-900 dark:border-white rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dark-500 transition">
                      Add to Google Calendar
                  </a>
                  <a href="/seam_2026.ics" download className="px-6 py-2 border border-gray-900 dark:border-white rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dark-500 transition">
                      Download iCal
                  </a>

              </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
