import express from "express";
const router = express();
import { validateLogin, validateRegister } from "../middleware/authValidator.js";
import { login, register } from "../controllers/authController.js";

router.post("/register", validateRegister,register);
router.post("/login", validateLogin,login);

export default router;
