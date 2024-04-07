import express from 'express';
import { createEvent, deleteEvent, getEventbyID, getAllEvents } from './../controllers/event.js';

const router = express.Router();

router.get('/getAllEvents', getAllEvents);
router.get('/getEvent/:eventID', getEventbyID);
router.post('/createEvent', createEvent);
router.delete('/deleteEvent/:eventID', deleteEvent);

export default router;