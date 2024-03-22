import React from "react";
import Image from "next/image";

function Companies() {
  return (
    <div className="flex max-w-full flex-col mb-[50px] md:mb-[100px] gap-6 md:gap-8">
      <h1 className="font-[700] text-center text-[#244D4D] text-[18px]  leading-[23px] md:text-[32px] md:leading-[41px]">
        Trusted by 20,000+ companies
      </h1>
      <div className="flex md:hidden  justify-between max-w-full items-center">
      <Image src={`/comp1.svg`} height={24} width={31} alt={`company 1`} />
      <Image src={`/comp2.svg`} height={24} width={79} alt={`company 1`} />
      <Image src={`/comp3.svg`} height={20} width={57} alt={`company 1`} />
      <Image src={`/comp4.svg`} height={24} width={70} alt={`company 1`} />
      <Image src={`/comp5.svg`} height={24} width={67} alt={`company 1`} />
      </div>
      <div className="hidden md:flex  justify-between items-center">
      <Image src={`/comp1.svg`} height={51} width={66} alt={`company 1`} />
      <Image src={`/comp2.svg`} height={39} width={125} alt={`company 1`} />
      <Image src={`/comp3.svg`} height={34} width={97} alt={`company 1`} />
      <Image src={`/comp4.svg`} height={37} width={106} alt={`company 1`} />
      <Image src={`/comp5.svg`} height={32} width={89} alt={`company 1`} />
      <Image src={`/comp6.svg`} height={40} width={96} alt={`company 1`} />
      </div>
    </div>
  );
}

export default Companies;
