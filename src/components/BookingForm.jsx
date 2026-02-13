import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockCars from '../data/mockCars';
import PaymentGateway from './PaymentGateway';
import UserVerification from './UserVerification';

const BookingForm = () => {
  const { carId } = useParams();
  const car = mockCars.find((car) => car.id === parseInt(carId, 10));

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [availability, setAvailability] = useState(true);

  useEffect(() => {
    const checkAvailability = () => {
      if (startDate && endDate) {
        const days = Math.max(0, (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
        const pricePerDay = parseInt(car.price.replace('$', '').replace('/day', ''), 10);
        setTotalPrice(days * pricePerDay);

        // Mock availability check
        const unavailableDates = ['2023-12-25', '2023-12-31']; // Example unavailable dates
        const isUnavailable = unavailableDates.some(date => 
          new Date(date) >= new Date(startDate) && new Date(date) <= new Date(endDate)
        );
        setAvailability(!isUnavailable);
      }
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 5000);

    return () => clearInterval(interval);
  }, [startDate, endDate, car.price]);

  const handleBooking = () => {
    if (userName && userEmail && startDate && endDate && totalPrice > 0 && paymentMethod && isVerified && availability) {
      alert(`Booking confirmed for ${car.name}!\nName: ${userName}\nEmail: ${userEmail}\nTotal Price: $${totalPrice}`);
    } else {
      alert('Please fill in all fields correctly, complete verification, and ensure availability.');
    }
  };

  const handleVerification = () => {
    if (verificationCode === '1234') {
      setIsVerified(true);
      alert('Verification successful!');
    } else {
      alert('Invalid verification code.');
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
      {!availability && (
        <div className="mb-4 text-red-600">
          The selected dates are not available. Please choose different dates.
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="payment-method" className="block text-gray-700">Payment Method</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a payment method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="verification-code" className="block text-gray-700">Verification Code</label>
        <input
          type="text"
          id="verification-code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="button"
          onClick={handleVerification}
          className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
        >
          Verify
        </button>
      </div>
      <div className="mb-4">
        <p className="text-lg text-gray-800">Total Price: <span className="font-bold">${totalPrice}</span></p>
      </div>
      <button
        type="button"
        onClick={handleBooking}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
        disabled={!userName || !userEmail || !startDate || !endDate || totalPrice <= 0 || !paymentMethod || !isVerified || !availability}
      >
        Book Now
      </button>
      <PaymentGateway car={car} />
      <UserVerification />
    </div>
  );
};

export default BookingForm;