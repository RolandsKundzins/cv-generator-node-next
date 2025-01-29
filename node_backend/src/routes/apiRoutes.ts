import { Router, Request, Response } from 'express';
import { Kysely, SqliteDialect } from 'kysely';
import { Database } from '../types.js';

// Create a new Router
const router = Router();

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: './mydb.sqlite',
  }),
});

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
