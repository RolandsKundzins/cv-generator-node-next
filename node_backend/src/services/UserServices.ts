import { db } from '../db/index.js';

export const getUsers = async () => {
  return await db.selectFrom('User').selectAll().execute();
};

export function sum(a: number, b: number) {
  const c = undefined;
  return a + b;
}
