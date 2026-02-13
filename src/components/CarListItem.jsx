import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarListItem = ({ car }) => {
  const [isAvailable, setIsAvailable] = useState(car.available);

  useEffect(() => {
    const checkAvailability = () => {
      // Simulate real-time availability check
      setIsAvailable(Math.random() > 0.3);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
        isAvailable ? '' : 'opacity-50 cursor-not-allowed'
      }`}
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-gray-600">${car.pricePerDay}/day</p>
        <p className="text-gray-500 mt-2">{car.description}</p>
        <ul className="list-disc list-inside text-gray-500 mt-2">
          {car.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {isAvailable ? (
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
  );
};

CarListItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    pricePerDay: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CarListItem;