import React from "react";
import homeCss from "../HomePageComponents/home.css";
import Image from "next/image";
import Link from "next/link";
import leo from "../../public/assets/leo becoming team lead.jpg";
import JoinOurTeanCard from "../../components/HomePageComponents/JoinOurTeanCard";
import portfolio from "../../public/assets/portfolio.jpg";
import graduation from "../../public/assets/graduation.jpg";

const JoinOurTeam = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden">
      <div className="w-full h-auto bg-gray-50 relative wide:w-[90rem] py-10 mobile:py-16 flex justify-center items-center gap-8 flex-col overflow-hidden mobile:w-full mobile:p-6">
        <div className="w-[85%] tablet:w-[90%] mobile:w-full h-auto flex justify-between items-center flex-row overflow-hidden mobile:flex-col mobile:justify-center mobile:gap-6">
          <div className="w-[55%]  tablet:w-[60%] flex justify-center items-start flex-col gap-4 overflow-hidden mobile:w-full">
            <h1 className="mb-2 text-3xl font-semibold">
              Join Our <span className="uniqueName">Team</span>
            </h1>
            <h3 className="text-base tablet:text-sm tablet:leading-4">
              Here at Strugbits, we are in search of unique individuals with the
              right attitude - someone who is not afraid of raising the bar and
              exceeding all expectations. Are you ready for the next chapter of
              your career story? Get in touch with us now and discover new
              opportunities.
            </h3>
          </div>
          <div className="flex items-center justify-center h-auto mobile:w-full">
            <Link
              href="/careers"
              className="px-4 py-2 text-lg tracking-wider text-center border border-solid rounded-md cursor-pointer button mobile:py-3 mobile:text-sm mobile:font-semibold"
            >
              VISIT CAREERS
            </Link>
          </div>
        </div>
        <div className="w-[85%] tablet:w-[90%] h-auto flex justify-between items-center flex-row overflow-hidden mobile:justify-center mobile:gap-8 mobile:flex-col mobile:w-full">
          <div className="w-[35%] mobile:w-full overflow-hidden">
            <Image src={leo} alt="Leo" className="w-full" />
          </div>
          <div className="w-[50%] tablet:w-[62%] h-auto flex justify-center items-center flex-col gap-8 tablet:gap-2 overflow-hidden mobile:w-full">
            <JoinOurTeanCard
              imgUri={portfolio}
              title="Looking for Internship"
              desc="Ready to take your career to the next level with Strugbits?
                Explore our open positions and apply now to unleash your
                potential in the dynamic world of digital marketing."
              btnText="APPLY NOW"
            />
            <JoinOurTeanCard
              imgUri={graduation}
              title="Looking for Job"
              desc="If you want hands-on experience in the industry, then Strugbits is the perfect place for ambitious individuals like you to kick your career. Apply today to our internship program."
              btnText="APPLY NOW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
