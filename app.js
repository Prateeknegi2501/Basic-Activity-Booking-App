import express from "express";
import mongoose from "mongoose"
import authRoutes from "./routes/authRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import { Port,MongoURL } from "./config.js";

const app = express();

app.use(express.json());

mongoose
  .connect(MongoURL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(Port, (req, res) => {
  console.log("App is listening to port " + Port);
});
