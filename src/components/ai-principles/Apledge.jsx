const Apledge = () => {
  return (
    <>
      <div className="bg-black h-fit -mb-10 pb-20 text-white">
        <div className="h-fit max-sm:py-10 w-[85%] mx-auto flex justify-center items-center gap-5 lg:justify-between max-sm:flex-col-reverse">
          <div className="h-full md:w-[60%] lg:w-[60%] md:pt-20">
            <h1 className="font-custom text-[1.7rem] md:text-[2rem] lg:text-[3rem] md:w-full  lg:w-[75%] leading-none">
              A pledge for ethical AI in content creation!
            </h1>
            <p className="mt-8 font-customLight text-[1.2rem] md:w-full lg:w-[80%]">
              Together, we can shape a brighter, more innovative path with AI.
              Join the movement to embrace AI’s creative powers while keeping
              content real, meaningful, and inspiring. Read the whitepaper.
            </p>
            <div className="bg-[#4e4eff] w-[10rem] text-center py-4 rounded-full px-1 mt-10 hover:bg-blue-600 cursor-pointer">
              Take the pledge!
            </div>
          </div>
          <div className="md:w-[40%] lg:w-[50%]">
            <img
              src="/src/assets/ai-principles/674f1e9f9aeb0f4a9d46797e_ai-badge.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Apledge;
