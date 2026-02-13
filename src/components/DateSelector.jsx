import React, { useState, useEffect } from 'react';
import { format, differenceInDays } from 'date-fns';

const DateSelector = ({ car, onDatesSelected }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');

  const calculatePrice = () => {
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
  };

  useEffect(() => {
    calculatePrice();
  }, [startDate, endDate]);

  const handleDateChange = () => {
    if (startDate && endDate && totalPrice > 0) {
      onDatesSelected({ startDate, endDate, totalPrice });
    }
  };

  useEffect(() => {
    handleDateChange();
  }, [totalPrice]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Select Booking Dates for {car.name}</h2>
      <div className="mb-4">
        <label htmlFor="start-date" className="block text-gray-700 mb-2">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="end-date" className="block text-gray-700 mb-2">End Date</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          min={startDate}
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DateSelector;