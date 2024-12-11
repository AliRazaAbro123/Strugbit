import React from "react";
import homeCss from "../HomePageComponents/home.css";
import CareerFoooter from "../../public/assets/CareerFooter.jpg";
import Image from "next/image";
import Link from "next/link";

function CareerFooter() {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden min-h-96">
      <div className="w-full h-60 bg-red-50 flex justify-center items-center flex-row gap-12 mobile:flex-col mobile:h-auto wide:w-[90rem] mobile:p-6 mobile:gap-6">
        <div className="mobile:w-full">
          <Image src={CareerFoooter} alt="Team" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center w-auto gap-6 mobile:w-full mobile:justify-start">
          <h1 className="text-3xl font-bold mobile:text-2xl tablet:text-2xl">
            Ready For The
            <span className="uniqueName">
              Next Chaptor of <br /> Your Career
            </span>
            Story?
          </h1>
        <div className="flex flex-row items-center justify-center gap-4 mobile:flex-col">
          <div className="px-4 py-2 text-lg tracking-wider text-center border border-solid rounded-md button mobile:px-12 mobile:py-4 mobile:text-xl">
            <Link href="#">
              APPLY FOR JOB<code>&gt;</code>
            </Link>
          </div>
          <div className="block px-4 py-2 text-lg tracking-wider text-center border border-solid rounded-md cursor-pointer button tablet:w-full mobile:w-full mobile:py-4">
              <Link href="#">
                APPLY FOR INTERNSHIP<code>&gt;</code>
              </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CareerFooter;
