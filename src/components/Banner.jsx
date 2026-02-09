import React from 'react';

function Banner() {
  return (
    <div className="bg-blue-900 text-white text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
      <h1 className="text-2xl font-bold text-white">Welcome to RentMyCar</h1>
      <p className="mt-4 text-gray-300">Find the best rental cars at unbeatable prices.</p>
      <p className="mt-2 text-gray-400">Your journey starts here. Drive your dreams.</p>
      <p className="mt-2 text-gray-400">Reliable cars, exceptional service.</p>
    </div>
  );
}

export default Banner;
