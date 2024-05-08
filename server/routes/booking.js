import express from "express";
import { createBooking, getAllBookings, updateBooking } from "../controllers/booking.js";

const router = express.Router();

router.post("/createBooking",createBooking); 
router.get("/getAllBookings",getAllBookings); 
router.patch("/updateBooking",updateBooking); 

export default router;