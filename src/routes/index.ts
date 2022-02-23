import { Router } from 'express';
import loginController from '../controllers/loginController';
import userController from '../controllers/userController';

const router = Router();

router.route('/users')
  .post(userController.createUser);

router.route('/login')
  .post(loginController.loginUser);

export default router;