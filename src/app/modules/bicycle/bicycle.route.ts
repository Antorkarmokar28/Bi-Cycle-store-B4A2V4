import express from 'express';
import { bicycleController } from './bicycle.controller';
const router = express.Router();
// create post
router.post('/products', bicycleController.createBicycle);
// export this variable for use another file
export const bicycleRoute = router;
