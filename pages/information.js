import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

export default function Information({ announcements }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <div key={index} className="border border-gray-200 dark:border-white/30 rounded-lg overflow-hidden bg-light-surface/80 dark:bg-dark-450 shadow-sm dark:shadow-none transition-colors duration-300">
              <button
                className="w-full px-6 py-4 text-left font-habibi text-xl flex justify-between items-center hover:bg-gray-100 dark:hover:bg-white/5 transition cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span>{announcement.title}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-6 bg-light-surface dark:bg-dark-500 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
                  <div className="prose dark:prose-invert max-w-none font-sans">
                    <ReactMarkdown 
                      remarkPlugins={[remarkBreaks]}
                      components={{
                        a: ({node, ...props}) => (
                          <a 
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            {...props} 
                          />
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
        "Accommodation Information",
        "Travel and Transportation Details",
        "Event Guidelines and Packing List",
        "Activities and events Overview"
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
