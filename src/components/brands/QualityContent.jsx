import React from "react";
import qualityContent from "../../assets/brands/qualityContent.webp";
import tick from "../../assets/brands/tick.svg";

const QualityContent = () => {
  return (
    <div className="bg-black  w-full flex flex-col sm:flex-row px-6 sm:px-10 rounded-xl py-10 mx-auto sm:py-14 gap-6 sm:gap-10">
      <div className="w-full sm:w-[50%]">
        <img src={qualityContent} style={{height:"500px",width:"90%"}} alt="Quality content" />
      </div>
      <div className="w-full sm:w-[50%] text-white mt-5">
        <button className="py-2 px-3 bg-[#DDE041] text-black my-5 rounded-full">
          Quality Content
        </button>
        <h1 className="font-custom text-3xl sm:text-5xl">
          Content for every objective
        </h1>
        <p className="font-customLight py-4">
          Creators produce high-quality content all the time—from lo-fi to
          hi-fi. Creators have range, and adapt their production to match your
          goals.
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
              Whether it’s a food commercial, or ASMR for automotive, you’ll
              find specialized creator talent
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
              From educational and entertainment content, to product reviews and
              live events, creator content is versatile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityContent;
