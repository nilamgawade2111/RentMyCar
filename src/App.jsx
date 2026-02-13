import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import CarDetails from './components/CarDetails';
import ContactUs from './components/ContactUs';
import BookingPage from './pages/BookingPage';
import CarListingPage from './pages/CarListingPage';

function App() {
  return (
    <Router>
      <div className="text-center">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/cars" element={<CarListingPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;