const Principle8 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row-reverse md:pl-10">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 8.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Quality is your superpower
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              Use AI to elevate your content to new heights! Focus on creating
              more jaw-dropping, meaningful work that leaves a lasting
              impression with your audiences and opens conversations with
              collaborators. Remember, one good piece of content outshines a
              bunch of regular ones! Let AI handle the polish while you focus on
              the brilliance—your ideas are the real reason that audiences will
              continue to gravitate towards you.
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                Using AI for advanced content editing and optimization, ensuring
                that every piece of content meets high standards of quality and
                relevance.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/672d4b372830252620621a26_person-holding-phone-while-taking-a-picture.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/672d4b255bf9fde9731ed5cb_content-analysis-chart.png"
              alt=""
              className="absolute top-3  left-24 md:left-40 w-[8rem] md:w-[15rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle8;
