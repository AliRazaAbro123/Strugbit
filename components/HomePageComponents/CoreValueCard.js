import Image from "next/image";
import React from "react";
import homeCss from "../HomePageComponents/home.css";

function Card({ title, desc }) {
  return (
    <div className="card w-[32%] tablet:w-[35%] min-h-44 flex justify-center items-start flex-col gap-1 bg-white leading-snug p-4 tablet:p-2 rounded-md mobile:w-full mobile:min-h-28 hover:scale-105">
      <h1 className="text-lg font-bold tracking-wider CoreValueTextBlue">
        {title}
      </h1>
      <h3 className="text-sm mobile:text-base tablet:leading-tight">{desc}</h3>
    </div>
  );
}

export default Card;
