import React from "react";
import Image from "next/image";

function Follow() {
  return (
    <div className="flex mb-[15vh] w-full md:mb-[20vh] justify-center items-center h-[395px] bg-[#F4F6F6]">
      <div className="flex px-4 md:px-0 flex-col gap-10 md:gap-14 max-w-[605px]">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="font-bold text-[26px] md:text-[32px] leading-[36px] md:leading-[48px] text-[#222222]">
            Subscribe to get the latest news about us
          </h1>
          <p className="text-[#222222]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore at dolore.
          </p>
        </div>
        <form className=" relative max-w-[472px]">
          <input
            className="w-full h-[67px] bg-white  placeholder:text-[#BABABA] text-[#222222] font-[500] text-[14px] md:text-[20px] pl-[50px]"
            type="email"
            placeholder="Enter your email"
          />
          <Image
            className=" absolute  top-[27px] left-[20px]"
            src={"emaol.svg"}
            height={16}
            width={16}
            alt="email"
          />
          <button className="flex absolute top-[7.5px] right-[12px] w-[126px] h-[52px] justify-center items-center bg-[#305F64] font-[500]">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Follow;
