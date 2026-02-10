import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import CarCard from './components/CarCard';

function App() {
  const sampleCar = {
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&h=800&fit=crop&auto=format',
    name: 'Luxury Sedan',
    pricePerDay: 100,
    mileage: 15000,
    averageSpeed: 120,
    fuelType: 'Petrol',
    transmission: 'Automatic'
  };

  return (
    <Router>
      <div className="App">
        <Banner />
        <div className="p-8">
          <CarCard car={sampleCar} />
        </div>
      </div>
    </Router>
  );
}

export default App;