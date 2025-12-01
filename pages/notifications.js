import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function Notifications({ announcements }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <Head>
        <title>Notifications - SEAM 2026</title>
      </Head>
      <div className="min-h-screen pt-24 pb-24 px-4 lg:px-8 text-white">
        <h1 className="text-4xl font-great-vibes text-center mb-12">Important Announcements</h1>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="border border-white border-opacity-30 rounded-lg overflow-hidden bg-dark-450">
              <button
                className="w-full px-6 py-4 text-left font-habibi text-xl flex justify-between items-center hover:bg-white hover:bg-opacity-5 transition"
                onClick={() => toggleAccordion(index)}
              >
                <span>{announcement.title}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-6 bg-dark-500 border-t border-white border-opacity-10">
                  <div className="prose prose-invert max-w-none font-sans">
                    <ReactMarkdown>{announcement.content}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {announcements.length === 0 && (
            <p className="text-center text-gray-400">No announcements at this time.</p>
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
