import React, { useState } from 'react';
import DateSelector from './DateSelector';
import PricingDisplay from './PricingDisplay';
import PaymentGatewaySim from './PaymentGatewaySim';

const UserVerificationSim = ({ car }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleVerification = () => {
    if (verificationCode === '123456') {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handleDatesSelected = ({ startDate, endDate, totalPrice }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setTotalPrice(totalPrice);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Verification Simulation</h2>
      {!isVerified ? (
        <>
          <div className="mb-4">
            <label htmlFor="verification-code" className="block text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              id="verification-code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter code"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
            onClick={handleVerification}
          >
            Verify
          </button>
        </>
      ) : (
        <div className="text-green-500 mb-4">Verification Successful!</div>
      )}
      {isVerified && (
        <>
          <DateSelector car={car} onDatesSelected={handleDatesSelected} />
          <PricingDisplay car={car} startDate={startDate} endDate={endDate} />
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <PaymentGatewaySim car={car} />
        </>
      )}
    </div>
  );
};

export default UserVerificationSim;