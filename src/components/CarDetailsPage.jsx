import React from 'react';
import CarCard from './CarCard';

const mockData = [
  { id: 1, priceRange: '$50-$70', modelDetails: { name: 'Toyota Camry', transmission: 'Automatic', fuel: 'Gasoline' }, averageInfo: { mileage: '30,000 miles', rating: '4.5' } },
  { id: 2, priceRange: '$55-$75', modelDetails: { name: 'Honda Accord', transmission: 'Automatic', fuel: 'Gasoline' }, averageInfo: { mileage: '25,000 miles', rating: '4.6' } },
  { id: 3, priceRange: '$70-$90', modelDetails: { name: 'Ford Mustang', transmission: 'Manual', fuel: 'Gasoline' }, averageInfo: { mileage: '20,000 miles', rating: '4.7' } },
  { id: 4, priceRange: '$60-$80', modelDetails: { name: 'Chevrolet Malibu', transmission: 'Automatic', fuel: 'Gasoline' }, averageInfo: { mileage: '22,000 miles', rating: '4.4' } }
];

const CarDetailsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {mockData.map(car => (
        <CarCard key={car.id} priceRange={car.priceRange} modelDetails={car.modelDetails} averageInfo={car.averageInfo} />
      ))}
    </div>
  );
};

export default CarDetailsPage;