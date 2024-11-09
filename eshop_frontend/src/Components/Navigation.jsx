import React, { useState } from 'react';
import { FaShoppingCart, FaUserAlt, FaSearch } from 'react-icons/fa';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const handleSearchClick = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 h-16 mx-10">
        <div className="flex items-center space-x-7 w-full sm:w-auto">
          <h1 className="text-xl font-bold text-gray-800">E-Shopping</h1>
          
          <nav className="hidden md:flex space-x-7 ml-12">
            <p className="cursor-pointer hover:text-blue-600 transition duration-300">Tranding</p>
            <p className="cursor-pointer hover:text-blue-600 transition duration-300">On Sale</p>
            <p className="cursor-pointer hover:text-blue-600 transition duration-300">New Arrivals</p>
            <p className="cursor-pointer hover:text-blue-600 transition duration-300">Brands</p>
          </nav>
        </div>

        <div className="flex items-center space-x-7 w-full sm:w-auto mt-3 md:mt-0">
          <div className="relative w-full sm:w-80 md:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="h-10 w-full border border-gray-300 rounded-full outline-none pl-4 pr-12"
              placeholder="Search for products..."
            />
            <button 
              onClick={handleSearchClick} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              <FaSearch size={20} />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-7">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition duration-300">
              <FaShoppingCart size={20} />
              <p>Cart</p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition duration-300">
              <FaUserAlt size={20} />
              <p>Profile</p>
            </div>
          </nav>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4">
          <p className="cursor-pointer hover:text-blue-600 transition duration-300">Search</p>
          <p className="cursor-pointer hover:text-blue-600 transition duration-300">On Sale</p>
          <p className="cursor-pointer hover:text-blue-600 transition duration-300">New Arrivals</p>
          <p className="cursor-pointer hover:text-blue-600 transition duration-300">Brands</p>
          
          <nav className="flex flex-col space-y-3 mt-3">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition duration-300">
              <FaShoppingCart size={20} />
              <p>Cart</p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition duration-300">
              <FaUserAlt size={20} />
              <p>Profile</p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navigation;