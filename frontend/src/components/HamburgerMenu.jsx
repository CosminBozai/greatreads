import React, { useState } from "react";
import "../HamburgerMenu.css";
import Sidebar from "./Sidebar";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div id="menu" onClick={toggle} className={`${open ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${
          open ? "opacity-1 flex" : " hidden opacity-0"
        } absolute top-12 left-0 z-10 h-[calc(100vh-_48px)] w-full transition-opacity duration-150 ease-in`}
      >
        <div className="h-full w-2/3 bg-white px-3 py-4">
          <Sidebar />
        </div>
        <div className="h-full w-1/3 bg-gray-200 opacity-50"></div>
      </div>
    </>
  );
}

export default HamburgerMenu;
