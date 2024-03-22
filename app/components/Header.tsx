import React from "react";
import Image from "next/image";
const menuArr = ["Home", "About", "Features", "Contact"];
function Header() {
  return (
    <div className="py-6 px-4 flex md:px-0  justify-between items-center">
      <span className="text-[#244D4D] text-[24px] font-[700]">DudeShape</span>
      <div className=" hidden md:flex gap-[50px] ">
        {menuArr.map((e, i) => (
          <span key={i} className="text-[#161616]  leading-[20px] ">
            {e}
          </span>
        ))}
      </div>
      <Image
        className=" hidden md:block"
        src={"RightNav.svg"}
        height={24}
        width={78}
        alt="Right Nav"
      />
      <Image
        className=" block md:hidden"
        src={"menu.svg"}
        height={22}
        width={31}
        alt="Menu"
      />
    </div>
  );
}

export default Header;
