"use client";
import React, { useState } from "react";
import map from "../../public/assets/Map.jpg";
import Image from "next/image";
import homeCss from "../HomePageComponents/home.css";


function ContactForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  function formHandler(e) {
    e.preventDefault();
  
    // // Example provider; you could get this dynamically based on user input or selection
    // const provider = "gmail"; // Change this to "yahoo" or "outlook" if needed
  
    // try {
    //   const response = await fetch("/api/Sendmail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, email, message, provider }),
    //   });
  
    //   const data = await response.json();  // Parse the response as JSON
    //   console.log('Response data:', data);  // Log the response to check its format
  
    //   if (response.ok) {
        // alert("Email sent successfully!");
        setUsername("");
        setEmail("");
        setMessage("");
      // } else {
        // alert(`Failed to send email: ${data.error}`);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("An error occurred while sending the email.");
    // }
  }
  
  

  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden bg-red-50">
      <div className="w-full h-auto overflow-hidden py-24 flex justify-evenly items-center flex-row mobile:flex-col mobile:mb-4 wide:w-[90rem] mobile:p-4">
        <div className="w-[30%] tablet:w-[38%] bg-slate-400 h-[28rem] overflow-hidden mobile:w-full mobile:mt-8 mb-4 mobile:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.767814070799!2d67.0738391744473!3d24.90590034343939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff39177c1ed%3A0x6a04a138ebf2c417!2sStrugbits!5e0!3m2!1sen!2s!4v1732656152343!5m2!1sen!2s"
            width="600"
            height="450"
            className="mobile:h-[600px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-[40%] flex justify-center items-center overflow-hidden mobile:w-full mobile:mt-10">
          <form
            className="flex flex-col items-start justify-center w-full gap-4 p-1 overflow-hidden mobile:gap-6"
            onSubmit={formHandler}
          >
            <h1 className="text-2xl font-bold mobile:text-3xl">
              Get in touch now!
            </h1>
            <div className="flex flex-row items-center justify-center w-full gap-4 overflow-hidden mobile:flex-col mobile:gap-6">
              <span className="flex flex-col items-start justify-center w-1/2 gap-2 p-1 overflow-hidden mobile:w-full">
                <label htmlFor="username">Full Name *</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Full Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full p-2 bg-white border border-black rounded-md mobile:py-5"
                />
              </span>
              <span className="flex flex-col items-start justify-center w-1/2 gap-2 p-1 overflow-hidden mobile:w-full">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 bg-white border border-black rounded-md mobile:py-5"
                />
              </span>
            </div>
            <label htmlFor="message">Message *</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-4 bg-white border border-black rounded-md resize-none h-44"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 font-bold rounded-md ContactInfoBg mobile:p-4"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
