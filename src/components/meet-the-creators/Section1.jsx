const Section1 = () => {
  return (
    <div className="bg-black w-full min-h-screen flex justify-center items-center flex-col">
      <div className="bg-black h-fit w-[80%] mt-20">
        <p className="text-white text-center font-customLight text-[0.8rem] uppercase">
          Upcoming (IRL) Events
        </p>
        <div className="flex justify-center items-center gap-3 mt-3 text-center text-nowrap flex-wrap">
          {["Los Angeles", "Chicago", "Tronto", "New York", "Miami"].map(
            (city, idx) => (
              <span
                key={idx}
                className="bg-[#DDE041] p-2 px-3 rounded-full font-customLight"
              >
                {city}
              </span>
            )
          )}
        </div>
        <div className="mt-10 md:h-[17vh] text-center flex justify-center items-center mx-auto">
          <h1 className="text-white font-custom max-sm:text-4xl md:text-5xl lg:text-6xl leading-none max-sm:text-center">
            Bringing marketers and creators together
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-white font-customLight max-sm:w-[100%] w-full mt-8 text-center max-sm:text-[0.8rem] md:text-[1.08rem]">
            This is where creators meet the brands they love, and brands meet
            culture-defining creators.
          </p>
        </div>
      </div>
      <div className="m-10 w-[20rem] md:w-[48rem] lg:w-[73rem] h-[25rem] lg:h-[30rem] md:p-4 mt-[7rem]">
        <video
          src="/src/assets/creators/65133a9f670011c945d927b6_MTC-LA-transcode.mp4"
          autoPlay
          loop
          muted
          className="rounded-[3rem] w-[20rem] h-[25rem] md:w-[98rem] lg:w-[75rem] lg:h-[30rem] object-cover"
        ></video>
      </div>
      <div className="mt-10">
        <div className="bg-white h-fit pr-3 w-[90vw] flex justify-between items-center max-sm:flex-col py-1 lg:py-3 rounded-[3rem] mb-10 gap-8 overflow-hidden">
          <div className="max-sm:w-full w-[45vw]  pl-10 pb-1 max-sm:pl-2">
            <div className="h-fit mt-7">
              <p className="font-custom max-sm:text-[2.4rem] max-sm:w-[100%] max-sm:mx-auto max-sm:text-center md:w-[95%] md:text-5xl lg:text-6xl  lg:w-[96%] leading-none tracking-tight text-black md:h-[90vh] lg:h-[80vh]">
                “#paid threw another meet the creators in LA. It was incredible,
                it felt like a high school reunion.”
              </p>
              <p className="text-gray-400  max-sm:text-center md:mt-10">
                Conor McKenzie — @conor_mckenzie
              </p>
            </div>
          </div>
          <div className="max-sm:h-fit max-sm:w-[80%] max-sm:text-center max-sm:my-10 w-[45vw] lg:pl-[6rem] bg-center object-cover">
            <img
              src="/src/assets/creators/section1-meet.webp"
              alt=""
              className="object-cover rounded-3xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
