const Section1 = () => {
  return (
    <div>
      <div className="bg-white min-h-screen flex justify-center items-center max-sm:flex-col pb-24 rounded-b-[5rem] mt-20 gap-8 overflow-hidden max-sm:pl-2">
        <div className="max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 h-fit w-[45vw] ">
          <img
            src="/src/assets/creators/section1.webp"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="max-sm:w-full w-[45vw] max-sm:pl-0 pl-10 pb-1">
          <div className="bg-[#DDE041] mt-10 text-black font-customLight font-extralight max-sm:w-[30%]  md:w-[80%] lg:w-[22%] text-center rounded-full px-2 py-2">
            <p>Matching</p>
          </div>
          <div className="h-fit mt-7">
            <p className="font-custom max-sm:text-[2.4rem] max-sm:w-[85%] md:w-[95%] md:text-3xl lg:text-6xl  w-[80%] leading-none tracking-tight">
              Collaborations that fit your content style
            </p>
          </div>
          <div className="pt-8">
            <p className="font-customLight w-[100%] text-[1.2rem]">
              Matching based on your audience and content style.
            </p>
          </div>
          <div className="bg-[#F2F0EB] h-[15rem] mt-7 p-4 lg:w-[26rem] rounded-lg">
            <h2 className="font-custom text-[1.8rem]">
              “I always match with brands that align with my style and
              messaging.”
            </h2>
            <p className="mt-14 text-gray-400 text-[0.8rem]">
              Mallory Rowan — @malloryrowan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
