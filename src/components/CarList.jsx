import React, { useState, useEffect } from 'react';
import mockCars from '../data/mockCars';
import CarListItem from './CarListItem';

const CarList = () => {
  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    const fetchAvailability = () => {
      const updatedCars = mockCars.map(car => ({
        ...car,
        available: Math.random() > 0.3,
      }));
      setAvailableCars(updatedCars);
    };

    fetchAvailability();
    const interval = setInterval(fetchAvailability, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {availableCars.map(car => (
        <CarListItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;