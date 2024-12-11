import React from "react";
import homeCss from "../HomePageComponents/home.css";

function LifeAtStrugbits() {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden">
      <div className="w-full h-auto flex justify-center gap-12 py-16 mt-6 items-center flex-col overflow-hidden wide:w-[90rem] mobile:p-4">
        <div className="w-[70%] h-auto flex justify-center items-center gap-6 flex-col mobile:w-[90%]">
          <h1 className="text-3xl">
            <strong>
              Life At <span className="uniqueName">Strugbits</span>
            </strong>
          </h1>
          <h3 className="text-sm leading-snug tracking-wide text-center mobile:text-base">
            We highly believe in <strong>employee empowerment</strong>, this is
            why we promote a <strong>healthy workplace</strong> where an
            individual has the ability to accomplish something every other day
            and the confidence needed to succeed in thier career. At Strugbits,
            we deeply value our team as our greatest asset and we ensure
            everyone is regonized, respected and celebrated.
          </h3>
        </div>
        <div className="flex items-center justify-center w-full overflow-hidden">
          <div className="details w-[50%] h-auto rounded-lg flex justify-evenly items-center flex-row text-center py-7 overflow-hidden mobile:flex-col mobile:w-[90%] mobile:gap-8">
            <div>
              <h1 className="text-[#ff6e4e] font-bold text-3xl">98+</h1>
              <h4 className="text-sm">Skilled Professionals</h4>
            </div>
            <div>
              <h1 className="text-[#ff6e4e] font-bold text-3xl">3+</h1>
              <h4 className="text-sm">Years in industry</h4>
            </div>
            <div>
              <h1 className="text-[#ff6e4e] font-bold text-3xl">104+</h1>
              <h4 className="text-sm">Countries Served</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeAtStrugbits;
