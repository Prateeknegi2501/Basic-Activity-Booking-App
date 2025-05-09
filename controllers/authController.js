import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import User from "../models/User.js";
import { JwtSecret } from "../config.js";


export const register = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(httpStatus.CONFLICT)
      .json({ message: "User Already Registered" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, phoneNumber, password: hashedPassword });
  await user.save();
  return res
    .status(httpStatus.CREATED)
    .json({ message: "User Registered Successfully" });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid Username or Password" });
    }

    
    const token = jwt.sign({ userId: user._id }, JwtSecret , {
      expiresIn: "1d",
    });

    return res
      .status(httpStatus.OK)
      .json({ message: "Login Successfully", token, user: user.name });
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error logging in", error: error.message });
  }
};
