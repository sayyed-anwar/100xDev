"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "your_secret_key";
const userMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ message: "You are not logged in" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        if (!decoded) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Error verifying token" });
    }
};
exports.userMiddleware = userMiddleware;
