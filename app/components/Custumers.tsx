import React from "react";
import Image from "next/image";

function Custumers() {
  return (
    <div className=" hidden md:flex max-w-full md:mb-[20vh]  justify-between items-center">
      <Image src={"/customer.png"} height={493} width={565} alt="img" />
      <div className="flex flex-col gap-10 max-w-[536px] ">
        <div className=" flex flex-col gap-2 ">
          <h1 className="text-[#242424] font-bold text-[32px] leading-[48px]">
            Our customers are verry importan to us
          </h1>
          <p className="text-[#383738] text-[20px] leading-[27px]">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
        </div>
        <Image src={"/human.svg"} height={50} width={129} alt="human" />
      </div>
    </div>
  );
}

export default Custumers;
