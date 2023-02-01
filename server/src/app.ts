import dotenv from 'dotenv';
import express, { NextFunction, Response, Request } from 'express'
import cors from 'cors';
import ErrorHandler from './models/errorHandler';
import { routes } from './routers/index';


export default class app {
  public app: express.Application
  constructor() {
    this.app = express();
    this.initializeMiddleware();
    this.listen();
  }
  private initializeMiddleware() {

    dotenv.config({
      path: '.env'
    });
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
      res.sendStatus(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
      });
    });
    this.app.use('/', routes);
  }
  private listen() {
    const port = process.env.APP_PORT || 3001
    this.app.listen(port, () => console.log(`> Listening on port ${port}`));
  }
}
new app();




