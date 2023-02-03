import dotenv from 'dotenv';
import express, { NextFunction, Response, Request, response } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import {errorHandler}   from './middleware/errorHandler';
import { routes } from './routers/index';

import path from 'path'
    

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
    this.app.use('/', express.static(path.join(__dirname, '/public')))
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use('/', routes);
    this.app.all('*', (req: Request, res: Response) => {
      res.status(404)
      if (req.accepts('html'))
      res.sendFile(path.join(__dirname, 'views', '404.html'))
      else if (req.accepts('json'))
        res.json({ message: '404 not found' })
      else
        res.type('txt').send('404 not found')
    });
  }
  private listen() {
    const port = process.env.APP_PORT || 3000
    this.app.listen(port, () => console.log(`> Listening on port ${port}`));
  }
}
new app();




