import { idlessRegistry } from "@/protocols/Registry";
import putServices from "@/services/putServices.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export default async function putController (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name, phone, email} = req.body as idlessRegistry;

    const putServicesAcess = await putServices(id, name, phone, email);
    res.sendStatus(httpStatus.OK);
};