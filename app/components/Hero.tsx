import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full bg-[#154444] px-4 pt-8  mb-14 md:mb-24 flex flex-col gap-6 items-center md:flex-row-reverse  md:px-[0px] md:justify-end md:pt-0">
      <div className="flex flex-col gap-4">
        <h1 className="font-[700] text-[32px] max-w-[380px] md:max-w-[671px]  leading-[42px] md:text-[56px] md:leading-[68px]">
          We Help You Make Modern Furniture
        </h1>
        <p className="text-[12px]  leading-[17px] md:text-[20px] max-w-[257px] md:max-w-[488px]  md:leading-[25px]">
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials{" "}
        </p>
        <button className="py-[10px] hover:bg-[#eee] hover:px-[40px] hover:max-w-[250px]   transition-all hover:translate-x-4 hover: px-[32px] bg-white text-[12px] text-[#154444] max-w-[149px] md:max-w-[210px]  leading-[20px] md:py-[18px] md:px-[36px] md:text-[20px] md:leading-[25px]">
          Explore More
        </button>
      </div>
      <Image
        className=" block md:hidden"
        height={326}
        width={309}
        alt="img"
        src={"/chair.png"}
      />
      <Image
        className=" hidden md:block"
        src={"/chair2.png"}
        height={560}
        width={411}
        alt="chair"
      />
    </div>
  );
}

export default Hero;
