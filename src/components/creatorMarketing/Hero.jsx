import React from 'react';

const Hero = () => {
  return (
    <div className="bg-black relative sm:py-10">
      {/* Video Section */}
      <div className="relative">
        <video
          src="https://cdn.prod.website-files.com/5c34f4c0ee3329913fc72eac/65e2209aed80fd1273a6d5d9_Creator%20Summit%20LOOP%202000-transcode.mp4"
          className="w-full sm:rounded-[4rem] h-[75vh] sm:h-[60vh] lg:h-[70vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-50 p-6 pt-20 sm:p-10  w-full h-full rounded-[1rem] sm:rounded-[4rem]">
            {/* Main Heading */}
            <h1 className="text-white font-custom text-2xl sm:text-5xl lg:text-6xl sm:mx-36 mb-4">
              Connect with creators & brands
            </h1>

            {/* Subheading */}
            <p className="text-white font-customLight text-sm sm:text-lg lg:text-xl sm:mx-36 my-4">
              Spend the day learning, networking, and collaborating with the country's top marketers and creators.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 my-4">
              <button className="bg-[#DDE041] px-4 py-2 text-sm sm:text-md rounded-xl shadow-md hover:shadow-lg transition duration-300">
                Design Exchange: 234 Bay St, Toronto
              </button>
              <button className="bg-[#DDE041] px-4 py-2 text-sm sm:text-md rounded-xl shadow-md hover:shadow-lg transition duration-300">
                May 2nd, 2024
              </button>
            </div>

            {/* Expired Notice */}
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-white mt-4">
              EXPIRED
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
