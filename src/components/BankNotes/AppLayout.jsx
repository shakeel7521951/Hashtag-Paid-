import React from "react";
// import LeftElement from "./LeftElement";
import LeftElement from '../BankNotes/LeftElement';
// import MiddleElement from "./MiddleElement";
import MiddleElement from '../BankNotes/MiddleElement';
// import RightElement from "./RightElement";
import RightElement from '../BankNotes/RightElement'

const AppLayout = () => {
  return (
    <div className="grid mt-10">
      {/* Large screens */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-6 px-6">
        <div>
          <LeftElement />
        </div>
        <div>
          <MiddleElement />
        </div>
        <div>
          <RightElement />
        </div>
      </div>

      {/* Medium screens (tablet) */}
      <div className="hidden md:grid lg:hidden md:grid-rows-2 md:grid-cols-2">
        <div className="md:col-span-2 md:w-full md:flex md:items-center md:justify-center">
          <MiddleElement />
        </div>
        <div>
          <LeftElement />
        </div>
        <div>
          <RightElement />
        </div>
      </div>

      {/* Small screens (mobile) */}
      <div className="grid md:hidden grid-rows-[auto_auto_auto] gap-4 px-4">
        <div>
          <MiddleElement />
        </div>
        <div>
          <LeftElement />
        </div>
        <div>
          <RightElement />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
