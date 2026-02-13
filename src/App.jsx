import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import CarDetails from './components/CarDetails';
import ContactUs from './components/ContactUs';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import mockCars from './data/mockCars';

function App() {
  return (
    <Router>
      <div className="text-center">
        <Banner />
        <Routes>
          <Route path="/" element={<CarDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking/:carId" element={<BookingPage car={mockCars[0]} />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;