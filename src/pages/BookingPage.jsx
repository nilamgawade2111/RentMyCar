import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Payment from '../components/Payment';
import UserVerification from '../components/UserVerification';
import { getAvailableCars } from '../utils/mockData';

function BookingPage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [availableCars, setAvailableCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (startDate && endDate) {
      const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
      setPrice(days * 100); // Assuming $100/day
    }
  }, [startDate, endDate]);

  useEffect(() => {
    const fetchAvailableCars = async () => {
      const cars = await getAvailableCars();
      setAvailableCars(cars);
    };
    fetchAvailableCars();
  }, []);

  const handleBooking = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/confirmation');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] flex flex-col justify-between">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Car</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                Start Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                End Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-800">Total Price: ${price}</p>
            </div>
            <button
              onClick={handleBooking}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Book Now'}
            </button>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Available Cars</h2>
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
              </article>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <UserVerification />
        </section>
        <section>
          <Payment />
        </section>
      </main>
    </div>
  );
}

export default BookingPage;