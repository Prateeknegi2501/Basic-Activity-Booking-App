import { registerValidation, loginValidation } from "../joiValidation.js";
import  httpStatus  from "http-status";

export const validateRegister = (req, res, next) => {
  const { error } = registerValidation.validate(req.body);
  if (error) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: error.details[0].message });
  }
  next();
};

export const validateLogin = (req, res, next) => {
  const { error } = loginValidation.validate(req.body);
  if (error) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: error.details[0].message });
  }
  next();
};
