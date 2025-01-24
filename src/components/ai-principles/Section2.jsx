import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Section2 = () => {
  const cards = [
    "Control Your Data",
    "Always Ethical",
    "Ebrace AI Openly",
    "Use Ai Responsibly",
  ];
  const cardWidth = 16;
  const gap = 7;
  const visibleWidth = 20;
  const totalWidth = cards.length * (cardWidth + gap);

  const [translateX, setTranslateX] = useState(0);

  const handleNext = () => {
    setTranslateX((prev) => {
      const newTranslateX = prev - (cardWidth + gap);
      return Math.abs(newTranslateX) >= totalWidth ? 0 : newTranslateX;
    });
  };

  const handlePrev = () => {
    setTranslateX((prev) => {
      const newTranslateX = prev + (cardWidth + gap);
      return newTranslateX > 0 ? -(totalWidth - visibleWidth) : newTranslateX;
    });
  };
  return (
    <>
      <div className="bg-[#4e4eff] h-fit w-full rounded-[4rem] -mt-20 max-sm:p-3 md:p-10 text-white overflow-hidden">
        <p className="font-customLight mt-10 md:ml-10">The 8 principles</p>
        <h1 className="font-customLight md:ml-10 mt-10 text-5xl w-[45%] max-sm:w-full max-sm:text-4xl">
          Guiding Principles for AI-Driven Creativity
        </h1>
        <p className="font-customLight mt-10 md:ml-10 w-[55%] max-sm:w-[90%]">
          Our principles provide a framework for integrating AI in ways that
          reflect your unique values, empowering you to stay true to your
          content style and lead with intention. Explore each principle to see
          how AI can enhance your work and shape the creative future you
          envision.
        </p>
        <div
          className="h-[18rem] w-fit mt-10 pl-8 flex gap-7 relative transition-all ease-linear "
          style={{ transform: `translateX(${translateX}rem)` }}
        >
          {[
            "Control Your Data",
            "Always Ethical",
            "Ebrace AI Openly",
            "Use Ai Responsibly",
          ].map((item, idx) => (
            <>
              <div className="bg-[#191a22] h-full rounded-[2rem] w-[16rem]">
                <div className="relative top-5 left-4">
                  <p className="bg-[#4e4eff] w-[2.4rem] h-[2.4rem] rounded-full flex justify-center text-center items-center">
                    {idx + 1}
                  </p>
                  <p className="mt-[6.3rem] font-customLight text-[2.5rem] leading-none">
                    {item}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="uppercase text-gray-700 mt-1">
                      View Principle
                    </p>
                    <FaArrowRightLong className="text-gray-600 mt-2" />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="h-[3rem] mt-10 flex items-center w-fit gap-3 ml-10 max-sm:ml-2">
          <FaRegArrowAltCircleLeft
            className="text-[3rem] cursor-pointer"
            onClick={handlePrev}
          />
          <FaRegArrowAltCircleRight
            className="text-[3rem] cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
};

export default Section2;
