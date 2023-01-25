import express, { Response, Request, NextFunction } from 'express'
import { users } from '../controllers/Users';
import mongoose from "mongoose";

export const routes = express.Router();

mongoose.connect('mongodb://localhost:27017/mern')

routes.use('/api', async (req: Request, res: Response, next: NextFunction) => {

  const user = new users;
  switch (req.url) {
    case '/register':
      if (req.method === 'POST') {
        try {
          let result = await user.createUser(req, res, next);
          res.status(200).json(result);
        } catch (error) {
          next(error);
        }
      }
      break;
    case '/login':
      if (req.method === 'POST') {
        try {
          const result = await user.confirmLogin(req, res);
          res.status(200).json(result);
        } catch (error) {
          next(error);
        }

      }
      break;
  }

});



