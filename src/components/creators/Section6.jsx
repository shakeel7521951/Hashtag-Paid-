const Section6 = () => {
  return (
    <div className="section-seven bg-[#000000] rounded-[3rem]">
      <div className="section-content flex md:flex-row  flex-col-reverse md:justify-around md:items-center md:p-16 p-4 max-sm:gap-10">
        <div className="side-two flex flex-col space-y-6 md:w-[80vw] lg:w-[55vw]">
          <div className="section-two-h2 text-white">
            <h2 className="font-bold md:text-5xl font-custom leading-none md:w-[68%] max-sm:text-center max-sm:text-4xl max-sm:w-full lg:text-7xl">
              We bring marketers and creators together IRL, too.
            </h2>
          </div>
          <div className="section-paragraph">
            <p className="text-[1.25rem] text-white font-customLight max-sm:text-center max-sm:w-full w-3/4">
              Join us and spend an evening with the most-loved content creators
              in your city.
            </p>
          </div>
          <div className="section-btns">
            <div className="para text-white text-[.75rem] font-bold mt-2 max-sm:text-center max-sm:w-full">
              UPCOMING EVENTS
            </div>
            <div className="btns flex md:flex-row flex-wrap max-sm:justify-center md:justify-start items-center gap-2 max-sm:p-5 text-center md:mt-4">
              {["Los Angeles", "Chicago", "Toronto", "New York", "Miami"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="two bg-[#dde041] rounded-full md:p-3 p-2 text-[.8125rem] cursor-pointer font-customLight"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="btn bg-[#ffffff] text-black md:p-4 p-2 rounded-full text-center w-fit cursor-pointer font-customLight hover:bg-[#808080] max-sm:mx-auto ">
            Register Now
          </div>
        </div>
        <div className="side-one flex justify-end max-sm:mb-10 h-fit">
          <div className="img">
            <img
              src="/src/assets/home/section-seven-img.webp"
              alt="not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
