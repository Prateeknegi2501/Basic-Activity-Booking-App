import Activity from "../models/Activity.js";
import httpStatus from "http-status";

export const allActivities = async (req, res) => {
  try {
    const activities = await Activity.find();

    if (activities.length === 0) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "No Activities Found" });
    } else {
      return res
        .status(httpStatus.OK)
        .json({ message: "Activities Found", activities });
    }
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error fetching activities", error: error.message });
  }
};
export const createActivity = async (req, res) => {
  const { title, description, location, dateTime } = req.body;

  try {
    const activity = new Activity({ title, description, location, dateTime });
    await activity.save();

    return res.status(httpStatus.CREATED).json({
      message: "Activity Created Successfully",
      activity,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error creating activity",
      error: error.message,
    });
  }
};