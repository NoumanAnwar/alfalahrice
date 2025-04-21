import Image from "next/image";
import Link from "next/link";

const riceProducts = [
  {
    name: "1121 Basmati Steam Rice",
    description: "Known for its extra-long grains and aromatic fragrance, this variety is a staple in many households.",
    price: "$1150 PMT",
    image: "/rice1.png",
  },
  {
    name: "1121 Parboiled Rice",
    description: "This rice undergoes a unique steaming process, enhancing its nutritional value and making it less sticky when cooked.",
    price: "$1080 PMT",
    image: "/rice2.jpg",
  },
  {
    name: "1121 Basmati Rice",
    description: "A premium variety celebrated for its long, slender grains and delightful aroma, perfect for biryanis and pilafs.",
    price: "$1200 PMT",
    image: "/rice3.webp",
  },
  {
    name: "Super Kernal Basmati Rice",
    description: "Renowned for its extra-long grain and rich aroma, this rice is often referred to as the 'king of rice'.",
    price: "$1250 PMT",
    image: "/rice4.jpg",
  },
  {
    name: "Super Kernal Brown Rice",
    description: "A whole grain variety that retains its bran layer, offering a nuttier flavor and higher nutritional content.",
    price: "$1000 PMT",
    image: "/rice5.jpg",
  },
  {
    name: "Super Kernal Parboiled Rice",
    description: "Steamed before milling, enhancing its flavor and texture while retaining essential nutrients.",
    price: "$1070 PMT",
    image: "/rice6.jpg",
  },
  {
    name: "Super Fine Steam Rice",
    description: "Characterized by its fine texture and aromatic fragrance, ideal for gourmet meals.",
    price: "$800 PMT",
    image: "/rice7.jpg",
  },
  {
    name: "Super Fine Parboiled Rice",
    description: "Undergoes a special parboiling process to retain nutrients and give a firmer texture.",
    price: "$820 PMT",
    image: "/rice8.jpg",
  },
  {
    name: "386 Rice",
    description: "A medium-grain variety known for its versatility and suitability in a variety of dishes.",
    price: "$750 PMT",
    image: "/rice9.webp",
  },
  {
    name: "386 Parboiled Rice",
    description: "This variety is parboiled to enhance its nutritional profile and reduce cooking time.",
    price: "$780 PMT",
    image: "/rice10.jpg",
  },
  {
    name: "C-9 Parboiled Rice",
    description: "Parboiled to retain nutrients with a firmer texture, ideal for various dishes.",
    price: "$650 PMT",
    image: "/rice11.jpg",
  },
  {
    name: "C-9 White Rice",
    description: "A polished variety known for its clean appearance and wide range of uses.",
    price: "$620 PMT",
    image: "/rice12.jpg",
  },
  {
    name: "Long Grain Irri-6 White Rice",
    description: "Featuring long, slender grains that stay separate and non-sticky when cooked.",
    price: "$430 PMT",
    image: "/rice13.jpg",
  },
  {
    name: "Long Grain Irri-6 Parboiled Rice",
    description: "Parboiled to enhance its nutritional value, perfect for hearty meals.",
    price: "$480 PMT",
    image: "/rice14.webp",
  },
  {
    name: "100% Broken Rice",
    description: "Consisting of broken grains, often used in porridges or animal feed.",
    price: "$400 PMT",
    image: "/rice15.webp",
  },
  {
    name: "Feed Rice",
    description: "Primarily used as animal feed, a cost-effective option for livestock nutrition.",
    price: "$360 PMT",
    image: "/rice16.png",
  },
];

export default function RiceProductsPage() {
  return (
    <div className="px-6 py-12 md:px-20 bg-gray-50 min-h-screen">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Premium Rice Collection
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our curated selection of high-quality rice from Punjab. From fragrant Basmati to Non-Basmati — perfect for every home and business.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {riceProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden h-full"
          >
            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-52 object-cover rounded-t-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col justify-between flex-grow p-5 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>

              <div className="mt-6">
                <p className="text-lg font-bold text-green-700 mb-2">{product.price}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-md transition"
                >
                  Quote Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
