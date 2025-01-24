import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Section4 = () => {
  const automateRef = useRef();
  const location = useLocation();

  useEffect(()=>{
    if(location.hash === "#paid"){
      automateRef.current?.scrollIntoView({behavior:"smooth"});
    }
  },[location.hash]);

  return (
    <div>
      <div className="bg-white min-h-screen flex justify-center items-center max-sm:flex-col pb-24 rounded-b-[5rem] mt-20 gap-8 overflow-hidden">
        <div className="max-sm:w-full w-[45vw] max-sm:pl-0 pl-10 pb-1">
          <div className="bg-[#DDE041] mt-10 text-black font-customLight font-extralight max-sm:w-[32%]  md:w-[80%] lg:w-[22%] text-center rounded-full px-2 py-2">
            <p id="#paid" ref={automateRef}>Payment</p>
          </div>
          <div className="h-fit mt-7">
            <p className="font-custom max-sm:text-[2.4rem] max-sm:w-[98%] max-sm:pl-2 md:w-[95%] md:text-3xl lg:text-6xl  w-[80%] leading-none tracking-tight">
              Quality content deserves quality pay
            </p>
          </div>
          <div className="pt-8 max-sm:pl-2">
            <p className="font-customLight w-[100%] text-[1.2rem]">
              Set your own prices and get automatic payments in under 45 days.
            </p>
          </div>
          <div className="bg-[#F2F0EB] h-[15rem] mt-7 p-4 lg:w-[26rem] rounded-lg">
            <h2 className="font-custom text-[1.8rem]">
              “My highest paid and most credible deals have been through #paid.”
            </h2>
            <p className="mt-14 text-gray-400 text-[0.8rem]">
              Mallory Rowan — @malloryrowan
            </p>
          </div>
        </div>
        <div className="max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 h-fit w-[45vw] ">
          <img
            src="/src/assets/creators/section4.webp"
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
