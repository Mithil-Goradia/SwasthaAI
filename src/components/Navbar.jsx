import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-white/60 py-3 flex items-center justify-between px-10 text-green-900 font-semibold text-lg backdrop-blur-md z-50 shadow-md">
      <span className="italic text-3xl font-bold">SWASTHA</span>
      <div className="flex gap-10">
        <Link to="/" className="cursor-pointer hover:text-green-700 transition-all duration-300">Home</Link>
        <Link to="/kyd" className="cursor-pointer hover:text-green-700 transition-all duration-300">Know Your Dosha</Link>
        <Link to="/hub" className="cursor-pointer hover:text-green-700 transition-all duration-300">AyurCare Hub</Link>
        <Link to="/store" className="cursor-pointer hover:text-green-700 transition-all duration-300">Store</Link>
        <Link to="/price" className="cursor-pointer hover:text-green-700 transition-all duration-300">Pricing</Link>
        <Link to="/scan" className="cursor-pointer hover:text-green-700 transition-all duration-300">NatureScan</Link>
        <Link to="/heat" className="cursor-pointer hover:text-green-700 transition-all duration-300">Heatmap</Link>
      </div>
      <Link to="/profile" className="text-green-900 hover:text-green-700 transition-all duration-300">
        <FaUserCircle size={28} />
      </Link>
    </div>
  );
};

export default Navbar;
