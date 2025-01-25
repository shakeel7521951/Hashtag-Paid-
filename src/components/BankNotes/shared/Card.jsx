import React from "react";
import "../index.css";

const Card = ({ src, des, title, subheading }) => {
  return (
    <div
      className={`flex flex-col h-auto items-start justify-between gap-2 p-2 rounded-lg `}
    >
      {/* Image */}
      <div className="w-full">
        <img
          src={src}
          alt={title || "Card image"}
          className={`w-full h-auto rounded-xl object-cover `}
        />
        <div className={`w-full flex flex-col py-1`}>
          {des && (
            <p className="text-slate-500 mb-2 text-xs sm:text-sm">{des}</p>
          )}
          {title && (
            <h3 className="font-extrabold text-md sm:text-lg mb-2">{title}</h3>
          )}
          {subheading && (
            <p className="text-gray-500 text-sm sm:text-base">{subheading}</p>
          )}
        </div>
      </div>

      {/* Text Content */}

      <div className="flex flex-col gap-2 py-2 px-4  ">
        <button className="btn  text-sm rounded-md">See More</button>
      </div>
    </div>
  );
};

export default Card;
