// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    // Apply smooth theme transitions globally
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex justify-between items-center p-4 
      bg-gradient-to-r from-gray-100 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      text-gray-900 dark:text-white transition-colors duration-500">

      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-10">ChargeEase</h1>
        <nav className="hidden sm:flex space-x-6">
          <Link to="/stations" className="hover:text-gray-600 dark:hover:text-gray-300">Stations</Link>
          <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Availability</a>
          <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Reserve</a>
        </nav>
      </div>

      <div className="flex items-center space-x-2">
        <Link to="/signup">
          <button className="px-4 py-1 bg-transparent border border-gray-900 dark:border-white rounded-full 
          text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Sign Up
          </button>
        </Link>

        <Link to="/login">
          <button className="px-4 py-1 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors">
            Log in
          </button>
        </Link>

        <button
          onClick={toggleTheme}
          className="focus:outline-none hover:scale-110 transition-transform"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-400 transition-colors duration-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700 transition-colors duration-500" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;