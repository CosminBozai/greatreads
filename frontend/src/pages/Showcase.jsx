import React from "react";
import logo from "../assets/greatreads.png";
import { Link } from "react-router-dom";
import Quote from "../components/Quote";

function Showcase() {
  return (
    <>
      <header className=" bg-crem py-8">
        <img src={logo} alt="logo" className=" mx-auto my-0 h-11" />
      </header>
      <div className="mb-10 bg-bannerRed py-8 text-center text-2xl text-white">
        A place for all the book lovers
      </div>
      <main className="mx-auto my-0 flex max-w-4xl flex-col items-center justify-between px-6 md:flex-row-reverse md:items-start">
        {/* Authentication */}
        <section className="mb-10 flex  flex-col items-center rounded-xl border  border-neutral-300 py-8 px-2">
          <h1 className="mb-6 text-lg font-medium">Discover & read more</h1>
          <div>
            <Link
              to="#"
              className="mb-4 flex h-12 w-64 items-center justify-center rounded  border border-black bg-white"
            >
              Continue with Google
            </Link>
            <Link
              to="/register"
              className="mb-5 flex h-12 w-64 items-center justify-center rounded bg-brown text-white  hover:brightness-125 "
            >
              Sign up with Email
            </Link>
          </div>
          <span className="mx-2 mb-10 text-center text-sm font-medium text-zinc-700">
            To test the app without creating an account{" "}
            <Link to="" className="text-sky-600 hover:underline">
              press here
            </Link>
          </span>
          <div className="border-t border-gray-400 px-3 pt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-600 hover:underline">
              Log in
            </Link>
          </div>
        </section>
        <div className="max-w-md">
          {/* Article */}
          <article>
            <h2 className="mb-2 text-lg font-medium">
              Keep track of your books
            </h2>
            <p className="mb-7 text-sm">
              Use this modern-looking and interactive library to manage your
              books. Add a book to your library and select one of the 5
              statuses. Don't forget to add a rating too
            </p>
            <h2 className="mb-2 text-lg font-medium">
              See what other users feel about the books
            </h2>
            <p className="mb-7 text-sm">
              The rating of a book is shared across the users so you can see the
              average rating for that book
            </p>
          </article>
          {/* Quotes */}
          <Quote />
        </div>
      </main>
    </>
  );
}

export default Showcase;
