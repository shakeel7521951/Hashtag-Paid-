import React from "react";

const ImageSlider = () => {
  return (
    <div className="my-16 flex flex-col w-full justify-center items-center overflow-hidden ">
      <h1 className="text-5xl font-custom text-center text-nowrap">
        Join thousand of creators
      </h1>
      <div className="h-[50vh] rounded-lg mt-10 flex justify-center items-center">
        <marquee
          behavior=""
          direction="right"
          className="overflow-hidden h-full "
        >
          <div className="flex justify-center items-center gap-10">
            <img
              src="/src/assets/creators/creator1.webp"
              alt=""
              className="object-cover h-[50vh] rounded-lg"
            />
            <img
              src="/src/assets/creators/creator2.webp"
              alt=""
              className="object-cover h-[50vh] rounded-lg"
            />
            <img
              src="/src/assets/creators/creator3.webp"
              alt=""
              className="object-cover h-[50vh] rounded-lg"
            />
            <img
              src="/src/assets/creators/creator4.webp"
              alt=""
              className="object-cover h-[50vh] rounded-lg"
            />
            <img
              src="/src/assets/creators/creator5.webp"
              alt=""
              className="object-cover h-[50vh] rounded-lg"
            />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default ImageSlider;
