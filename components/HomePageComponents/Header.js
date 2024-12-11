"use client";
import Link from "next/link";
import React, { useState } from "react";
import home from "../HomePageComponents/home.css";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/Logo.jpg";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const pathname = usePathname();
  return (
    <nav className="navbar laptop:text-white desktop:text-white tablet:text-white wide:text-white">
      <div className="container">
        <div className="logo">
          <Link href={"/"}>
          <Image src={logo} alt="Logo" width={120} />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "text-[#ff6e4e]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/benefits"
                className={`${
                  pathname === "/benefits" ? "text-[#ff6e4e]" : ""
                }`}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`${pathname === "/careers" ? "text-[#ff6e4e]" : ""}`}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`${pathname === "/blogs" ? "text-[#ff6e4e]" : ""}`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${
                  pathname === "/contact-us" ? "text-[#ff6e4e]" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Logo = () => (
  <svg
    id="logo-52"
    width="170"
    height="41"
    viewBox="0 0 170 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.2775 29.3232H63.2295V25.7232H55.5255V12.1632H51.2775V29.3232Z"
      className="cneutral"
      fill="#2F234F"
    />
    <path
      d="M20.1014 40.3232C31.1472 40.3232 40.1014 31.3689 40.1014 20.3232C40.1014 9.27754 31.1472 0.323242 20.1014 0.323242C9.05573 0.323242 0.10144 9.27754 0.10144 20.3232C0.10144 31.3689 9.05573 40.3232 20.1014 40.3232ZM23.1884 15.7758C24.8932 14.0709 24.8932 11.3068 23.1884 9.6019C21.4835 7.89702 18.7194 7.89702 17.0145 9.6019C15.3097 11.3068 15.3097 14.0709 17.0145 15.7758L20.1014 18.8627L23.1884 15.7758ZM24.6489 23.4102C26.3538 25.1151 29.1179 25.1151 30.8228 23.4102C32.5276 21.7053 32.5276 18.9412 30.8228 17.2363C29.1179 15.5315 26.3538 15.5315 24.6489 17.2363L21.562 20.3233L24.6489 23.4102ZM23.1884 31.0446C24.8932 29.3397 24.8932 26.5756 23.1884 24.8707L20.1014 21.7838L17.0145 24.8707C15.3097 26.5756 15.3097 29.3397 17.0145 31.0446C18.7194 32.7495 21.4835 32.7495 23.1884 31.0446ZM9.38007 23.4102C7.67523 21.7053 7.67523 18.9412 9.38007 17.2363C11.085 15.5315 13.8491 15.5315 15.554 17.2363L18.6409 20.3233L15.554 23.4102C13.8491 25.1151 11.085 25.1151 9.38007 23.4102Z"
      className="ccustom"
      fill="#2F234F"
    />
  </svg>
);

export default Navbar;
