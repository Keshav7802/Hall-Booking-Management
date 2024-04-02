import express from 'express';
import { createEvent, deleteEvent, getAllEvents } from './../controllers/event.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/getAllEvents', getAllEvents);
router.post('/createEvent', auth, createEvent);
router.delete('/deleteEvent/:eventID', auth, deleteEvent);

export default router;