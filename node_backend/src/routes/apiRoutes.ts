import { Router, Request, Response } from 'express';
import { Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';
import { DB } from 'kysely-codegen';

// Create a new Router
const router = Router();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const dialect = new PostgresDialect({
  pool,
});

export const db = new Kysely<DB>({
  dialect,
});

// Define the root route
router.get('/', async (_: Request, res: Response) => {
  res.send('Hello, TypeScript with Express new changes!');
  //   res.send('Hello');
  //   const users = await db.selectFrom('user').selectAll().execute();
  //   console.log(users);
});

// Define the "/api/greet" route
router.get('/api/greet', (req: Request, res: Response) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// Export the router
export default router;
