import React from "react";
import omniChannel from "../../assets/brands/omniChannel.webp";
import tick from "../../assets/brands/tick.svg";

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
        <p className="font-customLight my-5 text-xl">
        License creator content to use across all your marketing channels. Whether it’s out-of-home, digital ads, print, or in-flight entertainment, create a truly omni-channel creator marketing experience.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Repurpose creator content across all your marketing channels            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            No guesswork with a proprietary pricing algorithm based on first party data
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
            Lock in your rates before the campaign, or buy them after your content goes lives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniChannel;
