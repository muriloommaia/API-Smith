import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import ordersService from '../services/ordersService';

const createOrder = async (req:Request, res: Response) => {
  const verify = await joiVerify.createOrder(req.body);
  console.log(verify);
  const { products } = verify;
  const response = await ordersService.createOrder(products);
  res.status(201).json(response);
};

// const listProducts = async (req: Request, res: Response) => {
//   const response = await productService.getListProducts();
//   res.status(200).json(response);
// };

export = {
  createOrder,
  // listProducts,
};