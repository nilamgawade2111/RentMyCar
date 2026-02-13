import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>
                  <Link to="/" className="hover:text-gray-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-400 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-400 transition-colors duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-gray-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} RentMyCar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;