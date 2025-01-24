import React from "react";
import { TiTick } from "react-icons/ti";

const LastSection = () => {
  return (
    <div className="bg-white flex flex-col sm:flex-row rounded w-full px-3 mx-auto sm:px-14 py-10 gap-10">
      <div className="w-full sm:w-[50%]">
        <h1 className="font-custom text-3xl sm:text-8xl text-center">
          1 day—all things creator marketing
        </h1>
        <p className="font-customLight text-center">
          Learn from leading marketers and creators.
        </p>
      </div>
      <div className="w-full sm:w-[50%] flex flex-col gap-4">
        <div className="bg-[#F2F0EB] p-10 w-[350px] sm:w-[440px] rounded-3xl mx-auto">
          <TiTick className="text-2xl w-[40px] h-[40px] bg-[#DDE041] rounded-full" />
          <h1 className="font-custom text-2xl mt-3 sm:text-3xl">Network</h1>
          <p className="font-customLight text-md">
            Meet Toronto's top marketers and creators!
          </p>
        </div>
        <div className="bg-[#F2F0EB] p-10 w-[350px] sm:w-[440px] rounded-3xl mx-auto">
          <TiTick className="text-2xl w-[40px] h-[40px] bg-[#DDE041] rounded-full" />
          <h1 className="font-custom text-2xl mt-3 sm:text-3xl">Learn</h1>
          <p className="font-customLight text-md">
            Through interactive workshops, activities, <br /> panels and
            presentations!
          </p>
        </div>
        <div className="bg-[#F2F0EB] p-10 w-[350px] sm:w-[440px] rounded-3xl mx-auto">
          <TiTick className="text-2xl w-[40px] h-[40px] bg-[#DDE041] rounded-full" />
          <h1 className="font-custom text-2xl mt-3 sm:text-3xl">Collaborate</h1>
          <p className="font-customLight text-md">
            Expand your knowledge and connections all at once!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
