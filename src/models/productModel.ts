import { IAddProduct } from '../interfaces';
import db from './knex';

const createProduct = async (product: IAddProduct):Promise<number> => {
  const [response] = await db('Products').insert(product);
  return response;
};

export = {
  createProduct,
};