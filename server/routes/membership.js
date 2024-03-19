import express from 'express';
import { createMembership, deleteMembership } from "./../controllers/membership.js";

const router = express.Router();

router.post('/createMembership', createMembership);
router.post('/deleteMembership', deleteMembership);

export default router;