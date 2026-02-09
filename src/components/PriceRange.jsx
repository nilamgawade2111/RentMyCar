import React from 'react';

const PriceRange = ({ priceRange }) => {
  return (
    <div className="text-gray-600">
      <span>Price Range: {priceRange}</span>
    </div>
  );
};

export default PriceRange;