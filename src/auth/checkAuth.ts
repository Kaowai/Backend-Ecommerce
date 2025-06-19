import { NextFunction, Request, RequestHandler, Response } from "express";
import { HEADER } from "../consts/consts";
import { findApiKeyById } from "../services/apikey.service";

const apiKey: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return;
    }

    // check objKey
    const objKey = await findApiKeyById(key);
    if (!objKey) {
      res.status(403).json({
        message: "Forbidden",
      });
      return;
    }
    (req as any).objKey = objKey;
    next();
  } catch (err) {
    next(err);
  }
};

const permission = (permission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!(req as any).objKey.permissions) {
      res.status(403).json({
        message: "Permission denied",
      });
      return;
    }

    console.log("Permissions:::", permission);
    console.log("Api key:::", (req as any).objKey);
    const validPermission = (req as any).objKey.permissions.includes(
      permission
    );

    if (!validPermission) {
      res.status(403).json({ message: "Permission denied" });
      return;
    }
    next();
  };
};

export { apiKey, permission };
