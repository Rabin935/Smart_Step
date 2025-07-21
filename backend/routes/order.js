import express from 'express';
import { placeOrder } from '../controller/orderController.js';
import { getAllOrders } from '../controller/orderController.js';

const router = express.Router();

router.post('/', placeOrder);
router.get('/', getAllOrders);

export default router;