import { describe, expect, it, test } from 'vitest';
import { getUsers, sum } from '../src/services/UserServices';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('getUsers', () => {
  it('should return a list of users', async () => {
    const users = await getUsers();
    expect(users).toEqual([]);
  });
});
