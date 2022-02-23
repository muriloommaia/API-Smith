import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import productService from '../services/productService';

const createProduct = async (req:Request, res: Response) => {
  const verify = await joiVerify.createAProduct(req.body);
  const response = await productService.createProduct(verify);
  res.status(201).json(response);
};

const listProducts = async (req: Request, res: Response) => {
  const response = await productService.getListProducts();
  res.status(200).json(response);
};

export = {
  createProduct,
  listProducts,
};