import express from 'express';
import { createMembership, deleteMembership } from "./../controllers/membership.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/createMembership',auth, createMembership);
router.delete('/deleteMembership',auth, deleteMembership);

export default router;