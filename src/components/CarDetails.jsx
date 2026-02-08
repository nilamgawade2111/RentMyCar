import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const CarDetails = () => {
  const [likedCars, setLikedCars] = useState([]);

  const toggleLike = (id) => {
    setLikedCars((prevLikedCars) =>
      prevLikedCars.includes(id)
        ? prevLikedCars.filter((carId) => carId !== id)
        : [...prevLikedCars, id]
    );
  };

  const cars = [
    { id: 1, name: 'Tesla Model S', description: 'Electric luxury sedan', image: 'https://images.unsplash.com/photo-1549921296-3c6b8b3f6b35?w=400&h=300&fit=crop&auto=format' },
    { id: 2, name: 'BMW 3 Series', description: 'Compact executive car', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format' }
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cars.map(car => (
          <div key={car.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4">{car.name}</h3>
            <p className="text-gray-600">{car.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">Buy Now</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300">Service</button>
              <FaStar 
                className={`cursor-pointer ${likedCars.includes(car.id) ? 'text-yellow-500' : 'text-gray-400'}`} 
                onClick={() => toggleLike(car.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarDetails;
