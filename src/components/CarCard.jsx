import React from 'react';

const CarCard = ({ priceRange, modelDetails, averageInfo }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
      <h3 className="text-xl font-bold">{modelDetails.name}</h3>
      <p className="text-gray-600">Price Range: {priceRange}</p>
      <p className="text-gray-600">Mileage: {averageInfo.mileage}</p>
      <p className="text-gray-600">Rating: {averageInfo.rating}</p>
    </div>
  );
};

export default CarCard;