import express from 'express';
const router = express.Router();

import {
    createOrder,
    getUserOrders,
    getAllOrders,
} from '../controllers/order.controller.js';
import { protect, adminOnly } from '../middlewares/auth.middleware.js';

router.post('/', protect, createOrder);
router.get('/my-orders', protect, getUserOrders);
router.get('/all', protect, adminOnly, getAllOrders);

export default router;