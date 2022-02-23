import { IAddProduct, ISingleProduct } from '../interfaces';
import db from './knex';

const createOrder = async (product: IAddProduct):Promise<number> => {
  const [response] = await db('Products').insert(product);
  return response;
};

const getListProduct = async ():Promise<ISingleProduct[]> => {
  const response = await db('Products').select('*');
  return response;
};

export = {
  createOrder,
  getListProduct,
};