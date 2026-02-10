import React from 'react';
import CarCard from './CarCard';

const carData = [
  { id: 1, name: 'Toyota Camry', price: '$50/day', mileage: '30,000 miles', speed: '120 mph', fuelType: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1541446654331-0af808871cc0?w=400&h=300&fit=crop&auto=format' },
  { id: 2, name: 'Honda Accord', price: '$55/day', mileage: '25,000 miles', speed: '115 mph', fuelType: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 3, name: 'Ford Mustang', price: '$70/day', mileage: '20,000 miles', speed: '150 mph', fuelType: 'Gasoline', transmission: 'Manual', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 4, name: 'Chevrolet Malibu', price: '$60/day', mileage: '35,000 miles', speed: '110 mph', fuelType: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 5, name: 'Nissan Altima', price: '$52/day', mileage: '28,000 miles', speed: '118 mph', fuelType: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' },
  { id: 6, name: 'BMW 3 Series', price: '$80/day', mileage: '15,000 miles', speed: '155 mph', fuelType: 'Gasoline', transmission: 'Automatic', image: 'https://images.unsplash.com/photo-1511391409765-6c1f3d9e0b8b?w=400&h=300&fit=crop&auto=format' }
];

function CarDetails() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {carData.map(car => (
        <CarCard key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarDetails;