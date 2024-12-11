import React from "react";
import Image from "next/image";
import homeCss from "../HomePageComponents/home.css";

function TopSection() {
  return (
    <div className="top w-full h-[20rem] mobile:h-[28rem] flex justify-center items-center">
      <div className="w-full h-[20rem] mobile:h-[28rem] flex justify-center items-center wide:w-[90rem]">
        <h1 className="text-4xl font-bold leading-snug text-center text-white mobile:text-3xl">
          YOU ALWAYS COME FIRST TO US!
        </h1>
      </div>
    </div>
  );
}

export default TopSection;
