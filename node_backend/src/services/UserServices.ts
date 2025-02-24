import { Request, Response, NextFunction } from 'express';
import { getUserSchema } from '../schemas/userSchema.js';
import { getUsers, getUser } from '../models/userModels.js';
import { z } from 'zod';

export const handleGetUsers = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users. Please try again later.' });
  } finally {
    next();
  }
};

export const handleGetUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedInput = getUserSchema.parse({ id: Number(req.params.id) });
    const user = await getUser(validatedInput);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error('Error processing request:', error);

    if (error instanceof z.ZodError) {
      res.status(400).json({ message: 'Validation error' });
    } else {
      res.status(500).json({ message: 'An error occurred while fetching user. Please try again later.' });
    }
  } finally {
    next();
  }
};
