import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const buttons = [
  "All Categories",
  "Education",
  "Pharma",
  "Tech",
  "Home",
  "Financial Service",
  "Travel & Tourism",
  "Apparel & Fashion",
  "Alcohol",
  "Food & Beverage",
  "CPG",
  "Beauty",
  "Auto",
];

const cards = [
  {
    paragraph: "A leading university",
    heading: "Driving consideration and enrollment of a top American University",
    imgSrc: "/src/assets/education/img-1.png",
    category: "Education",
  },
  {
    paragraph: "York University",
    heading: "How York University worked with creators to promote its degree programs",
    imgSrc: "/src/assets/education/img-2.png",
    category: "Education",
  },
  {
    paragraph: "OTTERBOX",
    heading: "Otterbox Symmetry's creator-approved phone protection",
    imgSrc: "/src/assets/education/img-3.webp",
    category: "Tech",
  },
  {
    paragraph: "PUIG",
    heading: "Driving consideration of PUIG fragrances for the holiday season",
    imgSrc: "/src/assets/education/img-4.jpg",
    category: "Tech",
  },
  {
    paragraph: "BUFFALO DAVID BITTON",
    heading: "Unlocking creative expression with Buffalo denim",
    imgSrc: "/src/assets/education/img-5.jpg",
    category: "Financial Service",
  },
  {
    paragraph: "INNISKILLIN",
    heading: "Crafting the perfect wine cocktail: How Inniskillin's increased consideration among young consumers",
    imgSrc: "/src/assets/education/img-6.avif",
    category: "CPG",
  },
  {
    paragraph: "DR.OETKER",
    heading: "How Dr.Oetker drove 5x the industry benchmark for Story Views",
    imgSrc: "/src/assets/education/img-7.webp",
    category: "Food & Beverage",
  },
  {
    paragraph: "NATIONAL RETAIL CHAIN",
    heading: "National retail chain drives in-store traffic with local creators",
    imgSrc: "/src/assets/education/img-8.webp",
    category: "Auto",
  },
  {
    paragraph: "GLOBAL BEER BRAND",
    heading: "Global beer brand drives 14 point increase in purchase intent",
    imgSrc: "/src/assets/education/img-9.avif",
    category: "Home",
  },
  {
    paragraph: "NON-PRESCRIPTION MEDICINE BRAND",
    heading: "How a non-prescription medication brand grew 55% over 2 years",
    imgSrc: "/src/assets/education/img-10.png",
    category: "Beauty",
  },
  {
    paragraph: "CHERRIOS",
    heading: "Cheerios takes the lead as No. 1 healthy cereal option with the help of creators",
    imgSrc: "/src/assets/education/img-11.png",
    category: "Travel & Tourism",
  },
  {
    paragraph: "IKEA",
    heading: "How IKEA used creator marketing to drive in-store traffic and decrease the cost per visit by 40%",
    imgSrc: "/src/assets/education/img-12.png",
    category: "Alcohol",
  },
  {
    paragraph: "ROYLE",
    heading: "How Royale drove coupon downloads for a product launch using creator marketing",
    imgSrc: "/src/assets/education/img-13.png",
    category: "Apparel & Fashion",
  },
  {
    paragraph: "SCOTCH",
    heading: "The holiday creator campaign that made Flex &amp; Seal the most loved brand among its competitors",
    imgSrc: "/src/assets/education/img-14.png",
    category: "Alcohol",
  },
];

const Section1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const location = useLocation();

  useEffect(() => {
    const hashCategory = location.hash.replace("#", "");
    if (hashCategory && buttons.includes(hashCategory)) {
      setSelectedCategory(hashCategory);
    }
  }, [location]);

  const filteredCards =
    selectedCategory === "All Categories"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <div className="py-14 px-10 w-full mx-auto">
      <div className="w-full flex flex-col sm:flex-row">
        {/* Section Buttons */}
        <div className="w-full sm:w-[30%] flex flex-col">
          <div className="heading">
            <h2 className="font-customLight font-bold md:text-[2rem] text-[1.125rem]">
              Browse By
            </h2>
          </div>
          <div className="btns flex gap-5 md:gap-3 flex-wrap md:py-5 text-center md:mt-0 mt-4">
            {buttons.map((button, index) => (
              <div
                key={index}
                id={`#${button}`}
                onClick={() => setSelectedCategory(button)}
                className={`bg-[#dde041] rounded-full px-6 py-3 text-[.9rem] cursor-pointer font-customLight ${
                  selectedCategory === button ? "bg-[#c0bb33]" : ""
                }`}
              >
                {button}
              </div>
            ))}
          </div>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-14 w-full sm:w-[60%] mt-12 sm:mt-0">
          {filteredCards.map((card, index) => (
            <div key={index} className="md:w-[22rem] md:h-full md:mt-0 mt-4">
              <div className="bg-[#f2f0eb] rounded-3xl flex flex-col md:p-6 p-4 h-full">
                <div className="paragraph text-[12px] text-gray-500 font-semibold font-custom">
                  {card.paragraph}
                </div>
                <div className="heading">
                  <h3 className="font-bold text-[1.125rem] mt-5">{card.heading}</h3>
                </div>
                <div className="img rounded-3xl mt-6 overflow-hidden md:h-52 md:w-full flex justify-center items-center">
                  <img
                    className="rounded-3xl object-cover object-center h-auto w-auto min-w-full min-h-full"
                    src={card.imgSrc}
                    alt="not found"
                  />
                </div>
                <div className="para mt-4 text-[1rem] font-customLight cursor-pointer flex items-center gap-2">
                  <h3>Read</h3>
                  <FaArrowRight className="text-xl transition-transform duration-300 hover:translate-x-4 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
