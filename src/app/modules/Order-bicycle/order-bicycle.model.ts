import mongoose, { model, Schema } from 'mongoose';
import { IOrderData } from './order-bicycle.interface';
//this is a order model schema
const orderResponsonseSchema = new Schema<IOrderData>(
  {
    email: {
      type: String,
      required: true,
      // will using validation for email format
      validate: {
        validator: function (value: string): boolean {
          // Regex for validating email format
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Give me valid email',
      },
    },
    product: [
      {
        bicycleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bicycle' },
        quantity: { type: Number, required: true },
      },
    ],
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'Pending',
      enum: ['Pending', 'Completed', 'Cancelled'],
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
