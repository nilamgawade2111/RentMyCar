import React from 'react';
import FeaturedCars from '../components/FeaturedCars';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import BlogPosts from '../components/BlogPosts';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2">RentMyCar</h1>
          <p className="text-lg">Find the perfect car for your next adventure</p>
        </div>
      </header>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-700">Choose from a wide range of cars to suit your needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
              <p className="text-gray-700">Competitive pricing to fit your budget.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-700">We're here to help you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Platform Overview</h2>
          <p className="text-center text-gray-700 mb-8">
            RentMyCar offers a seamless car rental experience with a wide selection of vehicles, affordable prices, and 24/7 customer support. Whether you're planning a family trip or a solo adventure, we have the perfect car for you.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Cars</h2>
          <FeaturedCars />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
          <Testimonials />
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
          <BlogPosts />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;