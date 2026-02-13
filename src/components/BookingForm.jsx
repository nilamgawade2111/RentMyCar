import React, { useState, useEffect } from 'react';
import { format, differenceInDays } from 'date-fns';
import { addBooking } from '../utils/mockData';
import useRealTimeAvailability from '../hooks/useRealTimeAvailability';
import UserVerification from './UserVerification';
import PaymentSimulation from './PaymentSimulation';

const BookingForm = ({ car }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');
  const { isAvailable, loading, error: availabilityError } = useRealTimeAvailability(car.id, startDate, endDate);

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

  const handleBooking = () => {
    if (isAvailable && startDate && endDate && totalPrice > 0) {
      addBooking(car.id, startDate, endDate);
      alert('Booking confirmed!');
    } else {
      alert('Selected dates are not available.');
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [startDate, endDate]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Book {car.name}</h2>
      <div className="mb-4">
        <label htmlFor="start-date" className="block text-gray-700 mb-2">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          disabled={loading}
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
          disabled={loading || !startDate}
          min={startDate}
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      {availabilityError && <p className="text-red-500 mb-4">{availabilityError}</p>}
      {!isAvailable && !loading && <p className="text-red-500 mb-4">Selected dates are not available.</p>}
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!startDate || !endDate || totalPrice <= 0 || !isAvailable || loading}
        onClick={handleBooking}
      >
        {loading ? 'Checking availability...' : 'Confirm Booking'}
      </button>
      <UserVerification />
      <PaymentSimulation car={car} />
    </div>
  );
};

export default BookingForm;