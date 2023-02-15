import React from "react";
import "../styles/HamburgerMenu.css";

function HamburgerMenu({ open, setOpen }) {
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div id="menu" onClick={toggle} className={`${open ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerMenu;
