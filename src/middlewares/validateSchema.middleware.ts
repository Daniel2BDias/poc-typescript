import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";
export default function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.details.map((detail) => detail.message));
      next();
    };
  };