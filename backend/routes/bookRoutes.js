import express from "express";
import { createNewBook } from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.route("/").post(createNewBook);

export default bookRouter;
