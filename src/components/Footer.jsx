import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-10 px-5 md:px-20 rounded-t-[5%]">
      <h1 className="bg-white text-black flex py-9 px-9 justify-center items-center rounded-[40%] text-6xl font-bold w-12 h-12">#</h1>
      {/* 5 Columns */}
      <div className="flex justify-center items-center mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 b">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Why #paid</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-gray-500 font-bold transition">CREATORS</li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Find collaborations</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Create content</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Automate payments</Link></li>
              <li><Link to={'/'} className="text-gray-700 hover:text-gray-500 font-bold transition">Brands </Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Match with creators</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Manage your campaign</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Measure your campaign</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Automate your workflow</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Amplify your content</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">#paid for Marketers</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">#paid for Agencies</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Events</h3>
            <ul className="space-y-2">
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">In person</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">On demand</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Meet The Creators</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Creator Marketing Summit North</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Creator Marketing Summit</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-gray-500 font-bold transition">LEARN</li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Creator marketing</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Retail</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Creator Culture</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">AI Principles</Link></li>
              <li className="text-gray-700 hover:text-gray-500 font-bold transition">CASE STUDIES</li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Education</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Tech</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Food & Beverage</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">CPG</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Beauty</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Home</Link></li>
              <li className="text-gray-700 hover:text-gray-500 font-bold transition">SUPPORT</li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Help center</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-gray-500 font-bold transition">TEAM</li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Careers</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">About us</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Investors</Link></li>
              <li className="text-gray-700 hover:text-gray-500 font-bold transition">SOCIALS</li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Instagram</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">TikTok</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Twitter</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Facebook</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Linkedin</Link></li>
              <li><Link to={'/'} className="text-white hover:text-gray-300 transition">Home</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 5 - Featured Card */}
        <div className="hidden lg:block">
  <div className="bg-white text-black p-6 rounded-[8%] shadow-md md:w-[30vw] md:h-[35vw] hover:bg-[#e4dada]">
    <h3 className="text-md text-gray-400 font-semibold mb-2 text-start">COUNTRY HARVEST</h3>
    <p className="text-start font-bold mb-4">
      How Counter Harvest became a fan favourite for bread lovers.
    </p>
    <div className="flex justify-center">
      <img
        src="/src/assets/Footer/fotter1.avif"
        alt="Featured"
        className="w-full h-64 rounded-[10%] mb-4 object-cover"
      />
    </div>
    <div className="text-center">
      <Link
        to={'/featured'}
        className="font-medium flex items-center justify-start"
      >
        Read <BsArrowRight className="ml-2" />
      </Link>
    </div>
  </div>
</div>
</div>

      {/* Row of Images */}
<div className="mt-10 flex flex-wrap gap-3 justify-start items-center">
  <div className="flex">
    <img src="/src/assets/Footer/fotter2.png" alt="Image 1" className="w-38 h-12 object-cover" />
  </div>
  <div className="flex">
    <img src="/src/assets/Footer/fotter3.png" alt="Image 2" className="w-20 h-24 " />
  </div>
  <div className="flex">
    <img src="/src/assets/Footer/fotter4.png" alt="Image 3" className="w-20 h-24" />
  </div>
  <div className="flex">
    <img src="/src/assets/Footer/fotter5.png" alt="Image 4" className="w-20 h-20 object-cover" />
  </div>
  <div className="flex">
    <img src="/src/assets/Footer/footer6.svg" alt="Image 5" className="w-40 h-24" />
  </div>
</div>

<div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white space-y-4 md:space-y-0">
  {/* Copyright */}
  <div className="text-center md:text-left">© 2025 Hashtag Paid Inc.</div>
  
  {/* City Names */}
  <div className="flex flex-wrap justify-center md:justify-start space-x-4 space-y-2 md:space-y-0 text-center">
    <span className="max-md:mt-2">New York</span>
    <span>Toronto</span>
    <span>Chicago</span>
    <span>Los Angeles</span>
    <span>Miami</span>
  </div>
  
  {/* Links */}
  <div className="flex flex-wrap justify-center md:justify-end space-x-4">
    <Link to={'/privacy'} className="text-white hover:text-gray-300 transition">Privacy Policy</Link>
    <Link to={'/help'} className="text-white hover:text-gray-300 transition">Help Center</Link>
    <Link to={'/terms'} className="text-white hover:text-gray-300 transition">Terms</Link>
  </div>
</div>


    </footer>
  );
};

export default Footer;
