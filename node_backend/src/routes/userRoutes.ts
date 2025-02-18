import { Router, Request, Response } from 'express';
import { getUsers, getUser, createUser } from '../services/UserServices.js';
import { getUserSchema, newUserSchema } from '../schemas/userSchema.js';
import json from '../helper.js';

const user_routes: Router = Router();

// get all users
user_routes.get('/', async (_: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users. Please try again later.' });
  }
});

// get user by id
user_routes.get('/:id', async (req: Request, res: Response) => {
  try {
    const validatedInput = getUserSchema.parse({ id: Number(req.params.id) });
    const user = await getUser(validatedInput);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error('Error fetching user by id:', error);
    res.status(500).json({ message: 'An error occurred while fetching user by id. Please try again later.' });
  }
});

// create new user
user_routes.post('/', async (req: Request, res: Response) => {
  try {
    const validatedUser = newUserSchema.parse(req.body);
    const [createdUser] = await createUser(validatedUser);
    res.status(201).json(json(createdUser));
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users. Please try again later.' });
  }
});

export default user_routes;
