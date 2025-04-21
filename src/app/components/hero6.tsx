import Image from 'next/image';
import React from 'react';
import Pic13 from '@/app/image/13.jpg';
import Pic14 from '@/app/image/14.png';
import Pic15 from '@/app/image/15.jpg';
import Pic16 from '@/app/image/16.jpg';
import Pic17 from '@/app/image/17.jpg';
import Pic18 from '@/app/image/18.jpg';
import Link from 'next/link';

const businesses = [
  {
    title: 'Rice',
    image: Pic13,
    description:
      'Our processes include Husking, Parboiling, Steaming, Rice Reprocessing, Milling, Color Sorting, Packing and Exporting.',
    link: 'riceproduct',
  },
  {
    title: 'Yellow Maize',
    image: Pic14,
    description:
      'We deliver premium-grade yellow maize to meet food and feed industry needs across various international markets.',
    link: 'maizeproduct',
  },
  {
    title: 'Sea Salt & Pink Salt',
    image: Pic15,
    description:
      'We export high-quality Sea Salt and Himalayan Pink Salt to meet global demand, with premium processing and packaging.',
    link: 'saltproduct',
  },
  {
    title: 'Vegetables & Fruits',
    image: Pic16,
    description:
      'We export a variety of fresh vegetables and fruits with a focus on quality and freshness for international markets.',
    link: 'vegetableproduct',
  },
  {
    title: 'Garments',
    image: Pic17,
    description:
      'We provide export-quality stitched garments and apparel, produced with care and style for global fashion needs.',
    link: 'garmentproduct',
  },
  {
    title: 'Red Chilli & Spices',
    image: Pic18,
    description:
      'We export premium quality red chilli and a variety of aromatic spices, processed and packaged to meet global culinary standards.',
    link: 'spiceproduct',
  },
];

const OurBusinesses = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-16">Our Businesses</h2>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
          >
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={100}
                priority
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.description}</p>
              <Link
                href={`/${item.link}`}
                className="inline-block px-5 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 text-sm font-medium shadow-md"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBusinesses;
