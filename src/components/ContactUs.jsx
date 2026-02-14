import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="text-lg mb-8 text-center">We'd love to hear from you! Reach out to us through any of the following ways:</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto" aria-label="Email Contact">
          <h3 className="text-xl font-semibold text-center">Email Us</h3>
          <p className="mt-2 text-center">Email: <a href="mailto:contact@rentmycar.com" className="underline hover:text-gray-300">contact@rentmycar.com</a></p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto" aria-label="Phone Contact">
          <h3 className="text-xl font-semibold text-center">Call Us</h3>
          <p className="mt-2 text-center">Phone: <a href="tel:+15551234567" className="underline hover:text-gray-300">+1 (555) 123-4567</a></p>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto" aria-label="Address">
          <h3 className="text-xl font-semibold text-center">Visit Us</h3>
          <p className="mt-2 text-center">Address: 123 RentMyCar St, Car City, CA 90210</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;