import React, { useEffect, useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

function Home() {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const getPhoto = async () => {
      const res = await fetch("https://dummyjson.com/users/1");
      const { image } = await res.json();
      setImage(image);
    };
    getPhoto();
  }, []);
  return (
    <>
      <header className="relative flex h-12 items-center justify-around bg-crem">
        <HamburgerMenu />
        <input type="search" placeholder="search for a book" />
        <div className="h-9 rounded-full bg-white">
          <img src={image} alt="profile-pic" className="h-full" />
        </div>
      </header>
    </>
  );
}

export default Home;
