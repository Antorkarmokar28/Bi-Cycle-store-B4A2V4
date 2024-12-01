import mongoose, { Document } from 'mongoose';
//create an order interface
export interface IOrderData extends Document {
  email: string;
  product: mongoose.Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
