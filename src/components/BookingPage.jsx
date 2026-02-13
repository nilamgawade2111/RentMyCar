import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockCars from '../data/mockCars';

const BookingPage = () => {
  const { carId } = useParams();
  const car = mockCars.find((car) => car.id === parseInt(carId, 10));

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (startDate && endDate) {
      const days = Math.max(0, (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
      const pricePerDay = parseInt(car.price.replace('$', '').replace('/day', ''), 10);
      setTotalPrice(days * pricePerDay);
    }
  }, [startDate, endDate, car.price]);

  const handleBooking = () => {
    if (userName && userEmail && startDate && endDate && totalPrice > 0) {
      alert(`Booking confirmed for ${car.name}!\nName: ${userName}\nEmail: ${userEmail}\nTotal Price: $${totalPrice}`);
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="bg-blue-500 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{car.name} Booking</h2>
      <div className="mb-4">
        <label htmlFor="user-name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="user-name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="user-email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="user-email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="start-date" className="block text-gray-700">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        />
      </div>
      <div className="mb-4">
        <p className="text-lg text-gray-800">Total Price: <span className="font-bold">${totalPrice}</span></p>
      </div>
      <button
        type="button"
        onClick={handleBooking}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
        disabled={!userName || !userEmail || !startDate || !endDate || totalPrice <= 0}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingPage;