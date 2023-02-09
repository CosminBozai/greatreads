import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => jwt.sign({ _id }, process.env.TOKEN_SECRET);

const signupUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const user = await User.signup(name, email, password, confirmPassword);

    const token = createToken(user._id);

    res.status(201).json({ name, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.json({ name: user.name, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { signupUser, loginUser };
