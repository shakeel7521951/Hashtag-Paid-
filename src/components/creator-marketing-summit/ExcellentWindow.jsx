import React from "react";

const ExcellentWindow = () => {
  return (
    <div className="h-fit bg-black text-white pb-10">
      <div className="bg-[#4e4eff] w-[90%] mx-auto h-fit rounded-[2rem] md:p-10 p-3">
        <p className="text font-custom max-sm:text-2xl md:text-6xl leading-none">
          “An excellent window into the creator economy, thoughtfully curated,
          brilliantly moderated with thought-provoking content.”
        </p>
        <div className="mt-12">
          <img
            src="/src/assets/creators-marketing-summit/atif-sheikh.svg"
            alt=""
          />
          <p className="font-customLight mt-3">Atif Shaikh</p>
          <p className="font-customLight">
            Senior Manager, Partner Marketing, Mejuri
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExcellentWindow;
