import express from 'express';
import { bicycleOrderController } from './order-bicycle.controller';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';
import validationRequest from '../../middlewares/validationRequest';
import { OrderSchema } from './order-bicycle.validation';
const router = express.Router();
// create post
router.post(
  '/orders',
  auth(User_Role.customer),
  validationRequest(OrderSchema),
  bicycleOrderController.createBicycleOrder,
);
//total revenue
router.get(
  '/orders/revenue',
  auth(User_Role.admin, User_Role.customer),
  bicycleOrderController.getTotalRevenue,
);
export const bicyclOrderRouter = router;
