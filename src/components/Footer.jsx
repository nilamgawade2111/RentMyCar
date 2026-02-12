import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-navy-900 to-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
          <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-400 transition-colors duration-300">
            About Us
          </Link>
          <Link to="/services" className="text-white hover:text-gray-400 transition-colors duration-300">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">
            Contact
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" aria-label="Facebook" className="text-white hover:text-blue-500 transition-colors duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="text-white hover:text-blue-400 transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-white hover:text-pink-500 transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; 2023 RentMyCar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;