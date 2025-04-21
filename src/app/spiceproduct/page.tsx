import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SpicesPage = () => {
  return (
    <section className="bg-red-50 py-16 px-4 sm:px-8 lg:px-20 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-12">
        Red Chilli & Spices
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-20 text-gray-700">
        AL FALAH RICE INTERNATIONAL is one of Pakistan&apos;s finest exporters of premium quality spices. Our Red Chilli products, including Finger and Whole, are carefully selected, processed, and packed to preserve their natural flavor, aroma, and heat—meeting global culinary standards.
      </p>

      {/* Red Chilli Finger Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg ring-2 ring-red-200 hover:ring-red-400 transition duration-300">
            <Image
              src="/red-chilli-finger.jpg"
              alt="Red Chilli Finger"
              width={500}
              height={300}
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            Red Chilli Finger
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our Red Chilli Finger is known for its bold flavor, deep red color, and rich aroma. Carefully sun-dried and cleaned, it retains its fiery heat and quality through meticulous processing. Sourced from the fertile lands of Pakistan, it&apos;s a favorite for spice lovers worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition duration-300 shadow-md"
          >
            Get Quote Now
          </Link>
        </div>
      </div>

      {/* Red Chilli Whole Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            Red Chilli Whole
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our Whole Red Chillies are selected from the finest farms, dried naturally, and exported in their full-bodied form to preserve their essential oils and pungency. Ideal for traditional and modern cuisines, they represent the rich spice heritage of Pakistan.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition duration-300 shadow-md"
          >
            Get Quote Now
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg ring-2 ring-red-200 hover:ring-red-400 transition duration-300">
            <Image
              src="/red-chilli-whole.jpg"
              alt="Red Chilli Whole"
              width={500}
              height={300}
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpicesPage;
