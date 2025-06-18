import dotenv from "dotenv";
dotenv.config();

import compression from "compression";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import "./dbs/init.mongodb";
import router from "./routes/index";

const app: Application = express();

// Middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init routes
app.use(router);
// Error handling can be added here

export default app;
