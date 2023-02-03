import { NextFunction, Request, Response, Router } from "express";
import { model } from "../models/user-db";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import {appError} from '../models/appError'
import { 	StatusCodes } from 'http-status-codes';

dotenv.config({
  path: '.env'
});

export class users {
  async confirmLogin(req: Request, res: Response) {
    const user = await model.findOne({
      email: req.body.email,
    })
    if (!user) {
      return { status: 'error', error: 'Invalid login' }
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.firstName,
          email: user.email,
        },
        'SECRET'
      )
      return res.json({ status: StatusCodes.OK, user: token })
    } else {
      return res.json({ status: StatusCodes.INTERNAL_SERVER_ERROR, user: false })
    }
  }
  async createUser(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10)
      await model.create({
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        password: newPassword,
      })
      res.json({ status: StatusCodes.OK})
    } catch (err) {
      res.json({ status: StatusCodes.NOT_ACCEPTABLE, error: 'Duplicate email' })
    }

  }
  getUser(req: Request, res: Response) {
    throw new appError({
      httpCode: StatusCodes.NOT_FOUND,
      description: 'No user exist',
      isOperational: false
    })
  }
}
