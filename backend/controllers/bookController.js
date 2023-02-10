import Book from "../models/bookModel.js";

const createNewBook = async (req, res) => {
  const { title, author, cover } = req.body;

  try {
    await Book.newBook(title, author, cover);
    res.status(201).json("created");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { createNewBook };
