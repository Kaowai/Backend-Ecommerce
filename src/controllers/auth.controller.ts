import { Request, Response, NextFunction, RequestHandler } from "express";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`[P]:::signUp::`, req.body);
    res.status(201).json({
      statusCode: 201,
      metadata: { userId: 1 },
    });
  } catch (err) {
    next(err);
  }
};

export { signUp };
