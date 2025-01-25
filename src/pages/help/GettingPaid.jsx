import React from "react";
import { Link } from "react-router-dom";

const GettingPaid = () => {
  const helpCenter = [
    { id: 1, text: "Requesting Payment Sooner", link: "" },
    { id: 2, text: "Conversion Rates in Payout (For CAD Creators)", link: "" },
    { id: 3, text: "Payment Returned/Failed", link: "" },
    { id: 4, text: "Changing Your Payout Method", link: "" },
    { id: 5, text: "Payment Not Received", link: "" },
    { id: 6, text: "When will I receive payment?", link: "" },
    { id: 7, text: "Setting Up Direct Deposit for an Agency", link: "" },
    { id: 8, text: "Why hasn't my payment been triggered yet?", link: "" },
    { id: 9, text: "More Information on PayPal Fees", link: "" },
    { id: 10, text: "Creator Payouts at so-likeable", link: "" },
    { id: 11, text: "Uploading Your Post Insights to so-likeable", link: "" },
  ];

  return (
    <div className="mx-4 mt-6 mb-10">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <div className="flex gap-2 items-center text-sm">
          <Link to="/" className="hover:underline">so-likeable</Link>
          <span>{">"}</span>
          <Link to="/creators" className="hover:underline">Creators</Link>
          <span>{">"}</span>
          <Link to="#" className="hover:underline">Getting Paid</Link>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border p-3 rounded-full min-w-[300px] focus:ring focus:ring-gray-300"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-5 sm:mt-10 sm:mx-24">
        <h1 className="font-customLight text-2xl sm:text-4xl text-center">
        Getting Paid
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

export default GettingPaid;
