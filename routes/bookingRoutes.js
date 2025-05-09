import express from "express";
import {
  bookActivity,
  getMyBookings,
} from "../controllers/bookingController.js";

import { isLoggedIn } from "../middleware/isLoggedin.js";

const router = express.Router();

router.post("/book/:id", isLoggedIn, bookActivity);
router.get("/myBookings", isLoggedIn, getMyBookings);

export default router;
