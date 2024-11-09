import React from 'react';
import { FaCrown, FaTshirt, FaGem, FaAppleAlt, FaBriefcase, FaDocker, FaShoppingBag } from 'react-icons/fa'; 
import { BsBag } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 lg:px-16 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight sm:leading-snug">
            FIND <span className="block text-6xl sm:text-7xl">CLOTHES THAT</span> MATCH YOUR STYLE
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-6">
            Discover the latest fashion trends and must-haves for your wardrobe.
          </p>
          <button className="bg-white text-gray-800 font-bold py-3 px-10 rounded-lg mt-4 shadow-lg transition-all transform hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 mt-8 text-center sm:text-left space-y-4 sm:space-y-0">
          <span className="text-lg sm:text-xl">200+ International Brands</span>
          <span className="text-lg sm:text-xl">|</span>
          <span className="text-lg sm:text-xl">2,000+ High-quality Products</span>
          <span className="text-lg sm:text-xl">|</span>
          <span className="text-lg sm:text-xl">30,000+ Happy Customers</span>
        </div>
      </section>

      <div className="bg-gray-800 py-8">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Trusted Brands</h2>

        <div className="flex flex-wrap justify-center gap-12 px-6 sm:px-12 w-full">
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaCrown className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Versace</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaTshirt className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Zara</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaGem className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Gucci</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <BsBag className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Prada</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaAppleAlt className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Apple</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaBriefcase className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>H&M</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaDocker className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Docker</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaShoppingBag className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Shopify</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaCrown className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Chanel</span>
          </div>
          <div className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
            <FaTshirt className="w-16 h-16 mb-2 transform hover:scale-110 transition-transform" />
            <span>Uniqlo</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;