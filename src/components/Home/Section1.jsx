import React from "react";

const Section1 = () => {
  return (
    <div className="section-one mt-4">
      <div className="section-content">
        <div className="badges flex justify-between items-center">
          <div className="badge-1 text-xl font-bold cursor-pointer">
            Trusted by
          </div>
          <div className="badge-2 text-xl font-bold cursor-pointer">
            INFINITI
          </div>
          <div className="badge-3 text-xl font-bold cursor-pointer">
            SEPHORA
          </div>
          <div className="badge-4 cursor-pointer">
            <img
              className="w-[4rem] h-[4rem]"
              src="/src/assets/home/badge-1.svg"
              alt="not found"
            />
          </div>
          <div className="badge-5 cursor-pointer">
            <img
              className="w-[4rem] h-[4rem]"
              src="/src/assets/home/badge-2.svg"
              alt="not found"
            />
          </div>
          <div className="badge-6 cursor-pointer">
            <img
              className="w-[4rem] h-[4rem]"
              src="/src/assets/home/badge-3.svg"
              alt="not found"
            />
          </div>
          <div className="badge-7 cursor-pointer">
            <img
              className="w-[4rem] h-[4rem]"
              src="/src/assets/home/badge-4.svg"
              alt="not found"
            />
          </div>
          <div className="badge-8 cursor-pointer">
            <img
              className="w-[4rem] h-[4rem]"
              src="/src/assets/home/badge-5.svg"
              alt="not found"
            />
          </div>
          <div className="badge-9 cursor-pointer">
            <img
              className="w-[4rem] h-[4rem]"
              src="/src/assets/home/badge-6.svg"
              alt="not found"
            />
          </div>
        </div>

        <div className="section-text mt-4">
          <div className="flex flex-wrap">
            {" "}
            <h2 class="font-bold mx-auto text-center text-4xl w-1/2">
              Find creators and brands to collaborate with. It’s never been
              easier.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
