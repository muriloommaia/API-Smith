import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import UnprocessableError from '../errors/UnprocessableError';

const errorMiddleware = (
  err: Error | ValidationError,
  _req: Request, 
  res: Response,
  _next: NextFunction,
) => {
  const { name, message: error } = err as ValidationError;
  switch (name) {
    case UnprocessableError.name:
      res.status(422).json({ error });
      break;
    case 'ValidationError':
      res.status(400).json({ error });
      break;
    default:   
      res.status(500).json({ error: { message: 'Internal Server Error', code: 500 } });
  }
};

export default errorMiddleware;