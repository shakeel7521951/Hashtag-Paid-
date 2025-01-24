const Principle6 = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen md:p-10 text-white">
        <div className="w-full lg:w-[95%] mx-auto bg-[#191a22] py-10 pb-14 rounded-[4rem] h-fit flex justify-center items-center flex-col lg:flex-row-reverse md:pl-10">
          <div className="ml-3 md:ml-14 lg:w-[60%] w-[95%]">
            <p className="text-[#7c7cf0] font-customLight mt-10 text-[1.3rem]">
              Principle 6.
            </p>
            <h1 className="mt-6 text-[2rem] md:text-[4rem] font-customLight">
              Stay ahead of the curve
            </h1>
            <p className="font-customLight mt-6 text-[1.1rem] w-full md:w-[78%]">
              Stay ahead of the curve and keep at the cutting-edge by learning
              and experimenting with the best AI tools. You don’t need to adopt,
              though keep up to date in case new technologies allow you to
              better express yourself or adhere to any of these principles.
              Adaptability is your secret weapon in this fast-paced digital
              world! Every new AI tool you master is another brush in your
              creative palette—paint the future with your innovations!
            </p>
            <div className="mt-10 font-customLight bg-[#21232d] w-full md:w-[78%] p-4 rounded-xl">
              <h2 className="text-[1rem]">Example</h2>
              <p className="font-customLight mt-4 text-gray-500">
                Regularly joining in training sessions and workshops on new AI
                tools and best practices, ensuring a continuous upgrade of
                skills and/or change of tools.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[80%] ml-10 lg:ml-0 mt-10 h-fit relative">
            <img
              src="/src/assets/ai-principles/672d49f863a817292a2a23d2_a-woman-playing-tenis.avif"
              alt=""
              className="h-[20rem] md:h-[33rem]  rounded-3xl"
            />
            <img
              src="/src/assets/ai-principles/672d49fd66576f68e14841f8_logo-medley.png"
              alt=""
              className="absolute top-3  left-24 md:left-40 w-[4rem] md:w-[10rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principle6;
