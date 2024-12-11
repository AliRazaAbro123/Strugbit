import React from "react";
import homeCss from "../HomePageComponents/home.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

function ContactInfo() {
  return (
    <div className="flex items-center justify-center w-full h-48 overflow-hidden ContactInfoBg mobile:h-auto">
      <div className="w-full h-48 flex justify-evenly items-center flex-row overflow-hidden mobile:flex-col mobile:items-start mobile:px-8 mobile:h-auto mobile:py-8 mb-2 mobile:gap-8 wide:w-[90rem]">
        <div className="flex flex-row items-center justify-center gap-6 mobile:flex-col mobile:items-start mobile:gap-2">
          <div className="p-8 overflow-hidden bg-white rounded-full mobile:p-8">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="xl"
              style={{ color: "#ff6e4e" }}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold mobile:text-lg">Location</h1>
            <h3>
              Bungalow #:FL 16, 17, Block 13 <br /> A Gulshan-e-Iqbal, Karachi
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 mobile:flex-col mobile:items-start mobile:gap-2">
          <div className="p-8 overflow-hidden bg-white rounded-full mobile:p-8">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              style={{ color: "#ff6e4e" }}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold mobile:text-lg">Email Address</h1>
            <h3>Info@strugbits.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
