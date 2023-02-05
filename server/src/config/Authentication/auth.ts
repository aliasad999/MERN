import { NextFunction,Request,Response } from "express";
import Jwt from 'jsonwebtoken'

class token {
    public generateAccessToken(user: any, token_secret: string, time?: string) {
        if (time)
        return Jwt.sign(user, token_secret  , {expiresIn: time})
        return Jwt.sign(user, token_secret )
        
    }
}

export const Accesstoken = new token();