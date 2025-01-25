import ImageSlider from "../How its work/ImageSlider";
import Marque from "./Marque";

const Hero = () => {
  return (
    <div className="w-full h-fit">
      <div className="bg-black w-full h-fit py-14">
        <div className="bg-white lg:w-[48%] h-14 rounded-full mx-auto flex items-center justify-center md:w-[70%] w-[80%]">
          <h1 className="text-blue-700 font-customLight font-semibold max-sm:text-center lg:text-[1.2rem]">
            An IRL community of brands and creators ready to connect!
          </h1>
        </div>
        <div className="mt-10 md:h-[17vh] flex justify-center items-center">
          <h1 className="text-white font-custom text-[5rem] max-sm:leading-none max-sm:text-center">
            Meet the Creators
          </h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="text-white font-customLight w-[60%] text-center text-[1.08rem]">
            The largest private creator marketing event. We bring the world’s
            most recognizable brands and creators together in your city.
          </p>
        </div>
        <div className="mt-10">
          <ImageSlider />
        </div>
        <Marque />
      </div>
    </div>
  );
};

export default Hero;
