import Image from "next/image";
import Link from "next/link";

const garments = [
  {
    title: "Men's Jeans",
    image: "/men-jeans.jpg",
    price: "$12.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium quality Pakistani denim jeans with a durable and stylish design.",
  },
  {
    title: "Men's T-Shirt",
    image: "/men-tshirt.jpg",
    price: "$7.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Soft cotton t-shirts perfect for casual and daily wear. Made in Pakistan.",
  },
  {
    title: "Men's Hoodie",
    image: "/men-hoodie.jpg",
    price: "$15.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable hoodies made with fleece fabric for warm layering.",
  },
  {
    title: "Men's Trouser",
    image: "/men-trouser.jpg",
    price: "$10.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stylish trousers suitable for sports and casual wear.",
  },
  {
    title: "Men's Shorts",
    image: "/men-shorts.jpg",
    price: "$8.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Breathable and lightweight shorts made in Pakistan for comfort.",
  },
  {
    title: "Men's Polo Shirt",
    image: "/men-polo.jpg",
    price: "$9.50",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Classic polo t-shirts made with premium cotton fabric.",
  },
  {
    title: "Girls' Jeans",
    image: "/girl-jeans.jpg",
    price: "$11.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Trendy Pakistani jeans for girls with stylish cuts and comfort.",
  },
  {
    title: "Girls' Trouser",
    image: "/girl-trouser.jpg",
    price: "$9.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable trousers made with breathable material, perfect for everyday wear.",
  },
  {
    title: "Girls' Shirt",
    image: "/girl-shirt.jpg",
    price: "$6.50",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Cute and comfy t-shirts made in Pakistan, perfect for young girls.",
  },
  {
    title: "Girls' Pajama Set",
    image: "/girl-pajama.jpg",
    price: "$10.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Soft pajama sets for nightwear made from fine Pakistani cotton.",
  },
  {
    title: "Girls' Hoodie",
    image: "/girl-hoodie.jpg",
    price: "$13.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Warm and stylish hoodies designed for comfort and fashion.",
  },
  {
    title: "Girls' Shorts",
    image: "/girl-shorts.jpg",
    price: "$7.50",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Lightweight shorts ideal for active young girls.",
  },
  {
    title: "Girls' Pants",
    image: "/girl-pants.jpg",
    price: "$9.50",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Chic and comfortable pants made from durable Pakistani fabric.",
  },
  {
    title: "Child's Jeans",
    image: "/child-jeans.jpg",
    price: "$10.00",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Durable kids' jeans, made to last through play and wear.",
  },
  {
    title: "Child's T-Shirt",
    image: "/child-tshirt.jpg",
    price: "$8.50",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stylish tops for children made with lightweight, breathable fabrics from Pakistan.",
  },
];

export default function GarmentsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Garments Collection
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
        Discover AL FALAH RICE INT’s premium selection of Pakistani garments for men, women, and children. Each item is crafted with comfort, quality, and international trends in mind.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {garments.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="rounded-xl object-cover h-64 w-full mb-5 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-2">{item.description}</p>
            <p className="text-md text-green-700 font-semibold mb-1 text-center">{item.price}</p>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Sizes: {item.sizes.join(", ")}
            </p>
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Quote
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
