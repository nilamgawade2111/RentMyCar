import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactUs from './components/ContactUs';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <div className="text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking/:carId" element={<BookingPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;