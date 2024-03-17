import express from "express";
import { getAllBookings, updateBooking, createBooking } from "../controllers/booking.js";
import auth from "../middleware/auth.js";


const router = express.Router();

router.post("/createBooking", auth, createBooking); 
router.get("/getAllBookings",auth, getAllBookings); // Auth can be removed
router.patch("/updateBooking/:id",auth,updateBooking);

export default router;