import { useState, useEffect } from 'react';
import { getBookings } from '../utils/mockData';

const useRealTimeAvailability = (carId, startDate, endDate) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const checkAvailability = () => {
      setLoading(true);
      setError('');

      try {
        const bookings = getBookings();
        const isBooked = bookings.some(booking =>
          booking.carId === carId &&
          ((new Date(startDate) >= new Date(booking.startDate) && new Date(startDate) <= new Date(booking.endDate)) ||
          (new Date(endDate) >= new Date(booking.startDate) && new Date(endDate) <= new Date(booking.endDate)))
        );
        setIsAvailable(!isBooked);
      } catch (err) {
        setError('Failed to check availability. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (startDate && endDate) {
      checkAvailability();
    }
  }, [carId, startDate, endDate]);

  return { isAvailable, loading, error };
};

export default useRealTimeAvailability;