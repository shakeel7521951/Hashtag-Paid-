import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import heroImage from "../../assets/brands/hero.webp";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#F2F0EB] gap-5 w-full px-3 sm:px-12 py-14 rounded-md">
      {/* Left Section */}
      <div className="w-100 sm:w-1/2 mt-5 text-center sm:text-left ">
        <h2 className="font-custom p-4 mx-auto sm:ml-10 text-center sm:text-left rounded-full w-fit text-[#4E4EFF] bg-white">
          #paid for brands
        </h2>

        <h1 className="text-[40px] sm:text-7xl py-2 sm:my-7 p-0 font-custom">
          Collaborate with top creators
        </h1>
        <p className="font-customLight text-lg sm:text-xl">
          Find the next collaboration that gets you excited.
        </p>
        <button className="bg-black text-white p-4 rounded-full mb-3 mt-7">
          Book a Demo
        </button>
        <p className="text-gray-600 sm:mb-5">
          Are you a creator?{" "}
          <Link to="" className="underline">
            Join #paid
          </Link>
        </p>
        <img
          src={icon}
          alt="icon"
          className="mt-6 mx-auto sm:absolute sm:left-10"
        />
        <p className="text-[#FF492C] font-customLight">
          “BEST CUSTOMER SUPPORT”
        </p>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2">
        <img src={heroImage} alt="Hero page image" />
      </div>
    </div>
  );
};

export default Hero;
