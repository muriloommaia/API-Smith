import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IBodyJWT } from '../interfaces';

dotenv.config();

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET as string;

const createToken = async (user:IBodyJWT) => {
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  return token;
};
const verifyToken = (token: string):IBodyJWT => {
  const decodedToken = jwt.decode(token) as IBodyJWT;
  return decodedToken;
};
// const userIdToken = (token) => {
//   const { data: { id } } = jwt.decode(token, SECRET);
//   return id;
// };

export = {
  createToken,
  verifyToken,
  // userIdToken,
};