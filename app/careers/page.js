import React from "react";
import CareerTopSection from "../../components/CareerPageComponents/CareerTopSection";
import LifeAtStrugbits from "../../components/CareerPageComponents/LifeAtStrugbits";
import Images from "../../components/CareerPageComponents/Images";
import OurCoreValues from "../../components/CareerPageComponents/OurCoreValues";
import EmployeeBenefits from "../../components/BenefitPageComponents/EmployeeBenefits";
import BenefitShortCard from "../../components/CareerPageComponents/BenefitShortCard";
import CareerFooter from "../../components/CareerPageComponents/CareerFooter";

export const metadata = {
  title: "Careers | Strugbits Employee",
};

function page() {
  return (
    <div>
      <CareerTopSection />
      <LifeAtStrugbits />
      <Images />
      <OurCoreValues />
      <EmployeeBenefits />
      <BenefitShortCard />
      <CareerFooter />
    </div>
  );
}

export default page;
