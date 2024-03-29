import React from "react";
import Image from "next/image";

function Custumers() {
  return (
    <div className=" flex mb-[13vh]  flex-col-reverse md:flex-row px-6 gap-14 md:gap-0 md:px-0 max-w-full md:mb-[20vh]  justify-between items-center">
      <Image src={"/customer.png"} height={493} width={565} alt="img" />
      <div className="flex flex-col gap-10 max-w-[536px] ">
        <div className=" flex flex-col gap-2 ">
          <h1 className="text-[#242424] font-bold text-center md:text-start text-[26px] md:text-[32px] leading-[36px] md:leading-[48px]">
            Our customers are verry importan to us
          </h1>
          <p className="text-[#383738] text-center md:text-start  md:text-[20px] leading-[27px]">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials and choices
            for our customers.
          </p>
          
        </div>
        <Image className="hidden md:block" src={"/human.svg"} height={50} width={129} alt="human" />
      </div>
    </div>
  );
}

export default Custumers;
