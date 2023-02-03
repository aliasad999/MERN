import express, { Response, Request, NextFunction } from 'express'
import { users } from '../controllers/Users';
import mongoose from "mongoose";
import path from 'path'
import {errorHandler}   from '../middleware/errorHandler';
export const routes = express.Router();


const collectionPath = 'UniversityPortal'
const mongoUrl = `mongodb://localhost:27017/${collectionPath}`
mongoose.connect(mongoUrl);
const user = new users;

//default route .. homepage
routes.get('^/$|/index(.html)?', (req, res,next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
// route for user registration
routes.post('/api/register',async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = await user.createUser(req, res, next);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
})
// route for user login
routes.post('/api/login',async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = await user.confirmLogin(req, res);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}) 
// route for testing
routes.get('/getusers',async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result =  user.getUser(req, res);
    res.status(200).json(result);
  } catch (error: any) {
    next(error);
  }
}) 

// error handler
routes.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, req,res);
});

