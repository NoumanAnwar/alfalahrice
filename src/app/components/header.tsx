import React from 'react';
import Image from 'next/image'; // ✅ import Image from next/image
import Link from 'next/link';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">

        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          {/* ✅ Replaced img with Image component */}
          <Image
            src="/logo.jpg" // Your logo path in the public folder
            alt="AL FALAH RICE INTERNATIONAL Logo"
            width={96} // 24 * 4 = 96px
            height={96}
            className="object-contain w-24 h-24"
            priority // optionally prioritize logo loading
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              AL FALAH RICE INTERNATIONAL
            </h1>
            <p className="text-sm text-gray-600">
              Leading Exporter of Basmati & Non Basmati Rice
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center items-center gap-4 mt-4 md:mt-0 text-gray-700 text-base">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/about" className="hover:text-green-600">About Us</Link>
          <Link href="/riceproduct" className="hover:text-green-600">Our Products</Link>
          <Link href="/gallery" className="hover:text-green-600">Gallery</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
        </nav>

        {/* Right Section: Search + Icons + Cart Button */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          
          {/* Search Box */}
          <div className="relative w-[180px] sm:w-[220px] md:w-[280px]">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <CiSearch size={20} />
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3 text-black">
            <a href="#wishlist" className="hover:text-green-600">
              <IoIosHeartEmpty size={26} />
            </a>
            <Link href="/cart" className="hover:text-green-600">
              <MdLocalShipping size={26} />
            </Link>
          </div>

          {/* Cart Button */}
          <Link href="/cart">
            {/* You can add a button or icon here if needed */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
