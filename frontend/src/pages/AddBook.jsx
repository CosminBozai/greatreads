import React, { useState } from "react";
import noCover from "../assets/no-cover.jpg";

function AddBook() {
  const [cover, setCover] = useState(noCover);
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setCover(reader.result);
      });
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <form action="#">
        <fieldset>
          <label htmlFor="cover">Book cover</label>
          <div className="h-80 w-44">
            <img
              src={cover}
              alt="cover"
              className="h-full w-full border border-black object-cover"
            />
          </div>
          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleCoverUpload}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="border border-black"
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            className="border border-black"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </fieldset>
      </form>
      <button className="bg-lightBrown text-white">Add book</button>
    </div>
  );
}

export default AddBook;
