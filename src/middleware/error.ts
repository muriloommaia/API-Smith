import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import BadRequestError from '../errors/BadRequestError';
import UnauthorizedError from '../errors/UnauthorizedError';
import UnprocessableError from '../errors/UnprocessableError';

const errorMiddleware = (
  err: Error | ValidationError,
  _req: Request, 
  res: Response,
  _next: NextFunction,
) => {
  const { name, message: error } = err as ValidationError;
  switch (name) {
    case UnprocessableError.name: return res.status(422).json({ error });
    case 'ValidationError': return res.status(400).json({ error });
    case BadRequestError.name: return res.status(400).json({ error });
    case UnauthorizedError.name: return res.status(401).json({ error });
    default: res.status(500).json({ error: { message: 'Internal Server Error', code: 500 } });
  }
};

export default errorMiddleware;