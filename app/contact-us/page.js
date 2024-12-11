import React from "react";
import TopSection from "../../components/BenefitPageComponents/TopSection";
import ContactLoveToHear from "../../components/ContactPageComponents/ContactLoveToHear";
import ContactInfo from "../../components/ContactPageComponents/ContactInfo";
import ContactForm from "../../components/ContactPageComponents/ContactForm";

export const metadata = {
  title: "Contact Us | Strugbits Employee",
};

function page() {
  return (
    <div>
      <TopSection />
      <ContactLoveToHear />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default page;
