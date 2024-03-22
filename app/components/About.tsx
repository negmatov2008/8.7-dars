import React from "react";
import Image from "next/image";

const info = [
  {
    id: 1,
    title: "Best Quality",
    p: "All of our furniture uses the best materials and choices",
  },
  {
    id: 2,
    title: "100% Secure",
    p: "All of our furniture uses the best materials and choices",
  },
  {
    id: 3,
    title: "Free Shipping",
    p: "All of our furniture uses the best materials and choices",
  },
];

function About() {
  return (
    <div className="max-w-full flex flex-col mb-[60vh] md:mb-[100px] gap-8 md:flex-row-reverse md:gap-0 pl-[20px] md:pl-0 items-center  md:justify-between ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-[#244D4D] font-[600] text-[24px]  leading-[40px] md:font-[700] md:text-[32px] ">
            About Us
          </h2>
          <p className="text-[12px] text-[#444444] max-w-[322px] md:max-w-[436px] leading-[19px] md:text-[20px] md:leading-[25px]">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture 
          </p>
        </div>
        {info.map((e, i) => (
          <div key={i} className="flex flex-col gap-4 ">
            <div className="flex gap-3  items-start">
              <Image
                className=" block md:hidden"
                src={`/a${e.id}.svg`}
                height={28}
                width={28}
                alt="img"
              />
              <Image
                className=" hidden md:block"
                src={`/a${e.id}.svg`}
                height={50}
                width={50}
                alt="img"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[#244D4D] font-[600] text-[14px] leading-[20px] md:font-[700] md:text-[20px] md:leading-[27px]">
                  {e.title}
                </span>
                <p className="max-w-[151px] text-[10px] text-[#383738]  leading-[15px] md:text-[18px] md:leading-[27px] md:max-w-[271px]">
                  {e.p}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image className=" block md:hidden" src={'/sofa.png' } width={332} height={341} alt="sofa"/>
      <Image className=" hidden md:block" src={'/sofa2.png' } width={632} height={613} alt="sofa"/>
    </div>
  );
}

export default About;
