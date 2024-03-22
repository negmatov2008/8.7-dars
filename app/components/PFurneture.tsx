import React from "react";
import Image from "next/image";
import PCard from "./PCard";

function PFurneture() {
  return (
    <div className=" hidden md:flex md:mb-[12vh] max-w-full flex-col gap-[50px]">
      <div className="flex flex-col gap-4 max-w-full">
        <span className="text-[#242424] font-bold text-[32px]  leading-[52px]">
          Our Popular Furniture
        </span>
        <div className="max-w-full flex justify-between">
          <p className="text-[20px] max-w-[819px] text-[#383738] leading-[27px]">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
          <Image src={"manag.svg"} height={40} width={96} alt="manage" />
        </div>
      </div>
      <div className="flex max-w-full justify-between">
        <PCard img="p1.png" />
        <PCard img="p2.png" />
        <PCard img="p3.png" />
      </div>
    </div>
  );
}

export default PFurneture;
