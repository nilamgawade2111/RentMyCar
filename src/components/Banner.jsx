import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 text-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <h1 className="text-5xl font-bold mb-4">Welcome to RentMyCar</h1>
      <p className="text-xl mb-8">Your trusted platform for car rentals</p>
      <button className="btn bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 hover:text-white transition-all duration-300">Learn More</button>
    </section>
  );
};

export default Banner;
