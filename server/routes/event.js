import express from 'express';
import { createEvent, deleteEvent, getAllEvents, getEventByName } from './../controllers/event.js';

const router = express.Router();

router.get('/getAllEvents', getAllEvents);
router.get('/getEvent/:eventName', getEventByName);
router.post('/createEvent', createEvent);
router.delete('/deleteEvent/:eventID', deleteEvent);

export default router;