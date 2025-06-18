import { Request, Response, NextFunction, RequestHandler } from "express";
import { signUpService } from "../services/auth.service";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`[P]:::signUp::`, req.body);
    res.status(201).json(await signUpService(req.body));
  } catch (err) {
    next(err);
  }
};

export { signUp };
