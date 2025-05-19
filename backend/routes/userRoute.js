import express from 'express';
const userRouter = express.Router(); 
import { createUser, getUserById, getUsers } from '../controllers/userController.js';
import { getUsersAdmin } from '../controllers/userController.js';
userRouter.get('/users', getUsers);
userRouter.post('/add-user', createUser);
userRouter.get('/user/:id', getUserById);
userRouter.get('/users-admin', getUsersAdmin);
export default userRouter;