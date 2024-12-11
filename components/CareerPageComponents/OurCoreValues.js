import React from "react";
import homeCss from "../HomePageComponents/home.css";
import CoreValueCard from "../../components/HomePageComponents/CoreValueCard";

function LifeAtStrugbits() {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden bg-red-50">
      <div className="w-full h-auto py-8 flex justify-center items-center flex-col overflow-hidden wide:w-[90rem] mobile:p-6">
        <div className="w-[70%] h-auto flex justify-center items-center gap-5 flex-col mobile:w-full">
          <h1 className="text-4xl font-bold ">
            Our <span className="uniqueName">Core Value</span>
          </h1>
          <h3 className="text-sm text-center mobile:text-base">
            At Strugbits, we have a secret recipe for success. It's a mix of
            core values, a pinch of humor, and a whole lot of awesomeness! These
            values are like our guidelines for offering remarkable results,
            which help us build strong relationships with clients, partners, and
            colleagues. By sticking to these values, we're on a mission to
            create a positive impact in our workspace and the digital world.
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-auto gap-8 py-10 overflow-hidden">
          <div className="w-[70%] tablet:w-[80%] h-auto flex justify-center items-center gap-8 flex-row mobile:w-full mobile:flex-col">
            <CoreValueCard
              title="Drive"
              desc="We set new standards and drive the industry forward by not just staying informed of the best practices, but creating them."
            />
            <CoreValueCard
              title="Transparency"
              desc="We always share the full picture, whether it's with our client or employee, just so that we can communicate clearly."
            />
            <CoreValueCard
              title="Respect"
              desc="As a team, we believe in one another and put effort into making each other better, individually and altogether."
            />
          </div>
          <div className="w-[70%] tablet:w-[80%] h-auto flex justify-center items-center gap-8 flex-row mobile:w-full mobile:flex-col">
            <CoreValueCard
              title="Teamwork"
              desc="By working closely together, we are able to generate out-of-the-box ideas and create a unique and versatile solution."
            />
            <CoreValueCard
              title="Culture"
              desc="We make Mondays less boring by creating a fun, understanding, and interactive environment for all."
            />
            <CoreValueCard
              title="Passion"
              desc="Every member of our team has a knack for crafting digital solutions and dedication to perfecting them."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeAtStrugbits;
