"use client";
import React, { useState } from "react";
import Image from "next/image";

const menu = ["Shop By Room", "Shop By Category", "Shop By Style"];
const category = [
  {
    id: 1,
    w: 91,
    h: 59,
    bg: "bg-[]",
  },
  {
    id: 2,
    w: 58,
    h: 59,
    bg: "bg-[]",
  },
  {
    id: 3,
    w: 95,
    h: 59,
    bg: "bg-[]",
  },
  {
    id: 4,
    w: 47,
    h: 56,
    bg: "bg-[#154444]",
  },
  {
    id: 5,
    w: 77,
    h: 56,
    bg: "bg-[]",
  },
  {
    id: 6,
    w: 58,
    h: 59,
    bg: "bg-[]",
  },
];

function AFurnetire() {
  const [active, setActive] = useState(0);
  return (
    <div className=" hidden md:flex flex-col md:mb-[20vh] gap-[96px] max-w-full">
      <div className="flex flex-col gap-4 max-w-full  justify-center items-center">
        <h2 className="font-bold text-[32px]  leading-[48px] text-[#242424]">
          All Furniture
        </h2>
        <div className="max-w-full gap-[120px] flex justify-between items-center">
          {menu.map((e, i) => (
            <span
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer text-[24px] leading-[27px] text-[#919090] ${
                active == i ? "active" : ""
              }`}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-full flex justify-between items-center">
        <Image src={"/all1.png"} height={412} width={578} alt="img" />
        <div className="max-w-[474px] flex  flex-wrap gap-x-4 gap-y-4">
          {category.map((e) => (
            <div
              key={e.id}
              className={`w-[222px] ${e.bg}  h-[90px] flex justify-center border-[1.5px] cursor-pointer border-[#D9DCE5] items-center`}
            >
              <Image src={`c${e.id}.svg`} width={e.w} height={e.h} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AFurnetire;
