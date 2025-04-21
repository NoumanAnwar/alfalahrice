// components/Hero.js

export default function Hero5() {
  return (
    <div className="w-full h-full bg-[#F9F9F9]">
      {/* Main Container */}
      <div className="w-full max-w-screen-xl mx-auto bg-white py-16 px-4 sm:px-8 lg:px-16 rounded-xl shadow-lg">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-6 text-green-950 hover:scale-105 transition-transform duration-300">
          Stay Connected With Global Rice Trade
        </h1>

        {/* Description */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700">
            Join our export network and receive updates on premium rice varieties,
            exclusive trade deals, global shipping insights, and market trends. 
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mt-2">
            Trusted by importers and wholesalers worldwide.
          </p>
        </div>

        {/* Email Input and Signup Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
          />
          {/* Signup Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-green-800 text-white font-medium rounded-md hover:bg-[#1c1a3b] transition-all duration-200">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
