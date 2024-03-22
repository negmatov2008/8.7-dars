"use client";
import { useState } from "react";
import Image from "next/image";

function PCard(props: { img: string }) {
  const [love, setLove] = useState<Boolean>(false);
  const { img } = props;
  return (
    <div className=" hidden md:flex flex-col max-w-[380px] shadow-[0px_13px_26px_0px_#00000012]">
      <Image width={380} height={247} alt="furture" src={`/${img}`} />

      <div className=" max-w-full bg-[#FFFFFF]  py-5 px-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-[20px] text-[#242424] leading-[27px] font-[500] ">
            White Swan Chair
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setLove(!love)}
              className={` ${
                love ? "bg-[#EF5423]" : "bg-[#ECF4FF]"
              } w-[26px] h-[24px] rounded-[999px] flex justify-center items-center `}
            >
              <Image
                src={love ? "/heart2.svg" : "/heart.svg"}
                height={10}
                width={10}
                alt="heart"
              />
            </button>
            <Image src={"link2.svg"} height={26} width={26} alt="" />
          </div>
        </div>
        <div className="flex max-w-full justify-between">
          <span className="text-[20px] text-[#242424] leading-[27px] font-[500]">
            $40
          </span>
          <button className="w-[78px] h-[32px] flex justify-center items-center bg-[#244D4D] text-[12px] leading-[21px] font-[500]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PCard;
