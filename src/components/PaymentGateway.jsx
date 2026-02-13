import React, { useState } from 'react';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = () => {
    setIsProcessing(true);
    setError('');

    setTimeout(() => {
      if (cardNumber && expiryDate && cvv && nameOnCard) {
        setPaymentSuccess(true);
        setIsProcessing(false);
      } else {
        setError('Please fill in all fields correctly.');
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Gateway</h2>
      <div className="mb-4">
        <label htmlFor="card-number" className="block text-gray-700 mb-2">Card Number</label>
        <input
          type="text"
          id="card-number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="expiry-date" className="block text-gray-700 mb-2">Expiry Date</label>
        <input
          type="text"
          id="expiry-date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="MM/YY"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="123"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name-on-card" className="block text-gray-700 mb-2">Name on Card</label>
        <input
          type="text"
          id="name-on-card"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="John Doe"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isProcessing}
        onClick={handlePayment}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
      {paymentSuccess && <p className="text-green-500 mt-4">Payment Successful!</p>}
    </div>
  );
};

export default PaymentGateway;