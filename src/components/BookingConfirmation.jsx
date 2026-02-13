import React from 'react';

const mockBookingDetails = {
  car: {
    name: 'Tesla Model S',
    price: '$100/day',
    image: 'https://via.placeholder.com/300x200',
    description: 'A luxury electric sedan with impressive range and performance.',
  },
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  },
  booking: {
    startDate: '2023-10-01',
    endDate: '2023-10-05',
    totalPrice: '$400',
  },
};

const BookingConfirmation = () => {
  const { car, user, booking } = mockBookingDetails;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Confirmation</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Car Details</h3>
        <img src={car.image} alt={`Image of ${car.name}`} className="w-full h-48 object-cover rounded mb-2" />
        <p className="text-lg font-bold text-gray-800">{car.name}</p>
        <p className="text-gray-600">{car.description}</p>
        <p className="text-gray-800 font-semibold">{car.price}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">User Details</h3>
        <p className="text-gray-800">Name: {user.name}</p>
        <p className="text-gray-800">Email: {user.email}</p>
        <p className="text-gray-800">Phone: {user.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Booking Details</h3>
        <p className="text-gray-800">Start Date: {booking.startDate}</p>
        <p className="text-gray-800">End Date: {booking.endDate}</p>
        <p className="text-lg font-bold text-gray-800">Total Price: {booking.totalPrice}</p>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
        onClick={() => alert('Booking confirmed!')}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingConfirmation;