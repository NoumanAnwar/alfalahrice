import React from 'react';

export const Hero4 = () => {
  return (
    <div className="bg-[#e6f5ea] text-green-900 w-full py-20 px-6">
      {/* Title Section */}
      <div className="flex justify-center mb-16 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-5xl transition-transform duration-300 transform hover:scale-105 font-playfair">
          What Makes Our Rice Export Brand Different
        </h3>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full sm:w-[45%] lg:w-[22%] transition-transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h4 className="text-2xl sm:text-3xl font-semibold mb-3 text-green-800 font-playfair">
              {feature.title}
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed font-sans">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Global Shipping',
    description:
      'We ship our premium rice to over 50 countries with reliable international logistics.',
  },
  {
    title: 'Quality Assured',
    description:
      'Each batch is inspected for purity, moisture, and grain quality before shipment.',
  },
  {
    title: 'Competitive Pricing',
    description:
      'We offer the best market prices without compromising on quality or service.',
  },
  {
    title: 'Eco-Friendly Packaging',
    description:
      'Our packaging is 100% recyclable, keeping your rice fresh and the planet clean.',
  },
];
