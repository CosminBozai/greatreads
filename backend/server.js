import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import getRandomQuote from "./controllers/quoteController.js";

dotenv.config();
connectDB();

const app = express();
const server = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/quote", getRandomQuote);

app.listen(server, () => {
  console.log("server is running");
});
