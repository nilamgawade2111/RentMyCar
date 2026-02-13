import React, { useState } from 'react';
import PaymentGateway from './PaymentGateway';

const UserVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');

  const handleVerification = () => {
    if (verificationCode === '123456') {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Verification</h2>
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
      {isVerified && <PaymentGateway />}
    </div>
  );
};

export default UserVerification;