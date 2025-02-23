import { z } from 'zod';

const userRegistrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  role: z.enum(['customer', 'admin']).default('customer'),
});

export const UserValidationSchema = {
  userRegistrationSchema,
};
