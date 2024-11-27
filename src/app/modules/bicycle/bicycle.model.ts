import { model, Schema } from 'mongoose';
import { IBicycle } from './bicycle.interface';
// create bicycleSchema
const bicycleSchema = new Schema<IBicycle>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
      type: String,
      required: true,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  // Automatically adds createdAt and updatedAt fields
  {
    timestamps: true,
  },
);
// create an bicycleSchema model
export const Bicycle = model<IBicycle>('Bicycle', bicycleSchema);