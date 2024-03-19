import express from "express";
import { createBooking, getAllBookings, updateBooking } from "../controllers/booking";

const router = express.Router();

router.post("/createBooking",createBooking); 
router.get("/getAllBookings",getAllBookings); 
router.patch("/updateBooking/:id",updateBooking); 

export default router;