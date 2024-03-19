import express from 'express';
import { createEvent, deleteEvent, getAllEvents } from './../controllers/event.js';

const router = express.Router();

router.get('/getAllEvents', getAllEvents);
router.post('/createEvent', createEvent);
router.delete('/deleteEvent/:eventID', deleteEvent);

export default router;