import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'RentMyCar made my vacation so much easier. The car was in great condition and the service was excellent!',
    image: 'john.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'I loved the variety of cars available. The booking process was seamless and the prices were very reasonable.',
    image: 'jane.jpg',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    feedback: 'Great experience! The customer support was very helpful and the car was perfect for our road trip.',
    image: 'sam.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <FaChevronLeft size={24} />
        </button>
        <div className="text-center">
          <img
            src={testimonials[currentIndex].image}
            alt={`Photo of ${testimonials[currentIndex].name}`}
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-semibold">{testimonials[currentIndex].name}</p>
          <p className="text-gray-700 mt-2">{testimonials[currentIndex].feedback}</p>
        </div>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;