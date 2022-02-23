import BadRequestError from '../errors/BadRequestError';
import { IOrderCreatePost } from '../interfaces';
import ordersModel from '../models/ordersModel';
import productModel from '../models/productModel';

const createOrder = async (products: number[], userId: number) => {
  const allPromises = await Promise.all(products.map((prod) => productModel.findOneProduct(prod)));
  console.log('someProductDoesNotExist');
  const someProductDoesNotExist = allPromises.some((arr) => !arr.length);
  if (someProductDoesNotExist) throw new BadRequestError('Product doesn\'t exits');
  const id = await ordersModel.createOrder(userId);
  console.log(id);
  const bodyObject: IOrderCreatePost = { order: { userId, products } };
  
  // const id = await ordersModel.createOrder(body);
  return bodyObject;
};

// const getListProducts = async () => {
//   const response = await productModel.getListProduct();
//   return response;
// };

export = {
  createOrder,
  // getListProducts,
};