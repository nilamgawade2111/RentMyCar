import React, { useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';

const PaymentSimulation = ({ car }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const days = differenceInDays(new Date(endDate), new Date(startDate));
      const pricePerDay = parseInt(car.price.replace('$', '').replace('/day', ''), 10);
      setTotalPrice(days > 0 ? days * pricePerDay : 0);
    }
  }, [startDate, endDate, car.price]);

  const handleBooking = () => {
    if (userName && userEmail && startDate && endDate && totalPrice > 0 && paymentMethod && isVerified) {
      setBookingConfirmed(true);
      alert(`Booking confirmed for ${car.name}!\nName: ${userName}\nEmail: ${userEmail}\nTotal Price: $${totalPrice}`);
    } else {
      alert('Please fill in all fields correctly and complete verification.');
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
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{car.name} Payment Simulation</h2>
      <div className="mb-4">
        <label htmlFor="user-name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="user-name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-label="User Name"
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
          aria-label="User Email"
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
      <div className="mb-4">
        <label htmlFor="payment-method" className="block text-gray-700">Payment Method</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-label="Payment Method"
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
          aria-label="Verification Code"
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
        disabled={!userName || !userEmail || !startDate || !endDate || totalPrice <= 0 || !paymentMethod || !isVerified}
      >
        {bookingConfirmed ? 'Booking Confirmed' : 'Simulate Payment'}
      </button>
    </div>
  );
};

export default PaymentSimulation;