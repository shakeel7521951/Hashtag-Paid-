const Principle5 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 5.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Build Community
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              Transform your audience into a vibrant, connected community! Let
              AI handle the heavy lifting so you can forge genuine, lasting
              relationships with your fans and fellow creators. From the first
              DM to community management, AI can assist you at every part of
              your community connection. Hyper personal content and connection
              will ensure that you're not just building a fanbase—you're
              cultivating a movement, with AI as your community-building
              assistant.
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                Using AI platforms to connect 1:1 with fans, automated audience
                ‘customer service’ that enable creators to share more on
                projects, events and other content for fans and super fans
                alike, enhancing creative connection.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/a-woman-standing-at-a-crosswalk.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/principle5-graphic.avif"
              alt=""
              className="absolute top-3  left-24 md:left-40 w-[8rem] md:w-[15rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle5;
