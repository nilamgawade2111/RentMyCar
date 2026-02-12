import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-navy-900 to-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
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
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white hover:text-blue-700 transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; 2023 RentMyCar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;