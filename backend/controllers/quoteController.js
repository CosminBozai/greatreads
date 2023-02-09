import asyncHandler from "express-async-handler";
import Quote from "../models/quoteModel.js";

const getRandomQuote = asyncHandler(async (req, res) => {
  try {
    // Get random quote
    const quote = await Quote.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(quote);
  } catch (err) {
    res.send(404);
  }
});

export default getRandomQuote;
