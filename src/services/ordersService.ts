import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import { IOrderById, IOrderCreatePost } from '../interfaces';
import ordersModel from '../models/ordersModel';
import productModel from '../models/productModel';

const createOrder = async (products: number[], userId: number) => {
  const allPromises = await Promise.all(products.map((prod) => productModel.findOneProduct(prod)));
  console.log('someProductDoesNotExist');
  const someProductDoesNotExist = allPromises.some((arr) => !arr.length);
  if (someProductDoesNotExist) throw new BadRequestError('Product doesn\'t exits');
  const id = await ordersModel.createOrder(userId);
  await Promise.all(products.map((idProd) => productModel.insertOrder(idProd, id)));
  const bodyObject: IOrderCreatePost = { order: { userId, products } };
  return bodyObject;
};

const getOrderById = async (id: number, userId:number) => {
  const response = await ordersModel.getListProductById(id);
  if (!response.length) throw new NotFoundError('Order not found');
  const products = response.map((item) => item.id);
  const bodyResponse = { id, userId, products };
  return bodyResponse;
};
const getAllOrders = async () => {
  const response = await ordersModel.getAllOrders();
  if (!response.length) throw new NotFoundError('Order not found');
  const products = response.reduce((acc, { orderId, userId, id }) => {
    if (acc.some((item) => item.id === orderId)) {
      const idx = acc.findIndex((order) => order.id === orderId);
      acc[idx].products.push(id);
    } else {
      acc.push({
        id: orderId,
        userId,
        products: [id],
      });
    }
    return acc;
  }, [] as IOrderById[]);
  return products;
};

export = {
  createOrder,
  getOrderById,
  getAllOrders,
};