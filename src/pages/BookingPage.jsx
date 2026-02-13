import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentSimulation from '../components/PaymentSimulation';
import UserVerification from '../components/UserVerification';
import { getAvailableCars } from '../utils/mockData';
import BookingForm from '../components/BookingForm';
import useRealTimeAvailability from '../hooks/useRealTimeAvailability';

function BookingPage() {
  const [availableCars, setAvailableCars] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const { isAvailable, loading, error } = useRealTimeAvailability(null, startDate, endDate);

  useEffect(() => {
    const fetchAvailableCars = async () => {
      const cars = await getAvailableCars(startDate, endDate);
      setAvailableCars(cars);
    };
    fetchAvailableCars();
  }, [startDate, endDate]);

  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] flex flex-col justify-between">
      <main className="flex-grow container mx-auto px-4 py-8">
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
                <BookingForm car={car} />
              </article>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <UserVerification />
        </section>
        <section>
          <PaymentSimulation />
        </section>
      </main>
    </div>
  );
}

export default BookingPage;