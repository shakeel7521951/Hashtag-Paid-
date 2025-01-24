const Hero = () => {
  return (
    <div className="bg-[#F2F0EB] h-fit flex justify-center items-center max-sm:flex-col pb-24 rounded-b-[5rem]">
      <div className="min-h-screen max-sm:w-full w-[50vw] max-sm:pl-0 pl-12">
        <div className="bg-white mt-10 text-blue-600 font-customLight font-semibold max-sm:w-[80%] max-sm:mx-auto md:w-[80%] lg:w-[50%] text-center rounded-full p-3">
          <p>#paid for creators and agents</p>
        </div>
        <div className="h-fit mt-7">
          <p className="font-custom max-sm:text-[55px] max-sm:text-center max-sm:w-[85%] max-sm:mx-auto md:w-[95%] md:text-6xl text-7xl  w-[70%] leading-none tracking-tight">
            Get paid to do what you love
          </p>
        </div>
        <div className="pt-8">
          <p className="font-customLight max-sm:text-center text-[1.2rem]">
            Find the next collaboration that gets you excited.
          </p>
        </div>
        <div className="max-sm:text-center">
          <button className="bg-black py-4 px-6 text-white rounded-full mt-10 hover:bg-slate-500 transition-all">
            Join For Free
          </button>
        </div>
        <p className="mt-8 max-sm:text-center max-sm:mx-3 flex max-sm:flex-col text-gray-400 font-customLight leading-none gap-2">
          Are you a brand or agency?
          <a href="#" className="underline">
            Book A Demo
          </a>
        </p>
        <div className="mt-6">
          <img
            src="/src/assets/creators/stars.svg"
            alt=""
            className="max-sm:mx-auto"
          />
          <p className="uppercase font-customLight text-[#FF492C] mt-2 max-sm:text-center">
            "Easiest to do business with"
          </p>
        </div>
      </div>
      <div className="h-screen max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 w-[50vw] md:mt-20 ">
        <img
          src="/src/assets/creators/651cbb740ed53928483e173d_creators-hero_1_5x.webp"
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
