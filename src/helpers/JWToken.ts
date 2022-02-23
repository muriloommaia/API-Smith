import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import UnauthorizedError from '../errors/UnauthorizedError';
import { IBodyDecodedJWT, IBodyJWT } from '../interfaces';

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
const verifyToken = (token: string): IBodyJWT => {
  try {
    const { data: decodedToken } = jwt.verify(token, SECRET) as IBodyDecodedJWT;
    return decodedToken;
  } catch (error) {
    throw new UnauthorizedError('Invalid token');
  }
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