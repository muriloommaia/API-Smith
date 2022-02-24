import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import JWToken from '../helpers/JWToken';
import ordersService from '../services/ordersService';

const createOrder = async (req:Request, res: Response) => {
  const verify = await joiVerify.createOrder(req.body);
  const { products } = verify;
  const authorization = req.headers.authorization as string;
  const { id } = JWToken.verifyToken(authorization);
  const response = await ordersService.createOrder(products, id);
  res.status(201).json(response);
};

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const authorization = req.headers.authorization as string;
  const { id: userId } = JWToken.verifyToken(authorization);
  const response = await ordersService.getOrderById(+id, userId);
  res.status(200).json(response);
};

const getAllOrders = async (req: Request, res: Response) => {
  const response = await ordersService.getAllOrders();
  res.status(200).json(response);
};
export = {
  createOrder,
  getOrderById,
  getAllOrders,
};