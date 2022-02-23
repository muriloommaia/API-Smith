import { NextFunction, Request, Response } from 'express';
import UnauthorizedError from '../errors/UnauthorizedError';
import JWToken from '../helpers/JWToken';

const auth = async (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedError('Token not found');
  }
  JWToken.verifyToken(authorization);
  next();
};

export default auth;