import { useState, useEffect, useCallback } from 'react';
import mockCars from '../data/mockCars';

const useAvailability = () => {
  const [availableCars, setAvailableCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const updatedCars = mockCars.map(car => ({
          ...car,
          available: Math.random() > 0.2,
        }));
        setAvailableCars(updatedCars);
      } catch (err) {
        setError('Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
    const interval = setInterval(fetchCars, 5000);

    return () => clearInterval(interval);
  }, []);

  const bookCar = useCallback((carId, startDate, endDate) => {
    const carIndex = availableCars.findIndex((car) => car.id === carId);
    if (carIndex !== -1 && availableCars[carIndex].available) {
      const updatedCars = [...availableCars];
      updatedCars[carIndex] = {
        ...updatedCars[carIndex],
        isBooked: true,
        bookingDetails: { startDate, endDate },
        available: false,
      };
      setAvailableCars(updatedCars);
      return true;
    }
    return false;
  }, [availableCars]);

  return { availableCars, loading, error, bookCar };
};

export default useAvailability;