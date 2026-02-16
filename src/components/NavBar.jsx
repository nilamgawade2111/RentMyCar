import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md" aria-label="Main Navigation">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/" aria-label="RentMyCar Home">RentMyCar</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }
            aria-label="Home"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }
            aria-label="About Us"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }
            aria-label="Services"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }
            aria-label="Contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;