import React from 'react';

function Banner() {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-gray-100 text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
      <h1 className="text-2xl font-bold">Rent My Car</h1>
      <p className="mt-4 text-lg">Find the best rental cars at unbeatable prices.</p>
    </div>
  );
}

export default Banner;