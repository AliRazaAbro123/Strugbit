import Image from "next/image";
import React from "react";
import homeCss from "../HomePageComponents/home.css";
import EmployeRed from "../../public/assets/EmployeRed.jpg";
import paid from "../../public/assets/paid.jpg";
import HeartRed from "../../public/assets/HeartRed.jpg";
import Rewards from "../../public/assets/Rewards.jpg";
import PaisaRed from "../../public/assets/PaisaRed.jpg";
import loan from "../../public/assets/loan.jpg";

function Card() {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden bg-gray-50">
      <div className=" w-full h-auto py-8 flex justify-center items-center flex-col gap-8 wide:w-[90rem] mobile:p-6">
        <div className=" w-[80%] tablet:w-[90%] h-auto flex justify-evenly items-center flex-row mobile:w-full mobile:flex-col mobile:gap-8 mobile:justify-center">
          <div className="card w-[25%] tablet:w-[32%] h-14 flex justify-start items-center gap-4 tablet:gap-2 px-2 flex-row rounded-md bg-white mobile:flex-col mobile:justify-center mobile:gap-2 mobile:w-full mobile:h-28 ">
            <Image src={EmployeRed} alt="Employe" width={40} height={40} />
            <h1>Employee Welbing</h1>
          </div>
          <div className="card w-[25%] tablet:w-[32%] h-14 flex justify-start items-center gap-4 tablet:gap-2 px-2 flex-row rounded-md bg-white mobile:flex-col mobile:justify-center mobile:gap-2 mobile:w-full mobile:h-28 ">
            <Image src={paid} alt="Paid" width={40} height={40} />
            <h1>Paid Time Off</h1>
          </div>
          <div className="card w-[25%] tablet:w-[32%] h-14 flex justify-start items-center gap-4 tablet:gap-2 px-2 flex-row rounded-md bg-white mobile:flex-col mobile:justify-center mobile:gap-2 mobile:w-full mobile:h-28 ">
            <Image src={HeartRed} alt="Medical" width={40} height={40} />
            <h1>Medical Coverage</h1>
          </div>
        </div>
        <div className=" w-[80%] tablet:w-[90%] h-auto flex justify-evenly items-center flex-row mobile:w-full mobile:flex-col mobile:gap-8 mobile:justify-center">
          <div className="card w-[25%] tablet:w-[32%] h-14 flex justify-start items-center gap-4 tablet:gap-2 px-2 flex-row rounded-md bg-white mobile:flex-col mobile:justify-center mobile:gap-2 mobile:w-full mobile:h-28  ">
            <Image src={Rewards} alt="Rewards" width={40} height={40} />
            <h1>Perks & Rewards</h1>
          </div>
          <div className="card w-[25%] tablet:w-[32%] h-14 flex justify-start items-center gap-4 tablet:gap-2 px-2 flex-row rounded-md bg-white mobile:flex-col mobile:justify-center mobile:gap-2 mobile:w-full mobile:h-28 ">
            <Image src={PaisaRed} alt="Money" width={40} height={40} />
            <h1>Competetive Salary</h1>
          </div>
          <div className="card w-[25%] tablet:w-[32%] h-14 flex justify-start items-center gap-4 tablet:gap-2 px-2 flex-row rounded-md bg-white mobile:flex-col mobile:justify-center mobile:gap-2 mobile:w-full mobile:h-28 ">
            <Image src={loan} alt="Loan" width={40} height={40} />
            <h1>Loan Facility</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
