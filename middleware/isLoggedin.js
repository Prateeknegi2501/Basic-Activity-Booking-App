import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { JwtSecret } from "../config.js";

export const isLoggedIn = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }

  const tokenWithoutBearer = token.split(" ")[1];
  if (!tokenWithoutBearer) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: "Token missing" });
  }


  try {
    const decoded = jwt.verify(tokenWithoutBearer, JwtSecret);
    req.user = decoded;
    
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token: " + err.message });
  }
};
