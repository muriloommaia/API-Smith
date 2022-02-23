import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import productService from '../services/productService';

const createProduct = async (req:Request, res: Response) => {
  const verify = await joiVerify.createAProduct(req.body);
  const response = await productService.createProduct(verify);
  res.status(201).json(response);
};

export = {
  createProduct,
};