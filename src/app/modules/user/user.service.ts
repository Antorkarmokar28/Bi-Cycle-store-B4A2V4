/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import AppError from '../../error/appError';
import { IUser } from './user.interface';
import { User } from './user.model';
// import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const registrationUserIntoDB = async (file: any, payload: IUser) => {
  const isUserExists = await User.findOne({
    email: payload.email,
  });
  // if the checking user is exist into bd
  if (isUserExists) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'This email address is already exists',
    );
  }
  // // storage image into cloudinary
  // const imageName = payload?.email;
  // const path = file?.path;
  // const { secure_url } = sendImageToCloudinary(imageName, path);
  // create user into db
  // payload.profileImage = secure_url;
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  registrationUserIntoDB,
};
