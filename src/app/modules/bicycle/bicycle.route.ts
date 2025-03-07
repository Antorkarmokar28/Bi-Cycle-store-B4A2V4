import express, { NextFunction, Request, Response } from 'express';
import { bicycleController } from './bicycle.controller';
import auth from '../../middlewares/auth';
import { User_Role } from '../user/user.constant';
import { upload } from '../../utils/fileUploads';
const router = express.Router();
// create post
router.post(
  '/products',
  auth(User_Role.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  bicycleController.createBicycle,
);
// get all data
router.get('/products', bicycleController.getAllBicycle);
//get a single data
router.get('/products/:_id', bicycleController.getsingleBicycle);
// update data
router.put('/products/:_id', bicycleController.updateBicyclelData);
// delete data
router.delete('/products/:_id', bicycleController.deleteBicycleData);
// export this variable for use another file
export const bicycleRoute = router;
