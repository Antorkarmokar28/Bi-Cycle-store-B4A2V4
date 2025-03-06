import { z } from 'zod';

const bicycleValidationSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is required' })
    .refine((val) => /^[A-Z]/.test(val), {
      message: 'ValidationError',
    }),
  brand: z.string().min(1, { message: 'Brand is required' }),
  price: z.number().min(0, { message: 'Price must be a positive number' }),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    message: 'Invalid bike type',
  }),
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z
    .number()
    .int()
    .min(0, { message: 'Price must be a positive number' }),
  inStock: z.boolean().default(true),
  image: z.string().min(1, { message: 'image is required' }),
});

export default bicycleValidationSchema;
