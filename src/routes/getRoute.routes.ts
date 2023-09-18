import { getControllers } from "@/controllers/getController.controllers";
import { Router } from "express";

const getRouter: Router = Router();

getRouter.get("/getall", getControllers.getAllController);
getRouter.get("/getone/:id", getControllers.getOneController);

export default getRouter;