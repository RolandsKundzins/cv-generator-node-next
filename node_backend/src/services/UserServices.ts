import { db } from '../db/index.js';

export const getUsers = async () => {
  return await db.selectFrom('User').selectAll().execute();
};
