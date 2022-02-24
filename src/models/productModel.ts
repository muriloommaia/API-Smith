import { IAddProduct, ISingleProduct } from '../interfaces';
import db from './knex';

const createProduct = async (product: IAddProduct):Promise<number> => {
  const [response] = await db('Products').insert(product);
  return response;
};

const getListProduct = async ():Promise<ISingleProduct[]> => {
  const response = await db('Products').select('*');
  return response;
};

const findOneProduct = async (id: number): Promise<ISingleProduct[]> => {
  const response = await db('Products').select('*').where({ id });
  return response;
};

const insertOrder = async (id: number, orderId: number) => {
  const response = await db('Products').update({ orderId }).where({ id });
  return response;
};
export = {
  createProduct,
  getListProduct,
  findOneProduct,
  insertOrder,
};