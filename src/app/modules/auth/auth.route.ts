import validationRequest from '../../middlewares/validationRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import express from 'express';
const router = express.Router();

router.post(
  '/login',
  validationRequest(AuthValidation.authValidationSchema),
  AuthController.userLogin,
);

router.post(
  '/refresh-token',
  validationRequest(AuthValidation.refreshTokenValidationSchema),
  AuthController.refreshToken,
);

export const authRoutes = router;
