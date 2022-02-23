import { ISingleProduct } from '../interfaces';
import db from './knex';

const createOrder = async (userId: number):Promise<number> => {
  const [response] = await db.insert({ userId }).into('Orders');
  return response;
};

const getListProduct = async ():Promise<ISingleProduct[]> => {
  const response = await db('Orders').select('*');
  return response;
};

export = {
  createOrder,
  getListProduct,
};