import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/logo.png";

const GetStarted = () => {
  const helpCenter = [
    {
      id: 1,
      text: "How to Prepare for #paid Strategic Kick Off Call",
      link: "",
    },
    {
      id: 2,
      text: "Getting Started with #paid",
      link: "",
    },
    {
      id: 3,
      text: "How to Subscribe to #paid Email Notifications",
      link: "",
    },
    {
      id: 4,
      text: "How to Add Guests or Team Members to Your Campaign",
      link: "",
    },
    {
      id: 5,
      text: "How to Integrate Your Facebook Account with #paid",
      link: "",
    },
    {
      id: 6,
      text: "Connecting With TikTok on #paid (Brands)",
      link: "",
    },
    {
      id: 6,
      text: "How to Access Your #paid Billing Settings",
      link: "",
    },
  ];
  return (
    <div className="mx-2 mt-6 mb-10">
      <div className="sm:mx-6 justify-between flex">
        <div>
          <Link to="/" className="text-3xl font-bold text-gray-700">
            <img src={companyLogo} width={"140px"} alt="Company" />
          </Link>{" "}
        </div>
        <div>
          <Link to="" className="hover:underline">
            Submit a request
          </Link>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:mx-10 items-center justify-center gap-4">
        <div className=" flex gap-2 items-center">
          <Link to="/" className="hover:underline text-sm">
            so-likeable
          </Link>
          <span>{">"}</span>
          <Link to="/agencies" className="hover:underline text-sm">
            Brands and Agencies
          </Link>
          <span>{">"}</span>
          <Link to="#" className="hover:underline text-sm">
            Brands and Agencies: Getting Started With so-likeabe
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border p-3 rounded-full min-w-[300px]"
          ></input>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-5 sm:mt-10">
        <h1 className="font-customLight text-2xl sm:text-4xl text-center">
          Brands and Agencies: Getting Started With #paid
        </h1>
        <button className="px-4 py-2 border sm:ms-5 rounded-xl hover:bg-black hover:text-white transition-all">
          Follow
        </button>
      </div>
      <div className="ms-3 sm:ms-36 mt-5 flex flex-col gap-7">
        {helpCenter.map(() => (
          <Link to="" className="hover:underline">
            How to Prepare for #paid Strategic Kick Off Call
          </Link>
        ))}
      </div>
      <hr className="mt-14 mb-3" />
      <Link to="/" className="text-2xl ms-10 font-customLight">
        so-likeable
      </Link>
    </div>
  );
};

export default GetStarted;
