import { useState, useEffect } from 'react';

const initialCars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    price: '$40/day',
    image: 'https://example.com/toyota-corolla.jpg',
    description: 'A reliable and fuel-efficient compact car.',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    price: '$80/day',
    image: 'https://example.com/ford-mustang.jpg',
    description: 'A classic American muscle car with powerful performance.',
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    price: '$100/day',
    image: 'https://example.com/tesla-model-3.jpg',
    description: 'A modern electric car with cutting-edge technology.',
  },
  {
    id: 4,
    name: 'BMW 5 Series',
    price: '$120/day',
    image: 'https://example.com/bmw-5-series.jpg',
    description: 'A luxury sedan with a smooth and comfortable ride.',
  },
  {
    id: 5,
    name: 'Jeep Wrangler',
    price: '$90/day',
    image: 'https://example.com/jeep-wrangler.jpg',
    description: 'An off-road vehicle perfect for adventure seekers.',
  },
];

const useMockCars = () => {
  const [cars, setCars] = useState(initialCars);

  useEffect(() => {
    const updateAvailability = () => {
      const updatedCars = cars.map(car => ({
        ...car,
        available: Math.random() > 0.3, // 70% chance of being available
      }));
      setCars(updatedCars);
    };

    updateAvailability();
    const interval = setInterval(updateAvailability, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [cars]);

  return cars;
};

export default useMockCars;