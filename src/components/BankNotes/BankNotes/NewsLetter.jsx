import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#dde041] container mx-auto rounded-md p-4 md:p-6 lg:p-8 my-5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Heading Section */}
        <div className="w-full md:w-2/3 text-2xl md:text-4xl lg:text-5xl font-bold">
          <h1>Want more insights?</h1>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col gap-4">
            {/* Subheading */}
            <h4 className="text-sm md:text-base lg:text-lg font-sans">
              Join thousands of brands who already subscribe to the BANKNOTES
              newsletter.
            </h4>

            {/* Form */}
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="py-3 px-4 w-full sm:w-2/3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email address"
              />
              <button
                className="w-full sm:w-auto py-3 px-6 rounded-md bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
