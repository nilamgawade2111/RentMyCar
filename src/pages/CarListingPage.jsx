import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { getAvailableCars } from '../utils/mockData';
import BookingForm from '../components/BookingForm';

function CarListingPage() {
  const cars = getAvailableCars();

  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] min-h-screen flex flex-col justify-between">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <article key={car.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={car.image}
                alt={`Image of ${car.name}`}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{car.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{car.description}</p>
              <p className="text-lg font-semibold text-gray-800 mb-4">Price: {car.price}</p>
              <BookingForm car={car} />
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CarListingPage;