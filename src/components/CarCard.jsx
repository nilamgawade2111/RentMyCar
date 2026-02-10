import React from 'react';
import { Link } from 'react-router-dom';
import carData from '../data/carData';

function CarCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {carData.map((car) => (
        <div key={car.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600 mt-2">{car.description}</p>
            <p className="text-gray-800 font-semibold mt-4">Price: ${car.price}/day</p>
            <Link to={`/cars/${car.id}`} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarCard;
