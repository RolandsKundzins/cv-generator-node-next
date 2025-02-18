import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/index'; // Ensure this is the correct path to your Express app

describe('GET /users', () => {
  it('return a list of users', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    // create a new user
    const newUser = {
      email: `john.doe.${Date.now()}@example.com`,
      name: 'John Doe',
    };
    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');

    // get the user by id
    const getUserResponse = await request(app).get(`/users/${response.body.id}`);
    expect(getUserResponse.status).toBe(200);
    expect(getUserResponse.body).toMatchObject({
      ...newUser,
      id: Number(response.body.id),
    });
  });
});
