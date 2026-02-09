import React from 'react';
import Banner from './components/Banner';
import CarDetailsPage from './components/CarDetailsPage';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="text-center">
      <Banner />
      <CarDetailsPage />
      <ContactUs />
    </div>
  );
}

export default App;