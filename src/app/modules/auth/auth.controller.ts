import { StatusCodes } from 'http-status-codes';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import config from '../../config';

const userLogin = catchAsynch(async (req, res) => {
  const result = await AuthService.userloginIntoDB(req.body);
  const { refreshToken, accessToken } = result;
  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User login is successfully',
    data: {
      refreshToken,
      accessToken,
    },
  });
});

const refreshToken = catchAsynch(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Access token is retrieved successfully',
    data: result,
  });
});

export const AuthController = {
  userLogin,
  refreshToken,
};
