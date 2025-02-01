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
        <div className="w-auto mobile:w-full flex flex-row items-center justify-center gap-4 mobile:flex-col">
          <div className="button border-solid border rounded-md py-2 px-4 text-center tracking-wider text-lg mobile:w-[97%] mobile:py-4 mobile:text-sm mobile:font-semibold block cursor-pointer">
            <Link href="#" className="block w-full">
              APPLY FOR JOB<code>&gt;</code>
            </Link>
          </div>
          <div className="button border-solid border rounded-md py-2 px-4 text-center tracking-wider text-lg mobile:w-[97%] mobile:py-4 mobile:text-sm mobile:font-semibold block cursor-pointer">
              <Link href="#" className="block w-full">
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
