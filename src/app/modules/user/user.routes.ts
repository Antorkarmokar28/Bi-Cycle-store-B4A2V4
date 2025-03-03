import { Router } from 'express';
import { UserValidationSchema } from './user.validation';
import { UserController } from './user.controller';
import validationRequest from '../../middlewares/validationRequest';
import { upload } from '../../utils/fileUploads';
const router = Router();

router.post(
  '/register',
  upload.single('file'),
  validationRequest(UserValidationSchema.userRegistrationSchema),
  UserController.registrastionUser,
);

export const userRouter = router;
