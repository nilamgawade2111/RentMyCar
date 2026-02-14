import React from 'react';

function Banner() {
  const bannerData = {
    title: "Welcome to RentMyCar",
    subtitle: "Find the best rental cars at unbeatable prices.",
    features: [
      {
        title: "Wide Selection",
        description: "Choose from a wide range of cars to suit your needs."
      },
      {
        title: "Affordable Prices",
        description: "Enjoy competitive pricing and great deals."
      },
      {
        title: "Easy Booking",
        description: "Book your car in just a few clicks."
      },
      {
        title: "24/7 Support",
        description: "We're here to help you anytime, anywhere."
      }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
      <h1 className="text-3xl font-bold">{bannerData.title}</h1>
      <p className="mt-4 text-lg">{bannerData.subtitle}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bannerData.features.map((feature, index) => (
          <div key={index} className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;