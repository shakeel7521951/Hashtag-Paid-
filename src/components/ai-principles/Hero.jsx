const Hero = () => {
  return (
    <>
      <div className="bg-black h-fit w-full text-white py-10">
        <p className="uppercase font-customLight text-center pt-14">
          AI principles for content creation
        </p>
        <h1 className="text-center font-custom text-3xl md:text-6xl w-[95%] lg:w-[60%] mx-auto mt-4">
          Make AI a force for good in the creator economy
        </h1>
        <p className="text-center mx-auto w-[90%] lg:w-[55%] font-customLight mt-10">
          Guiding the future of AI in content creation to amplify authenticity,
          build community, and unlock new creative possibilities. Read the
          Whitepaper.
        </p>
        <div className="p-10">
          <img
            src="/src/assets/ai-principles/ai-principles-hero-collage.avif"
            alt=""
            className="object-cover h-[20%] w-full mx-auto lg:rounded-[4rem] rounded-xl "
          />
        </div>
        <p className="text-center w-[95%] lg:w-[60%] mx-auto font-customLight text-xl">
          Together, we can shape a brighter, more innovative path with AI. Join
          the movement to embrace AI’s creative powers while keeping content
          real, meaningful, and inspiring. Take the pledge and shape the future.
        </p>
        <div className="bg-[#4e4eff] w-[10rem] mx-auto text-center py-4 rounded-full px-1 mt-8 hover:bg-blue-600 cursor-pointer">
          Take the pledge!
        </div>
        <div className="bg-gray-700 h-[0.1px] w-[90%] mx-auto mt-20"></div>
      </div>
    </>
  );
};

export default Hero;
