import putController from "@/controllers/putControllers.controllers";
import validateSchema from "@/middlewares/validateSchema.middleware";
import putSchema from "@/schemas/putSchema.schemas";
import { Router } from "express";

const putRouter: Router = Router();

putRouter.put("/put/:id", validateSchema(putSchema), putController);

export default putRouter;