import Image from "next/image";
import Link from "next/link";

export default function YellowMaizePage() {
  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-6 md:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800">
          Premium Yellow Maize Export
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Al Falah Rice International proudly exports top-quality yellow maize from Pakistan to Malaysia, Indonesia, Philippines, the Middle East, and various other regions across the globe.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="w-full lg:w-1/2">
          <Image
            src="/yellow-maize.jpg"
            alt="Yellow Maize"
            width={800}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Why Choose Our Yellow Maize?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our yellow maize is carefully selected, cleaned, and packed under stringent quality control standards to ensure freshness and purity.
            It&apos;s widely used for human consumption, animal feed, and industrial applications due to its high nutritional content.
          </p>
          <p className="text-gray-700">
            With a strong logistics network, we ensure reliable and timely shipments to countries like:
            <span className="font-semibold text-yellow-800"> Malaysia, Indonesia, Philippines, UAE, Saudi Arabia, and more.</span>
          </p>
        </div>
      </div>

      <section className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Request a Price Quotation</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Get competitive rates for bulk export of yellow maize. Contact us now and our team will respond with full details, packaging options, and FOB/CIF pricing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Get Quote Now
        </Link>
      </section>
    </div>
  );
}
