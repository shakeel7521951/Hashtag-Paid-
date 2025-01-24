const Hero = () => {
  return (
    <div className="marketing-summit-hero relative w-full h-screen overflow-hidden rounded-3xl">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
        src="/src/assets/marketingSummit/markeing-summit-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="hero-content relative z-10 bg-black/50 text-white rounded-3xl p-8 flex flex-col gap-6 items-center">
        <div className="heading w-1/2 text-center">
          <h1 className="font-custom font-bold text-[5rem]">
            Connect with creators &amp; brands
          </h1>
        </div>
        <div className="paragraph">
          <p className="fs-paragraph text-[1.125rem] font-customLight">
            Spend the day learning, networking and collaborating with top
            marketers and macro creators.
          </p>
        </div>
        <div className="btns flex gap-5 md:gap-2 flex-wrap md:py-5 text-center md:mt-0 mt-4 text-black font-bold">
          <div className="two bg-[#dde041] rounded-full p-4 text-[.8125rem] cursor-pointer font-customLight">
            New York, NY
          </div>
          <div className="two bg-[#dde041] rounded-full p-4 text-[.8125rem] cursor-pointer font-customLight">
            Hall des Lumières
          </div>
          <div className="three bg-[#dde041] rounded-full p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Oct 10th, 2024
          </div>
        </div>
        <div className="end-countdown-text font-customLight">EXPIRED</div>
      </div>
    </div>
  );
};

export default Hero;
