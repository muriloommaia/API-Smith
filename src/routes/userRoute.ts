import { Router } from 'express';
import userController from '../controllers/userController';

const userRoute = Router({ mergeParams: true });

userRoute.post('/', userController.createUser);

export default userRoute;