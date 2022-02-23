import { IAddProduct, IReturnAddProduct } from '../interfaces';
import productModel from '../models/productModel';

const createProduct = async (body: IAddProduct) => {
  const id = await productModel.createProduct(body);
  const bodyObject:IReturnAddProduct = { item: { id, ...body } };
  return bodyObject;
};

const getListProducts = async () => {
  const response = await productModel.getListProduct();
  return response;
};

export = {
  createProduct,
  getListProducts,
};