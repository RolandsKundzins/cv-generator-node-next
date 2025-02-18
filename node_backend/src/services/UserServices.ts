import { z } from 'zod';
import { db } from '../db/index.js';
import { getUserSchema, newUserSchema } from '../schemas/userSchema.js';

export const getUsers = async () => {
  return await db.selectFrom('User').selectAll().execute();
};

export const getUser = async (user_id: z.infer<typeof getUserSchema>) => {
  const result = await db.selectFrom('User').selectAll().where('id', '=', user_id.id).execute();

  if (result.length === 0) throw new Error('User not found');
  if (result.length > 1) throw new Error('Multiple users found with the same ID');
  return result[0]; // Return the single user object
};

export const createUser = async (user_info: z.infer<typeof newUserSchema>) => {
  return await db.insertInto('User').values(user_info).returning(['id']).execute();
};
