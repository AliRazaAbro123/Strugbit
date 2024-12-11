import React from "react";
import TopSection from "../../components/BenefitPageComponents/TopSection";
import EmployeeBenefits from "../../components/BenefitPageComponents/EmployeeBenefits";
import BenefitCards from "../../components/BenefitPageComponents/BenefitCards";

export const metadata = {
  title: "Benefits | Strugbits Employee",
};

function page() {
  return (
    <div>
      <TopSection />
      <EmployeeBenefits />
      <BenefitCards />
    </div>
  );
}

export default page;
