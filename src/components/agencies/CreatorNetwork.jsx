import React from "react";
import Creatornetwork from "../../assets/agencies/matching.webp";
import tick from "../../assets/agencies/tick.svg";

const CreatorNetwork = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-5 sm:mx-10 my-6 sm:my-10 gap-5 sm:gap-10">
      <div className="w-full sm:w-[50%]">
        <img src={Creatornetwork} alt="Match with the right creators" />
      </div>
      <div className="w-full sm:w-[50%] mt-10">
        <button className="p-3 rounded-full bg-[#D1D43D] font-customLight">
        Creatornetwork
        </button>
        <h1 className="text-2xl sm:text-5xl font-custom my-3">
        Tap into our network of top creators
        </h1>
        <p className="font-customLight my-5 text-xl">
        Fill every campaign roster with confidence.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Fully authenticated and opted-in network of creators
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            A large network of diverse creators from underrepresented communities and niche categories
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Access creator lifestyle data like an upcoming home or car purchase, pregnancy, wedding, or a new pet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorNetwork;
