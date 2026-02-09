import React from 'react';

const carData = [
  { id: 1, name: 'Toyota Camry', price: '$50/day', mileage: '30,000 miles', speed: '120 mph', fuel: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1541446654331-0af808871cc0?w=400&h=300&fit=crop&auto=format' },
  { id: 2, name: 'Honda Accord', price: '$55/day', mileage: '25,000 miles', speed: '115 mph', fuel: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 3, name: 'Ford Mustang', price: '$70/day', mileage: '20,000 miles', speed: '150 mph', fuel: 'Gasoline', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 4, name: 'Chevrolet Malibu', price: '$60/day', mileage: '28,000 miles', speed: '130 mph', fuel: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 5, name: 'Nissan Altima', price: '$52/day', mileage: '22,000 miles', speed: '125 mph', fuel: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 6, name: 'BMW 3 Series', price: '$80/day', mileage: '18,000 miles', speed: '155 mph', fuel: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' }
];

function CarDetails() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {carData.map(car => (
        <div key={car.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600">{car.price}</p>
            <p className="text-gray-600">Mileage: {car.mileage}</p>
            <p className="text-gray-600">Speed: {car.speed}</p>
            <p className="text-gray-600">Fuel: {car.fuel}</p>
            <p className="text-gray-600">Transmission: {car.transmission}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarDetails;
