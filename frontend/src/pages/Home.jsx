import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//TODO: Make logic for fetching books, updating rating, adding books etc

function Home() {
  const booksArr = [0, 1, 2, 3, 4];
  const booksList = booksArr.map((book, i) => <Book key={i} />);
  return (
    <>
      <Header />
      <div className="mx-auto my-0 flex max-w-7xl sm:p-8">
        <section className="mr-8 hidden h-[calc(100vh-_48px)] w-1/4 sm:block">
          <Sidebar />
        </section>
        <div className="flex w-full flex-col sm:w-3/4">
          {booksList}
          <button className="mb-24 mt-5 w-36 self-center border border-gray-800 bg-lightBrown py-1 text-lg text-white sm:ml-24 sm:self-start">
            <Link to="/add-book" className="block w-full">
              + Book
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
