const Section2 = () => {
  return (
    <div className="section-two mt-4">
      <div className="section-content flex justify-around items-center">
        <div className="side-one flex flex-col space-y-6">
          <div className="btn bg-[#dde041] text-black p-4 rounded-full text-center max-w-24 cursor-pointer font-bold ">Match</div>
          <div className="section-two-h2 flex flex-wrap">
            <h2 class="font-bold text-[3rem]">Meet the right partner</h2>
          </div>
          <div className="section-paragraph">
            <p class="text-[1.25rem] flex flex-wrap w-[70%]">
              If you’re looking for brands and creators to collaborate with,
              you’ll find them on #paid. We study what makes for a successful
              match, so finding each other is easy.
            </p>
          </div>
        </div>
        <div className="side-two">
          <div className="img">
            <img src="/src/assets/home/section-two-img.avif" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
