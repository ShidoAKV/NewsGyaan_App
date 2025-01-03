import express from 'express';
import { loginUser, logout, registerUser } from '../Controllers/userController.js';
import authUser from '../Middleware/authUser.js';

const useRouter=express.Router();

useRouter.post('/signup',registerUser);
useRouter.post('/login',loginUser);
useRouter.post('/logout',logout);


export {useRouter};