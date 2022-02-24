import { IOrderByJoin } from '../interfaces';
import db from './knex';

const createOrder = async (userId: number):Promise<number> => {
  const [response] = await db.insert({ userId }).into('Orders');
  return response;
};

const getListProductById = async (id: number): Promise<IOrderByJoin[]> => {
  const response:IOrderByJoin[] = await db('Orders')
    .join('Products', 'Orders.id', 'Products.orderId')
    .select('Orders.id', 'Orders.userId', 'Products.id')
    .where('Orders.id', id);
  return response;
};

export = {
  createOrder,
  getListProductById,
};
