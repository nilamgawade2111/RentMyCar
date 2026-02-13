import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PricingDisplay = ({ car, startDate, endDate }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [availability, setAvailability] = useState(true);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (startDate && endDate) {
        const days = Math.max(0, (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
        setTotalPrice(days * car.pricePerDay);

        const unavailableDates = ['2023-12-25', '2023-12-31'];
        const isUnavailable = unavailableDates.some(date => 
          new Date(date) >= new Date(startDate) && new Date(date) <= new Date(endDate)
        );
        setAvailability(!isUnavailable);
      }
    };

    calculateTotalPrice();
  }, [startDate, endDate, car.pricePerDay]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{car.name} Pricing</h2>
      <div className="mb-4">
        <p className="text-lg text-gray-800">Total Price: <span className="font-bold">${totalPrice}</span></p>
      </div>
      {!availability && (
        <div className="text-red-600">
          The selected dates are not available. Please choose different dates.
        </div>
      )}
    </div>
  );
};

PricingDisplay.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pricePerDay: PropTypes.number.isRequired,
  }).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default PricingDisplay;