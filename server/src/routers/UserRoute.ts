import { NextFunction, Request, Response, Router } from 'express';
import { users } from '../controllers/Users';

export class userRoute {
  public _router = Router();
  private _user = new users();

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/login', (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = this._user.confirmLogin();
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });
    this._router.get('/registration', (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = this._user.createUser();
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });
  }
}

