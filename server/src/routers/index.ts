import express, { Response, Request, NextFunction, request, response } from 'express'
import { users } from '../controllers/Users';
import mongoose from "mongoose";
import path from 'path'
import {errorHandler} from '../middleware/errorHandler';
import Jwt from 'jsonwebtoken'
export const routes = express.Router();
import dotenv from 'dotenv';
import { Accesstoken } from '../config/Authentication/auth'
import { StatusCodes } from 'http-status-codes';

let tokenList: string[] = []
dotenv.config({
  path: '.env'
});
const collectionPath = 'UniversityPortal'
const mongoUrl = `mongodb://localhost:27017/${collectionPath}`
mongoose.connect(mongoUrl);
const user = new users;

const posts = [{ email: 'masood.aliasad@gmail.com', title: 'post 1' }, { email: 'khizar.asad@gmail.com', title: 'post 2' }]

//----------------------ALL Public Routes will be written here ---------------------
//default route .. homepage
routes.get('^/$|/index(.html)?', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

// route for user registration
routes.post('/api/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = await user.createUser(req, res, next);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
})

// route for user login
routes.post('/api/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = await user.confirmLogin(req, res);
    tokenList.push(accessToken.refreshToken)
    res.status(StatusCodes.OK).json(accessToken);
  } catch (error) {
    next(error);
  }
})

routes.post('/api/token', async (req, res) => {
  const refreshToken = req.body.refreshToken
  if (!refreshToken) return res.sendStatus(StatusCodes.UNAUTHORIZED);
  let accessToken: string = ''
  try {
    const LoggedUser = await user.findUser(req.body.email)
    if (LoggedUser.refreshToken !== refreshToken) return res.sendStatus(StatusCodes.FORBIDDEN)
    const searlizedUser = { email: req.body.email }
    Jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, ((err, res) => {
      if (err) return res.sendStatus(StatusCodes.FORBIDDEN)
      accessToken = Accesstoken.generateAccessToken(searlizedUser, process.env.ACCESS_TOKEN_SECRET as string, '15m')
    }))
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ message: 'Email address not found' })
  }
  res.status(StatusCodes.OK).json({ accessToken: accessToken })
})

routes.post('/api/logout', async (req, res) => {
  const response = await user.updateToken(req.body.email, "");
  if (response.modifiedCount > 0) return res.sendStatus(StatusCodes.NO_CONTENT)
  res.sendStatus(StatusCodes.NOT_MODIFIED)
})

// middleware to check authentication token
routes.use('/', (req: Request, res: Response, next: NextFunction) => {
  const token = req?.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(StatusCodes.UNAUTHORIZED)
  Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err: any, result) => {
    if (err) return res.sendStatus(StatusCodes.FORBIDDEN)
    req.body.tokenObject = result && result;
    next();
  })
})
//----------------------ALL Protected Routes will be written here ---------------------
// check if autentication is working, using local model
routes.get('/post', (req, res, next) => {
  const post = posts.filter((post) => post.email === req.body.tokenObject.email)
  return res.json(post)
})

// route for testing error handler
routes.get('/getusers', async (req: Request, res: Response, next: NextFunction) => {
  try {
    let result = user.getUser(req, res);
    res.status(StatusCodes.OK).json(result);
  } catch (error: any) {
    next(error);
  }
})

// 404 view route, in case no path matches
routes.all('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND)
  if (req.accepts('html'))
    res.sendFile(path.join(__dirname, '..', 'views', '404.html'))
  else if (req.accepts('json'))
    res.json({ message: '404 not found' })
  else
    res.type('txt').send('404 not found')
});

// error handler at the end 
routes.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, req, res);
});

