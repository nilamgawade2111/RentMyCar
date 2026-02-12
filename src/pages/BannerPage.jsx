import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function BannerPage() {
  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] min-h-screen flex flex-col justify-between">
      <Banner />
      <nav className="flex justify-center space-x-4 py-4">
        <a href="#home" className="text-white hover:text-gray-300 transition">Home</a>
        <a href="#about" className="text-white hover:text-gray-300 transition">About Us</a>
        <a href="#services" className="text-white hover:text-gray-300 transition">Services</a>
        <a href="#contact" className="text-white hover:text-gray-300 transition">Contact</a>
      </nav>
      {/* Additional content for the BannerPage can be added here */}
      <Footer />
    </div>
  );
}

export default BannerPage;