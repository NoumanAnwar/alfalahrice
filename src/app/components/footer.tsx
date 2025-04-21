import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#cde6d2] to-[#b7ddc0] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Company */}
        <div>
          <h2 className="text-xl font-semibold text-[#2A254B] mb-4">About AL FALAH RICE INT</h2>
          <p className="text-sm leading-relaxed">
            AL FALAH RICE INT is a trusted name in premium rice exports, delivering top-quality Basmati and Non-Basmati rice to global markets. 
            We are committed to sustainability, excellence, and long-term business relationships.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-[#2A254B] mb-4">Contact Us</h2>
          <p className="text-sm mb-2">📍 Head Office & Factory: Plot F-22, Site, Karachi - Pakistan</p>
          <p className="text-sm mb-2">🏢 Our Mill is located in the heart of Punjab, Shahpur district Sargodha</p>     
          <p className="text-sm mb-2">📞 Mobile & WhatsApp: +92 321 8234924</p>
          <p className="text-sm mb-2">📧 Email: alfalah@alfalahrice.com.pk</p>
          <p className="text-sm">🌐 Website: www.alfalahrice.com.pk</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-[#2A254B] mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-700 transition">Home</a></li>
            <li><a href="about" className="hover:text-green-700 transition">About Us</a></li>
            <li><a href="riceproduct" className="hover:text-green-700 transition">Products</a></li>
            <li><a href="qualitycontrol" className="hover:text-green-700 transition">Quality Control</a></li>
            <li><a href="contact" className="hover:text-green-700 transition">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-xl font-semibold text-[#2A254B] mb-4">Subscribe for Updates</h2>
          <p className="text-sm mb-4">Get the latest updates on our rice varieties, export insights, and deals.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2025 AL FALAH RICE INT. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0 text-xl">
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#1877F2] transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#E1306C] transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#0077B5] transition-colors duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#1DA1F2] transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
