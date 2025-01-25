import React from "react";
import technology from "../../assets/agencies/matching.webp";
import tick from "../../assets/agencies/tick.svg";

const Technology = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-5 sm:mx-10 my-6 sm:my-10 gap-5 sm:gap-10">
      <div className="w-full sm:w-[50%]">
        <img src={technology} alt="Match with the right creators" />
      </div>
      <div className="w-full sm:w-[50%] mt-10">
        <button className="p-3 rounded-full bg-[#D1D43D] font-customLight">
        Technology
        </button>
        <h1 className="text-2xl sm:text-5xl font-custom my-3">
        Tech-enabled 
creator marketing
        </h1>
        <p className="font-customLight my-5 text-xl">
        Our team and technology help manage campaigns every step of the way so you can focus on what matters most—your clients.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Contracts and legal fully managed
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Automated payouts
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Standardized pricing for content and usage rights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
