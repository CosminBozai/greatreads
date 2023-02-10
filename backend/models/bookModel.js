import mongoose from "mongoose";
import fs from "fs";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  cover: String,
  totalRating: Number,
  ratingsNumber: Number,
  averageRating: Number,
});

bookSchema.statics.newBook = async function (
  title,
  author,
  cover,
  totalRating = 0,
  ratingsNumber = 0
) {
  if (!title || !author) throw new Error("All fields are required");
  cover = fs.readFileSync("./assets/no-cover.jpg");
  const book = this.create({
    title,
    author,
    cover,
    totalRating,
    ratingsNumber,
  });
  return book;
};

const Book = mongoose.model("Book", bookSchema);
export default Book;
