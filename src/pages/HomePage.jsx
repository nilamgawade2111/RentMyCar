import React from 'react';
import FeaturedCars from '../components/FeaturedCars';
import PlatformOverview from '../components/PlatformOverview';

const HomePage = () => {
  return (
    <div className="p-4">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to RentMyCar</h1>
        <p className="text-lg text-gray-600">
          RentMyCar is your go-to platform for renting the best cars at affordable prices. Explore our featured cars and find the perfect ride for your needs.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Cars</h2>
        <FeaturedCars />
      </section>
      <section>
        <PlatformOverview />
      </section>
    </div>
  );
};

export default HomePage;