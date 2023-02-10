import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: String,
  library: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

// signup method

userSchema.statics.signup = async function (
  name,
  email,
  password,
  confirmPassword
) {
  if (!email || !name || !password || !confirmPassword)
    throw new Error("All fields are required");

  const nameExists = await this.findOne({ name });
  if (nameExists) throw new Error("Name already in use");

  const emailExists = await this.findOne({ email });
  if (emailExists) throw new Error("Email already in use");

  if (password !== confirmPassword) throw new Error("Passwords must match");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw new Error("All fields are required");
  const user = await this.findOne({ email });
  if (user) {
    const passwordsMatch = await bcrypt.compare(password, user.password);
    if (passwordsMatch) {
      return user;
    } else {
      throw new Error("Incorrect password");
    }
  } else {
    throw new Error("There is no user with this email");
  }
};

const User = mongoose.model("User", userSchema);
export default User;
