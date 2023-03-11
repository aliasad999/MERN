import { NextFunction, Request, Response, Router } from "express";
import { model } from "../models/user-db";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { appError } from "../models/appError";
import { StatusCodes } from "http-status-codes";
import { Accesstoken } from "../config/Authentication/auth";
import {EducationType, Msgs} from "../models/enums"


export class users {
  async confirmLogin(req: Request, res: Response) {
    const user = await model.findOne({
      email: req.body.email,
    });
    if (!user) {
      throw new Error(Msgs.NO_USER_FOUND);
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      const searilizedUser = { email: user.email };
      const accessToken = Accesstoken.generateAccessToken(
        searilizedUser,
        process.env.ACCESS_TOKEN_SECRET as string,
        process.env.DELAY_TIME_ACCESS_TOKEN
      );
      const refreshToken = Accesstoken.generateAccessToken(
        searilizedUser,
        process.env.REFRESH_TOKEN_SECRET,
        process.env.DELAY_TIME_REFRESH_TOKEN
      );
      if (refreshToken)
        await model.updateOne(
          { email: req.body.email },
          { $set: { refreshToken: refreshToken } }
        );
      return { accessToken: accessToken, refreshToken: refreshToken };
    } else {
      throw new Error(Msgs.PASSWORD_NOT_CORRECT);
    }
  }
  async updateMatricEducation(req: Request, res: Response) {
    switch (req.body.matric) {
      case false:
        let grades = [];

        req.body.results.forEach((item) => {
          grades.push({ subject: item.subject, grade: item.grade });
        });
        let educationOLevels = {
          grades: grades,
        };
        try {
          const response = await this.updateDb(
            req.body.email,
            EducationType.OLEVELS,
            educationOLevels,
            req.body.matric,
            EducationType.FLAG_MATRIC
          );
          res
            .status(StatusCodes.OK)
            .json({ message: Msgs.GRADES_UPDATED });
        } catch (error) {
          throw new Error(Msgs.GRADES_NOT_UPDATED);
        }

        break;
      case true:
        let educationMatric = {
          grades: {
            board: req.body.details.board,
            percentage: req.body.details.percentage,
            area: req.body.details.area,
          },
        };
        try {
          const response = await this.updateDb(
            req.body.email,
            EducationType.MATRIC,
            educationMatric,
            req.body.matric,
            EducationType.FLAG_MATRIC
          );
          res
            .status(StatusCodes.OK)
            .json({ message: Msgs.GRADES_UPDATED});
        } catch (error) {
          throw new Error(Msgs.GRADES_NOT_UPDATED);
        }
    }
  }
  async updateIntermediateEducation(req: Request, res: Response) {
    switch (req.body.intermediate) {
      case false:
        let grades = [];
        req.body.results.forEach((item) => {
          grades.push({ subject: item.subject, grade: item.grade });
        });
        let educationALevels = {
          grades: grades,
        };
        try {
          const response = await this.updateDb(
            req.body.email,
            EducationType.ALEVELS,
            educationALevels,
            req.body.intermediate,
            EducationType.FLAG_INTERMEDIATE
          );
          res
            .status(StatusCodes.OK)
            .json({ message: Msgs.GRADES_UPDATED });
        } catch (error) {
          throw new Error(Msgs.GRADES_NOT_UPDATED);
        }

        break;
      case true:
        let educationIntermediate = {
          grades: {
            board: req.body.details.board,
            percentage: req.body.details.percentage,
            area: req.body.details.area,
          },
        };
        try {
          const response = await this.updateDb(
            req.body.email,
            EducationType.INTERMEDIATE,
            educationIntermediate,
            req.body.intermediate,
            EducationType.FLAG_INTERMEDIATE
          );
          res
            .status(StatusCodes.OK)
            .json({ message: Msgs.GRADES_UPDATED});
        } catch (error) {
          throw new Error(Msgs.GRADES_NOT_UPDATED);
        }
    }
  }

  async updateDb(
    email: String,
    educationType: String,
    education: any,
    interOrMatric: Boolean,
    level: String
  ) {
    try {
      return await model.updateOne(
        { email: email },
        { $set: { [`${educationType}`]: education, [`${level}`]: interOrMatric } }
      );
    } catch (error) {
      throw new Error("update not completed");
    }
  }
  async findUser(email: string) {
    return await model.findOne({
      email: email,
    });
  }
  async updateToken(email: string, refreshToken: string) {
    return await model.updateOne(
      { email: email },
      { $set: { refreshToken: refreshToken } }
    );
  }
  async createUser(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10);
      await model.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: newPassword,
      });
      res.json({ status: StatusCodes.OK });
    } catch (err) {
      res.json({
        status: StatusCodes.NOT_ACCEPTABLE,
        error: Msgs.DUPLICATE_EMAIL,
        message: err,
      });
    }
  }
  
}

