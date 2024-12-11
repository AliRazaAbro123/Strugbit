import Image from "next/image";
import React from "react";
import img1 from "../../public/assets/img1.jpg";
import img2 from "../../public/assets/img2.jpg";
import img3 from "../../public/assets/img3.jpg";

function Images() {
  return (
    <div className="flex items-center justify-center w-full h-auto overflow-hidden bg-gray-50">
      <div className="w-full h-auto py-20 flex justify-center items-center flex-row gap-5 overflow-hidden mobile:flex-col mobile:p-6 mobile:gap-10 wide:w-[90rem]">
        <div className="overflow-hidden">
          <Image src={img1} width={600} alt="Employees memories" />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mobile:w-full mobile:gap-10">
          <Image
            src={img3}
            width={330}
            alt="Employees memories"
            className="mobile:w-full"
          />
          <Image
            src={img2}
            width={330}
            alt="Employees memories"
            className="mobile:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Images;
