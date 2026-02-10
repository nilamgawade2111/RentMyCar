import React from 'react';
import PropTypes from 'prop-types';

function CarCard({ car }) {
  return (
    <div className="flex bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <img src={car.image} alt={car.name} className="w-1/3 rounded-l-lg object-cover" />
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-gray-600 mt-2">{car.description}</p>
        <p className="text-gray-800 mt-4 font-semibold">${car.price} / day</p>
      </div>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarCard;
