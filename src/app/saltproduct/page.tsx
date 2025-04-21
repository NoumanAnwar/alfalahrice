import Image from "next/image";
import Link from "next/link";

export default function SaltExportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-800">Premium Salt Export</h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Al Falah Rice International proudly exports high-quality edible and industrial salt from Pakistan to global markets, including the Middle East, Asia, and beyond.
        </p>
      </header>

      {/* SEA SALT SECTION */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2">
          <Image
            src="/sea-salt.png"
            alt="Sea Salt"
            width={800}
            height={500}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Natural Sea Salt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Sea Salt is harvested from clean coastal waters of Pakistan using traditional evaporation methods.
            It&apos;s rich in trace minerals and ideal for culinary use, food preservation, and wellness products.
          </p>
          <p className="text-gray-700">
            We export Sea Salt in various grain sizes and customizable packaging to meet international standards and client specifications.
          </p>
        </div>
      </section>

      {/* PINK SALT SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Himalayan Pink Salt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mined from the foothills of the Himalayas in Pakistan, our Pink Salt is world-renowned for its purity, color, and mineral content.
            It&apos;s used in gourmet cooking, bath salts, lamps, and even spa products.
          </p>
          <p className="text-gray-700">
            We offer food-grade and industrial-grade pink salt in bulk and private labeling options for global distribution.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/pink-salt.png"
            alt="Pink Salt"
            width={800}
            height={500}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Request a Price Quotation</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Contact us for competitive bulk export prices, packaging details, and shipping quotes for Sea Salt and Pink Himalayan Salt.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Get Quote Now
        </Link>
      </section>
    </div>
  );
}
