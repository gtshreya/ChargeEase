// src/components/home/Hero.tsx
import React from 'react';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <div className="relative h-80 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden transition-colors">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:to-gray-700 opacity-80"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-900 dark:text-white px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Find your nearest charging spot with ChargeEase</h1>
        <p className="text-center mb-8">Discover over 1 million charging stations worldwide!</p>
        
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;