import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { PostgresError } from 'pg-error-enum';

export function errorHandler(error, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    if(error.message === "NotFound") return res.sendStatus(httpStatus.NOT_FOUND);
    if(error.code === PostgresError.UNIQUE_VIOLATION) return res.status(httpStatus.CONFLICT).send(`${error.detail}`);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}