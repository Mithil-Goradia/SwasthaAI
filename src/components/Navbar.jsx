import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-white/60 py-3 flex justify-center gap-20 text-green-900 font-semibold text-lg backdrop-blur-md z-50 shadow-md">
      <p className="cursor-pointer hover:text-green-700 transition-all duration-300">Home</p>
      <p className="cursor-pointer hover:text-green-700 transition-all duration-300">Know Your Dosha</p>
      <p className="cursor-pointer hover:text-green-700 transition-all duration-300">AyurCare Hub</p>
      <p className="cursor-pointer hover:text-green-700 transition-all duration-300">Store</p>
      <p className="cursor-pointer hover:text-green-700 transition-all duration-300">Pass</p>
      <p className="cursor-pointer hover:text-green-700 transition-all duration-300">NatureScan</p>
    </div>
  );
};

export default Navbar;
