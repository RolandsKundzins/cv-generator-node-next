import { Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';
import { DB } from 'kysely-codegen';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const dialect = new PostgresDialect({
  pool,
});

export const db = new Kysely<DB>({
  dialect,
});
