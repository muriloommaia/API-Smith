import BadRequestError from '../errors/BadRequestError';
import productModel from '../models/productModel';

const createOrder = async (orders: number[]) => {
  const allPromises = await Promise.all(orders.map((prod) => productModel.findOneProduct(prod)));
  console.log('someProductDoesNotExist');
  const someProductDoesNotExist = allPromises.some((arr) => !arr.length);
  if (someProductDoesNotExist) throw new BadRequestError('Product doesn\'t exits');
  // const id = await ordersModel.createOrder(body);
  // const bodyObject:IReturnAddProduct = { item: { id, ...body } };
  // return bodyObject;
};

// const getListProducts = async () => {
//   const response = await productModel.getListProduct();
//   return response;
// };

export = {
  createOrder,
  // getListProducts,
};