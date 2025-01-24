import React, { useEffect, useRef } from "react";
import measurement from "../../assets/brands/measurement.webp";
import tick from "../../assets/brands/tick.svg";
import { useLocation } from "react-router-dom";

const Measurement = () => {
   const analyticsRef = useRef(null);
      const location = useLocation();
    
      useEffect(() => {
        if (location.hash === "#analytics") {
          analyticsRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location.hash]);

  return (
    <div className="bg-black  w-full flex flex-col sm:flex-row px-6 my-8 sm:px-10 rounded-xl py-10 mx-auto sm:py-14 gap-6 sm:gap-10">
      <div className="w-full sm:w-[50%] order-1 sm:order-2">
        <img src={measurement} style={{height:"500px",width:"100%"}} alt="Quality content" />
      </div>
      <div className="w-full sm:w-[50%] text-white mt-5 order-2 sm:order-1">
        <button id="#analytics" ref={analyticsRef} className="py-2 px-3 bg-[#DDE041] text-black my-5 rounded-full">
        Measurement
        </button>
        <h1 className="font-custom text-3xl sm:text-5xl">
        Stop assuming what’s working 
        </h1>
        <p className="font-customLight py-4">
        Keep a pulse on what’s resonating with your target audience and continue to optimize your creator marketing program.
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
            Track how your campaign performs against benchmarks and industry norms
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
            <p>Brand lift studies to measure the impact of your creator marketing programs</p>
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
            Live campaign review to walk through results, insights, and strategy for future growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measurement;
