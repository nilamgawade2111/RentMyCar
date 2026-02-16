import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-gray-400">Email: <a href="mailto:support@rentmycar.com" className="hover:text-white">support@rentmycar.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a></p>
          </div>
          <nav className="flex space-x-4" aria-label="Footer Navigation">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Us
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-gray-400">
          &copy; 2023 RentMyCar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;