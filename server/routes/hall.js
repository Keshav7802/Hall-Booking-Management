import express from "express";
import { createHall, deleteHall, getHall, getAllHalls} from "../controllers/hall.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// createHall
router.post("/createHall", auth, createHall);

// deleteHall
router.delete("/deleteHall", auth, deleteHall);

//GET Hall
router.get("/getHall/:id", getHall);

//GET ALL
router.get("/getAllHalls", getAllHalls);

export default router;
