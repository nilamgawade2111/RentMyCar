import React from 'react';

function Banner() {
  return (
    <div className="bg-black text-white text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
      <h1 className="text-xl font-bold text-blue-400">Welcome to RentMyCar test app</h1>
      <p className="mt-4 text-purple-400">Find the best rental cars at unbeatable prices.</p>
    </div>
  );
}

export default Banner;
