import { Router, Request, Response } from 'express';
import { getUsers } from '../services/UserServices.js';

// Create a new Router
const router: Router = Router();

// Define the root route
router.get('/', async (_: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!!');
});

// Define the "/api/greet" route
router.get('/api/greet', (req: Request, res: Response) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// Define an example route for fetching users
router.get('/api/users', async (_: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
});

// Export the router
export default router;
