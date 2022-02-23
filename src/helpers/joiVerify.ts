import Joi, { ValidationError } from 'joi';
import UnprocessableError from '../errors/UnprocessableError';
// import ErrorClass from '../classes/ErrorClass';
import { IAddUser } from '../interfaces';
import { ILoginBody } from '../interfaces/ILogin';

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

export = {
  verifyUser,
  verifyLogin,
};