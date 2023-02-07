import React, { useEffect, useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Sidebar from "../components/Sidebar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import logo from "../assets/greatreads.png";
import Book from "../components/Book";

function Home() {
  const booksArr = [0, 1, 2, 3, 4];
  const booksList = booksArr.map((book, i) => <Book key={i} />);
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
  if (width <= 640) {
    return (
      <>
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
        <div className="flex w-full flex-col">
          {booksList}
          <button className="mb-24 mt-5 w-36 self-center border border-gray-800 bg-lightBrown py-1 text-lg text-white">
            + Book
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <header className="flex h-12 items-center justify-center bg-crem">
          <nav className="flex max-w-4xl flex-1 items-center justify-evenly">
            <img src={logo} alt="logo" className="h-6" />
            <input
              type="search"
              placeholder="search for a book"
              className="w-3/5 max-w-sm  rounded-sm border border-gray-300 px-2 py-1 outline-none focus:border-gray-500 focus:shadow-aroundGray"
            />
            <div className="flex w-24 items-center justify-between">
              <span>Cosmin</span>
              <div className="h-9 rounded-full bg-white">
                <img src={image} alt="profile-pic" className="h-full" />
              </div>
            </div>
          </nav>
        </header>
        <main className="mx-auto my-0 flex max-w-5xl p-4">
          <section className="mr-8 h-[calc(100vh-_48px)] w-1/4">
            <Sidebar />
          </section>
          <div className="w-3/4">
            {booksList}
            <button className="ml-24 mt-5 mb-24 w-36 border  border-gray-800 bg-lightBrown py-1 text-lg text-white">
              + Book
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
