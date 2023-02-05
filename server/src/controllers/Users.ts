import { NextFunction, Request, Response, Router } from "express";
import { User } from "../models/user-db";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import {appError} from '../models/appError'
import { 	StatusCodes } from 'http-status-codes';
import {Accesstoken} from '../config/Authentication/auth'

dotenv.config({
  path: '.env'
});

export class users {
  async confirmLogin(req: Request, res: Response) {
    const user = await User.findOne({
      email: req.body.email,
    })
    if (!user) {
      return { status: 'error', error: "Invalid email/Your account doesn't exist" }
    }
    const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
    if (isPasswordValid) {
      const searilizedUser = {email:user.email}
      const accessToken  = Accesstoken.generateAccessToken(searilizedUser,process.env.ACCESS_TOKEN_SECRET as string ,'30s')
      const refreshToken  = Accesstoken.generateAccessToken(searilizedUser, process.env.REFRESH_TOKEN_SECRET ,'60m')
      if(refreshToken) await User.updateOne( { email: req.body.email },{$set: {refreshToken:refreshToken}})
      return {accessToken : accessToken,  refreshToken: refreshToken}
    } else {
      throw new Error('Password is not correct')
    }
  }
  async findUser(email:string){
    return await User.findOne({
      email: email,
    })
  }
  async updateToken(email:string, refreshToken: string){
    return await User.updateOne( { email: email },{$set: {refreshToken: refreshToken}})
  }
  async createUser(req: Request, res: Response, next: NextFunction) {

    console.log(req.body)
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10)
      await User.create({
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
