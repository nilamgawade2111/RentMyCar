import React from 'react';

function Banner() {
  return (
    <div className="bg-blue-800 text-white text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-2xl font-bold text-white">Welcome to RentMyCar</h1>
      <p className="mt-4 text-gray-200">Experience the freedom of the open road with our premium rental cars.</p>
      <p className="mt-2 text-gray-300">Your journey starts here. Drive your dreams.</p>
      <p className="mt-2 text-gray-300">Reliable cars, exceptional service.</p>
    </div>
  );
}

export default Banner;
