// src/pages/StationListings.tsx
import React from 'react';
import { motion } from 'framer-motion';

// This version doesn't wrap the content in <MainLayout> again
// because it's already wrapped in App.tsx

type Station = {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  available: boolean;
  imageUrl: string;
};

const stations: Station[] = [
  {
    id: 1,
    name: 'VoltZone Central',
    location: 'San Francisco, CA',
    rating: 4.7,
    reviews: 102,
    price: '$1.20',
    available: true,
    imageUrl: '/images/spots/voltzone.jpg'
  },
  {
    id: 2,
    name: 'ChargePoint 88',
    location: 'Austin, TX',
    rating: 4.3,
    reviews: 76,
    price: '$1.00',
    available: false,
    imageUrl: '/images/spots/chargepoint.jpg'
  },
];

const StationListings: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-10"
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Station Listings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((station) => (
          <div key={station.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-colors">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${station.imageUrl})` }}></div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{station.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{station.location}</p>

              <div className="flex items-center mt-2">
                <span className="text-yellow-400 mr-2">★ {station.rating}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({station.reviews} reviews)</span>
              </div>

              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                <span className="font-medium">Price:</span> {station.price}/hour
              </p>

              <p className={`text-sm mt-1 font-semibold ${station.available ? 'text-green-600' : 'text-red-500'}`}>
                {station.available ? 'Available now' : 'Currently unavailable'}
              </p>

              <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default StationListings;