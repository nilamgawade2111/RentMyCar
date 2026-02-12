import React from 'react';

function Banner() {
  return (
    <div className="bg-gradient-to-r from-navy-900 to-gray-800 text-white text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
      <h1 className="text-xl font-bold">Rent My Car</h1>
      <p className="mt-4">Find the best rental cars at unbeatable prices.</p>
    </div>
  );
}

export default Banner;