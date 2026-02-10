import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Banner from './components/Banner';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
