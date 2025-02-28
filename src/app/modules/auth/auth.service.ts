import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import config from '../../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

const userloginIntoDB = async (payload: ILoginUser) => {
  //find by user with email
  const user = await User.isUserExitsByEmail(payload.email);
  //checking user is exists
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User is not found!');
  }
  //checking user password is matched
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Password do not matched');
  }
  // create access token
  const jwtPayload = {
    userEmail: user?.email,
    role: user?.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: '30d',
    },
  );

  return { accessToken, refreshToken };
};

//user create refresh token access
const refreshToken = async (token: string) => {
  // if the token sent from the client
  if (!token) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'Access token missing or invalid',
    );
  }
  //check if the token is the valid
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { userEmail } = decoded;
  //find by user with email
  const user = await User.isUserExitsByEmail(userEmail);
  //checking user is exists
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User is not found!');
  }

  // create access token
  const jwtPayload = {
    userEmail: user?.email,
    role: user?.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  return { accessToken };
};

export const AuthService = {
  userloginIntoDB,
  refreshToken,
};
