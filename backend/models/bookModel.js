import mongoose from "mongoose";
import fs from "fs";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  cover: String,
  rating: Number,
});

bookSchema.statics.newBook = async function (title, author, cover, rating = 0) {
  if (!title || !author) throw new Error("All fields are required");
  const book = this.create({
    title,
    author,
    cover,
    rating,
  });
  return book;
};

const Book = mongoose.model("Book", bookSchema);
export default Book;
