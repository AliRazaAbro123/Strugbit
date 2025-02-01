"use client";
import React, { useState } from "react";
import homeCss from "../HomePageComponents/home.css";
import Loading from "@/app/loading"; 
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; // Make sure to import CSS

function ContactForm() {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  // Form submit handler
  const FormHandler = async (event) => {
    event.preventDefault();
    setLoading(true); 
  
    const formData = { username, email, message };
  
    try {
      const response = await fetch("/api/Sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Your message has been sent successfully!", {
          position: "top-center",
        });
        setUsername("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to send your message.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
      });
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="relative w-full h-auto overflow-hidden bg-red-50">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <Loading />
        </div>
      )}

      <div
        className={`w-full h-auto overflow-hidden py-24 flex justify-evenly items-center flex-row mobile:flex-col mobile:mb-4 wide:w-[90rem] mobile:p-4 ${
          loading ? "blur-sm" : ""
        }`}
      >
        {/* Google Map */}
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

        {/* Contact Form */}
        <div className="w-[40%] flex justify-center items-center overflow-hidden mobile:w-full mobile:mt-10">
          <form
            className="flex flex-col items-start justify-center w-full gap-4 p-1 overflow-hidden mobile:gap-6"
            onSubmit={FormHandler}
          >
            <h1 className="text-2xl font-bold mobile:text-3xl">
              Get in touch now!
            </h1>

            {/* Name & Email Fields */}
            <div className="flex flex-row items-center justify-center w-full gap-4 overflow-hidden mobile:flex-col mobile:gap-6">
              <span className="flex flex-col items-start justify-center w-1/2 gap-2 p-1 overflow-hidden mobile:w-full">
                <label htmlFor="username">Full Name *</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Full Name"
                  value={username}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-white border border-black rounded-md mobile:py-5"
                />
              </span>
            </div>

            {/* Message Field */}
            <label htmlFor="message">Message *</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              value={message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white border border-black rounded-md resize-none h-44"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 font-bold rounded-md bg-[#ff6e4e] text-white hover:bg-[#d15337] transition-all duration-300 mobile:p-4"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>

            {/* Error Message */}
            {error && (
              <div className="mt-4 text-center text-xl text-red-500">
                <p>{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      
      {/* ToastContainer */}
      <ToastContainer />
    </div>
  );
}

export default ContactForm;