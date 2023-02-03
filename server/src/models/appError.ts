import { 	StatusCodes, ReasonPhrases } from 'http-status-codes';

interface AppErrorArgs {
  name?: string;
  httpCode: StatusCodes;
  description: string;
  isOperational?: boolean;
}

export class appError extends Error {
  public readonly name: string;
  public readonly httpCode: StatusCodes;
  public readonly isOperational: boolean = true;

  constructor(args: AppErrorArgs) {
    super(args.description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || 'Error';
    this.httpCode = args.httpCode;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}