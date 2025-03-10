import { z } from 'zod';

const userRegistrationSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    profileImage: z.string().optional(),
    address: z.string(),
    phone: z.string(),
    city: z.string(),
    role: z.enum(['customer', 'admin']).default('customer'),
  }),
});

export const UserValidationSchema = {
  userRegistrationSchema,
};
