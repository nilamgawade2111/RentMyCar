import React, { useState, useEffect } from 'react';
import DateSelector from './DateSelector';
import PricingDisplay from './PricingDisplay';

const PaymentGatewaySim = ({ car }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleDatesSelected = ({ startDate, endDate, totalPrice }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setTotalPrice(totalPrice);
  };

  const handlePayment = () => {
    if (!isVerified) {
      setError('User verification is required before payment.');
      return;
    }
    if (!startDate || !endDate || totalPrice <= 0) {
      setError('Please select valid dates and ensure the total price is calculated.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setPaymentSuccess(true);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Simulation for {car?.name}</h2>
      <DateSelector car={car} onDatesSelected={handleDatesSelected} />
      <PricingDisplay car={car} startDate={startDate} endDate={endDate} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isProcessing || !startDate || !endDate || totalPrice <= 0 || !isVerified}
        onClick={handlePayment}
      >
        {isProcessing ? 'Processing...' : 'Simulate Payment'}
      </button>
      {paymentSuccess && <p className="text-green-500 mt-4">Payment Simulation Successful!</p>}
    </div>
  );
};

export default PaymentGatewaySim;