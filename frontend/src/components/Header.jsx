import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../assets/greatreads.png";

function Header({ name }) {
  const { width } = useWindowDimensions();
  const [image, setImage] = useState(null);
  useEffect(() => {
    const getPhoto = async () => {
      const res = await fetch("https://dummyjson.com/users/1");
      const { image } = await res.json();
      setImage(image);
    };
    getPhoto();
  }, []);
  if (width < 640) {
    return (
      <header className="relative flex h-12 items-center justify-evenly bg-crem">
        <HamburgerMenu />
        <input
          type="search"
          placeholder="search for a book"
          className="w-3/5 rounded-sm border border-gray-300 px-2 py-1 outline-none focus:border-gray-500 focus:shadow-aroundGray"
        />
        <div className="h-9 rounded-full bg-white">
          <img src={image} alt="profile-pic" className="h-full" />
        </div>
      </header>
    );
  } else {
    return (
      <header className="flex h-12 items-center justify-center bg-crem">
        <nav className="flex max-w-4xl flex-1 items-center justify-evenly">
          <img src={logo} alt="logo" className="h-6" />
          <input
            type="search"
            placeholder="search for a book"
            className="w-3/5 max-w-sm  rounded-sm border border-gray-300 px-2 py-1 outline-none focus:border-gray-500 focus:shadow-aroundGray"
          />
          <div className="flex w-24 items-center justify-between">
            <span>{name}</span>
            <div className="h-9 rounded-full bg-white">
              <img src={image} alt="profile-pic" className="h-full" />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
