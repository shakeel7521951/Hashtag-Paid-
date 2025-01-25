import React from "react";
import { Link } from "react-router-dom";

const CollobratingCompaign = () => {
  const helpCenter = [
    { id: 1, text: "Brand Unresponsiveness", link: "" },
    { id: 2, text: "Why can't the brand see my content?", link: "" },
    { id: 3, text: "How to Post Collaboratively", link: "" },
    { id: 4, text: "How to submit a Concept", link: "" },
    { id: 5, text: "Collaboration Process for Campaigns", link: "" },
    { id: 6, text: "Where to Find the Creator Brief", link: "" },
    { id: 7, text: "Brand Direct vs. Managed by so-likeable Campaigns", link: "" },
    { id: 8, text: "Submitting Story Concepts to the Platform", link: "" },
    { id: 9, text: "How to Upload Content & Post Insights", link: "" },
    { id: 10, text: "Content Specs & Formats", link: "" },
    { id: 11, text: "TikTok Content Specs & Formats", link: "" },
  ];

  return (
    <div className="mx-4 mt-6 mb-10">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <div className="flex gap-2 items-center text-sm">
          <Link to="/" className="hover:underline">so-likeable</Link>
          <span>{">"}</span>
          <Link to="/creators" className="hover:underline">Creators</Link>
          <span>{">"}</span>
          <Link to="#" className="hover:underline">Collaborating on a Campaign</Link>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border p-3 rounded-full min-w-[300px] focus:ring focus:ring-gray-300"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-5 sm:mt-10 sm:mx-24">
        <h1 className="font-customLight text-2xl sm:text-4xl text-center">
        Collaborating on a Campaign
        </h1>
        <button className="px-4 py-2 border rounded-xl hover:bg-black hover:text-white transition-all sm:ms-5">
          Follow
        </button>
      </div>

      <div className="ms-3 sm:ms-36 mt-5 flex flex-col gap-7">
        {helpCenter.map((item) => (
          <Link key={item.id} to={item.link} className="hover:underline">
            {item.text}
          </Link>
        ))}
      </div>

      <hr className="mt-14 mb-3" />
      <Link to="/" className="text-2xl ms-10 font-customLight">so-likeable</Link>
    </div>
  );
};

export default CollobratingCompaign;
