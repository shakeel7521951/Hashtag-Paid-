const Section1 = () => {
  return (
    <>
      <div className="bg-black h-[fit] pb-32 w-full text-white flex justify-center items-center max-sm:flex-col-reverse z-50">
        <div className="h-fit w-full md:w-1/2 max-sm:pt-0  lg:pt-30 md:pl-14">
          <p className=" font-customLight text-xl md:text-xl lg:text-2xl w-full lg:w-[80%]  max-sm:mx-auto max-sm:pl-3">
            "As a film photographer I use AI to bring some of my ideas to life,
            to enhance my ideas further, photo & video editing past my limits,
            and visualizing new possibilities. AI has been impacting my workflow
            and many others in the art industry. I'm excited to see new creative
            ways that it'll help creators be more effective yet still be able to
            express themselves as I believe AI is a tool that will be used to
            engage art in ways it has never seen before."
          </p>
          <p className="mt-5 text-[#9d9eff] font-custom text-[1.4rem] max-sm:pl-3">
            Angel Fonseca
          </p>
          <p className="text-gray-700 font-customLight max-sm:pl-3">
            @hijoflacko
          </p>
        </div>
        <div className="w-full md:w-[50%] p-2 max-sm:mb-10">
          <img
            src="/src/assets/ai-principles/angel-fonseca-portrait.avif"
            alt=""
            className="md:w-[40rem] md:h-[24rem] lg:h-full lg:w-[36rem] w-full object-cover rounded-[4rem] "
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
