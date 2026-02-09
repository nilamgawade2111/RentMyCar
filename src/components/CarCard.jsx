import React from 'react';

function CarCard({ image, name, price, mileage, speed, fuel, transmission }) {
  return (
    <div className="flex bg-white rounded-lg shadow-subtle hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-1/3 h-auto object-cover rounded-l-lg" />
      <div className="p-4 w-2/3">
        <h2 className="text-xl font-bold text-primary">{name}</h2>
        <p className="text-secondary">{price}</p>
        <ul className="text-secondary">
          <li>Mileage: {mileage}</li>
          <li>Speed: {speed}</li>
          <li>Fuel: {fuel}</li>
          <li>Transmission: {transmission}</li>
        </ul>
      </div>
    </div>
  );
}

export default CarCard;