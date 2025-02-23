import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userRegiStrationSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'customer', enum: ['customer', 'admin'] },
});

export const User = model<IUser>('User', userRegiStrationSchema);
