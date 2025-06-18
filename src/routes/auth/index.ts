import { Router } from "express";
import { signUp } from "../../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/shop/signup", signUp);

export default authRouter;
