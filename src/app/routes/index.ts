import { Router } from 'express';
import { userRouter } from '../modules/user/user.routes';
import { bicycleRoute } from '../modules/bicycle/bicycle.route';
import { bicyclOrderRouter } from '../modules/Order-bicycle/order-bicycle.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/bicycles',
    route: bicycleRoute,
  },
  {
    path: '/orders',
    route: bicyclOrderRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
