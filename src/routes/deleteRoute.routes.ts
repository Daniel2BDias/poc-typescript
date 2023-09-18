import deleteController from "@/controllers/deleteControllers.controllers";
import { Router } from "express";

const deleteRouter: Router = Router();

deleteRouter.delete("/deleteone/:id", deleteController);

export default deleteRouter;