import BookingModel from "../models/booking.js";

import mongoose from "mongoose";

//CREATE BOOKING
export const createBooking = async (req, res) => {
  console.log(req);
  const selectedHallName = req.body.hallName;
  const newBooking = req.body;
  console.log(newBooking);
  try {
    const savedBooking = await BookingModel.create(newBooking);
    res.status(200).json(savedBooking);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

//Update Bookings
export const updateBooking = async (req, res) => {
  console.log(req)
  const { id, bookingStatus, approvalDateTime } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send(`No post with id: ${id}`);

  const updatedBooking = { bookingStatus, approvalDateTime };
  console.log("updated", updateBooking)

  try {
    // Use findByIdAndUpdate to update the booking in the database
    const updatedBookingDoc = await BookingModel.findByIdAndUpdate(
      id,
      updatedBooking,
      { new: true }
    );

    // Check if the booking was found and updated
    if (!updatedBookingDoc) {
      return res.status(404).send(`Booking with id: ${id} not found`);
    }

    // If the booking was successfully updated, send the updated booking details in the response
    res.status(200).json(updatedBookingDoc);
  } catch (err) {
    // If an error occurs during the update operation, send an error response
    console.error(err);
    res.status(500).json({
      status: "Failed",
      message: "An error occurred while updating the booking",
      error: err.message, // Include the error message in the response
    });
  }
};


//Get all Bookngs
export const getAllBookings = async (req, res) => {
  try {
    console.log(req);
    const halls = await BookingModel.find({
      bookingStatus: { $in: ["Pending", "Approved", "Rejected"] },
    });
    res.status(200).json(halls);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};