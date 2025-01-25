const Principle4 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row-reverse md:pl-10">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 4.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Embrace AI openly
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              Being transparent of how you're innovating with AI and where will
              not only allow you to be authentic with your audience but also
              find new and surprising ways to incorporate it into your workflow.
              Your transparency will inspire trust and spark curiosity in your
              audience about this exciting tech and how it can be used! By being
              open about your AI use, you're not just a creator – you're an
              early adopter leading the way into the future!
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                “I used AI to give me feedback on my profile grid and generate
                ideas for hooks, here’s what it told me!”
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/man-at-a-train-station.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/672d2ccfd1d90a26a9497cd3_ai-use-card.png"
              alt=""
              className="absolute top-3  left-24 md:left-40 w-[8rem] md:w-[15rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle4;
