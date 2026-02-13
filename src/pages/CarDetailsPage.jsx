import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import UserVerification from '../components/UserVerification';

function CarDetailsPage() {
  const car = {
    name: 'Tesla Model S',
    price: '$100/day',
  };

  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] min-h-screen flex flex-col justify-between">
      <Banner />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{car.name}</h1>
          <p className="text-lg text-gray-300">Price: {car.price}</p>
        </section>
        <section className="mb-8">
          <BookingForm car={car} />
        </section>
        <section>
          <UserVerification />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CarDetailsPage;