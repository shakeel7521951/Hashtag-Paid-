import React from "react";

const Hero = () => {
  return (
    <div className="eduction">
      <div className="education-hero flex flex-col items-center md:gap-8 gap-4 p-4 md:mt-12 mt-8">
        <div className="btn">
          <button className="bg-[#f2f0eb] text-[#4e4eff] text-[1.125rem] p-4 rounded-full cursor-auto font-customLight">
            Customer Story
          </button>
        </div>
        <div className="heading">
          <h1 class="heading--h1 md:text-[5rem] text-[2.5rem] md:text-center font-bold tracking-[-.1rem] md:w-1/2 md:m-auto font-custom">
            Find out why brands choose #paid
          </h1>
        </div>
        <div className="paragraph text-[1.25rem] font-customLight">
          Find campaign inspiration from brands and creators you know and love.
        </div>
      </div>
    </div>
  );
};

export default Hero;
