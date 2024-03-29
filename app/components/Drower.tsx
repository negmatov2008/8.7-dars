import React from "react";

function Drower() {
  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        
        <ul className="menu p-4  w-80 min-h-full bg-[#eee] text-black">
        <h1 className="font-bold mb-10 text-[24px]">Menu</h1>
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drower;
