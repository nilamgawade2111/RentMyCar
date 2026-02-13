import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mockCars from '../data/mockCars';

const CarList = () => {
  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    const fetchAvailability = () => {
      const updatedCars = mockCars.map(car => ({
        ...car,
        available: Math.random() > 0.3,
      }));
      setAvailableCars(updatedCars);
    };

    fetchAvailability();
    const interval = setInterval(fetchAvailability, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {availableCars.map(car => (
        <div
          key={car.id}
          className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
            car.available ? '' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600">{car.price}</p>
            <p className="text-gray-500 mt-2">{car.description}</p>
            {car.available ? (
              <Link
                to={`/booking/${car.id}`}
                className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              >
                Book Now
              </Link>
            ) : (
              <span className="mt-4 inline-block bg-gray-400 text-white py-2 px-4 rounded-md shadow-sm cursor-not-allowed">
                Unavailable
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;