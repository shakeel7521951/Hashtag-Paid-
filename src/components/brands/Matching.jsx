import React, { useEffect, useRef } from "react";
import matching from "../../assets/brands/matching.webp";
import tick from "../../assets/brands/tick.svg";
import { useLocation } from "react-router-dom";

const Matching = () => {
  const matchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#match") {
      matchRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col sm:flex-row mx-5 sm:mx-10 my-6 sm:my-10 gap-5 sm:gap-10">
      <div className="w-full sm:w-[50%]">
        <img src={matching} alt="Match with the right creators" />
      </div>
      <div className="w-full sm:w-[50%] mt-10">
        <button
          id="match"
          ref={matchRef}
          className="p-3 rounded-full bg-[#D1D43D] font-customLight"
        >
          Matching
        </button>
        <h1 className="text-3xl sm:text-5xl font-custom my-3">
          Match with the right creators
        </h1>
        <p className="font-customLight my-5 text-xl">
          Our matching process means 92% of creator matches are approved in the
          first round.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
              Fully opted-in and authenticated network of creators
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
              A large network of diverse creators from underrepresented
              communities and niche categories
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={tick} alt="Tick" />
            <p className="text-md">
              Access creator lifestyle data like an upcoming home or car
              purchase, pregnancy, wedding, or a new pet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matching;
