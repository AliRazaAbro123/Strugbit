import Image from "next/image";
import React from "react";
import homeCss from "../HomePageComponents/home.css";

function Card({ imgUri, title, desc }) {
  return (
    <div className="card bg-white w-[20rem] min-h-96 flex justify-start items-start flex-col gap-4 leading-snug p-6 rounded-md mobile:w-full mobile:min-h-56 mobile:p-8 hover:scale-105">
      <Image src={imgUri} alt="Logos" />
      <h1 className="text-base font-bold tracking-wider mobile:text-lg">
        {title}
      </h1>
      <h3 className="text-sm mobile:text-base">{desc}</h3>
    </div>
  );
}

export default Card;
