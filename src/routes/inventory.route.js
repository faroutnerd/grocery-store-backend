import express from 'express';
const router = express.Router();

import {getLowStockProducts, updateStock} from '../controllers/inventory.controller.js'
import { protect, adminOnly } from '../middlewares/auth.middleware.js';

router.get('/low-stock', protect, adminOnly, getLowStockProducts);
router.put('/update-stock/:id', protect, adminOnly, updateStock);

export default router;