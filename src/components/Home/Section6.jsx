// import { IoArrowBackCircleOutline } from "react-icons/io5";

const Section6 = () => {
  return (
    <div className="section-six mt-16 bg-[#f2f0eb] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex md:flex-row flex-col md:justify-between md:space-x-8 md:items-start w-full md:p-8 p-4">
        <div className="side-one md:text-center md:w-1/2">
          <div className="section-two-h2">
            <h2 className="font-bold md:text-[3rem] text-[2rem] w-full">
              Creators love #paid
            </h2>
          </div>
        </div>

        <div className="side-two md:w-1/2 md:h-full md:mt-0 mt-4">
          <div className="bg-white rounded-3xl flex flex-col md:p-6 p-4">
            <div className="paragraph">
              <p className="font-bold text-[1.125rem]">
                “On #paid I’m able to partner with incredible brands that allow
                me to be creative and use my voice and style when it comes to
                creating content that I know will resonate with my audience and
                make an impact.”
              </p>
            </div>
            <div className="img md:h-[30rem] rounded-b-3xl mt-6 overflow-hidden">
              <img
                className="rounded-3xl w-fit"
                src="/src/assets/home/section-six-img.webp"
                alt="not found"
              />
            </div>
            <div className="para mt-4">
              <p>Ilana Dunn — @seeingotherpeople</p>
            </div>
            <div className="icons">{/* <IoArrowBackCircleOutline /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
