const Section7 = () => {
  return (
    <div className="section-seven bg-[#000000] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex md:flex-row flex-col md:justify-around md:items-center md:p-16 p-4">
        <div className="side-one">
          <div className="img">
            <img
              src="/src/assets/home/section-seven-img.webp"
              alt="not found"
            />
          </div>
        </div>

        <div className="side-two flex flex-col space-y-6 md:w-1/2">
          <div className="section-two-h2 text-white">
            <h2 className="font-bold md:text-[5rem] text-[2rem] tracking-[-.1rem]">
              We bring marketers and creators together IRL, too.
            </h2>
          </div>
          <div className="section-paragraph">
            <p className="text-[1.25rem] text-white">
              Join us and spend an evening with the most-loved content creators
              in your city.
            </p>
          </div>
          <div className="section-btns">
            <div className="para text-white text-[.75rem] font-bold">
              UPCOMING EVENTS
            </div>
            <div className="btns flex md:flex-row md:space-x-8 gap-5 sm:gap-2 flex-wrap justify-center items-center   py-5 text-center md:mt-0 mt-4">
              <div className="two bg-[#dde041] rounded-full md:p-2 p-1 text-[.8125rem] cursor-pointer">
                Los Angeles
              </div>
              <div className="two bg-[#dde041] rounded-full md:p-2 p-1 text-[.8125rem] cursor-pointer">
                Chicago
              </div>
              <div className="three bg-[#dde041] rounded-full md:p-2 p-1 text-[.8125rem] cursor-pointer">
                Toronto
              </div>
              <div className="four bg-[#dde041] rounded-full md:p-2 p-1 text-[.8125rem] cursor-pointer">
                New York
              </div>
              <div className="five bg-[#dde041] rounded-full md:p-2 p-1 text-[.8125rem] cursor-pointer">
                Miami
              </div>
            </div>
          </div>
          <div className="btn bg-[#ffffff] text-black md:p-4 p-2 rounded-full text-center md:max-w-32 cursor-pointer font-bold hover:bg-[#808080] ">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
