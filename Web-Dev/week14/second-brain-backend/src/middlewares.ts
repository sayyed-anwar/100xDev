import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const SECRET_KEY = "your_secret_key";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ message: "You are not logged in" });
      return;
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!decoded) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    //@ts-ignore
    req.userId = decoded.id ;
    next();
  } catch (error) {
    res.status(500).json({ message: "Error verifying token" });
  }
};
