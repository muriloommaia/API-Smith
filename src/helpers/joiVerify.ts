import Joi, { ValidationError } from 'joi';
import UnprocessableError from '../errors/UnprocessableError';
import { IAddProduct, IAddUser, ILoginBody, IOrderCreate } from '../interfaces';

const schemaAddUser = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': 'Username is required', 
    'string.base': 'Username must be a string', 
    'string.min': 'Username must be longer than 2 characters',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': 'Classe is required', 
    'string.base': 'Classe must be a string', 
    'string.min': 'Classe must be longer than 2 characters',
  }),
  level: Joi.number().min(1).strict().required()
    .messages({
      'any.required': 'Level is required', 
      'number.base': 'Level must be a number', 
      'number.min': 'Level must be greater than 0',
    }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required', 
    'string.base': 'Password must be a string', 
    'string.min': 'Password must be longer than 7 characters',
  }),
});

const schemaLoginVerify = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Username is required', 
    'string.base': 'Username must be a string', 
    'string.min': 'Username must be longer than 2 characters',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required', 
    'string.base': 'Password must be a string', 
    'string.min': 'Password must be longer than 7 characters',
  }),
});
const schemaCreateProduct = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'Name is required', 
    'string.base': 'Name must be a string', 
    'string.min': 'Name must be longer than 2 characters',
  }),
  amount: Joi.string().min(3).required().messages({
    'any.required': 'Amount is required', 
    'string.base': 'Amount must be a string', 
    'string.min': 'Amount must be longer than 2 characters',
  }),
});

const schemaCreateOrder = Joi.object({
  products: Joi.array().items(Joi.number().strict()).strict().min(1)
    .required()
    .messages({
      'any.required': 'Products is required', 
      'number.base': 'Products must be an array of numbers', 
      'array.base': 'Products must be an array of numbers',
      'array.min': 'Products can\'t be empty',
    }),
});

const verifyUser = async (body: ILoginBody):Promise<IAddUser> => {
  try {
    const verify = await schemaAddUser.validateAsync(body);
    return verify as IAddUser;
  } catch (error) {
    const { message } = (error as ValidationError).details[0];
    if (!message.includes('required')) {
      throw new UnprocessableError(message);
    }
    throw error;
  }
};

const verifyLogin = async (user: ILoginBody): Promise<ILoginBody> => {
  const verify = await schemaLoginVerify.validateAsync(user);
  return verify as ILoginBody;
};

const createAProduct = async (user: IAddProduct): Promise<IAddProduct> => {
  try {
    const verify = await schemaCreateProduct.validateAsync(user);
    return verify;
  } catch (error) {
    const { message } = (error as ValidationError).details[0];
    if (!message.includes('required')) {
      throw new UnprocessableError(message);
    }
    throw error;
  }
};

const createOrder = async (products: IOrderCreate): Promise<IOrderCreate> => {
  try {
    const verify = await schemaCreateOrder.validateAsync(products);
    return verify;
  } catch (error) {
    const { message } = (error as ValidationError).details[0];
    if (!message.includes('required')) {
      throw new UnprocessableError(message);
    }
    throw error;
  }
};

export = {
  verifyUser,
  verifyLogin,
  createAProduct,
  createOrder,
};