import React from "react";

const Section2 = () => {
  return (
    <div>
      <div className="bg-[#F2F0EB] min-h-screen flex justify-center items-center max-sm:flex-col pb-24 rounded-b-[5rem] mt-10 gap-8 overflow-hidden">
        <div className="max-sm:w-full w-[45vw] pl-10 pb-1 max-sm:pl-2">
          <div className="bg-[#DDE041] mt-10 text-black font-customLight font-extralight max-sm:w-[40%] md:w-[80%] lg:w-[35%] text-center rounded-full px-2 py-2 text-nowrap">
            <p>Creative Control</p>
          </div>
          <div className="h-fit mt-7">
            <p className="font-custom max-sm:text-[2.4rem] max-sm:w-[85%] md:w-[95%] md:text-3xl lg:text-6xl  w-[70%] leading-none tracking-tight">
              Be the creative director
            </p>
          </div>
          <div className="pt-8">
            <p className="font-customLight w-[100%] text-[1.2rem]">
              You know your audience best. Have creative autonomy with every
              campaign.
            </p>
          </div>
        </div>
        <div className="max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 h-fit w-[45vw] ">
          <img
            src="/src/assets/creators/section2.webp"
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
