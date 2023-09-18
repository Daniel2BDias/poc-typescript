import postController from "@/controllers/postControllers.controllers";
import validateSchema from "@/middlewares/validateSchema.middleware";
import postSchema from "@/schemas/postSchema.schemas";
import { Router } from "express";

const postRouter: Router = Router();

postRouter.post("/post", validateSchema(postSchema), postController);

export default postRouter;