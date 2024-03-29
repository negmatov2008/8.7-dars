import React from "react";
import Image from "next/image";

const tour = ["Features", "Pricing", "Product", "Support"];
const companies = ["About Us", "Blog", "Media", "Contact Us"];

function Footer() {
  return (
    <div className="w-full bg-[#305F64] hidden  md:flex flex-col gap-[36px] h-[700px] max-h-[10000px] md:h-[442px] ">
      <div className="pt-[18vh] max-w-[1200px] flex flex-col md:flex-row mx-auto  ">
        <div className="flex flex-col mr-[160px] max-w-[308px]">
          <h1 className="font-bold text-[24px] leading-[30px] mb-4">
            DudeShape
          </h1>
          <p className="text-[18px] mb-8 w-full  leading-[26px]">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing eiusmod ut
            labore .
          </p>
          <span className="font-bold text-[20px] leading-[26px] mb-3">
            Follow Us :
          </span>
          <Image src={"/sayt.svg"} height={20} width={125} alt="links" />
        </div>
        <div className="flex gap-[90px] mr-[120px]">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-[20px] leading-[26px] mb-3">
              Take a tour
            </span>
            {tour.map((e, i) => (
              <span key={i} className="text-[18px]  leading-[24px]">
                {e}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-[20px] leading-[26px] mb-3">
              Our company
            </span>
            {companies.map((e, i) => (
              <span key={i} className="text-[18px]  leading-[24px]">
                {e}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-[253px]">
          <div className="flex flex-col gap-6">
            <span className="font-bold text-[20px] leading-[26px]">
              Subscribe
            </span>
            <p className="text-[18px] leading-[23px] ">
              Subscribe to get the latest news from us
            </p>
          </div>
          <form className=" relative">
            <input
              className="w-full bg-[#fff] h-[48px] pl-[30px] placeholder:text-[#859395] text-[#000]"
              type="email"
              placeholder="Email Address"
            />
            <button className=" absolute top-[10px] right-[10px]">
              <Image src={"/send.svg"} height={28} width={28} alt="send" />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-full text-center text-[18px]  leading-[24px] py-[20px] border-t-[1px] border-t-[#407980]">Copyright 2024. Crafted by Nodirbek.</div>
    </div>
  );
}

export default Footer;
