import express from "express";
import { createBooking, getAllBookings, updateBooking } from "../controllers/booking.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/createBooking",auth,createBooking); 
router.get("/getAllBookings",getAllBookings); 
router.patch("/updateBooking/:id",auth,updateBooking); 

export default router;