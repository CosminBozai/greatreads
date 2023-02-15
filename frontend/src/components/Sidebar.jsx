import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import "../styles/Sidebar.scss";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`sidebar-container ${open ? "" : "closed"}`}>
      <div className="sidebar">
        <HamburgerMenu open={open} setOpen={setOpen} />
        <section className="profile-container">
          <div className="profile-photo"></div>
          <p className="welcome-msg">Welcome Back</p>
          <p className="name">Cosmin</p>
        </section>
        <nav className="sidebar-nav">
          <Link className="link" to="/profile">
            <CgProfile size={20} />
            <span>Profile</span>
          </Link>
          <Link className="link" to="/profile">
            <BiLogOut size={20} />
            <span>Log out</span>
          </Link>
          <h2>Bookshelves</h2>
          <button className="bookshelf-btn selected">All books</button>
          <button className="bookshelf-btn">Reading</button>
          <button className="bookshelf-btn">Read</button>
          <button className="bookshelf-btn">To read</button>
        </nav>
        <footer className="credit">
          Made by <span>Bozai Cosmin</span>
        </footer>
      </div>
      <div className="overscreen"></div>
    </div>
  );
}

export default Sidebar;
