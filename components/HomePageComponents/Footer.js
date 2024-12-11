import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Logo.jpg";
import homeCss from "../HomePageComponents/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden text-white footer">
      <div className="w-full wide:w-[90rem] h-auto text-white flex justify-center items-center flex-col overflow-hidden mobile:p-6">
        <div className="w-[90%] h-auto flex justify-between items-center flex-row text-sm mobile:flex-col mobile:w-full mobile:items-start mobile:justify-center mobile:gap-6">
          <div className="w-[22rem] h-[16rem] mobile:mt-8 flex justify-center items-start gap-4 leading-snug flex-col mobile:h-auto mobile:w-full overflow-hidden">
            <Image src={logo} alt="Logo" />
            <h3 className="text-sm">
              Strugbit is a market-leading digital solutions provider catering
              to clients from around the world. With our dedicated team. we
              provide digital marketing soliutions through web and app
              designing, development and worldwide marketing
            </h3>
          </div>
          <div className="w-56 h-[16rem] flex justify-start items-start mt-10 gap-4 flex-col mobile:h-auto mobile:w-full">
            <h2 className="text-lg font-bold tracking-wider headings">
              QUICK LINKS
            </h2>
            <Link href="/benefits" className="hover:text-[#ff6e4e]">
              Benefits
            </Link>
            <Link href="/careers" className="hover:text-[#ff6e4e]">
              Careers
            </Link>
            <Link href="/contact-us" className="hover:text-[#ff6e4e]">
              Contact Us
            </Link>
          </div>
          <div className="w-56 h-[16rem] flex justify-start items-start mt-10 gap-4 flex-col mobile:h-auto mobile:w-full">
            <h2 className="text-lg font-bold tracking-wider headings">
              CAREERS
            </h2>
            <Link href="#">Looking for Job</Link>
            <Link href="#">Looking for Internshiop</Link>
          </div>
          <div className="w-56 h-[16rem] flex justify-start items-start mt-10 mobile:mb-8 gap-4 flex-col mobile:h-auto mobile:w-full">
            <h2 className="text-lg font-bold tracking-wider headings">
              CONTACT US
            </h2>
            <div className="flex flex-row items-center justify-around gap-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="base"
                style={{ color: "#ff6e4e" }}
              />
              <h3>Bungalow #:FL 16, 17, Block 13 A Gulshan-e-Iqbal, Karachi</h3>
            </div>
            <div className="flex flex-row items-center justify-around gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="base"
                style={{ color: "#ff6e4e" }}
              />
              <h3>Info@strugbits.com</h3>
            </div>
          </div>
        </div>
        <div className="w-[90%] mobile:w-full h-20 flex text-base justify-between items-center flex-row border-t-2 border-gray-600 mobile:justify-center mobile:gap-10">
          <div>Strugbits 2023 - All Rights Reserved.</div>
          <div className="flex items-center justify-center gap-6">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
