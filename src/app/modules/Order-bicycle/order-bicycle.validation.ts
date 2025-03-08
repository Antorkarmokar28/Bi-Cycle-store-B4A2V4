import { z } from 'zod';
// using zod for order product validation
export const OrderSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Give me valid email' }),
    product: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid ObjectId'),
    quantity: z
      .number()
      .int()
      .min(1, { message: 'Quantity must be at least 1' }),
    totalPrice: z.number(),
    status: z.enum(['Pending', 'Completed', 'Cancelled']).default('Pending'),
  }),
});
