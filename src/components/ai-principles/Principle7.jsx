const Principle7 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 7.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Use AI responsibly
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              Pioneer the future, responsibly! Your creativity will inspire
              others and shape the future we live in, make sure you are living
              in the world you intentionally want to create, including for your
              community online. You're not just riding the wave of
              progress—you're steering it—steer it towards a brighter, more
              ethical horizon for all creators! Inspire others to harness AI
              with their values at the heart of it, too.
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                Don’t replace your human self in your content, people fell in
                love with your human story, not the technology used to make it!
                Authenticity isn’t about being on autopilot, people connect with
                people so keeping your essence in all your content is crucial.
                An AI is always available to amplify your story.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/infinity-suv-interior-with-dog.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/principle7-graphic.avif"
              alt=""
              className="absolute top-3  left-24 md:left-52 w-[8rem] md:w-[10rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle7;
