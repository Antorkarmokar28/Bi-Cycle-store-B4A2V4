import { NextFunction, Request, Response, Router } from 'express';
import { UserValidationSchema } from './user.validation';
import { UserController } from './user.controller';
import validationRequest from '../../middlewares/validationRequest';
import { upload } from '../../utils/fileUploads';
const router = Router();

router.post(
  '/register',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validationRequest(UserValidationSchema.userRegistrationSchema),
  UserController.registrastionUser,
);

export const userRouter = router;
