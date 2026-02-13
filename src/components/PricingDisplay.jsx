import React, { useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';

const PricingDisplay = ({ car, startDate, endDate }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = differenceInDays(end, start);

      if (days > 0) {
        const pricePerDay = parseFloat(car.price.replace('$', '').replace('/day', ''));
        setTotalPrice(days * pricePerDay);
        setError('');
      } else {
        setTotalPrice(0);
        setError('End date must be after start date.');
      }
    }
  }, [startDate, endDate, car.price]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Pricing Details for {car.name}</h2>
      {error ? (
        <p className="text-red-500 mb-4">{error}</p>
      ) : (
        <p className="text-lg font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
      )}
    </div>
  );
};

export default PricingDisplay;