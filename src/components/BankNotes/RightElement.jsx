import React from "react";
import "../../index.css";

const data = [
  {
    id: 1,
    title:
      "How a global bike brand courts olympians creators and  casual riders",
    des: "October 18, 2024 | Emmy Liederman",
    buttonText: "See more",
  },
  {
    id: 2,
    title:
      "The art of biking in the city: 5 tips to make your day more enjoyable",
    des: "October 17, 2024 | Emmy Liederman",
    buttonText: "Read more",
  },
  {
    id: 3,
    title: "The world's most popular bike: the BMX",
    des: "October 16, 2024 | Emmy Liederman",
    buttonText: "Watch video",
  },
  {
    id: 4,
    title: "The world's fastest bike: the BMX: a race for the win",
    des: "October 15, 2024 | Emmy Liederman",
    buttonText: "Listen to podcast",
  },
];
const RightElement = () => {
  return (
    <div className="right-element-container sm:border-none lg:pl-8 lg:border-l h-auto border-gray-300 flex flex-col gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="right-element py-4 flex flex-col gap-2 items-start"
        >
          <h6 className="font-bold">{item.title}</h6>
          <p className="text-gray-500">{item.des}</p>
          <button className="btn">{item.buttonText}</button>
          <hr className="w-full border-t border-gray-300 my-2" />
        </div>
      ))}
    </div>
  );
};

export default RightElement;
