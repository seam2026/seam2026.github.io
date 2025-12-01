import Head from 'next/head';
import Layout from '@/components/Layout/Layout';

export default function FAQ() {
  const faqs = [
    { q: "Who can attend SEAM 2026?", a: "All Sai Student alumni from Europe are welcome to attend." },
    { q: "What is the registration fee?", a: "The registration fee details will be provided on the Information page." },
    { q: "Whom do I pay the registration fee to?", a: "Payment details will be shared in the Information page." },
    { q: "Is accommodation provided?", a: "Accommodation details will be shared upon registration and payment closer to the event date." },
    { q: "How do I travel to the location?", a: "The nearest airport is Zurich Airport. We plan to arrange shuttle service from Zurich Hauptbahnhof." },
    { q: "What should I bring to the event?", a: "A detailed packing list will be provided closer to the event date in the Information page." },
  ];

  return (
    <Layout>
      <Head>
        <title>FAQs & Contact - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 px-4 lg:px-8 text-white">
        <h1 className="text-4xl font-great-vibes text-center mb-12">FAQs & Contact</h1>
        
        <div className="max-w-xl mx-auto mb-16">
          <h2 className="text-2xl font-habibi mb-6 text-center">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-dark-450 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-yellow-500 mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='pb-24 px-4 lg:px-8'>
        <div className="max-w-xl mx-auto text-center bg-white text-dark-450 bg-opacity-10 p-8 rounded-xl">
          <h2 className="text-2xl font-habibi mb-6">Contact Information</h2>
          <p className="mb-2">For any inquiries, please contact:</p>
          <p className="text-xl font-bold mb-1">Kishore Ravuri</p>
          <p className="mb-1"><a href="mailto:kishoreravuri@gmail.com" className="underline">kishoreravuri@gmail.com</a></p>
          <p><a href="tel:+41799092749">+41 799092749</a></p>
        </div>
      </div>
    </Layout>
  );
}
