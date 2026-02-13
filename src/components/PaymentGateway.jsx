import React, { useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';

const PaymentGateway = ({ car }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const days = differenceInDays(new Date(endDate), new Date(startDate));
      const pricePerDay = car.pricePerDay;
      setTotalPrice(days > 0 ? days * pricePerDay : 0);
    }
  }, [startDate, endDate, car.pricePerDay]);

  const handleVerification = () => {
    if (verificationCode === '1234') {
      setIsVerified(true);
      alert('Verification successful!');
    } else {
      alert('Invalid verification code.');
    }
  };

  const handlePayment = () => {
    if (userName && userEmail && paymentMethod && isVerified) {
      setIsProcessing(true);
      setTimeout(() => {
        setPaymentStatus('Payment Successful');
        setIsProcessing(false);
        alert(`Payment successful for ${car.name}!\nName: ${userName}\nEmail: ${userEmail}`);
      }, 2000);
    } else {
      alert('Please fill in all fields correctly and complete verification.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{car.name} Payment Gateway</h2>
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
        onClick={handlePayment}
        className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!userName || !userEmail || !startDate || !endDate || totalPrice <= 0 || !paymentMethod || !isVerified || isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Make Payment'}
      </button>
      {paymentStatus && (
        <div className="mt-4 text-green-600 font-bold">
          {paymentStatus}
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;