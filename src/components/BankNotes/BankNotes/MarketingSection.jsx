import React from "react";
import Card from '../shared/Card'
import { FaArrowRight } from "react-icons/fa6";
import {data} from '../utils/dataseeder';

const MarketingSection = ({
  heading = "Creator Marketing",
  Read = "Read All Creator Marketing",
}) => {
  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Heading Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center pt-4">
          <h1 className="text-2xl sm:text-3xl font-bold p-2">{heading}</h1>
          <button className="text-lg sm:text-xl font-semibold px-2 flex items-center">
            {Read}
            <span className="pt-1.5 px-1">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <hr className="pt-3 border-black" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative ${
              // Add vertical divider for non-last columns
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

export default MarketingSection;
