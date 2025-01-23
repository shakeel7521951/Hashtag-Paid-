const Section2 = () => {
  return (
    <div className="section-two bg-[#dde041] rounded-3xl flex flex-col items-center md:space-y-10 space-y-4 md:py-16 p-4 md:mt-16 mt-6">
      <div className="heading text-center md:w-1/2">
        <h2 class="heading-style-h2 md:tracking-[-.06rem] tracking-[-.04rem] md:text-[3rem] text-[2rem] font-bold font-custom">
          Join the marketplace. Find your next collaboration.
        </h2>
      </div>
      <div className="btn">
        <button className="bg-[#ffffff] hover:bg-[#eef0a0] font-customLight rounded-3xl py-4 px-6 transition duration-300 ease-in-out transform hover:shadow-lg">
          Get Started
        </button>
      </div>
      <div className="end-btn flex">
        <div class="">Are you a creator?</div>
        <a href="#" className="underline">
          Join #paid
        </a>
      </div>
    </div>
  );
};

export default Section2;
