import React from "react";
import Image from "next/image";
import homeCss from "../HomePageComponents/home.css";

function TopSection() {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-auto py-8 mb-4 overflow-hidden mobile:p-4">
        <div className="w-[70%] flex justify-evenly items-center flex-col gap-6 text-center mobile:w-[90%]">
          <h1 className="text-5xl font-bold mobile:text-3xl">
            Employee <span className="uniqueName">Perks & Benefits</span>
          </h1>
          <h3 className="text-lg leading-snug mobile:text-base">
            Looking for the
            <span className="font-bold">best place to work?</span> Your search
            ends here. Strugbits cares about its employees and believes in
            justifying the time, energy, and hard work our employees invest in
            us by offering market-competitive salaries, work-life balance, the
            best corporate culture, health benefits, medical coverage, leisure
            activities and so much more.
          </h3>
          <h2 className="font-semibold">
            Here are a few perks and benefits of joining Strugbits, where
            careers are made and dreams come true:
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
