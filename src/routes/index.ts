import { Request, Response, Router } from "express";
import authRouter from "./auth";

const router = Router();

router.use("/v1/api", authRouter);

export default router;
