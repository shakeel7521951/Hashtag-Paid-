import React from "react";
import { Link } from "react-router-dom";

const HeadingContentTwo = () => {
  return (
    <div className="flex items-center justify-center py-14 sm:min-h-screen mb-7 bg-[#dde041] rounded-3xl sm:mt-[40px]">
      <div className="text-center px-6">
        {/* Main Heading */}
        <h1 className="text-xl md:text-4xl font-bold sm:w-[800px]">
          Join the marketplace. Find your next collaboration.
        </h1>

        {/* Explore Button */}
        <div className="mt-12 flex justify-center">
          <Link to="" className="flex items-center px-6 py-3 bg-white text-black font-medium rounded-full  group">
            Get Started
          </Link>
        </div>

        {/* Subheading */}
        <p className="mt-4 text-md  text-black">
          Are you a creator?{" "}
          <Link to="" className="underline">
            Join #paid
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HeadingContentTwo;
