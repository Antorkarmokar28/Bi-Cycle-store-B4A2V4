import mongoose, { model, Schema } from 'mongoose';
import { IOrderData } from './order-bicycle.interface';
//this is a order model schema
const orderResponsonseSchema = new Schema<IOrderData>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      // ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  // Automatically adds createdAt and updatedAt fields
  {
    timestamps: true,
  },
);
//this is a order model
const Order = model<IOrderData>('Oder', orderResponsonseSchema);
export default Order;
