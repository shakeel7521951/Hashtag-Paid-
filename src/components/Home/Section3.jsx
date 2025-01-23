const Section3 = () => {
  return (
    <div className="section-three mt-4 bg-[#f2f0eb] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex justify-between items-center">
        <div className="side-one">
          <div className="img">
            <img
              src="/src/assets/home/section-three-img.avif"
              alt="not found"
            />
          </div>
        </div>
        <div className="side-two flex flex-col text-center space-y-4">
          <div className="btn bg-[#dde041] text-black p-4 rounded-full text-center max-w-24 cursor-pointer font-bold m-auto">
            Strategy
          </div>
          <div className="section-two-h2 flex flex-wrap">
            <h2 class="font-bold text-[3rem] m-auto">Expert creative</h2>
          </div>
          <div className="section-paragraph">
            <p class="text-[1.25rem] flex flex-wrap w-[70%] m-auto">
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
