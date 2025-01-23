const Section3 = () => {
  return (
    <div className="section-three mt-4 bg-[#f2f0eb] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex md:flex-row flex-col justify-between items-center p-4">
        <div className="side-one">
          <div className="img">
            <img
              src="/src/assets/home/section-three-img.avif"
              alt="not found"
            />
          </div>
        </div>
        <div className="side-two flex flex-col md:text-center space-y-4">
          <div className="btn bg-[#dde041] text-black p-4 rounded-full text-center max-w-24 cursor-pointer font-bold md:m-auto">
            Strategy
          </div>
          <div className="section-two-h2 flex flex-wrap">
            <h2 className="font-bold md:text-[3rem] text-[2rem] md:m-auto">
              Expert creative
            </h2>
          </div>
          <div className="section-paragraph">
            <p className="text-[1.25rem] flex flex-wrap md:w-[70%] m-auto">
              Brands and creators collaborate with our dedicated team of experts
              to build winning creative strategy—backed by research, first-party
              data, and industry benchmarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
