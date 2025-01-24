const Principle2 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 md:pl-10 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row-reverse">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 2.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Control your data
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              Take charge of your creations, content and connections! Understand
              your rights and use AI to build your brand with solid foundations,
              while keeping full control of your amazing content and valuable
              data. Remember, your content is your digital domain – AI is your
              advisor and sounding board.
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                Establishing explicit terms in user agreements that ensure
                creators retain ownership of their content generated with the
                aid of AI tools.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/woman-walking-next-to-infinity-car.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/terms-and-user-agreements-ownership.png"
              alt=""
              className="absolute top-3  left-24 md:left-40 w-[8rem] md:w-[15rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle2;
