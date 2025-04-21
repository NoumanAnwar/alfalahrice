import React from 'react';
import Image from 'next/image'; // ✅ Import next/image

const countries = [
  "Dubai", "KSA", "Kuwait", "Bahrain", "Oman", "Qatar",
  "Canada", "Malaysia", "Africa", "Belgium", "France", "UK",
  "Germany", "Italy", "Yemen", "Egypt", "Morocco"
];

const galleryImages = [
  "/loading1.jpg",
  "/loading2.jpg",
  "/loading3.jpg",
  "/loading4.webp",
  "/loading5.png",
  "/loading6.jpg",
  "/gallery/shipment-africa.jpg",
  "/gallery/port-clearance.jpg",
  "/gallery/container-labeling.jpg"
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-800 drop-shadow-md">
          🌾 Global Rice Shipments Gallery
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Our premium rice exports have reached across the globe including <span className="font-medium text-green-700">{countries.join(', ')}</span>. Explore our shipment stories in the gallery below.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-60">
              <Image
                src={img}
                alt={`Rice Export ${idx + 1}`}
                fill
                className="object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Closing Message */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-800">
          Quality That Travels the World
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-base sm:text-lg">
          Each shipment is carefully handled, packaged, and delivered to ensure that our rice retains its premium taste and quality across borders.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
