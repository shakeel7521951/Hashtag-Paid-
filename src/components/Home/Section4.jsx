const Section4 = () => {
  return (
    <div className="section-four bg-[#000000] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex md:flex-row flex-col md:justify-around md:items-center md:p-16 p-4">
        <div className="side-one flex flex-col space-y-4">
          <div className="btn bg-[#dde041] text-black p-4 rounded-full text-center max-w-24 cursor-pointer font-bold ">
            Measure
          </div>
          <div className="section-two-h2 flex flex-wrap text-white">
            <h2 className="font-bold md:text-[4rem] text-[2rem]">
              Understand what’s working—and why
            </h2>
          </div>
          <div className="section-paragraph">
            <p className="text-[1.25rem] flex flex-wrap md:w-[70%] text-white">
              No more guessing. Learn what content and creative elements
              resonate best with your audience and why. With live reporting and
              post-campaign insights, you have the tools to make every campaign
              better.
            </p>
          </div>
        </div>
        <div className="side-two">
          <div className="img md:mt-0 mt-6">
            <img src="/src/assets/home/section-four-img.avif" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
