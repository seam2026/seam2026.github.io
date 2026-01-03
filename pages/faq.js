import Head from 'next/head';
import Layout from '@/components/Layout/Layout';

export default function FAQ() {
  const faqs = [
    { 
      q: "What is this event about?", 
      a: "This event is a special gathering for all Sai Student alumni across Europe and their families. It is an opportunity to come together, relive the cherished memories of our student days, and replicate the hostel schedule we all enjoyed, helping us reconnect with that spirit of unity and get closer to Swami." 
    },
    { 
      q: "Who can attend SEAM 2026?", 
      a: "All Sai Student alumni from Europe are welcome to attend." 
    },
    { 
      q: "What is the registration fee?", 
      a: "The registration fee is 170 CHF per person." 
    },
    { 
      q: "How do I register?", 
      a: "Please go to the home page of this website and click on the 'Register Now' button to complete your registration." 
    },
    { 
      q: "Whom do I pay the registration fee to?", 
      a: "Detailed payment information is available on the Information page." 
    },
    { 
      q: "Is accommodation provided?", 
      a: "Yes, the venue has accommodation. The details regarding allocated rooms will be shared in the Information page closer to the registration date." 
    },
    { 
      q: "How do I travel to the location?", 
      a: "The nearest major train station is Chur. From there, you can take a bus or one of our arranged cars to the venue. For more detailed travel instructions, please refer to the Information page." 
    },
    { 
      q: "What are the events going to be?", 
      a: "The schedule will generally follow the beloved hostel routine, including Suprabatham, Bhajans, Group songs, Parayanam from a guest speaker, and lovely discussions, along with some exciting outdoor events." 
    },    { 
      q: "Who is the guest speaker?", 
      a: <span>The guest speaker is <strong>Geetha Mohan Ram</strong>. You can read more about her <a href="http://saibaba.ws/experiences1/the_wonderful_mother_that_i_have.htm" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600 dark:hover:text-yellow-500">here</a>.</span> 
    },    { 
      q: "What are the outdoor events going to be?", 
      a: "While we are currently finalizing the specifics, the outdoor activities will include hiking across the scenic landscapes of Switzerland." 
    },
    { 
      q: "What should I bring to the event?", 
      a: "Bring your enthusiasm and love for Swami! A detailed list of material suggestions and packing essentials will be provided in the Information page closer to the event." 
    },
  ];

  return (
    <Layout>
      <Head>
        <title>FAQs & Contact - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 px-4 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300">
        <h1 className="text-4xl font-great-vibes text-center mb-12">FAQs & Contact</h1>
        
        <div className="max-w-xl mx-auto mb-16">
          <h2 className="text-2xl font-habibi mb-6 text-center">Common Questions</h2>
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
          <h2 className="text-2xl font-habibi mb-6">Contact Information</h2>
          <p className="mb-2">For any inquiries, please contact:</p>
          <p className="text-xl font-bold mb-1">Kishore Ravuri</p>
          <p className="mb-1"><a href="mailto:kishoreravuri@gmail.com" className="underline hover:text-pink-600 dark:hover:text-gray-300">kishoreravuri@gmail.com</a></p>
          <p><a href="tel:+41799092749" className="hover:text-pink-600 dark:hover:text-gray-300">+41 799092749</a></p>
        </div>
      </div>
    </Layout>
  );
}
