import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const bearer = req.headers.authorization?.split(" ")[1];
    if (!bearer) return res.status(401).send({ message: "No token" });
    const payload = jwt.verify(bearer, process.env.JWT_SECRET!) as any;
    (req as any).user = { id: payload.sub };
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token" });
  }
}
