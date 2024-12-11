import Link from "next/link";
import React from "react";
import homeCss from "../HomePageComponents/home.css";

function Home() {
  return (
    <div className="home w-full h-[42rem] mobile:h-[38rem] flex justify-center items-center">
      <div className="w-full h-[42rem] flex justify-center items-start px-48 tablet:px-28 flex-col gap-6 wide:w-[90rem] mobile:p-6 mobile:h-[38rem] mobile:items-start">
        <div className="text-5xl font-bold leading-tight text-white mobile:text-4xl mobile:gap-6 tablet:text-4xl">
          <h1>
            UNLOCK YOUR CAREER <br /> POTENTIAL
            <span className="text-[#ff6e4e]"> WITH STRUGBITS.</span>
          </h1>
        </div>
        <div className="text-base text-left text-white mobile:text-lg">
          <p>
            Join our extraordinary team of out-of-the-box thinkers and talented
            problem solvers.
          </p>
        </div>
        <div className="flex justify-start w-full h-auto">
          <div className="button border-solid border rounded-md py-2 px-4 text-center tracking-wider text-lg mobile:w-[97%] mobile:py-4 mobile:text-sm mobile:font-semibold block cursor-pointer">
            <Link href="/careers">
              EXPLORE CAREERS AT STRUGBITS <code>&gt;</code>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
