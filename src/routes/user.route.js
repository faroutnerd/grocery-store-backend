import express from 'express';
const router = express.Router();

import { getUserProfile, updateUserProfile } from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;