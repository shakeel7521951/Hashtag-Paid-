import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BrandsComponent = () => {
  return (
    <div className="bg-[#f2f0eb] py-5 px-4 mt-2 rounded-[2%] mx-12 shadow-lg">


      {/* 5 Columns */}
      <div className="flex justify-center items-center mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2 text-norap">
              <li><Link to='/' className="text-black text-xl font-bold">How it Works</Link></li>
              <li><Link to='/brands#match' className="text-[#878683] text-[12px]">Match with creators</Link></li>
              <li><Link to='/how-it-works#manage' className="text-[#878683] text-[12px]">Manage your campaign</Link></li>
              <li><Link to='/how-it-works#measure' className="text-[#878683] text-[12px]">Measure your campaign</Link></li>
              <li><Link to='/how-it-works#automate' className="text-[#878683] text-[12px]">Automate your workflow</Link></li>
              <li><Link to='/how-it-works#amplify' className="text-[#878683] text-[12px]">Amplify your content</Link></li>
              <li><Link to='/' className="text-black text-[12px] font-bold">TEAMS</Link></li>
              <li><Link to='/brands' className="text-[#878683] text-[12px]">Marketers</Link></li>
              <li><Link to='/agencies' className="text-[#878683] text-[12px]">Agencies</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <Link to='/' className="text-black text-xl font-bold ">Marketplace</Link>
            <ul className="space-y-2 mt-3 text-norap">
              <li><Link  to="/brands#support" className="text-[#878683] text-[12px]">Dedicated 1:1 support</Link></li>
              <li><Link to='/brands#match' className="text-[#878683] text-[12px]">Creator network</Link></li>
              <li><Link to='/brands#strategy' className="text-[#878683] text-[12px]">Campaign strategy</Link></li>
              <li><Link to='/brands#analytics' className="text-[#878683] text-[12px]">Analytics & reporting</Link></li>
              <li><Link to='/brands#create' className="text-[#878683] text-[12px]">Content production</Link></li>
              <li><Link to='/brands#licensing' className="text-[#878683] text-[12px]">Handle licensing</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4 ">Resources</h3>
            <ul className="space-y-2 text-norap">
              <li className="text-black font-bold mt-3 text-[12px]">CONTENT</li>
              <li><Link to='/' className="text-[#878683] text-[12px]">Banknotes</Link></li>
              <li><Link to='/pod-cast' className="text-[#878683] text-[12px]">Creator culture podcast</Link></li>
              <li><Link to='/pod-cast' className="text-[#878683] text-[12px]">DTC growth podcast</Link></li>
            </ul>
            <ul className="space-y-1 mt-4 text-norap">
              <li className="text-black font-bold text-[12px]">HELP CENTER</li>
              <li className="text-[#878683] text-[12px]">Getting started</li>
              <li><Link to='/help-center' className="text-[#878683] text-[12px]">Choosing creators</Link></li>
              <li><Link to='/Opting-in-to-a-Campaign' className="text-[#878683] text-[12px]">Launching a campaign</Link></li>
              <li><Link to='/collaborating-on-a-compaign' className="text-[#878683] text-[12px]">Managing campaigns</Link></li>
              <li><Link to='/getting-paid' className="text-[#878683] text-[12px]">Campaign results</Link></li>
              <li><Link to='/help-center' className="text-[#878683] text-[12px]">Creator licensing</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-black font-bold text-[12px] mt-[40px]">EVENTS</h3>
            <ul className="space-y-1 text-norap">
              <li><Link to='/events' className="text-[#878683] text-[12px]">Coming up</Link></li>
              <li><Link to='/events#on-demand' className="text-[#878683] text-[12px]">On demand</Link></li>
              <li><Link to='/meet-the-creators' className="text-[#878683] text-[12px]">Meet the creators</Link></li>
              <li><Link to='/creator-marketing-summit-north' className="text-[#878683] text-[12px]">Creator Marketing Summit North</Link></li>
              <li><Link to="/" className="text-[#878683] text-[12px]">Creator Marketing Summit</Link></li>
              <li><Link to='/' className="text-black font-bold text-[12px]">CASE STUDIES</Link></li>
              <li><Link to='/education' className="text-[#878683] text-[12px]">Education</Link></li>
              <li><Link to='/' className="text-[#878683] text-[12px]">Tech</Link></li>
              <li><Link to='/' className="text-[#878683] text-[12px]">Food & beverage</Link></li>
              <li><Link to='/' className="text-[#878683] text-[12px]">CPG</Link></li>
              <li><Link to='/' className="text-[#878683] text-[12px]">Beauty</Link></li>
              <li><Link to='/' className="text-[#878683] text-[12px]">Home</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 5 - Featured Card */}
        <Link to="/ai-principles" className="text-black p-2 mb-36 w-[300px]">
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
              to='/featured'
              className="font-medium  justify-start"
            >
              Discover the principles
            </Link>
            <BsArrowRight className="text-2xl mt-1" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BrandsComponent;
