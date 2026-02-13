import React, { useState } from 'react';
import { addBooking } from '../utils/mockData';
import useRealTimeAvailability from '../hooks/useRealTimeAvailability';
import UserVerification from './UserVerification';
import PaymentSimulation from './PaymentSimulation';
import DateSelector from './DateSelector';
import PricingDisplay from './PricingDisplay';

const BookingForm = ({ car }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { isAvailable, loading, error: availabilityError } = useRealTimeAvailability(car.id, startDate, endDate);

  const handleDatesSelected = ({ startDate, endDate, totalPrice }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setTotalPrice(totalPrice);
  };

  const handleBooking = () => {
    if (isAvailable && startDate && endDate && totalPrice > 0 && isVerified && paymentSuccess) {
      addBooking(car.id, startDate, endDate);
      alert('Booking confirmed!');
    } else {
      alert('Please ensure all steps are completed and dates are available.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Book {car.name}</h2>
      <DateSelector car={car} onDatesSelected={handleDatesSelected} />
      <PricingDisplay car={car} startDate={startDate} endDate={endDate} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {availabilityError && <p className="text-red-500 mb-4">{availabilityError}</p>}
      {!isAvailable && !loading && <p className="text-red-500 mb-4">Selected dates are not available.</p>}
      <UserVerification onVerificationSuccess={() => setIsVerified(true)} />
      <PaymentSimulation car={car} onPaymentSuccess={() => setPaymentSuccess(true)} />
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!startDate || !endDate || totalPrice <= 0 || !isAvailable || loading || !isVerified || !paymentSuccess}
        onClick={handleBooking}
      >
        {loading ? 'Checking availability...' : 'Confirm Booking'}
      </button>
    </div>
  );
};

export default BookingForm;