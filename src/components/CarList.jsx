import React, { useState, useEffect } from 'react';
import mockCars from '../data/mockCars';
import CarListItem from './CarListItem';

const CarList = () => {
  const [availableCars, setAvailableCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const updatedCars = mockCars.map(car => ({
          ...car,
          available: Math.random() > 0.3,
        }));
        setAvailableCars(updatedCars.filter(car => car.available));
      } catch (err) {
        setError('Failed to fetch car availability');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
    const interval = setInterval(fetchAvailability, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading available cars...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {availableCars.length > 0 ? (
        availableCars.map(car => (
          <CarListItem key={car.id} car={car} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No cars available at the moment.
        </div>
      )}
    </div>
  );
};

export default CarList;