import React from "react";
import omniChannel from "../../assets/agencies/omniChannel.webp";


const OmniChannel = () => {
  return (
    <div className="bg-[#F2F0EB] flex flex-col sm:flex-row rounded-xl px-5 sm:px-10 py-6 sm:py-10 gap-5 sm:gap-10">
      <div className="w-full sm:w-[50%]">
        <img src={omniChannel} alt="Match with the right creators" />
      </div>
      <div className="w-full sm:w-[50%] mt-10">
        <button className="p-3 rounded-full bg-[#D1D43D] font-customLight">
        Omni-Channel
        </button>
        <h1 className="text-3xl sm:text-5xl font-custom my-3">
        Creator content beyond the feed
        </h1>
        <p className="font-customLight my-5 text-sx sm:text-xl">
        Your clients can license creator content to use across all their marketing channels. Whether it’s out-of-home, digital ads, print, or in-flight entertainment, create a truly omni-channel creator marketing experience.
        </p>
        <div className="flex flex-col gap-3 bg-white rounded-3xl p-[35px] sm:w-[26rem] sm:mt-[-20px]">
          <div className="flex items-center gap-2 ">
           <h1 className="sm:text-3xl font-bold">“That’s the beauty of #paid for me. It lets clients have the content and expand it past just the creator post.”</h1>
          </div>
          <p className='text-[13px] text-gray-600 font-bold '>Nicholas Kegeyan — Discontent</p>
          </div>
         
      </div>
    </div>
  );
};

export default OmniChannel;
