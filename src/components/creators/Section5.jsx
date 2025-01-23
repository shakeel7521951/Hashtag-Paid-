const Section5 = () => {
  return (
    <div>
      <div className="bg-black min-h-screen flex justify-center items-center max-sm:flex-col pt-20 pb-20 rounded-[3rem] mb-10 gap-8 overflow-hidden">
        <div className="max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 w-[45vw]  ">
          <img
            src="/src/assets/creators/section5.webp"
            alt=""
            className="object-contain rounded-2xl"
          />
        </div>
        <div className="max-sm:w-full w-[45vw]  pl-10 pb-1 max-sm:pl-2">
          <div className="h-fit mt-7">
            <p className="font-custom max-sm:text-[2.4rem] max-sm:w-[100%] max-sm:mx-auto max-sm:text-center md:w-[95%] md:text-3xl lg:text-5xl  lg:w-[100%] leading-none tracking-tight text-white">
              “#paid advocates for their creators... from making sure that we
              get paid fairly to hosting events that bring brands and creators
              together”
            </p>
            <p className="text-gray-400 mt-4 max-sm:text-center">
              Conor McKenzie — @conor_mckenzie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
