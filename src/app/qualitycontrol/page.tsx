import Image from 'next/image';
import React from 'react';

const RiceQualityControlPage = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-8 lg:px-20 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Rice Quality Control & Processing
      </h1>

      <p className="text-lg text-center max-w-4xl mx-auto text-gray-700 mb-16">
        At <span className="font-semibold text-blue-700">AL FALAH RICE INTERNATIONAL</span>, we prioritize quality at every stage — from processing to certified testing and warehouse management — to ensure our rice meets and exceeds international export standards.
      </p>

      {/* Rice Processing */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2">
          <Image
            src="/rice-processing.jpg"
            alt="Rice Processing"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 object-cover w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Advanced Rice Processing
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our state-of-the-art facilities feature husking, polishing, steaming, parboiling, grading, color sorting, and moisture control systems. Every grain is processed to perfection, ensuring maximum purity, minimum breakage, and perfect texture.
          </p>
        </div>
      </div>

      {/* Lab Testing */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Certified Lab Testing
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We partner with renowned laboratories like <span className="font-bold text-gray-900">SGS</span> and <span className="font-bold text-gray-900">TTI Laboratories</span> for quality verification, ensuring all rice batches conform to standards set by <span className="font-bold text-gray-900">TCP</span> and international food authorities.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/lab-testing.jpg"
            alt="Lab Testing"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Fumigation */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2">
          <Image
            src="/fumigation.jpg"
            alt="Fumigation Services"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 object-cover w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Fumigation & Hygiene Control
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our warehouse offers routine fumigation and pest control to maintain freshness, hygiene, and compliance with global phytosanitary requirements. This guarantees that every export consignment is pest-free, moisture-controlled, and ready for shipping.
          </p>
        </div>
      </div>

      {/* Standards and CTA */}
      <div className="text-center mt-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Global Export Quality Assurance
        </h3>
        <p className="text-gray-700 text-base mb-6">
          With strict quality protocols, professional lab reports, and precision processing, AL FALAH RICE INT delivers only the best. From rice to other export products, we uphold international certifications and customer satisfaction every step of the way.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition shadow-md"
        >
          Get Quote Now
        </a>
      </div>
    </section>
  );
};

export default RiceQualityControlPage;
