import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/index'; // Ensure this is the correct path to your Express app

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
