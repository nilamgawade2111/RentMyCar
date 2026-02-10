import React from 'react';

function CarCard({ image, name, price, mileage, speed, fuelType, transmission }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{price}</p>
        <p className="text-gray-600">Mileage: {mileage}</p>
        <p className="text-gray-600">Speed: {speed}</p>
        <p className="text-gray-600">Fuel Type: {fuelType}</p>
        <p className="text-gray-600">Transmission: {transmission}</p>
      </div>
    </div>
  );
}

export default CarCard;