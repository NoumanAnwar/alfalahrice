import React from 'react';
import Image from 'next/image';
import Pic12 from "@/app/image/12.jpg"; // Correct import path

const Hero2 = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section (Text & Button) */}
        <div className="w-full md:w-1/2 bg-green-100 rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl text-green-800 font-bold text-center md:text-left">
            Empowering Growers, Supporting Millers, and Exporting Globally
          </h2>
          <p className="mt-4 text-green-950 text-center md:text-left text-base md:text-lg">
            At Al Falah Rice Int, we are committed to strengthening every link in the rice supply chain. From local farmers to large-scale millers, our partnership-driven approach ensures the highest quality Basmati and Non-Basmati rice for the global market.
          </p>
          <p className="mt-4 text-green-950 text-center md:text-left text-base md:text-lg">
            We provide our growers with the tools, resources, and knowledge needed to produce top-tier rice, while our advanced milling processes guarantee that every grain meets the highest standards. With a global reach, we are proud to be one of the world’s largest exporters of premium rice.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition duration-300">
              Learn More About Our Export Process
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[478px] relative">
          <Image
            src={Pic12} // Corrected to use the imported image
            alt="Rice field export"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
