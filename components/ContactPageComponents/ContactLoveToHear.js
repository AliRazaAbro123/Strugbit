import React from "react";
import homeCss from "../HomePageComponents/home.css";

function TopSection() {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden h-72">
      <div className="w-full h-72 overflow-hidden flex justify-center items-center gap-4 flex-col mobile:p-6 wide:w-[90rem] mobile:items-start">
        <h1 className="text-4xl font-bold mobile:text-3xl">
          We would <span className="uniqueName">Love to Hear</span> from you
        </h1>
        <h3 className="text-sm text-center mobile:text-left">
          For any question, advice or help, please send us an email to
          info@strugbits.com and we'll
          get back to you as soon as possible.
        </h3>
      </div>
    </div>
  );
}

export default TopSection;
