const Section2 = () => {
  return (
    <div className="section-two mt-4">
      <div className="section-content flex md:flex-row flex-col justify-around items-center p-4">
        <div className="side-one flex flex-col space-y-6">
          <div className="btn bg-[#dde041] text-black p-4 rounded-full text-center max-w-24 cursor-pointer font-bold ">
            Match
          </div>
          <div className="section-two-h2 flex flex-wrap">
            <h2 className="font-bold md:text-[3rem] text-[2rem]">
              Meet the right partner
            </h2>
          </div>
          <div className="section-paragraph">
            <p className="text-[1.25rem] flex flex-wrap md:w-[70%]">
              If you’re looking for brands and creators to collaborate with,
              you’ll find them on #paid. We study what makes for a successful
              match, so finding each other is easy.
            </p>
          </div>
        </div>
        <div className="side-two">
          <div className="img md:mt-0 mt-4 ">
            <img src="/src/assets/home/section-two-img.avif" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
