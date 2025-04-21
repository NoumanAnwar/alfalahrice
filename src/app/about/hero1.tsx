import React from 'react';
import Link from 'next/link';

const Hero1 = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 to-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left ml-9 flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-green-800 leading-tight">
            Premium Quality Rice, Exported Worldwide
          </h1>
          <p className="mt-4 text-green-950 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Delivering top-grade Basmati and Non-Basmati rice from our fields to your table — trusted by importers across the globe for quality, consistency, and care.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <Link href="/riceproduct">
            <button className="px-4 py-2 bg-green-800 text-white text-base sm:text-lg rounded-lg hover:bg-green-700 transition shadow-md">
              View Our Products
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Hero1;
