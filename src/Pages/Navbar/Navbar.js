import React, { useState } from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Plans/Auth/auth"; // Import the useAuth hook
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

// Define keyframes for custom animations
const fadeIn = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

const slideIn = `
  @keyframes slideIn {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth(); // Destructure user and logout from useAuth hook
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <style>{fadeIn}</style> {/* Add keyframes */}
      <nav
        className="relative px-4 py-4 flex justify-between items-center bg-white shadow-lg transform transition-all duration-500 ease-in-out"
        style={{ animation: "fadeIn 1s ease-out 0s 1 normal forwards" }} // Apply fade-in animation
      >
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="h-[80px] mr-3 transform transition-transform duration-500 hover:rotate-12"
            alt="Logo"
            style={{ animation: "fadeIn 1s ease-out 0.5s 1 normal forwards" }} // Delayed fade-in animation
          />
        </Link>
        <ul className="hidden lg:flex items-center space-x-6">
          {["/plans", "/renew", "/claims", "/about"].map((route, idx) => (
            <li
              key={idx}
              className="group relative"
              style={{
                animation: `slideIn 1s ease-out ${0.7 + idx * 0.1}s 1 normal forwards`, // Staggered slide-in animation
              }}
            >
              <Link
                className="text-sm text-blue-600 font-bold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full"
                to={route}
              >
                {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center space-x-6"
          style={{ animation: "fadeIn 1s ease-out 1s 1 normal forwards" }} // Apply fade-in animation
        >
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center transform transition-transform duration-300 hover:scale-105"
            href="tel:+91 8511411930"
          >
            <RiCustomerService2Line className="mr-1" />
            <span>Call Us</span>
          </button>
          {user ? (
            <button
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center transform transition-transform duration-300 hover:scale-105"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <Link
              className="text-sm text-blue-600 font-bold transform transition-transform duration-300 hover:scale-105"
              to="/plans"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none transform transition-transform duration-300 hover:scale-105"
          >
            {isOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul
          className="lg:hidden bg-white shadow-lg rounded-lg mt-2 px-4 py-2 space-y-2"
          style={{
            animation: "slideIn 0.5s ease-out 0s 1 normal forwards", // Slide-in animation for mobile menu
          }}
        >
          {["/plans", "/renew", "/claims", "/about"].map((route, idx) => (
            <li key={idx} className="border-b border-gray-200 last:border-none">
              <Link
                className="block py-2 text-sm text-blue-600 font-bold transition-colors duration-300 hover:text-blue-800"
                to={route}
                onClick={toggleMenu}
              >
                {route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            {user ? (
              <button
                className="w-full text-left text-sm text-red-600 font-bold py-2 transition-colors duration-300 hover:text-red-800"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <Link
                className="block text-sm text-blue-600 font-bold py-2 transition-colors duration-300 hover:text-blue-800"
                to="/plans"
                onClick={toggleMenu}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
