import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import NotFoundError from '../errors/NotFoundError';
import UnauthorizedError from '../errors/UnauthorizedError';
import UnprocessableError from '../errors/UnprocessableError';
import { ERROR_MESSAGES, HTTP_STATUS } from '../utils';
const errorMiddleware = (
  err: Error | ValidationError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(err);
  const { name, message: error } = err as ValidationError;
  switch (name) {
    case UnprocessableError.name:
      return res.status(HTTP_STATUS.unprocessable).json({ error });
    case 'ValidationError':
      return res.status(HTTP_STATUS.badRequest).json({ error });
    // case BadRequestError.name: 
    // return res.status(400).json({ error });
    case UnauthorizedError.name:
      return res.status(HTTP_STATUS.unauthorized).json({ error });
    case NotFoundError.name:
      return res.status(HTTP_STATUS.notFound).json({ error });
    default: res.status(500).json({ error: { message: ERROR_MESSAGES.InternalError, code: 500, name } });
  }
};

export default errorMiddleware;