import { Router, Request, Response } from 'express';

// Create a new Router
const router = Router();

// Define the root route
router.get('/', (_: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Define the "/api/greet" route
router.get('/api/greet', (req: Request, res: Response) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// Export the router
export default router;
