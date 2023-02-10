import React from "react";
import Rating from "./Rating";

function Book({ title, author, cover }) {
  return (
    <div className="flex items-center border-b py-2 px-6">
      <img
        className="mr-6 h-28 w-16 border border-black object-cover"
        src={cover}
        alt="cover"
      />
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p>{author}</p>
        <div className="flex items-center">
          <span className="font-semibold">You rated it </span>
          <Rating />
        </div>
        <select
          name="shelf-list"
          id="shelf-list"
          className="my-1 mr-2 w-32 border border-gray-200 py-1"
        >
          <option value="read">Read</option>
          <option value="reading">Reading</option>
          <option value="to-read">To read</option>
          <option value="dropped">Dropped</option>
          <option value="on-hold">On hold</option>
        </select>
        <button className="bg-red-200 px-3 py-1 font-medium text-red-600 hover:brightness-105">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Book;
