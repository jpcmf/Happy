import { NextFunction, Request, Response } from 'express';

const logRequests = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
};

export default logRequests;
