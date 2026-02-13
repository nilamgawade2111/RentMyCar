import React, { useState, useEffect } from 'react';

const DateSelector = ({ car, onDatesChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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

  useEffect(() => {
    onDatesChange({ startDate, endDate, totalPrice, availability });
  }, [startDate, endDate, totalPrice, availability, onDatesChange]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="start-date" className="block text-gray-700">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-label="Start Date"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="end-date" className="block text-gray-700">End Date</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-label="End Date"
        />
      </div>
      {!availability && (
        <div className="mb-4 text-red-600">
          The selected dates are not available. Please choose different dates.
        </div>
      )}
      <div className="mb-4">
        <p className="text-lg text-gray-800">Total Price: <span className="font-bold">${totalPrice}</span></p>
      </div>
    </div>
  );
};

export default DateSelector;