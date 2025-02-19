import { Router } from 'express';
import { handleGetUsers, handleGetUserById, handleCreateUser } from '../services/UserServices.js';

const user_routes: Router = Router();

user_routes.get('/', handleGetUsers);
user_routes.get('/:id', handleGetUserById);
user_routes.post('/', handleCreateUser);

export default user_routes;
