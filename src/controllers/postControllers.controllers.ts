import postServices from "@/services/postServices.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export default async function postController (req: Request, res: Response): Promise<void> {
    const { name, phone, email } = req.body;

    const postServicesAcess = await postServices(name, phone, email);
    res.sendStatus(httpStatus.CREATED);
};