import { ErrorRequestHandler } from 'express';
import AppError from './AppError';

const errorHandler: ErrorRequestHandler = (err, request, response, _next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: '🔴 Internal server error',
  });
};

export default errorHandler;
