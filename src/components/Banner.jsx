import React from 'react';

function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#000080] to-[#36454F] text-white text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
      <h1 className="text-2xl font-bold">Welcome to RentMyCar</h1>
      <p className="mt-4 text-lg">Find the best rental cars at unbeatable prices.</p>
      <p className="mt-2 text-sm italic">"Drive the luxury you deserve."</p>
      <p className="mt-2 text-sm">Experience the pinnacle of automotive excellence with RentMyCar.</p>
    </div>
  );
}

export default Banner;
