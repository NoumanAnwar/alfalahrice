import React from 'react';
import Image from 'next/image';
import Pic1 from '@/app/image/11.jpg'; // Ensure this image path is correct

const Hero3 = () => {
  return (
    <div className="w-full h-auto p-8 md:p-16 bg-white flex flex-col md:flex-row gap-6">
      {/* Left Section (Image) */}
      <div className="w-full md:w-[630px] h-[600px]">
        <Image
          src={Pic1}
          alt="Rice field export"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section (Text & Button) */}
      <div className="w-full md:w-[634px] h-auto flex flex-col justify-center px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl text-green-900 font-bold text-center md:text-left">
          Bringing Premium Rice from Our Fields to the World
        </h1>
        <p className="text-green-950 text-center md:text-left mt-4 text-base md:text-lg">
          At Al Falah Rice Int, we are committed to growing the finest Basmati and Non-Basmati rice with the help of dedicated farmers and state-of-the-art milling technology. From the fields to global markets, our focus is always on quality and consistency.
        </p>
        <p className="text-green-950 text-center md:text-left mt-4 text-base md:text-lg">
          Our rice isn’t just a product; it’s the result of years of hard work, passion, and sustainable farming practices. As one of the leading exporters globally, we ensure that each grain is handled with care to deliver the best to our international partners.
        </p>
        <div className="flex justify-center md:justify-start mt-8">
          <button className="px-6 py-2 bg-green-800 text-white hover:bg-green-700 transition rounded-lg">
            Explore Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
