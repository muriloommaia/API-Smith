import { Request, Response } from 'express';
import joiVerify from '../helpers/joiVerify';
import productService from '../services/productService';

const createProduct = async (req:Request, res: Response) => {
  const verify = await joiVerify.verifyLogin(req.body);
  const token = await productService.createProduct(verify);
  res.status(200).json({ token });
};

export = {
  createProduct,
};