import mongoose from "mongoose";

const { Schema } = mongoose;

const quoteSchema = new Schema({
  author: String,
  picture: String,
  text: String,
});

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
