import { Response, Request, NextFunction } from 'express'
import { format } from 'date-fns'
import { v4 as  uuid } from 'uuid'
import fs from 'fs'

const fsPromises = fs.promises
import path from 'path'

export const logEvents = async (message: string, logFileName: string) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        console.log(err)
    }
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

