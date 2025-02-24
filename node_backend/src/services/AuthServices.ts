import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/userModels.js';
import { newUserSchema } from '../schemas/userSchema.js';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

export const loginService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
      console.warn(`Login failed: User with email ${email} not found`);
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.warn(`Login failed: Incorrect password for user ${email}`);
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const accessToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send the response with the token
    res.json({
      accessToken,
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    console.error(`Error in loginService: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const signUpService = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedUser = newUserSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(validatedUser.password, 10);

    const [createdUser] = await createUser({
      email: validatedUser.email,
      password: hashedPassword,
    });

    res.status(201).json(createdUser);
  } catch (error) {
    console.error('Error processing request:', error);

    if (error instanceof z.ZodError) {
      res.status(400).json({ message: 'Validation error', details: error.errors });
    } else {
      res.status(500).json({ message: 'Error while creating the user. Please try again later.' });
    }
  }
};

interface AuthenticatedRequest extends Request {
  user?: { id: string; email: string }; // Adjust the user object based on your JWT payload
}

export const checkAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string };
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: 'Forbidden' });
  }
};
