import deleteServices from "@/services/deleteServices.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export default async function deleteController (req: Request, res: Response) {
    const { id } = req.params;
    const deleteServicesAcess = await deleteServices(id)
    res.sendStatus(httpStatus.NO_CONTENT);
};