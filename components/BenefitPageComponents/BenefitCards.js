import React from "react";
import Image from "next/image";
import homeCss from "../HomePageComponents/home.css";
import Employe from "../../public/assets/EmployeRed.jpg";
import Heart from "../../public/assets/HeartRed.jpg";
import Paisa from "../../public/assets/PaisaRed.jpg";
import paid from "../../public/assets/paid.jpg";
import Rewards from "../../public/assets/Rewards.jpg";
import loan from "../../public/assets/loan.jpg";
import Card from "../HomePageComponents/Card";

function BenefitCards() {
  return (
    <div className="flex items-center justify-center w-full h-auto bg-gray-50">
      <div className="w-full h-auto flex justify-center items-center flex-col gap-10 py-12 wide:w-[90rem] mobile:p-4">
        <div className="w-[80%] flex justify-evenly items-center flex-row mobile:flex-col mobile:gap-4 mobile:w-full">
          <Card
            imgUri={Employe}
            title="Employee Wellbeing"
            desc="We prioritize our employee's well-being
        hence why we have incorporated a program that focuses on their physical
        and mental health. In this program, we observe each employee on the
        whole and assist them in managing their physical health and social
        well-being."
          />
          <Card
            imgUri={Heart}
            title="Medical Coverage"
            desc="We offer our valuable employees health benefits that can help them
            and their family meet all their healthcare needs. From doctor visits
            to prescription medications, we've got everything covered. We ensure
            our employees receive the care they need without breaking the bank."
          />
          <Card
            imgUri={Paisa}
            title="Competitive Salary"
            desc="At Strugbits, we deeply value our team's hard work and dedication. This is why, we offer a market-competitive salary package, ensuring they're fairly rewarded for their skills and expertise. Join us now and leap to reach new heights with a fulfilling career that comes with a handsome salary."
          />
        </div>

        <div className="w-[80%] flex justify-evenly items-center flex-row mobile:flex-col mobile:gap-4 mobile:w-full">
          <Card
            imgUri={paid}
            title="Paid Time Off"
            desc="Every individual on our extraordinary team enjoys paid time off, along with a number of company benefits that offer flexibility and choice. We highly believe in maintaining a work-life balance to help our team relax, recharge and come back fully refreshed."
          />
          <Card
            imgUri={Rewards}
            title="Perks & Rewards"
            desc="Strugbits love to reward employees with perks and rewards for being proactive, going the extra mile, and winning as a team. This is why, we offer interest-free loans for buying vehicles or mobile phones, employee referral awards, performance bonuses and so much more."
          />
          <Card
            imgUri={loan}
            title="Loan Facility"
            desc="As a part of our employee well-being program, we offer interest-free loans with easy payment options to protect every team member against financial difficulties. Any individual can benefit from this facility, at any time."
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitCards;
