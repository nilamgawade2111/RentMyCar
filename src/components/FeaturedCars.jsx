import React from 'react';

const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      name: 'Luxury Sedan',
      description: 'Experience the ultimate comfort and style.',
      image: 'car1.jpg',
    },
    {
      id: 2,
      name: 'Family SUV',
      description: 'Spacious and perfect for family trips.',
      image: 'car2.jpg',
    },
    {
      id: 3,
      name: 'Sporty Coupe',
      description: 'Feel the thrill of the road with this sporty coupe.',
      image: 'car3.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          aria-label={`Featured car: ${car.name}`}
        >
          <img
            src={car.image}
            alt={`Image of ${car.name}`}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{car.name}</h3>
          <p className="text-gray-700">{car.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCars;