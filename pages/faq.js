import Head from 'next/head';
import Layout from '@/components/Layout/Layout';

export default function FAQ() {
  const faqs = [
    {
      q: "What is SEAM 2026 about?",
      a: "SEAM 2026 is a spiritual and community gathering for Sai alumni and families. The event follows the theme 'Our Life is His Message: Learning from Swami, Living in the Society'."
    },
    {
      q: "When and where is the event?",
      a: "SEAM 2026 will be held from 1st to 4th May 2026 at Grischalodge, Hauptstrasse 22, 7076 Parpan, Switzerland."
    },
    {
      q: "Who can attend?",
      a: "Sai alumni from Europe and the UK/Ireland, along with their families, are welcome to participate."
    },
    {
      q: "How do I register?",
      a: <span>Use the registration link on the home page, or complete the arrival confirmation form <a href="https://www.jotform.com/form/260684370433053" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 dark:hover:text-yellow-500">here</a>.</span>
    },
    {
      q: "What is the registration fee?",
      a: "Adults: 160 CHF (approximately GBP 153). Children under 12: 155 CHF (approximately GBP 148). Children aged 5 and under: free."
    },
    {
      q: "Whom do I pay the registration fee to?",
      a: "Please pay the amount to Krishna Kishore. The payent details are available in the Information page."
    },
    {
      q: "Is accommodation provided?",
      a: "Yes. Accommodation is arranged at Grischalodge and also at Jenatsch Hotel (just across the road). Room allocation is available on the Information page."
    },
    {
      q: "Why is my name at Jenatsch Hotel in the Room allocation info?",
      a: "Some Bachelors are being allocated to Jenatsch Hotel. It is opposite Grischalodge and very easy to access on foot."
    },
    {
      q: "How do I travel to the venue?",
      a: "Nearest airport: Zurich. Travel route: Zurich to Chur by train (around 1.5 hours), then Chur to Parpan by bus (around 25 minutes). Public transport runs frequently."
    },
    {
      q: "What time can I arrive and when should I leave?",
      a: "Please plan to arrive on Friday (1st May) between 2:00 PM and 4:45 PM for settling in. The program closes on Monday (4th May), with room clearance and checkout scheduled between 10:10 AM and 11:00 AM. If you are arriving earlier or leaving later, please contact any of the organizers."
    },
    {
      q: "What should I pack?",
      a: "Bring warm layers for subzero to about 13-14C weather, rain/snow protection, comfortable outdoor shoes, and your own towels (towels are not provided). More packing details are provided in the Information page."
    },
    {
      q: "Is there a dress preference for sessions?",
      a: "Yes. White dress is preferred for gents for major bhajan hall gatherings. For ladies, traditional wear is preferred. If not possible, please wear something close to these and decent."
    },
    {
      q: "What is the daily program like?",
      a: "The program includes Suprabhatam, Vedam, Bhajans, guest talks, open discussions, children's activities, outdoor sessions, and evening prayers."
    },
    {
      q: "Who is the guest speaker?",
      a: <span>The guest speaker is <strong>Smt. Geetha Mohan Ram garu</strong>. You can read more about her <a href="http://saibaba.ws/experiences1/the_wonderful_mother_that_i_have.htm" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 dark:hover:text-yellow-500">here</a>.</span>
    },
  ];

  return (
    <Layout>
      <Head>
        <title>FAQs & Contact - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 px-4 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300">
        <h1 className="text-4xl text-center mb-12">
          <span className="font-playfair">FAQs</span> <span className="font-great-vibes">& &nbsp; Contact</span>
        </h1>
        
        <div className="max-w-xl mx-auto mb-16">
         {/* <h2 className="text-2xl font-habibi mb-6 text-center">Common Questions</h2> */}
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-light-surface/80 dark:bg-dark-450 p-6 rounded-lg shadow-sm dark:shadow-none transition-colors duration-300">
                <h3 className="font-bold text-lg text-yellow-600 dark:text-yellow-500 mb-2">{item.q}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='pb-24 px-4 lg:px-8'>
        <div className="max-w-xl mx-auto text-center bg-light-surface/50 dark:bg-white/10 text-gray-900 dark:text-white p-8 rounded-xl backdrop-blur-sm transition-colors duration-300">
          <h2 className="text-2xl font-playfair mb-6">Contact Information</h2>
          <p className="mb-2">For any inquiries, please contact:</p>
          <p className="text-xl font-bold mb-1">Kishore Ravuri</p>
          <p className="mb-1"><a href="mailto:kishoreravuri@gmail.com" className="underline hover:text-pink-600 dark:hover:text-gray-300">kishoreravuri@gmail.com</a></p>
          <p><a href="tel:+41799092749" className="hover:text-pink-600 dark:hover:text-gray-300">+41 799092749</a></p>
        </div>
      </div>
    </Layout>
  );
}
