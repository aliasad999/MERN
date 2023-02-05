import { Response,Request } from 'express';
import { appError } from '../models/appError';
import { 	StatusCodes } from 'http-status-codes';
import {logEvents} from './logger'
class ErrorHandler {
  private isTrustedError(error: Error): boolean {
    if (error instanceof appError) {
      return error.isOperational;
    }
    return false;
  }
  public handleError(error: Error | appError,req:Request,res: Response): void {
    if (this.isTrustedError(error) && res) {
      this.handleTrustedError(error as appError, res);
    } else {
      this.handleCriticalError(error, req ,res);
    }
  }
  private handleTrustedError(error: appError, response: Response): void {
    response.status(error.httpCode).json({ message: error.message });
  }
  private handleCriticalError(err: any,req:Request, response: Response): void {
	logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
	const status = err?.httpCode ? err?.httpCode : StatusCodes.INTERNAL_SERVER_ERROR
	response.status(status).json({error: err.message,stack: err.stack})
    
    
  }
}

export const errorHandler = new ErrorHandler();

