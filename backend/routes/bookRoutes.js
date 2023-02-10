import express from "express";
import {
  addNewBook,
  getBooksInLibrary,
} from "../controllers/bookController.js";
import requireAuth from "../middleware/requireAuth.js";

const bookRouter = express.Router();

bookRouter.use(requireAuth);
bookRouter.route("/").get(getBooksInLibrary).post(addNewBook);

export default bookRouter;
