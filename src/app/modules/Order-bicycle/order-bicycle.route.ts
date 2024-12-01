import express from 'express';
import { bicycleOrderController } from './order-bicycle.controller';
const router = express.Router();
router.post('/orders', bicycleOrderController.createBicycleOrder);
export const bicyclOrderRouter = router;
