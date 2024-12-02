// import { z } from 'zod';
// using zod for order product validation
// export const createOrderValidation = z.object({
//   email: z
//     .string({ required_error: 'Email is required' })
//     .email('Invalid email format'),
//   product: z
//     .string({ required_error: 'Product ID is required' })
//     .refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
//       message: 'Invalid Product ID format',
//     }), // Validates a MongoDB ObjectId
//   quantity: z
//     .number({ required_error: 'Quantity is required' })
//     .min(1, { message: 'Quantity must be at least 1' }),
//   totalPrice: z
//     .number({ required_error: 'Total Price is required' })
//     .positive({ message: 'Total Price must be a positive number' }),
// });
