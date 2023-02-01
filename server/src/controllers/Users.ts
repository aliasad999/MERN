import ErrorHandler from "../models/errorHandler";
import { NextFunction, Request, Response, Router } from "express";
import { User } from "../models/user-db";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

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

      return res.json({ status: 'ok', user: token })
    } else {
      return res.json({ status: 'error', user: false })
    }
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
      res.json({ status: 'ok' })
    } catch (err) {
      res.json({ status: 'error', error: 'Duplicate email' })
    }

  }
  getUser(req: Request, res: Response) {
    return { text: "get call has been made" };
  }
}
