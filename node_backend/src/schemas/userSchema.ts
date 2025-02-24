import { z } from 'zod';

export const getUserSchema = z.object({
  id: z.number(),
});

export const newUserSchema = z.object({
  email: z.string().email(),
  password: z.string(), // TODO: add password min max and stuff
});
