const Section3 = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#DDE041] px-5 sm:px-20 py-14 justify-center items-center text-center rounded-[45px]">
        <h1 className="font-custom text-3xl sm:text-5xl text-black my-5 max_sm:w-[20%] w-[40%] mb-10 mx-auto">
          Become An Event partner
        </h1>
        <form className="flex flex-col sm:mx-48 mt-5 gap-4">
          <div className="flex max-sm:flex-col justif-content items-center gap-3">
            <div className="flex flex-col items-start justify-start w-full">
              <input
                type="text"
                className="w-full p-3"
                placeholder="First Name*"
                required
              />
              <span className="text-left mt-3">
                Please complete this required field.
              </span>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <input
                type="text"
                className="w-full p-3"
                placeholder="Last Name*"
                required
              />
              <span className="text-left mt-3">
                Please complete this required field.
              </span>
            </div>
          </div>
          <input
            type="email"
            className="w-full p-3"
            placeholder="Business Email*"
            required
          />
          <span className="text-left mt-0">
            Please complete this required field.
          </span>
          <input
            type="number"
            className="w-full p-3"
            placeholder="What's the name of your company?"
            required
          />

          <button className="px-4 sm:px-7 py-5 text-md hover:bg-white bg-[#EEF0A0] w-fit mx-auto rounded-full mt-10">
            Become a partner
          </button>
        </form>
        <p className="text-sm sm:mx-20 mt-4">
          By submitting this form you are agreeing to &nbsp;
          <span className="underline cursor-pointer">
            #paid’s Privacy Policy and Terms of Service.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Section3;
