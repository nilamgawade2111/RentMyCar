import React from 'react';

const carData = [
  { id: 1, name: 'Toyota Camry', price: '$50/day', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537' },
  { id: 2, name: 'Honda Accord', price: '$55/day', image: 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035' },
  { id: 3, name: 'Ford Mustang', price: '$70/day', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' },
  { id: 4, name: 'Chevrolet Malibu', price: '$60/day', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a' },
  { id: 5, name: 'Nissan Altima', price: '$52/day', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537' },
  { id: 6, name: 'BMW 3 Series', price: '$80/day', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' }
];

function CarDetails() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {carData.map(car => (
        <div key={car.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600">{car.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarDetails;