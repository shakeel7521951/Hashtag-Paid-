import React from "react";
import iphone from "../../assets/brands/iphone.webp";
import puig from "../../assets/brands/puig.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const BestBrand = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-10 py-10 bg-gray-50">
      <h1 className="font-custom text-3xl sm:text-5xl text-center mx-4 sm:mx-32 my-6 text-gray-800">
        Find out why the world’s best brands choose #paid
      </h1>
      <div className="flex flex-col sm:flex-row gap-10">
        {/* First Card */}
        <div className="w-full sm:w-1/2 bg-[#F2F0EB] rounded-xl shadow-lg p-6 flex flex-col">
          <h5 className="text-lg font-semibold text-gray-700 mb-2">OTTERBOX</h5>
          <h2 className="text-xl sm:text-xl text-gray-800 font-custom mb-4">
            Otterbox Symmetry's creator-approved phone protection
          </h2>
          <img
            src={iphone}
            className="w-full rounded-3xl h-56 object-cover"
            alt="iPhone"
          />
          <div className="mt-3 flex items-center gap-2">
            <p className="text-xl font-customLight">Read</p>
            <FaArrowRightLong className="text-md" />
          </div>
        </div>
        {/* Second Card */}
        <div className="w-full sm:w-1/2 bg-[#F2F0EB] rounded-xl shadow-lg p-6 flex flex-col">
          <h5 className="text-lg font-semibold text-gray-700 mb-2">PUIG</h5>
          <h2 className="text-xl sm:text-xl font-custom text-gray-800 mb-4">
            Puig’s innovative creator-inspired products
          </h2>
          <img
            src={puig}
            className="w-full rounded-3xl h-56 object-cover"
            alt="Puig"
          />
          <div className="mt-3 flex items-center gap-2">
            <p className="text-xl font-customLight">Read</p>
            <FaArrowRightLong className="text-md" />
          </div>
        </div>
      </div>
      <div className="flex bg-black py-3 px-5 rounded-full items-center gap-2 mt-4">
        <button className="text-white font-customLight text-center focus:outline-none">
          Explore
        </button>
        <FaArrowRightLong className="text-lg text-white" />
      </div>
    </div>
  );
};

export default BestBrand;
