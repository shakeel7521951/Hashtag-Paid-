import React from "react";
import Card from "../shared/Card";
import { FaArrowRight } from "react-icons/fa6";
import { creators } from "../utils/dataseeder";

const Creators = ({ heading = "Creators", Read = "Read All Creators" }) => {
  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">{heading}</h1>
          <button className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            {Read}
            <FaArrowRight />
          </button>
        </div>
        <hr className="border-black" />
      </div>

      {/* Grid Section with Dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {creators.map((item, index) => (
          <div
            key={item.id}
            className={`relative ${
              // Add vertical divider for all columns except the last in a row on large screens
              (index + 1) % 3 !== 0 && "lg:border-r lg:pr-6"
            }`}
          >
            <Card
              src={item.src}
              des={item.des}
              title={item.title}
              subheading={item.subheading}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creators;
