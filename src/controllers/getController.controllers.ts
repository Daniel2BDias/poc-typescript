import { getServices } from "@/services/getServices.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function getAllController (req: Request, res: Response) {
    const getAllServicesAcess = await getServices.getAllServices();
    res.status(httpStatus.OK).send(getAllServicesAcess);
};

async function getOneController(req: Request, res: Response) {
    const { id } = req.params;
    const getOneController = await getServices.getOneServices(id);
    res.status(httpStatus.OK).send(getOneController);
};


export const getControllers = { getAllController, getOneController };