const mockCars = [
  {
    id: 1,
    name: 'Tesla Model S',
    price: '$100/day',
    image: 'tesla-model-s.jpg',
    description: 'A luxury electric sedan with impressive range and performance.',
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    price: '$80/day',
    image: 'bmw-3-series.jpg',
    description: 'A compact executive car with sporty handling and a premium interior.',
  },
  {
    id: 3,
    name: 'Audi A4',
    price: '$90/day',
    image: 'audi-a4.jpg',
    description: 'A stylish and comfortable sedan with advanced technology features.',
  },
];

const mockBookings = [
  {
    carId: 1,
    startDate: '2023-10-01',
    endDate: '2023-10-05',
  },
  {
    carId: 2,
    startDate: '2023-10-10',
    endDate: '2023-10-15',
  },
];

const mockPayments = [
  {
    bookingId: 1,
    amount: 400,
    status: 'success',
  },
  {
    bookingId: 2,
    amount: 400,
    status: 'pending',
  },
];

const mockUserVerifications = [
  {
    userId: 1,
    isVerified: true,
  },
  {
    userId: 2,
    isVerified: false,
  },
];

const getAvailableCars = (startDate, endDate) => {
  const availableCars = mockCars.filter(car => {
    const isBooked = mockBookings.some(booking =>
      booking.carId === car.id &&
      ((new Date(startDate) >= new Date(booking.startDate) && new Date(startDate) <= new Date(booking.endDate)) ||
      (new Date(endDate) >= new Date(booking.startDate) && new Date(endDate) <= new Date(booking.endDate)))
    );
    return !isBooked;
  });
  return availableCars;
};

const getCarById = (id) => {
  return mockCars.find(car => car.id === id);
};

const addBooking = (carId, startDate, endDate) => {
  mockBookings.push({ carId, startDate, endDate });
};

const getBookings = () => {
  return mockBookings;
};

const getPaymentStatus = (bookingId) => {
  return mockPayments.find(payment => payment.bookingId === bookingId)?.status ?? 'unknown';
};

const isUserVerified = (userId) => {
  return mockUserVerifications.find(verification => verification.userId === userId)?.isVerified ?? false;
};

export { getAvailableCars, getCarById, addBooking, getBookings, getPaymentStatus, isUserVerified };