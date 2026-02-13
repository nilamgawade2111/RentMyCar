import { getAvailableCars } from './mockData';

/**
 * Simulates a real-time availability check for car bookings.
 * @param {string} startDate - The start date of the booking in YYYY-MM-DD format.
 * @param {string} endDate - The end date of the booking in YYYY-MM-DD format.
 * @returns {Promise<Array>} - A promise that resolves to an array of available cars.
 */
const availabilityCheck = async (startDate, endDate) => {
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      const availableCars = getAvailableCars(startDate, endDate);
      if (availableCars.length > 0) {
        clearInterval(intervalId);
        resolve(availableCars);
      }
    }, 5000); // Simulate real-time check every 5 seconds

    // Cleanup interval on promise resolution
    return () => clearInterval(intervalId);
  });
};

export default availabilityCheck;