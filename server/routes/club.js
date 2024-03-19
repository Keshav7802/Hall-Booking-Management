import express from "express";
import { createClub, deleteClubByName, getAllClubs, getClubsByName } from "../controllers/club.js";
import multer from 'multer';



const upload = multer({ dest: 'uploads/' });


const router = express.Router();

router.post("/createClub", upload.single('image'), createClub);
router.delete("/deleteClub/:clubName", deleteClubByName);
router.get("/getClub/:clubName", getClubsByName);
router.get("/getAllClubs/", getAllClubs);

export default router;