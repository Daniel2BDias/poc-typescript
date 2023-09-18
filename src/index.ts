import express, { json, Express } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";

dotenv.config();

const app: Express = express();

app.use(json());
app.use(cors());
app.use(indexRouter);
app.use(errorHandler);


const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server Running At Port ${PORT}`));