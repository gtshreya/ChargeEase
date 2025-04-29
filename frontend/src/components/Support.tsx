// src/pages/Support.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const Support = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }, 1000); // Wait for 2 seconds before scrolling
      }
    }
  }, [location]);

  return (
    
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-10 text-gray-900 dark:text-white"
      >
        <h1 className="text-3xl font-bold mb-8">Help & Support</h1>

        <div id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Q:</strong> How do I find a nearby charging station?<br /><strong>A:</strong> Use the search bar on the homepage to find stations by location.</li>
            <li><strong>Q:</strong> Can I reserve a charging spot in advance?<br /><strong>A:</strong> Yes, simply click on a station and select your preferred time.</li>
            <li><strong>Q:</strong> How do I reset my password?<br /><strong>A:</strong> Click on "Forgot Password" on the login page and follow the steps.</li>
          </ul>
        </div>

        <div id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" />
            <input type="email" placeholder="Your email" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" />
            <textarea placeholder="Your message" rows={4} className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"></textarea>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div id="manual">
          <h2 className="text-2xl font-semibold mb-4">User Manual</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Our user manual provides step-by-step instructions to help you set up and use our platform efficiently. You can download the manual or read the sections relevant to your needs.
          </p>
          <a
            href="/downloads/user-manual.pdf"
            className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Manual
          </a>
        </div>
      </motion.section>
   
  );
};

export default Support;