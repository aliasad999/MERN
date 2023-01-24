import { Router } from 'express';
import { userRoute } from './UserRoute'


export class MainRouter {
  public returnRouter = Router();
  private _userRoute = new userRoute();

  get router() {
    return this.returnRouter;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this.returnRouter.use('/api', this._userRoute._router);
  }
}

