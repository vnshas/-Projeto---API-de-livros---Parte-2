import { NextFunction, Request, Response } from "express"
import { AppError } from "./errors"
import { ZodError } from "zod"


export class HandleErrors {
  static execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ error: err.message })
    } else if (err instanceof ZodError) {
      return res.status(409).json(err)
    } else {
      console.log(err)
      return res.status(500).json({ error: "Internal server error." })
    }
  }
}