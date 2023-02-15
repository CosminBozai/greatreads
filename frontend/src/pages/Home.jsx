import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useAuthContext from "../hooks/useAuthContext";
import "../styles/Home.scss";

function Home() {
  const { user } = useAuthContext();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getLibrary = async () => {
      const response = await axios.get("/api/book", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setBooks([...response.data]);
    };
    getLibrary();
  }, []);
  const booksList = books.map((book, i) => (
    <Book
      key={book._id}
      id={book._id}
      title={book.title}
      author={book.author}
      cover={book.cover}
    />
  ));
  return (
    <div>
      <Sidebar name={user.name} books={books} />
    </div>
  );
}

export default Home;
