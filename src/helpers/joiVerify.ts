import Joi, { ValidationError } from 'joi';
import BadRequestError from '../errors/UnprocessableError';
// import ErrorClass from '../classes/ErrorClass';
import { IAddUser } from '../interfaces';

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
const verifyUser = async (body: IAddUser):Promise<IAddUser> => {
  try {
    const verify = await schemaAddUser.validateAsync(body);
    return verify as IAddUser;
  } catch (error) {
    const { message } = (error as ValidationError).details[0];
    if (!message.includes('required')) {
      throw new BadRequestError(message);
    }
    throw error;
  }
};

// const verifyLogin = (body) => {
//   const schema = Joi.object().keys({
//     email: Joi.string().required().email().message(messages.invalidEmail),
//     password: Joi.string().required().min(6).message(messages.passwordLength),
//   });

//   const verify = schema.validate(body);
//   if (verify.error) {
//     return { error: verify.error.details[0].message };
//   }
//   return {};
// };

// const verifyPost = (body) => {
//   const schema = Joi.object().keys({
//     title: Joi.string().required(),
//     content: Joi.string().required(),
//     categoryIds: Joi.array().required(),
//   });

//   const verify = schema.validate(body);
//   if (verify.error) {
//     return { error: verify.error.details[0].message };
//   }
//   return {};
// };

// const verifyUpdate = (body) => {
//   const schema = Joi.object().keys({
//     title: Joi.string().required(),
//     content: Joi.string().required(),
//     categoryIds: Joi.array().length(0).message(messages.editCategory),
//   });

//   const verify = schema.validate(body);
//   if (verify.error) {
//     return { error: verify.error.details[0].message };
//   }
//   return {};
// };

export = {
  verifyUser,
  // verifyLogin,
  // verifyPost,
  // verifyUpdate,
};