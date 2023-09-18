import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    if(error.message === "NotFound") return res.sendStatus(httpStatus.NOT_FOUND);
    if(error.message === "Conflict") return res.sendStatus(httpStatus.CONFLICT);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}