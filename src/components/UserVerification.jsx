import React, { useState } from 'react';
import PaymentGateway from './PaymentGateway';

const mockCars = [
  { id: 1, name: 'Toyota Camry', price: '$50/day', description: 'A reliable sedan', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537' },
  { id: 2, name: 'Honda Accord', price: '$55/day', description: 'A comfortable ride', image: 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035' },
  { id: 3, name: 'Ford Mustang', price: '$70/day', description: 'A sporty coupe', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' },
];

const UserVerification = ({ onVerificationSuccess }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleVerification = () => {
    if (verificationCode === '123456') {
      setIsVerified(true);
      setError('');
      if (onVerificationSuccess) {
        onVerificationSuccess();
      }
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Verification</h2>
      {!isVerified ? (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
            />
          </div>
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
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Available Cars</h3>
          <div className="grid grid-cols-1 gap-4">
            {mockCars.map((car) => (
              <div key={car.id} className="bg-gray-100 p-4 rounded-lg shadow">
                <img src={car.image} alt={`Image of ${car.name}`} className="w-full h-32 object-cover rounded mb-2" />
                <h4 className="text-lg font-bold text-gray-800">{car.name}</h4>
                <p className="text-gray-600">{car.description}</p>
                <p className="text-gray-800 font-semibold">{car.price}</p>
              </div>
            ))}
          </div>
          <PaymentGateway />
        </div>
      )}
    </div>
  );
};

export default UserVerification;