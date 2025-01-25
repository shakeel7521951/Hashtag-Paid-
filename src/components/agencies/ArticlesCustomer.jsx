import React from "react";
import articles1 from "../../assets/agencies/articles1.webp";
import articles2 from "../../assets/agencies/articles2.jpg";
import { FiArrowRight } from "react-icons/fi";

const ArticlesCustomer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:mt-[60px]">
      {/* Main Heading */}
      <h1 className="text-2xl md:text-6xl font-bold text-center sm:mb-12 sm:w-[780px] mb-5">
        Read our articles about customer stories
      </h1>

      {/* Cards Section */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
        {/* Card 1 */}
        <div className="bg-[#f2f0eb] rounded-[5%] shadow-lg p-6 h-[75vh]">
          {/* Card Title */}
          <a href="#" className="text-[10px] font-bold text-gray-600">
            OTTERBOX
          </a>

          {/* Card Subtitle */}
          <a href="#" className="block mt-2 text-black font-bold">
            Otterbox Symmetry's creator-approved phone protection
          </a>

          {/* Card Image */}
          <div className="mt-4">
            <img
              src={articles1}
              alt="Card 1"
              className="w-[95%] h-[40vh] object-cover rounded-[5%]"
            />
          </div>

          {/* Read More Section */}
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center text-black font-medium group"
            >
              Read{" "}
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f2f0eb] rounded-[5%] p-6">
          {/* Card Title */}
          <a href="#" className="text-[10px] font-bold text-gray-600">
            PUIG
          </a>

          {/* Card Subtitle */}
          <a href="#" className="block mt-2 text-black font-bold">
            Driving consideration of PUIG fragrances for the holiday season
          </a>

          {/* Card Image */}
          <div className="mt-4">
            <img
              src={articles2}
              alt="Card 2"
              className="w-[95%] h-[40vh] object-cover rounded-[5%]"
            />
          </div>

          {/* Read More Section */}
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center text-black font-medium group"
            >
              Read{" "}
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="mt-12">
        <button className="flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 group">
          Explore{" "}
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ArticlesCustomer;
