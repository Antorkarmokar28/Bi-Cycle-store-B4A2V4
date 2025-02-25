/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { User_Role } from './user.constant';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
}

export interface UserModel extends Model<IUser> {
  isUserExitsByEmail(id: string): Promise<IUser>;
  isPasswordMatched(
    planePassword: string,
    hashedPassword: string,
  ): Promise<IUser>;
}

export type TUserRole = keyof typeof User_Role;
