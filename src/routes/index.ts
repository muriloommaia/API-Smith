import { Router } from 'express';
import loginController from '../controllers/loginController';
import ordersController from '../controllers/ordersController';
import productController from '../controllers/productController';
import userController from '../controllers/userController';
import auth from '../middleware/validAuthorization';

const router = Router();

router.route('/users')
  .post(userController.createUser);

router.route('/login')
  .post(loginController.loginUser);

router.use(auth);

router.route('/products')
  .post(productController.createProduct)
  .get(productController.listProducts);

router.route('/orders/:id')
  .get(ordersController.getOrderById);
router.route('/orders')
  .post(ordersController.createOrder)
  .get(ordersController.getAllOrders);

export default router;