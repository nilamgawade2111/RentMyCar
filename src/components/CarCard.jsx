import React from 'react';

function CarCard({ image, name, price, mileage, speed, fuel, transmission }) {
  return (
    <div className="bg-card rounded-lg shadow-subtle hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
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