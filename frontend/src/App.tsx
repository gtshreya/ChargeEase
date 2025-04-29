// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './components/Home';
import Signup from './components/home/signup';
import Login from './components/home/login';
import StationListings from './components/StationListings'; // ✅ Add this line

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stations" element={<StationListings />} /> {/* ✅ New Route */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;