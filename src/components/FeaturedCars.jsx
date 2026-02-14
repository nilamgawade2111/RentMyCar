import React, { useState, useEffect } from 'react';
import mockCars from '../data/mockCars';
import CarListItem from './CarListItem';

const FeaturedCars = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const featured = mockCars.filter(car => car.featured);
        setFeaturedCars(featured);
      } catch (err) {
        setError('Failed to fetch featured cars');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCars();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading featured cars...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredCars.length > 0 ? (
        featuredCars.map(car => (
          <CarListItem key={car.id} car={car} />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No featured cars available at the moment.
        </div>
      )}
    </div>
  );
};

export default FeaturedCars;