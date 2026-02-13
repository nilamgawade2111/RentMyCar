import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentGatewaySim from '../components/PaymentGatewaySim';
import UserVerificationSim from '../components/UserVerificationSim';
import DateSelector from '../components/DateSelector';
import PricingDisplay from '../components/PricingDisplay';
import { getAvailableCars, addBooking } from '../utils/mockData';
import BookingConfirmation from '../components/BookingConfirmation';
import useRealTimeAvailability from '../hooks/useRealTimeAvailability';

function BookingPage() {
  const [availableCars, setAvailableCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();

  const { isAvailable, loading, error } = useRealTimeAvailability(selectedCar?.id, startDate, endDate);

  useEffect(() => {
    const fetchAvailableCars = async () => {
      const cars = await getAvailableCars(startDate, endDate);
      setAvailableCars(cars);
    };
    fetchAvailableCars();
  }, [startDate, endDate]);

  const handleDatesSelected = ({ startDate, endDate, totalPrice }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setTotalPrice(totalPrice);
  };

  const handleBooking = (car) => {
    if (startDate && endDate && totalPrice > 0 && isAvailable) {
      addBooking(car.id, startDate, endDate);
      setSelectedCar(car);
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] flex flex-col justify-between">
      <main className="flex-grow container mx-auto px-4 py-8">
        {!bookingConfirmed ? (
          <>
            <section className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Book Your Car</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {availableCars.map((car) => (
                  <article key={car.id} className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={car.image}
                      alt={`Image of ${car.name}`}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{car.name}</h2>
                    <p className="text-lg text-gray-600 mb-4">{car.description}</p>
                    <p className="text-lg font-semibold text-gray-800 mb-4">Price: {car.price}</p>
                    <DateSelector car={car} onDatesSelected={handleDatesSelected} />
                    <PricingDisplay car={car} startDate={startDate} endDate={endDate} />
                    {loading ? (
                      <p className="text-blue-500">Checking availability...</p>
                    ) : error ? (
                      <p className="text-red-500">{error}</p>
                    ) : (
                      <button
                        className={`mt-4 py-2 px-4 rounded transition-all duration-300 ${
                          isAvailable
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        }`}
                        onClick={() => handleBooking(car)}
                        disabled={!isAvailable}
                      >
                        {isAvailable ? 'Book Now' : 'Unavailable'}
                      </button>
                    )}
                  </article>
                ))}
              </div>
            </section>
            <section className="mb-8">
              <UserVerificationSim car={selectedCar} />
            </section>
            <section>
              <PaymentGatewaySim car={selectedCar} />
            </section>
          </>
        ) : (
          <BookingConfirmation />
        )}
      </main>
    </div>
  );
}

export default BookingPage;