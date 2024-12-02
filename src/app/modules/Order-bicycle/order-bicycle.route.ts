import express from 'express';
import { bicycleOrderController } from './order-bicycle.controller';
const router = express.Router();
// create post
router.post('/orders', bicycleOrderController.createBicycleOrder);
//total revenue
router.get('/orders/revenue', bicycleOrderController.getTotalRevenue);
export const bicyclOrderRouter = router;
