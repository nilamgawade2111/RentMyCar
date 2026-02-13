import React, { useState } from 'react';

const UserVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleVerification = () => {
    if (verificationCode === '1234') {
      setIsVerified(true);
      alert('Verification successful!');
    } else {
      alert('Invalid verification code.');
    }
  };

  const handlePayment = () => {
    if (paymentMethod && isVerified) {
      setIsProcessing(true);
      setTimeout(() => {
        setPaymentStatus('Payment Successful');
        setIsProcessing(false);
        alert('Payment successful!');
      }, 2000);
    } else {
      alert('Please select a payment method and complete verification.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Verification & Payment</h2>
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
      <button
        type="button"
        onClick={handlePayment}
        className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!paymentMethod || !isVerified || isProcessing}
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

export default UserVerification;