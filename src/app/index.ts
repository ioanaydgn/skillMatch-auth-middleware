import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
import {userRouter} from "@routes";
import { authApiKey } from "middleware";

app.use(express.json());
app.use(cors());
app.use(express.json());

// for api versioning
const v1BaseUrl: string = "/api/v1";

// user router wih apikey middleware
app.use(`${v1BaseUrl}/user`, userRouter);
//, authApiKey,


export default app;
