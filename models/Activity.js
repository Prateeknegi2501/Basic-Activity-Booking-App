import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    location: String,
    dateTime: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);
