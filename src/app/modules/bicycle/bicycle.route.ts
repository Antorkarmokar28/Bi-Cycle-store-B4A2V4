import express from 'express';
import { bicycleController } from './bicycle.controller';
const router = express.Router();
// create post
router.post('/products', bicycleController.createBicycle);
// get all data
router.get('/', bicycleController.getAllBicycle);
//get a single data
router.get('/:_id', bicycleController.getsingleBicycle);
// update data
router.put('/:_id', bicycleController.updateBicyclelData);
// delete data
router.delete('/:_id', bicycleController.deleteBicycleData);
// export this variable for use another file
export const bicycleRoute = router;
