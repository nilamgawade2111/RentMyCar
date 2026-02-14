import React from 'react';

const mockCarListings = [
  { id: 1, name: 'Toyota Camry', price: '$50/day', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537' },
  { id: 2, name: 'Honda Accord', price: '$55/day', image: 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035' },
  { id: 3, name: 'Ford Mustang', price: '$70/day', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70' },
  { id: 4, name: 'Chevrolet Malibu', price: '$60/day', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a' },
];

const PlatformOverview = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">Why Choose RentMyCar?</h2>
      <p className="text-lg mb-6 text-center">
        RentMyCar offers a seamless car rental experience with a wide range of vehicles, competitive pricing, and exceptional customer service.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-center">Wide Selection</h3>
          <p className="mt-2 text-center">Choose from a variety of cars to suit your needs and preferences.</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-center">Affordable Prices</h3>
          <p className="mt-2 text-center">Enjoy competitive pricing and exclusive deals.</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-center">Easy Booking</h3>
          <p className="mt-2 text-center">Book your car quickly and easily with our user-friendly platform.</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-center">24/7 Support</h3>
          <p className="mt-2 text-center">Our support team is available around the clock to assist you.</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockCarListings.map(car => (
          <div key={car.id} className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <img src={car.image} alt={car.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold text-center mt-4">{car.name}</h3>
            <p className="text-center mt-2">{car.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformOverview;