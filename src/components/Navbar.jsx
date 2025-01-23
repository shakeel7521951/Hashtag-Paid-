import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F2F0EB] p-4">
      <div className="container mx-auto flex items-center justify-between p-3 py-0">
        {/* Title Section */}
        <Link to="/" className="text-3xl font-bold text-gray-700">#paid</Link>

        {/* Centered Links for Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-lg font-semibold">
          <Link to="/brands" className="hover:text-yellow-700 transition">
            Brands
          </Link>
          <span className="text-gray-500">•</span>
          <Link to="/creators" className="hover:text-yellow-700 transition">
            Creators
          </Link>
        </div>

        {/* Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 font-bold rounded-full text-gray-700 bg-white transition"
          >
            Log In .
          </Link>
          <Link
            to="/get-started"
            className="px-6 py-3 bg-black text-white rounded-full flex items-center space-x-2 hover:bg-gray-600 transition"
          >
            <span>Get Started</span>
            <FaArrowRight />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4 text-center">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-yellow-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Brands
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              to="/"
              className="text-lg font-semibold hover:text-yellow-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Creators
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 font-bold rounded-full text-black bg-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Log In .
            </Link>
            <Link
              to="/get-started"
              className="px-6 py-3 bg-black text-white rounded-full flex items-center justify-center space-x-2 hover:bg-gray-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              <span>Get Started</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
