import Booking from "../models/Booking.js";
import httpStatus from "http-status";

export const bookActivity = async (req, res) => {
  try {
    const { id } = req.params;
    
    const bookings = new Booking({
      user: req.user.userId,
      activity: id,
      bookedAt: new Date(),
    });
    await bookings.save();
    return res
      .status(httpStatus.CREATED)
      .json({ message: "Booking Created Successfully", bookings });
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error Creating Booking", error });
  }
};

export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.user._id })
    .populate("activity")
    .populate("user");
  if (!bookings) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "No Bookings Found" });
  } else {
    return res
      .status(httpStatus.OK)
      .json({ message: "Bookings Found", bookings });
  }
};
