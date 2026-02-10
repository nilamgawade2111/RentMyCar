import React from 'react';

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
      <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&auto=format" alt={`${car.name} image`} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-gray-600 mt-2">Price per day: ${car.pricePerDay}</p>
        <p className="text-gray-600">Mileage: {car.mileage} miles</p>
        <p className="text-gray-600">Average Speed: {car.averageSpeed} mph</p>
        <p className="text-gray-600">Fuel Type: {car.fuelType}</p>
        <p className="text-gray-600">Transmission: {car.transmission}</p>
      </div>
    </div>
  );
}

export default CarCard;