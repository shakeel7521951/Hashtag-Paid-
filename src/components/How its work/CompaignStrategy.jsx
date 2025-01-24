import { useEffect, useRef, useState } from "react";
import compaign from "../../assets/trusted/compaign.webp";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function CreatorWork() {
  const [activeIndex, setActiveIndex] = useState(null);
  const manageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#manage") {
      manageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  const authenticator = [
    {
      id: 1,
      plus: <FaPlus />,
      title: "Creators pitch campaign ideas",
      text: "Creators know their audience best. Let them develop creative concepts and create memorable content that resonates with their audience.",
    },
    {
      id: 2,
      plus: <FaPlus />,
      title: "Strategy backed by research and trends ",
      text: "Have confidence in your campaign strategy with benchmarks and normative data from over 30K respondents.",
    },
    {
      id: 3,
      plus: <FaPlus />,
      title: "Dedicated strategists",
      text: "You’ll have a team of experts proactively working with you to make sure every campaign is on schedule, brand safe, and successful.",
    },
    {
      id: 4,
      plus: <FaPlus />,
      title: "Concept & content approval",
      text: "Have full control over the creative and copy that goes live without having to manage any back and forth communication with creators.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full mt-14 pb-20 rounded-[20px] p-8">
        <div className="w-[90%] mx-auto flex flex-col sm:flex-row md:flex-row-reverse gap-5 justify-around">
          {/* image */}
          <div className="w-full sm:w-[50%] h-full order-1 sm:order-2">
            <img src={compaign} alt="" className="w-full h-full" />
          </div>
          <div className="w-full sm:w-[50%] max-h-full order-2 sm:order-1">
            <div className="w-[300px] sm:w-[300px] p-3 rounded-[30px] flex justify-center items-center bg-[#dde041]">
              {/* Ensure the button's id matches the hash */}
              <button id="manage" ref={manageRef}>
                Campaign strategy & management
              </button>
            </div>

            {/* text creator */}
            <div className="md:text-xl text-xl md:flex gap-1">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold font-custom-[Mona Sans Extended, sans-serif]">
                Relax, we take care of everything
              </div>
            </div>

            {/* authenticator creator */}
            <div className="w-[100%] mt-3">
              {authenticator.map((item, index) => (
                <div key={item.id} className="mb-3">
                  {/* Header with toggle */}
                  <div
                    className="text-2xl w-full cursor-pointer flex justify-start items-center gap-6 p-3"
                    onClick={() => handleToggle(index)}
                  >
                    <div
                      className={`text-xs sm:text-xs transition-transform duration-300 ease-in-out ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {activeIndex === index ? <FaMinus /> : item.plus}
                    </div>
                    <span className="text-base sm:text-xl">{item.title}</span>
                  </div>
                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="w-[80%] sm:w-[80%] mx-14">
                      <p className="py-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
