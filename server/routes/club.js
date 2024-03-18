import express from "express";
import { createClub, deleteClub, getClub, getAllClubs } from "../controllers/club.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//addClub
router.post("/createClub", auth, createClub);

//removeClub
router.delete("/deleteClub", auth, deleteClub);

//getClubByID
router.get("/getClub/:id", getClub);

//getAllClubs
router.get("/getAllClubs", getAllClubs);

export default router;
