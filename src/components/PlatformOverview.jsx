import React from 'react';

const PlatformOverview = () => {
  const features = [
    {
      title: "Wide Selection",
      description: "Choose from a variety of cars to suit your needs and preferences.",
    },
    {
      title: "Affordable Prices",
      description: "Enjoy competitive pricing and exclusive deals.",
    },
    {
      title: "Easy Booking",
      description: "Book your car quickly and easily with our user-friendly platform.",
    },
    {
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist you.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">Why Choose RentMyCar?</h2>
      <p className="text-lg mb-6 text-center">
        RentMyCar offers a seamless car rental experience with a wide range of vehicles, competitive pricing, and exceptional customer service.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
            <p className="mt-2 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformOverview;