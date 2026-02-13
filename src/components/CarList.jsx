import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockCars = [
  {
    id: 1,
    name: 'Tesla Model S',
    price: '$100/day',
    image: 'https://via.placeholder.com/300x200',
    description: 'A luxury electric sedan with impressive range and performance.',
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    price: '$80/day',
    image: 'https://via.placeholder.com/300x200',
    description: 'A compact executive car with sporty handling and a premium interior.',
  },
  {
    id: 3,
    name: 'Audi A4',
    price: '$90/day',
    image: 'https://via.placeholder.com/300x200',
    description: 'A stylish and comfortable sedan with advanced technology features.',
  },
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBookingRequest = (car) => {
    setSelectedCar(car);
    alert(`Booking request for ${car.name} has been initiated.`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockCars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={car.image} alt={`Image of ${car.name}`} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600">{car.description}</p>
            <p className="text-gray-800 font-semibold">{car.price}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
              onClick={() => handleBookingRequest(car)}
            >
              Book Now
            </button>
            <Link to={`/car-details/${car.id}`} className="block mt-2 text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;