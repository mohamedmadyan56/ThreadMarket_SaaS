import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import { env } from '../../config/env';

const sendErrorDev = (err: AppError & { stack?: string }, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: AppError & { isOperational?: boolean }, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({ status: err.status, message: err.message });
  } else {
    console.error('UNEXPECTED ERROR:', err);
    res.status(500).json({ status: 'error', message: 'Something went wrong' });
  }
};

export const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else {
    let error = { ...err, message: err.message };

    if (error.name === 'JsonWebTokenError') {
      error = new AppError('Invalid token', 401);
    }
    if (error.name === 'TokenExpiredError') {
      error = new AppError('Token expired', 401);
    }

    sendErrorProd(error, res);
  }
};
