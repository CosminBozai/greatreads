import Book from "../models/bookModel.js";
import User from "../models/userModel.js";

const addNewBook = async (req, res) => {
  const { title, author, cover } = req.body;

  try {
    const user = await User.findById(req.user);

    const book = await Book.newBook(title, author, cover);
    user.library.push(book);
    user.save();
    res.status(201).json("created");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getBooksInLibrary = async (req, res) => {
  try {
    const user = await User.findById(req.user).populate("library");
    res.status(200).json(user.library);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteBook = async (req, res) => {
  const _id = req.params.id;
  try {
    await Book.deleteOne({ _id: _id });
    res.json(200);
  } catch (err) {
    console.log(err);
  }
};

export { addNewBook, getBooksInLibrary, deleteBook };
