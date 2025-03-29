"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const SECRET_KEY = "your_secret_key";
app.post("/api/v1/auth/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username } = req.body;
        yield db_1.UserModel.create({ email, password, username });
        res.json({ message: "User created" });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
}));
app.post("/api/v1/auth/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, _id } = req.body;
    const user = yield db_1.UserModel.findOne({ email, password });
    console.log(user, "User id");
    if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user._id }, SECRET_KEY);
    res.json({ token });
}));
app.post("/api/v1/content", middlewares_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, link, tags } = req.body;
        yield db_1.ContentModel.create({
            title,
            content,
            link,
            tags: [],
            //@ts-ignore
            userId: req.userId,
        });
        res.json({ message: "Content created" });
        return;
    }
    catch (error) {
        res.json({ message: "Faild to Content" });
    }
}));
app.get("/api/v1/content", middlewares_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        const Content = yield db_1.ContentModel.find({ userId: userId }).populate("userId", "username");
        res.json({ Content });
    }
    catch (error) {
        res.json({ message: "Error fetching content" });
    }
}));
app.patch("/api/v1/content", middlewares_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const contentId = req.body.contentId;
    const data = yield db_1.ContentModel.findOneAndUpdate({ userId, contentId });
    res.json({ message: "Content updated" });
}));
app.delete("/api/v1/content", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.ContentModel.deleteOne({
        contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.json({ message: "Content deleted" });
}));
app.post("/api/v1/brain/share", (req, res) => { });
app.get("/api/v1/brain/:shareLink", (req, res) => { });
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
