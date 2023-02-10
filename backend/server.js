import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import getRandomQuote from "./controllers/quoteController.js";
import userRouter from "./routes/userRoutes.js";
import bookRouter from "./routes/bookRoutes.js";

dotenv.config();
connectDB();

const app = express();
const server = 5000;

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use("/quote", getRandomQuote);
app.use("/user", userRouter);
app.use("/book", bookRouter);

app.listen(server, () => {
  console.log("server is running");
});
