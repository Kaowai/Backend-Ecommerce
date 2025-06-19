import { Request, Response, NextFunction, RequestHandler } from "express";
import { signUpService } from "../services/auth.service";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`[P]:::signUp::`, req.body);
    const message = await signUpService(req.body);
    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
};

export { signUp };
