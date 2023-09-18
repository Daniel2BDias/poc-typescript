import { Router } from "express";
import getRouter from "./getRoute.routes";
import deleteRouter from "./deleteRoute.routes";
import postRouter from "./postRoute.routes";
import putRouter from "./putRoute.routes";

const indexRouter: Router = Router();

indexRouter.use(getRouter);
indexRouter.use(postRouter);
indexRouter.use(putRouter);
indexRouter.use(deleteRouter);

export default indexRouter;