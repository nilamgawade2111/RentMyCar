import { useState, useEffect } from 'react';

const initialCars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    price: '$40/day',
    image: 'https://example.com/toyota-corolla.jpg',
    description: 'A reliable and fuel-efficient compact car.',
    available: true,
    features: ['Air Conditioning', 'Automatic Transmission', 'Bluetooth'],
    bookings: [],
  },
  {
    id: 2,
    name: 'Ford Mustang',
    price: '$80/day',
    image: 'https://example.com/ford-mustang.jpg',
    description: 'A classic American muscle car with powerful performance.',
    available: true,
    features: ['V8 Engine', 'Leather Seats', 'Bluetooth'],
    bookings: [],
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    price: '$100/day',
    image: 'https://example.com/tesla-model-3.jpg',
    description: 'A modern electric car with cutting-edge technology.',
    available: true,
    features: ['Electric', 'Autopilot', 'Bluetooth'],
    bookings: [],
  },
  {
    id: 4,
    name: 'BMW 5 Series',
    price: '$120/day',
    image: 'https://example.com/bmw-5-series.jpg',
    description: 'A luxury sedan with a smooth and comfortable ride.',
    available: true,
    features: ['Luxury Interior', 'Sunroof', 'Bluetooth'],
    bookings: [],
  },
  {
    id: 5,
    name: 'Jeep Wrangler',
    price: '$90/day',
    image: 'https://example.com/jeep-wrangler.jpg',
    description: 'An off-road vehicle perfect for adventure seekers.',
    available: true,
    features: ['4x4 Drive', 'Removable Roof', 'Bluetooth'],
    bookings: [],
  },
];

const useMockCars = () => {
  const [cars, setCars] = useState(initialCars);

  useEffect(() => {
    const updateAvailability = () => {
      const updatedCars = cars.map(car => {
        const isBooked = car.bookings.some(booking => {
          const now = new Date();
          const start = new Date(booking.startDate);
          const end = new Date(booking.endDate);
          return now >= start && now <= end;
        });
        return {
          ...car,
          available: !isBooked,
        };
      });
      setCars(updatedCars);
    };

    updateAvailability();
    const interval = setInterval(updateAvailability, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [cars]);

  const bookCar = (carId, startDate, endDate) => {
    setCars(prevCars =>
      prevCars.map(car =>
        car.id === carId
          ? {
              ...car,
              bookings: [...car.bookings, { startDate, endDate }],
            }
          : car
      )
    );
  };

  return { cars, bookCar };
};

export default useMockCars;