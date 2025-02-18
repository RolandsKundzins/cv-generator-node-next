import { Router, Request, Response } from 'express';

// Create a new Router
const api_routes: Router = Router();

// Define the root route
api_routes.get('/', async (_: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!!');
});

// Export the router
export default api_routes;
