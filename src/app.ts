import dotenv from "dotenv";
dotenv.config();

import compression from "compression";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import "./dbs/init.mongodb";

const app: Application = express();

// Middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, World!" });
});

// Error handling can be added here

export default app;
