import Image from "next/image";
import Link from "next/link";

const vegetables = [
  {
    name: "Onion",
    image: "/onion.jpg",
    description:
      "AL FALAH RICE INT is a quality exporter of fresh onions to Sri Lanka, Dubai, Malaysia, and many other countries. Pakistani onions are known for their strong aroma, vibrant color, and long shelf life—making them ideal for both local and international markets.",
    buttonColor: "bg-[#8B0000]", // Deep reddish-purple (onion tone)
  },
  {
    name: "Potato",
    image: "/potato.jpg",
    description:
      "Pakistan produces premium-quality potatoes with excellent texture, rich taste, and high nutritional value. AL FALAH RICE INT ensures that every batch of potatoes is carefully selected and exported to meet international standards of hygiene and quality.",
    buttonColor: "bg-yellow-600", // Earthy potato-tone
  },
];

export default function VegetableShowcase() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Pakistani Onion & Potato Export
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-16 text-lg">
        AL FALAH RICE INT is a trusted exporter of premium Pakistani onions and potatoes, delivering farm-fresh vegetables to countries like Sri Lanka, Dubai, Malaysia, and beyond.
      </p>

      <div className="space-y-20">
        {vegetables.map((veg, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition`}
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <Image
                src={veg.image}
                alt={veg.name}
                width={600}
                height={400}
                className="object-cover w-full h-72 rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">{veg.name}</h3>
              <p className="text-gray-600 text-lg mb-6">{veg.description}</p>
              <Link
                href="/contact"
                className={`inline-block ${veg.buttonColor} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition`}
              >
                Get Quote
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
