// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">ChargeSpot</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Your go-to for hassle-free charging since 1997!</p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-4">ChargeSpot © 2023</p>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium mb-2">Support</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Helpdesk</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Assistance</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">User manual</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Reach out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;