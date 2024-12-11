import Image from "next/image";
import Link from "next/link";
import React from "react";
import homeCss from "../HomePageComponents/home.css";

function JoinOurTeanCard({ imgUri, title, desc, btnText }) {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-4 overflow-hidden duration-200 bg-white rounded-md innercard h-44 tablet:h-32 mobile:h-auto tablet:gap-2 mobile:flex-col">
      <div className="flex items-center justify-center w-24 imgBg tablet:w-20 h-44 tablet:h-32 mobile:h-24 rounded-bl-xl rounded-tl-xl mobile:w-full">
        <Image
          src={imgUri}
          alt="Portfolio"
          width={50}
          className="tablet:w-10"
        />
      </div>
      <div className="innercard w-[80%] h-44 tablet:h-32 mobile:h-auto flex justify-evenly mobile:justify-center mobile:gap-3 tablet:gap-2 items-start flex-col mobile:w-full">
        <h1 className="text-base font-semibold mobile:text-lg">{title}</h1>
        <h3 className="text-sm leading-tight mobile:text-base tablet:leading-3 tablet:text-sm">
          {desc}
        </h3>
        <div className="flex items-start justify-center w-full h-auto mobile:items-center mobile:mt-8 mobile:mb-6">
          <Link
            href="#"
            className="text-sm font-semibold text-left mobile:text-center mobile:text-[#ff6e4e]"
          >
            {btnText} <code>&gt;</code>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinOurTeanCard;
