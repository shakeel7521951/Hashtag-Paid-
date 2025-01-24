import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CreatorsComponent = () => {
  return (
    <div className="bg-[#f2f0eb] py-5 px-5 mt-2 rounded-[2%] ms-20  shadow-lg">


      {/* 5 Columns */}
      <div className="flex justify-center items-center mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-black text-xl font-bold text-nowrap">
                  How it Works
                </Link></li>
              <li className="mt-3">
                <Link to="/creators#collaborations" className="text-[#878683] text-[12px]">
                  Find collaborations
                </Link>
              </li>
              <li>
                <Link to="/creators#director" className="text-[#878683] text-[12px]">
                  Create content
                </Link>
              </li>
              <li>
                <Link to="/creators#automate" className="text-[#878683] text-[12px]">
                  Automate workflow
                </Link>
              </li>
              <li>
                <Link to="/creators#paid" className="text-[#878683] text-[12px]">
                  Get paid
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4 text-nowrap">Resources</h3>
            <ul className="space-y-1">
              <li className="text-black font-bold text-[12px]">CONTENT</li>
              <li>
                <Link to="/" className="text-[#878683] text-[12px]">
                  Banknotes
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[12px]">
                  Creator culture podcast
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[12px]">
                  DTC growth podcast
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-1 mt-10">
              <li className="text-black font-bold text-[12px] text-nowrap">HELP CENTER</li>
              <li>
                <Link to="/" className="text-[#878683] text-[12px]">
                  Getting started
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[10px]">
                  Connecting your social account
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[10px]">
                  Opting in to a campaign
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[10px]">
                  Collaborating on a campaign
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[10px]">
                  Getting paid
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-1 mt-10 text-nowrap">
              <li className="text-black font-bold text-[12px]">EVENT</li>
              <li>
                <Link to="/events" className="text-[#878683] text-[12px]">
                  Coming up
                </Link>
              </li>
              <li>
                <Link to="/events#on-demand" className="text-[#878683] text-[12px]">
                  On demand
                </Link>
              </li>
              <li>
                <Link to="/meet-the-creators" className="text-[#878683] text-[12px]">
                  Meet the creators
                </Link>
              </li>
              <li>
                <Link to="/creator-marketing-summit-north" className="text-[#878683] text-[12px] ">
                  Creator Marketing Summit North
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#878683] text-[12px]">
                  Creator Marketing Summit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 5 - Featured Card */}
        <div className="text-black ms-6 w-[300px]">
          <div className="flex justify-center">
            <img
              src="/src/assets/Navbar/navbar.avif"
              alt="Featured"
              className="w-full h-54 rounded-[10%] mb-4 object-cover"
            />
          </div>
          <p className="text-start text-1xl font-bold mb-4">
            Our AI principles are here—let’s make AI a force for good!
          </p>
          <div className=" flex text-center gap-3 items-center">
            <Link
              to={'/featured'}
              className="font-medium  justify-start"
            >
              Discover the principles
            </Link>
            <BsArrowRight className="text-2xl mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsComponent;
