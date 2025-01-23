const Section6 = () => {
  return (
    <div className="section-six mt-16 bg-[#f2f0eb] rounded-t-3xl rounded-b-3xl">
      <div className="section-content flex justify-between space-x-8 items-start w-full p-8">
        <div className="side-one text-center w-1/2">
          <div className="section-two-h2">
            <h2 class="font-bold text-[3rem] w-full">Creators love #paid</h2>
          </div>
        </div>

        <div className="side-two w-1/2">
          <div className="bg-white rounded-3xl">
            <div className="paragraph p-6">
              <p className="font-bold text-xl">
                “On #paid I’m able to partner with incredible brands that allow
                me to be creative and use my voice and style when it comes to
                creating content that I know will resonate with my audience and
                make an impact.”
              </p>
            </div>
            <div className="img  p-4">
              <img
              className="rounded-3xl"
                src="/src/assets/home/section-six-img.webp"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
