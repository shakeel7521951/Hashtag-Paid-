const Section5 = () => {
  return (
    <div className="section-five mt-16">
      <div className="section-content flex md:flex-row flex-col justify-between items-center space-x-4 p-4">
        <div className="side-one">
          <div className="img">
            <img src="/src/assets/home/section-five-img.avif" alt="not found" />
          </div>
        </div>
        <div className="side-two flex flex-col space-y-4">
          <div className="btn bg-[#dde041] text-black p-4 rounded-full text-center max-w-28 cursor-pointer font-bold md:ml-[7rem]">
            Repurpose
          </div>
          <div className="section-two-h2 flex flex-wrap">
            <h2 className="font-bold md:text-[2.5rem] text-[2rem] md:ml-[7rem] md:tracking-[-.06rem]">
              Use your campaign content everywhere
            </h2>
          </div>
          <div className="section-paragraph">
            <p className="text-[1.25rem] flex flex-wrap md:w-[70%] md:m-auto">
              Take the best-performing creator content and use it across
              different marketing channels, like out-of-home, print, and
              in-flight entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
