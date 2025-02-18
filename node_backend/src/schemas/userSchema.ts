import { z } from 'zod';

export const getUserSchema = z.object({
  id: z.number(),
});

export const newUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, 'Name is required'),
});
