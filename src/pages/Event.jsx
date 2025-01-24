import React, { useEffect, useRef } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import ImgContent from '../components/events/ImgContent';
import { useLocation } from "react-router-dom";

const App = () => {
  const onDemandRef = useRef();
  const location = useLocation();

  useEffect(()=>{
    if(location.hash === '#on-demand'){
      onDemandRef.current?.scrollIntoView({behavior:"smooth"});
    }
  },[location.hash]);

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <div className="w-4/5 mx-auto py-8">
        <span className="text-lg font-normal flex items-center space-x-4">
          Home <FaGreaterThan className="text-sm ml-3 mr-3" /> Events
        </span>

        <h1 className="text-4xl font-bold mt-4 mb-7">COMING UP</h1>
        <h2 id="on-demand" ref={onDemandRef} className="text-4xl font-bold mt-2">ON DEMAND</h2>

        <div className="flex flex-col gap-12 mt-12">
          {ImgContent.map((item, index) => (
            <div
              className="flex flex-col lg:flex-row items-center gap-8"
              key={index}
            >
              {/* Image Wrapper */}
              <div className="w-full lg:w-1/2 bg-gray-100 py-12  flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-base leading-6 mt-4">{item.description}</p>
                <span className="inline-block mt-4 px-4 py-2 bg-black text-white text-sm">
                  {item.button}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
