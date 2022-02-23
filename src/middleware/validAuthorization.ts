import { NextFunction, Request, Response } from 'express';
import UnauthorizedError from '../errors/UnauthorizedError';
import JWToken from '../helpers/JWToken';

const auth = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedError('Token not found');
  }
  const verifyToken = JWToken.verifyToken(authorization);
  if (!verifyToken) throw new UnauthorizedError('Invalid token');
  next();
};

export default auth;