import express from "express";
import { allActivities, createActivity } from "../controllers/activityController.js";

const router = express();
router.get("/", allActivities);
router.post("/", createActivity);

export default router;
