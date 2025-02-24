import { Router } from 'express';
import { handleGetUsers, handleGetUserById } from '../services/UserServices.js';

const user_routes: Router = Router();

user_routes.get('/', handleGetUsers);
user_routes.get('/:id', handleGetUserById);

export default user_routes;
