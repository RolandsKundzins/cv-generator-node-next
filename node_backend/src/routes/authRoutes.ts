import { Router } from 'express';
import { loginService, signUpService } from '../services/AuthServices.js';

const auth_routes: Router = Router();

// 1️⃣ Login Route (Generate JWT)
auth_routes.post('/login', loginService);
auth_routes.post('/signup', signUpService);

export default auth_routes;
