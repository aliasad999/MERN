import dotenv from 'dotenv';
import express, { NextFunction, Response, Request } from 'express'
import { MainRouter } from './routers/MainRouter';
import ErrorHandler from './models/ErrorHandler';
import cors from 'cors';

dotenv.config({
  path: '.env'
});

class Server {
  public app = express();
  public router = new MainRouter();
}

// initialize server app
const server = new Server();
server.app.use(cors());
server.app.use(express.json());
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {

  res.sendStatus(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});
// make server app handle any route starting with '/'
server.app.use('/', server.router.returnRouter);

const port = process.env.APP_PORT || 3000
server.app.listen(port, () => console.log(`> Listening on port ${port}`));
