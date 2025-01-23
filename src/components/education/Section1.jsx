import { FaArrowRight } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="section-1 flex md:flex-row flex-col md:gap-4 mt-12 p-4">
      <div className="side-one">
        <div className="heading">
          <h2 class="font-customLight font-bold md:text-[2rem] text-[1.125rem]">
            Browse By
          </h2>
        </div>
        <div className="btns flex gap-5 md:gap-2 flex-wrap  md:py-5 text-center md:mt-0 mt-4">
          <div className="two bg-[#dde041] rounded-full  p-4 text-[.8125rem] cursor-pointer font-customLight">
            All Categories
          </div>
          <div className="two bg-[#dde041] rounded-full  p-4 text-[.8125rem] cursor-pointer font-customLight">
            Education
          </div>
          <div className="three bg-[#dde041] rounded-full  p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Pharma
          </div>
          <div className="four bg-[#dde041] rounded-full  p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Tech
          </div>
          <div className="five bg-[#dde041] rounded-full  p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Home
          </div>
          <div className="two bg-[#dde041] rounded-full  p-4 text-[.8125rem] cursor-pointer font-customLight">
            Financial Service
          </div>
          <div className="two bg-[#dde041] rounded-full  p-4 text-[.8125rem] cursor-pointer font-customLight">
            Travel & Tourism
          </div>
          <div className="three bg-[#dde041] rounded-full  p-4 text-[.8125rem] cursor-pointer font-customLight">
            Apparel & Fashion
          </div>
          <div className="four bg-[#dde041] rounded-full  p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Alcohol
          </div>
          <div className="five bg-[#dde041] rounded-full  p-4 text-[.8125rem] cursor-pointer font-customLight">
            Food & Beverage
          </div>
          <div className="three bg-[#dde041] rounded-full  p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            CPG
          </div>
          <div className="four bg-[#dde041] rounded-full  p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Beauty
          </div>
          <div className="five bg-[#dde041] rounded-full p-4 px-8 text-[.8125rem] cursor-pointer font-customLight">
            Auto
          </div>
        </div>
      </div>

      <div className="side-two flex md:flex-row flex-col md:gap-8">
        {/* Card 1 */}
        <div className="side-two card-1 md:w-[25rem] md:h-full md:mt-0 mt-4">
          <div className="bg-[#f2f0eb] rounded-3xl flex flex-col md:p-6 p-4">
            <div class="paragraph">A leading university</div>
            <div className="heading">
              <h3 class="font-bold text-[1.125rem]">
                Driving consideration and enrollment of a top American
                University
              </h3>
            </div>
            <div className="img rounded-b-3xl mt-6 overflow-hidden md:max-h-52 md:min-h-52 ">
              <img
                className="rounded-3xl md:h-full"
                src="/src/assets/education/img-1.png"
                alt="not found"
              />
            </div>
            <div className="para mt-4 text-[1rem] font-customLight cursor-pointer flex items-center gap-2">
              <h3>Read</h3>
              <FaArrowRight className="text-xl transition-transform duration-300 hover:translate-x-2 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="side-two card-1 md:w-[25rem] md:h-full md:mt-0 mt-4">
          <div className="bg-[#f2f0eb] rounded-3xl flex flex-col md:p-6 p-4">
            <div class="paragraph">York University</div>
            <div className="heading">
              <h3 class="font-bold text-[1.125rem]">
                How York University worked with creators to promote its degree
                programs
              </h3>
            </div>
            <div className="img rounded-b-3xl mt-6 overflow-hidden md:min-h-52 md:max-h-52">
              <img
                className="rounded-3xl md:h-full"
                src="/src/assets/education/img-2.png"
                alt="not found"
              />
            </div>
            <div className="para mt-4 text-[1rem] font-customLight cursor-pointer flex items-center gap-2">
              <h3>Read</h3>
              <FaArrowRight className="text-xl transition-transform duration-300 hover:translate-x-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
