import React from "react";
import homeCss from "../HomePageComponents/home.css";
import Link from "next/link";
import Employee from "../../public/assets/Employe.jpg";
import Heart from "../../public/assets/Heart.jpg";
import Paisa from "../../public/assets/Paisa.jpg";
import Image from "next/image";


function WorkWithUs() {
  return (
    <div className="flex items-center justify-center w-full h-auto text-white WorkWithUs">
      <div className="w-full h-auto py-16 mobile:py-20 flex justify-center items-center gap-8 flex-col text-white wide:w-[90rem] mobile:p-6">
        <div className="w-[70%] tablet:w-[80%] mobile:w-full flex justify-center items-center mobile:mt-6 gap-1 flex-col">
          <h1 className="mb-4 text-4xl font-bold text-center mobile:text-3xl">
            <span className="uniqueName">Work With Us</span> And We'll Make It
            Work For You!
          </h1>
          <h2 className="text-sm leading-snug text-center mobile:text-base">
            Looking for the
            <span className="font-bold">best place to work?</span> Your search
            ends here. Strugbits cares about its employees and believes in
            justifying the time, energy, and hard work our employees invest in
            us by offering market-competitive salaries, work-life balance, the
            best corporate culture, health benefits, medical coverage, leisure
            activities and so much more. Here are a few perks and benefits of
            joining Strugbits, where careers are made and dreams come true:
          </h2>
        </div>
        <div>
          <h1 className="text-3xl font-bold mobile:text-2xl">
            Employee <span className="uniqueName">Perks & Benefits</span>
          </h1>
        </div>
        <div className="w-[70%] tablet:w-[90%] flex justify-center items-start gap-14 flex-row mobile:w-full mobile:items-center mobile:flex-col mobile:gap-10">
          <div className="w-[16rem] tablet:w-[18rem] h-auto flex gap-3 flex-col overflow-hidden text-sm leading-tight mobile:w-full mobile:gap-2 mobile:text-base">
            <Image src={Employee} alt="Employe" />
            <h1 className="text-xl font-bold uniqueName tablet:text-lg tablet:font-semibold">
              Employee Welbing
            </h1>
            <h3>
              We prioritize our employee's well-being hence why we have
              incorporated a program that focuses on their physical and mental
              health. In this program, we observe each employee on the whole and
              assist them in managing their physical health and social
              well-being.
            </h3>
          </div>
          <div className="w-[16rem] tablet:w-[18rem] h-auto flex gap-3 flex-col overflow-hidden text-sm leading-tight mobile:w-full mobile:gap-2 mobile:text-base">
            <Image src={Heart} alt="Heart" />
            <h1 className="text-xl font-bold uniqueName tablet:text-lg tablet:font-semibold">
              Medical Coverage
            </h1>
            <h3>
              We offer our valuable employees health benefits that can help them
              and their family meet all their healthcare needs. From doctor
              visits to prescription medications, we've got everything covered.
              We ensure our employees receive the care they need without
              breaking the bank.
            </h3>
          </div>
          <div className="w-[16rem] tablet:w-[18rem] h-auto flex gap-3 flex-col overflow-hidden text-sm leading-tight mobile:w-full mobile:gap-2 mobile:text-base">
            <Image src={Paisa} alt="Money" />
            <h1 className="text-xl font-bold uniqueName tablet:text-lg tablet:font-semibold">
              Competetive Salery
            </h1>
            <h3>
              At Strugbits, we deeply value our team's hard work and dedication.
              This is why, we offer a market-competitive salary package,
              ensuring they're fairly rewarded for their skills and expertise.
              Join us now and leap to reach new heights with a fulfilling career
              that comes with a handsome salary.
            </h3>
          </div>
        </div>
        <div className="mt-4 mb-2 button border-solid border rounded-md py-2 px-4 text-center tracking-wider text-lg mobile:w-[97%] mobile:py-4 mobile:text-sm mobile:font-semibold block cursor-pointer">
          <Link
            href="/benefits"
            className="block w-full"
          >
            VIEW ALL BENEFITS <code>&gt;</code>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
