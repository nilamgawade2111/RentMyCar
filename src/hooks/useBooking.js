import { useState, useEffect, useCallback } from 'react';
import { differenceInDays } from 'date-fns';
import { getBookings, addBooking } from '../utils/mockData';

const useBooking = (car) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const calculatePrice = useCallback(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = differenceInDays(end, start);

      if (days > 0) {
        const pricePerDay = parseFloat(car.price.replace('$', '').replace('/day', ''));
        setTotalPrice(days * pricePerDay);
        setError('');
      } else {
        setTotalPrice(0);
        setError('End date must be after start date.');
      }
    }
  }, [startDate, endDate, car.price]);

  const checkAvailability = useCallback(() => {
    const bookings = getBookings();
    const isBooked = bookings.some(booking => 
      booking.carId === car.id && 
      ((new Date(startDate) >= new Date(booking.startDate) && new Date(startDate) <= new Date(booking.endDate)) ||
      (new Date(endDate) >= new Date(booking.startDate) && new Date(endDate) <= new Date(booking.endDate)))
    );
    setIsAvailable(!isBooked);
  }, [startDate, endDate, car.id]);

  const handleBooking = useCallback(() => {
    if (isAvailable && startDate && endDate && totalPrice > 0 && isVerified && paymentSuccess) {
      addBooking(car.id, startDate, endDate);
      alert('Booking confirmed!');
    } else {
      alert('Please ensure all steps are completed: availability, verification, and payment.');
    }
  }, [isAvailable, startDate, endDate, totalPrice, car.id, isVerified, paymentSuccess]);

  useEffect(() => {
    calculatePrice();
    checkAvailability();
  }, [calculatePrice, checkAvailability]);

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    totalPrice,
    error,
    isAvailable,
    handleBooking,
    setIsVerified,
    setPaymentSuccess,
  };
};

export default useBooking;