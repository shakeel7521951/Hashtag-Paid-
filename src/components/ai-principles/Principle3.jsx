const Principle3 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 3.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Always Ethical
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              We believe that ethical use of AI magnifies your authenticity by
              adhering to your ethical values! Values are your connection to
              your audience. Any AI automation doesn’t pressure fans to buy,
              Privacy is preserved, including your data and that of fans. With
              great AI power comes great responsibility—use it to uplift,
              inspire, and connect with your audience.
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                Use AI to create content that is yours, be ethical in your use
                so your fans aren’t surprised. Don’t use unlicensed deep fakes
                (face or voice) for commercial gain. Using AI is your
                responsibility, be wise.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/principle3-graphic.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/principle3.avif"
              alt=""
              className="absolute top-3  left-24 md:left-40 w-[8rem] md:w-[15rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle3;
