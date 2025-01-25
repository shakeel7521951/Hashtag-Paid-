import React from "react";
import qualityContent from "../../assets/agencies/qualityContent.webp";
import tick from "../../assets/agencies/tick.svg";

const QualityContent = () => {
  return (
    <div className="bg-black  w-full flex flex-col sm:flex-row px-6 sm:px-10 rounded-xl py-10 mx-auto sm:py-14 gap-6 sm:gap-10">
      <div className="w-full sm:w-[50%]">
        <img src={qualityContent} alt="Quality content" className="rounded-[10%] sm:height-[750px] sm:width-[100%]"/>
      </div>
      <div className="w-full sm:w-[50%] text-white  sm:mt-[10rem] ">
        <button className="py-2 px-3 bg-[#DDE041] text-black my-5 rounded-full">
          Quality Content
        </button>
        <h1 className="font-custom text-3xl sm:text-5xl">
        Production-level content
        </h1>
        <p className="font-customLight py-4">
        Creators produce high-quality content all the time—from lo-fi to hi-fi. They have range, and adapt their production to match your goals.
        </p>
        <div className="flex flex-col gap-2 text-white">
          <div className="flex gap-2">
            <img
              src={tick}
              className="f"
              style={{
                filter: "invert(1) brightness(2)",
                WebkitFilter: "invert(1) brightness(2)",
              }}
              alt="Tick"
            />
            <p>
            Whether it’s food commercials, or ASMR for auto, you’ll find specialized creator talent
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={tick}
              className="f"
              style={{
                filter: "invert(1) brightness(2)",
                WebkitFilter: "invert(1) brightness(2)",
              }}
              alt="Tick"
            />
            <p>UGC to studio-level production—you pick based on your goals</p>
          </div>
          <div className="flex gap-2">
            <img
              src={tick}
              className="f"
              style={{
                filter: "invert(1) brightness(2)",
                WebkitFilter: "invert(1) brightness(2)",
              }}
              alt="Tick"
            />
            <p>
            From educational and entertainment content, to product reviews and live events, work with creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityContent;
