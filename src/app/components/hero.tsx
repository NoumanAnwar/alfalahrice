'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const images = ['/1.jpg', '/3.jpg', '/4.jpg',]; // Add your image paths here

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 transition-opacity duration-1000" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 text-white text-center max-w-8xl">
        <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold drop-shadow-lg leading-tight animate-fade-in-up">
          Welcome to <span className="text-green-600">Al Falah Rice Int</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-1xl mt-4 text-gray-200">
          We are one of the world’s leading rice exporters delivering premium quality grains with trust.
        </p>
       <Link href='riceproduct'>
        <button
        
        className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-full text-lg font-semibold shadow-lg"
          aria-label="Explore Our Products"
        >
          Our Products
         </button>
         </Link>
      </div>
      
    </section>
  );
};

export default Hero;
