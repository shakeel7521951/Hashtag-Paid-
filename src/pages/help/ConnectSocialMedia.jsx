import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/logo.png";

const ConnectSocialMedia = () => {
  const helpCenter = [
    { id: 1, text: "Disconnecting your Social Channels", link: "" },
    { id: 2, text: "Reconnecting TikTok", link: "" },
    { id: 3, text: "Reconnecting Facebook and Instagram", link: "" },
    { id: 4, text: "Facebook and Instagram Connection Errors", link: "" },
    { id: 5, text: "Connecting with TikTok on so-likeable (Creators)", link: "" },
    { id: 6, text: "TikTok Connection Errors", link: "" },
    { id: 7, text: "Facebook Page Not Allowed to Advertise", link: "" },
  ];

  return (
    <div className="mx-4 mt-6 mb-10">
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
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <div className="flex gap-2 items-center text-sm">
          <Link to="/" className="hover:underline">so-likeable</Link>
          <span>{">"}</span>
          <Link to="/creators" className="hover:underline">Creators</Link>
          <span>{">"}</span>
          <Link to="#" className="hover:underline">Connecting your Social Media Accounts</Link>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border p-3 rounded-full min-w-[300px] focus:ring focus:ring-gray-300"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-5 sm:mt-10 sm:mx-24">
        <h1 className="font-customLight text-2xl sm:text-4xl text-center">
          Connecting your Social Media Accounts
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

export default ConnectSocialMedia;
