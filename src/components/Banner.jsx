import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to RentMyCar</h1>
      <p className="text-xl mb-8">Your trusted platform for car rentals</p>
      <button className="btn transition-all duration-300">Learn More</button>
    </section>
  );
};

export default Banner;
