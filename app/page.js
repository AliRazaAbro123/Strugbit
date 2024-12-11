import React from "react";
import Home from "@/components/HomePageComponents/Home";
import LifeAtStrugbits from "@/components/CareerPageComponents/LifeAtStrugbits";
import Images from "@/components/CareerPageComponents/Images";
import WorkWithUs from "@/components/HomePageComponents/WorkWithUs";
import JoinOurTeam from "@/components/HomePageComponents/JoinOurTeam";

function page() {
  return (
    <div>
      <Home />
      <LifeAtStrugbits />
      <Images />
      <WorkWithUs />
      <JoinOurTeam />
    </div>
  );
}

export default page;
