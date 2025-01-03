import express from 'express';
import { loginUser, registerUser } from '../Controllers/userController.js';
import authUser from '../Middleware/authUser.js';

const useRouter=express.Router();

useRouter.post('/signup',registerUser);
useRouter.post('/login',loginUser);

export {useRouter};