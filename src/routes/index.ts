import { Router } from "express";
import authRouter from "./auth";
import { apiKey, permission } from "../auth/checkAuth";

const router = Router();

// check API key
router.use(apiKey);
// check permission
router.use(permission('001'))

router.use("/v1/api", authRouter);

export default router;
