import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Section3 = () => {
  const automateRef = useRef();
  const location = useLocation();
  useEffect(()=>{
    if(location.hash === "#automate"){
      automateRef.current?.scrollIntoView({behavior:"smooth"});
    }
  },[location.hash]);

  return (
    <div>
      <div className="bg-black min-h-screen flex justify-center items-center max-sm:flex-col pt-20 pb-20 rounded-[3rem] mt-20 gap-8 overflow-hidden">
        <div className="max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 h-fit w-[45vw] ">
          <img
            src="/src/assets/creators/section3.webp"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="max-sm:w-full w-[45vw]  pl-10 pb-1 max-sm:pl-2">
          <div className="bg-[#DDE041] mt-10 text-black font-customLight font-extralight max-sm:w-[40%] md:w-[80%] lg:w-[35%] rounded-full px-2 py-2 text-nowrap text-center ">
            <p id="#automate" ref={automateRef}>Automation</p>
          </div>
          <div className="h-fit mt-7">
            <p className="font-custom max-sm:text-[2.4rem] max-sm:w-[100%] max-sm:mx-auto md:w-[95%] md:text-3xl lg:text-6xl  lg:w-[80%] leading-none tracking-tight text-white">
              You create. We manage{" "}
              <p className="text-nowrap">everything else</p>
            </p>
          </div>
          <div className="pt-8">
            <p className="font-customLight max-sm:w-[80%] w-[100%] text-[1.2rem] text-white">
              Our team and technology helps manage the campaign every step of
              the way so you can focus on doing what you do best—creating
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
