import React, { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const Section6 = () => {
  const [activeCard, setActiveCard] = useState(1); // 1 for card-1, 2 for card-2

  const handleCardSwitch = (direction) => {
    if (direction === "left") {
      setActiveCard((prev) => (prev === 1 ? 2 : 1));
    } else {
      setActiveCard((prev) => (prev === 2 ? 1 : 2));
    }
  };

  return (
    <div className="section-six mt-16 bg-[#f2f0eb] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex md:flex-row flex-col md:justify-between md:space-x-8 md:items-start w-full md:p-8 p-4">
        <div className="side-one md:text-center md:w-1/2 flex flex-col gap-[480px]">
          <div className="section-two-h2">
            <h2 className="font-bold md:text-[3rem] text-[2rem] w-full">
              Creators love #paid
            </h2>
          </div>
          <div className="icons md:flex gap-2 text-[40px] ms-auto hidden">
            <IoArrowBackCircleOutline
              className="cursor-pointer"
              onClick={() => handleCardSwitch("left")}
            />
            <IoArrowForwardCircleOutline
              className="cursor-pointer"
              onClick={() => handleCardSwitch("right")}
            />
          </div>
        </div>

        {/* Card 1 */}
        <div
          className={`side-two card-1 md:w-1/2 md:h-full md:mt-0 mt-4 ${
            activeCard === 1 ? "block animate-fade-in" : "hidden"
          }`}
        >
          <div className="bg-white rounded-3xl flex flex-col md:p-6 p-4">
            <div className="paragraph">
              <p className="font-bold text-[1.125rem]">
                “On #paid I’m able to partner with incredible brands that allow
                me to be creative and use my voice and style when it comes to
                creating content that I know will resonate with my audience and
                make an impact.”
              </p>
            </div>
            <div className="img md:h-[25rem] rounded-b-3xl mt-6 overflow-hidden">
              <img
                className="rounded-3xl w-fit"
                src="/src/assets/home/section-six-img.webp"
                alt="not found"
              />
            </div>
            <div className="para mt-4">
              <p>Ilana Dunn — @seeingotherpeople</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`side-two card-2 md:w-1/2 md:h-full md:mt-0 mt-4 ${
            activeCard === 2 ? "block animate-fade-in" : "hidden"
          }`}
        >
          <div className="bg-white rounded-3xl flex flex-col md:p-6 p-4">
            <div className="paragraph">
              <p className="font-bold text-[1.125rem]">
                “They advocate for their creators on their platform from making
                sure that we get paid fairly to hosting events that bring brands
                and creators together.”
              </p>
            </div>
            <div className="img md:h-[25rem] rounded-b-3xl mt-6 overflow-hidden">
              <img
                className="rounded-3xl w-fit"
                src="/src/assets/home/section-six-img-2.webp"
                alt="not found"
              />
            </div>
            <div className="para mt-4">
              <p>Conor Mckenzie — @conor_mckenzie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
