import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function Information({ announcements }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    if (isOpening) {
      // Give the layout a moment to collapse the previous tab and expand the new one
      setTimeout(() => {
        const element = document.getElementById(`accordion-${index}`);
        if (element) {
          // Calculate the position taking into account a fixed sticky header
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Information - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 pb-24 px-4 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300">
        <h1 className="text-4xl font-great-vibes text-center mb-12">Information</h1>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} id={`accordion-${index}`} className="border border-gray-200 dark:border-white/30 rounded-lg overflow-hidden bg-light-surface/80 dark:bg-dark-450 shadow-sm dark:shadow-none transition-colors duration-300">
              <button
                className="w-full px-6 py-4 text-left font-playfair text-xl flex justify-between items-center hover:bg-gray-100 dark:hover:bg-white/5 transition cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span>{announcement.title}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-6 bg-light-surface dark:bg-dark-500 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
                  <div className="prose dark:prose-invert max-w-none font-sans">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                      components={{
                        a: ({node, ...props}) => (
                          <a 
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            {...props} 
                          />
                        ),
                        table: ({node, ...props}) => (
                          <div className="my-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-white/20">
                            <table className="w-full min-w-[640px] border-collapse text-sm bg-white dark:bg-dark-500" {...props} />
                          </div>
                        ),
                        thead: ({node, ...props}) => (
                          <thead className="bg-gray-100 dark:bg-slate-700" {...props} />
                        ),
                        th: ({node, ...props}) => (
                          <th className="border border-gray-200 dark:border-slate-500 px-3 py-2 text-left font-semibold whitespace-nowrap bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100" {...props} />
                        ),
                        td: ({node, ...props}) => (
                          <td className="border border-gray-200 dark:border-slate-600 px-3 py-2 align-top text-gray-800 dark:text-gray-100" {...props} />
                        )
                      }}
                    >
                      {announcement.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {announcements.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">No announcements at this time.</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="rounded-xl border border-gray-200 dark:border-white/20 bg-light-surface/80 dark:bg-dark-450 px-6 py-5 text-center shadow-sm dark:shadow-none transition-colors duration-300">
            <p className="text-gray-700 dark:text-gray-200">
              Download the slide deck of the introduction presentation{' '}
              <a
                href="https://github.com/seam2026/seam2026.github.io/blob/master/public/assets/presentations/SEAM2026_info_presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline"
              >
                here
              </a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const notificationsDirectory = path.join(process.cwd(), 'notification_updates');
  let announcements = [];

  try {
    // Check if directory exists, if not return empty
    if (fs.existsSync(notificationsDirectory)) {
      const filenames = fs.readdirSync(notificationsDirectory);

      announcements = filenames.map((filename) => {
        const filePath = path.join(notificationsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Use filename as title (remove extension and replace underscores)
        const title = filename.replace(/\.md$/, '').replace(/_/g, ' ');
        
        return {
          title,
          content: fileContents,
        };
      });

      const desiredOrder = [
        "Registration Fees and Payment Details",
        "Travel and Transportation Details",
        "Packing List",
        "Rooms Allocation",
        "Activities Overview"
      ];

      announcements.sort((a, b) => {
        const indexA = desiredOrder.indexOf(a.title);
        const indexB = desiredOrder.indexOf(b.title);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return 0;
      });
    }
  } catch (error) {
    console.error("Error reading notifications:", error);
  }

  return {
    props: {
      announcements,
    },
  };
}
